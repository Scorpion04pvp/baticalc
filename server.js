// =========================================================================
// BatiHub DZ - Unified Web & Mobile API Server
// Developed by Mouhaned Guellif
// Serves static PWA + provides API for mobile phones & remote clients
// =========================================================================

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'batihub_accounts_db.json');
const MAIL_CONFIG_FILE = path.join(__dirname, 'mail_config.json');

// MIME types map
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json'
};

// Mailer transporter helper
function getMailerTransporter() {
  let user = 'batihubdz@gmail.com';
  let pass = 'nrvz vvhm kwbn vmcp';

  if (fs.existsSync(MAIL_CONFIG_FILE)) {
    try {
      const cfg = JSON.parse(fs.readFileSync(MAIL_CONFIG_FILE, 'utf8'));
      if (cfg.user && cfg.pass) {
        user = cfg.user;
        pass = cfg.pass;
      }
    } catch (e) {}
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;

  // 1. API: Health Check
  if (pathname === '/api/health') {
    return sendJson(res, 200, {
      status: 'ok',
      app: 'BatiHub DZ Mobile API',
      time: new Date().toISOString()
    });
  }

  // 2. API: Send Verification Mail
  if (pathname === '/api/send-mail' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const { to, subject, text, html } = body;
      if (!to || !subject) {
        return sendJson(res, 400, { success: false, error: 'Paramètres manquants (to, subject)' });
      }

      const transporter = getMailerTransporter();
      const mailOptions = {
        from: '"Support Bati Hub DZ" <batihubdz@gmail.com>',
        to,
        subject,
        text,
        html
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`[API Mail] Sent OTP to ${to}, id: ${info.messageId}`);
      return sendJson(res, 200, { success: true, messageId: info.messageId });
    } catch (err) {
      console.error('[API Mail Error]:', err);
      return sendJson(res, 500, { success: false, error: err.message });
    }
  }

  // 3. API: Get Accounts
  if (pathname === '/api/accounts' && req.method === 'GET') {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        return sendJson(res, 200, JSON.parse(raw));
      }
      return sendJson(res, 200, {});
    } catch (e) {
      return sendJson(res, 500, { error: e.message });
    }
  }

  // 4. API: Save Accounts
  if (pathname === '/api/accounts' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      fs.writeFileSync(DB_FILE, JSON.stringify(body, null, 2), 'utf8');
      return sendJson(res, 200, { success: true });
    } catch (e) {
      return sendJson(res, 500, { success: false, error: e.message });
    }
  }

  // 5. Static File Server
  let reqPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.join(__dirname, reqPath);

  // Security: prevent path traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA / PWA routes
      const indexPath = path.join(__dirname, 'index.html');
      fs.readFile(indexPath, (readErr, content) => {
        if (readErr) {
          res.writeHead(404);
          return res.end('File not found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        return res.end('Error loading file');
      }
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600'
      });
      res.end(content);
    });
  });
});

function getLocalIp() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

server.listen(PORT, '0.0.0.0', () => {
  const localIp = getLocalIp();
  console.log(`=======================================================`);
  console.log(`🚀 BatiHub DZ Web & Mobile Server is LIVE!`);
  console.log(`💻 Local (PC):    http://localhost:${PORT}`);
  console.log(`📱 Mobile (Wi-Fi): http://${localIp}:${PORT}`);
  console.log(`=======================================================`);
});
