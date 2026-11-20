/**
 * BatiHub DZ - Official Application Core Logic (Clean Rebuild)
 * Build • Connect • Create | All Construction Services in Algeria
 * Developed by Mouhaned Guellif
 */

'use strict';

/* ========================================================================= */
/* 1. SEED ACCOUNTS & ENCRYPTION CONFIGURATION                               */
/* ========================================================================= */

const SEED_SALT = 'batihub_admin_salt_2026';
// SHA-256 of "mouhaned25" + SEED_SALT = a7319ed8fb7dc8b32ba21d0f984ba8fac9d8b7233d3d032ff49469e7d6149baa
const SEED_HASH = 'a7319ed8fb7dc8b32ba21d0f984ba8fac9d8b7233d3d032ff49469e7d6149baa';

const SEED_ACCOUNTS = {
  'mouhanedguellif16@gmail.com': {
    id: 'usr_mouhaned_user',
    firstName: 'Mouhaned',
    lastName: 'Guellif',
    fullName: 'Mouhaned Guellif',
    dob: '1998-05-15',
    email: 'mouhanedguellif16@gmail.com',
    passwordHash: SEED_HASH,
    salt: SEED_SALT,
    isVerified: true,
    role: 'user',
    avatar: null,
    createdAt: '2026-11-19T20:00:00.000Z'
  },
  'batihubdz@gmail.com': {
    id: 'usr_admin_batihub_dz',
    firstName: 'BatiHub DZ',
    lastName: 'الإدارة',
    fullName: 'BatiHub DZ (الإدارة)',
    dob: '2000-01-01',
    email: 'batihubdz@gmail.com',
    passwordHash: SEED_HASH,
    salt: SEED_SALT,
    isVerified: true,
    role: 'admin',
    avatar: 'assets/batihub_logo.png',
    createdAt: '2026-11-19T20:00:00.000Z'
  }
};

/* ========================================================================= */
/* 2. TRANSLATION ENGINE & DICTIONARIES                                      */
/* ========================================================================= */

const I18N = {
  ar: {
    app_slogan: 'كل خدمات البناء في مكان واحد',
    nav_scientific_calc: 'آلة حاسبة علمية',
    nav_worker_board: 'عروض العمل',
    nav_study_offices: 'مكاتب دراسات',
    nav_messages: 'المحادثات الخاصة',
    m_nav_calc: 'الحاسبة',
    m_nav_workers: 'عروض العمل',
    m_nav_offices: 'مكاتب دراسات',
    m_nav_messages: 'محادثات',
    m_nav_profile: 'حسابي',
    worker_board_title: 'عروض العمل والحرفيين',
    worker_board_sub: 'انشر واستكشف عروض العمل وطلبات الحرفيين في الجزائر مع تواصل مباشر وتحديث فوري',
    btn_new_worker_post: 'نشر عرض أو طلب عمل',
    filter_all: 'الكل',
    filter_mason: 'بناء',
    filter_electric: 'كهرباء',
    filter_plumbing: 'ترصيص وصحي',
    filter_painting: 'دهان وديكور',
    filter_tiling: 'بلاط وسيراميك',
    filter_carpentry: 'نجارة وألمنيوم',
    filter_steel: 'حدادة وتسليح',
    filter_hvac: 'تكييف وتبريد',
    offices_title: 'مكاتب دراسات وهندسة معمارية',
    offices_sub: 'مهندسون معماريون وخبراء هندسة مدنية معتمدون لاستخراج رخص البناء والدراسات التقنية',
    btn_new_office: 'إضافة مكتب دراسات جديد',
    filter_offices_all: 'الكل',
    filter_offices_arch: 'مهندس معماري',
    filter_offices_civil: 'مهندس مدني',
    profile_title: 'الملف الشخصي للمستخدم',
    profile_lbl_language: 'لغة واجهة التطبيق :',
    profile_change_pwd: 'تغيير كلمة المرور الخاصة بحسابك',
    profile_signout: 'تسجيل الخروج من الحساب',
    btn_cancel: 'إلغاء',
    btn_publish: 'نشر المنشور الآن',
    btn_save_office: 'اعتماد ونشر بطاقة المكتب',
    net_online_wifi: 'متصل (واي فاي 📶)',
    net_online_data: 'متصل (بيانات 4G 📶)',
    net_online: 'متصل بالإنترنت 📶',
    net_offline: 'غير متصل بالإنترنت ⚠️',
    unit_m2: 'دج / م²',
    unit_linear_m: 'دج / م خطي',
    unit_hour: 'دج / ساعة',
    unit_day: 'دج / يوم',
    unit_global: 'مبلغ إجمالي',
    unit_negotiable: 'قابل للتفاوض',
    status_pending: 'قيد مراجعة الإدارة ⏳',
    status_approved: 'معتمد ومؤكد ✅',
    call_btn: 'اتصال هاتفي',
    whatsapp_btn: 'واتساب',
    chat_btn: 'محادثة خاصة',
    delete_btn: 'حذف',
    approve_btn: 'موافقة ✅',
    reject_btn: 'رفض ❌',
    like_btn: 'إعجاب',
    comment_btn: 'تعليق',
    comments_title: 'التعليقات',
    comment_placeholder: 'اكتب تعليقك هنا...',
    send_btn: 'إرسال',
    empty_posts: 'لا توجد منشورات في هذا التخصص حالياً. كن أول من ينشر عَرَضاً!',
    empty_offices: 'لا توجد مكاتب دراسات مسجلة في هذا التخصص حالياً.',
    one_post_limit_alert: 'لديك منشور نشط بالفعل في هذا التخصص. يمكنك تعديله أو حذفه أولاً قبل إضافة جديد.',
    post_published_success: 'تم إرسال المنشور بنجاح! سيظهر للمستخدمين بعد مراجعة الإدارة.',
    post_published_admin_success: 'تم نشر المنشور فوراً بنجاح!',
    office_published_success: 'تم تسجيل ونشر بطاقة مكتب الدراسات بنجاح!',
    open_maps_btn: 'عرض الموقع على Google Maps 📍'
  },
  fr: {
    app_slogan: 'Tous les services du bâtiment en un seul endroit',
    nav_scientific_calc: 'Calculatrice',
    nav_worker_board: 'Offres d\'emploi',
    nav_study_offices: 'Bureaux d\'études',
    nav_messages: 'Messagerie',
    m_nav_calc: 'Calculatrice',
    m_nav_workers: 'Offres',
    m_nav_offices: 'Bureaux',
    m_nav_messages: 'Messages',
    m_nav_profile: 'Profil',
    worker_board_title: 'Offres d\'emploi & Artisans',
    worker_board_sub: 'Publiez et explorez les offres d\'artisans et chantiers en Algérie',
    btn_new_worker_post: 'Publier une offre ou demande',
    filter_all: 'Tous',
    filter_mason: 'Maçonnerie',
    filter_electric: 'Électricité',
    filter_plumbing: 'Plomberie',
    filter_painting: 'Peinture',
    filter_tiling: 'Carrelage',
    filter_carpentry: 'Menuiserie & Alu',
    filter_steel: 'Ferraillage',
    filter_hvac: 'Climatisation',
    offices_title: 'Bureaux d\'études & Architecture',
    offices_sub: 'Architectes et ingénieurs civils agréés pour permis de construire et études',
    btn_new_office: 'Ajouter un bureau d\'études',
    filter_offices_all: 'Tous',
    filter_offices_arch: 'Architecte',
    filter_offices_civil: 'Génie Civil',
    profile_title: 'Profil utilisateur',
    profile_lbl_language: 'Langue de l\'application :',
    profile_change_pwd: 'Changer le mot de passe',
    profile_signout: 'Déconnexion',
    btn_cancel: 'Annuler',
    btn_publish: 'Publier maintenant',
    btn_save_office: 'Enregistrer le bureau',
    net_online_wifi: 'Connecté (Wi-Fi 📶)',
    net_online_data: 'Connecté (Données 4G 📶)',
    net_online: 'Connecté 📶',
    net_offline: 'Hors-ligne ⚠️',
    unit_m2: 'DA / m²',
    unit_linear_m: 'DA / mètre linéaire',
    unit_hour: 'DA / heure',
    unit_day: 'DA / jour',
    unit_global: 'Prix global',
    unit_negotiable: 'Négociable',
    status_pending: 'En attente d\'approbation ⏳',
    status_approved: 'Approuvé ✅',
    call_btn: 'Appeler',
    whatsapp_btn: 'WhatsApp',
    chat_btn: 'Message direct',
    delete_btn: 'Supprimer',
    approve_btn: 'Approuver ✅',
    reject_btn: 'Refuser ❌',
    like_btn: 'J\'aime',
    comment_btn: 'Commenter',
    comments_title: 'Commentaires',
    comment_placeholder: 'Écrire un commentaire...',
    send_btn: 'Envoyer',
    empty_posts: 'Aucune offre pour cette catégorie actuellement.',
    empty_offices: 'Aucun bureau d\'études enregistré dans cette spécialité.',
    one_post_limit_alert: 'Vous avez déjà une offre active dans ce métier. Modifiez-la ou supprimez-la.',
    post_published_success: 'Offre envoyée avec succès ! En attente de validation.',
    post_published_admin_success: 'Offre publiée immédiatement avec succès !',
    office_published_success: 'Bureau d\'études enregistré avec succès !',
    open_maps_btn: 'Voir sur Google Maps 📍'
  },
  en: {
    app_slogan: 'All Construction Services in One Platform',
    nav_scientific_calc: 'Calculator',
    nav_worker_board: 'Job Board',
    nav_study_offices: 'Study Offices',
    nav_messages: 'Private Messages',
    m_nav_calc: 'Calculator',
    m_nav_workers: 'Jobs',
    m_nav_offices: 'Offices',
    m_nav_messages: 'Chat',
    m_nav_profile: 'Profile',
    worker_board_title: 'Job Board & Artisans',
    worker_board_sub: 'Post and explore construction jobs and craftsman listings across Algeria',
    btn_new_worker_post: 'Post Job Offer or Request',
    filter_all: 'All',
    filter_mason: 'Masonry',
    filter_electric: 'Electrical',
    filter_plumbing: 'Plumbing',
    filter_painting: 'Painting',
    filter_tiling: 'Tiling',
    filter_carpentry: 'Carpentry & Alu',
    filter_steel: 'Rebar & Steel',
    filter_hvac: 'HVAC & Cooling',
    offices_title: 'Study & Architecture Offices',
    offices_sub: 'Certified architects and civil engineers for building permits and designs',
    btn_new_office: 'Add Study Office',
    filter_offices_all: 'All',
    filter_offices_arch: 'Architect',
    filter_offices_civil: 'Civil Engineer',
    profile_title: 'User Profile',
    profile_lbl_language: 'Interface Language :',
    profile_change_pwd: 'Change Password',
    profile_signout: 'Sign Out',
    btn_cancel: 'Cancel',
    btn_publish: 'Publish Now',
    btn_save_office: 'Save & Publish Office',
    net_online_wifi: 'Connected (Wi-Fi 📶)',
    net_online_data: 'Connected (4G Data 📶)',
    net_online: 'Online 📶',
    net_offline: 'Offline ⚠️',
    unit_m2: 'DZD / m²',
    unit_linear_m: 'DZD / linear meter',
    unit_hour: 'DZD / hour',
    unit_day: 'DZD / day',
    unit_global: 'Total project price',
    unit_negotiable: 'Negotiable',
    status_pending: 'Pending Admin Review ⏳',
    status_approved: 'Approved & Verified ✅',
    call_btn: 'Phone Call',
    whatsapp_btn: 'WhatsApp',
    chat_btn: 'Private Chat',
    delete_btn: 'Delete',
    approve_btn: 'Approve ✅',
    reject_btn: 'Reject ❌',
    like_btn: 'Like',
    comment_btn: 'Comment',
    comments_title: 'Comments',
    comment_placeholder: 'Write a comment...',
    send_btn: 'Send',
    empty_posts: 'No job postings in this trade yet.',
    empty_offices: 'No study offices found in this category.',
    one_post_limit_alert: 'You already have an active post in this trade. Please update or delete it first.',
    post_published_success: 'Post submitted successfully! Pending admin verification.',
    post_published_admin_success: 'Post published immediately!',
    office_published_success: 'Study office successfully added!',
    open_maps_btn: 'View on Google Maps 📍'
  }
};

/* ========================================================================= */
/* 3. APP GLOBAL STATE                                                       */
/* ========================================================================= */

let currentUser = null;
let currentLanguage = 'ar';
let currentActiveTab = 'tab-scientific-calculator';
let activeWorkerFilter = 'all';
let activeOfficeFilter = 'all';
let showPendingOnly = false;
let pendingRegistration = null;

// Scientific calculator state
let calcExpression = '';
let calcCurrentVal = '0';
let calcJustEvaluated = false;

// Media recording state for voice notes
let mediaRecorderInstance = null;
let recordedAudioChunks = [];
let isRecordingAudio = false;

// Active 1-on-1 chat partner
let currentChatPartner = null; // { email, name, avatar }

// Upload preview caches
let cachedPostImageBase64 = null;
let cachedOfficeImageBase64 = null;
let cachedChatImageBase64 = null;

/* ========================================================================= */
/* 4. UTILITIES & SAFE GMAIL-STYLE AVATAR ENGINE                             */
/* ========================================================================= */

const GOOGLE_AVATAR_PALETTE = [
  '#1a73e8', // Google Blue
  '#ea4335', // Google Red
  '#fbbc04', // Google Yellow
  '#34a853', // Google Green
  '#9334e6', // Purple
  '#007b83', // Teal
  '#e8710a', // Orange
  '#fa7b17', // Amber
  '#e52592'  // Pink
];

function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

function getInitialLetter(name, email) {
  const source = (name && name.trim()) || (email && email.split('@')[0]) || 'U';
  const clean = source.trim();
  return clean.charAt(0).toUpperCase();
}

function getColorForString(str) {
  const input = String(str || 'batihub');
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % GOOGLE_AVATAR_PALETTE.length;
  return GOOGLE_AVATAR_PALETTE[index];
}

/**
 * Returns a bulletproof SVG Data URL styled exactly like Gmail/Google profile avatars.
 */
function getGmailAvatarDataUrl(name, email) {
  const letter = getInitialLetter(name, email);
  const color = getColorForString(email || name);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
    <circle cx="48" cy="48" r="48" fill="${color}"/>
    <text x="48" y="52" font-family="'Plus Jakarta Sans', 'Cairo', Arial, sans-serif" font-size="44" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="central">${letter}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

/**
 * Resolves safe avatar source.
 */
function resolveAvatarSrc(avatarUrl, name, email) {
  if (avatarUrl && typeof avatarUrl === 'string' && avatarUrl.trim() !== '') {
    // If it's a valid data URL or valid path
    if (avatarUrl.startsWith('data:image/') || avatarUrl.startsWith('assets/') || avatarUrl.startsWith('http')) {
      return avatarUrl;
    }
  }
  return getGmailAvatarDataUrl(name, email);
}

/**
 * Generates an img tag string with error fallback
 */
function renderAvatarImgTag(avatarUrl, name, email, cssClasses) {
  const safeSrc = resolveAvatarSrc(avatarUrl, name, email);
  const safeFallback = getGmailAvatarDataUrl(name, email);
  const safeName = escapeHTML(name || email || 'User');
  return `<img src="${safeSrc}" alt="${safeName}" class="${cssClasses}" onerror="this.onerror=null;this.src='${safeFallback}';">`;
}

/* ========================================================================= */
/* 5. SHA-256 HASH ENGINE                                                    */
/* ========================================================================= */

async function sha256Hash(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/* ========================================================================= */
/* 6. STORAGE HELPERS & DATABASE INIT                                        */
/* ========================================================================= */

function getStorageJSON(key, defaultVal) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultVal;
    if (typeof raw === 'string' && raw.startsWith('BTH_VAULT_')) {
      localStorage.removeItem(key);
      return defaultVal;
    }
    return JSON.parse(raw);
  } catch (err) {
    localStorage.removeItem(key);
    return defaultVal;
  }
}

function setStorageJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error('Storage Write Error:', key, err);
  }
}

function initAccountsDatabase() {
  let accounts = getStorageJSON('batihub_registered_accounts', null);
  if (!accounts || typeof accounts !== 'object') {
    accounts = {};
  }

  // Enforce Seed Accounts guarantees
  for (const [email, seedAcc] of Object.entries(SEED_ACCOUNTS)) {
    const existing = accounts[email];
    if (!existing || existing.passwordHash !== SEED_HASH) {
      accounts[email] = {
        ...(existing || {}),
        ...seedAcc
      };
    }
  }

  setStorageJSON('batihub_registered_accounts', accounts);
  return accounts;
}

function initDefaultFeedsIfEmpty() {
  // Worker Posts default sample
  let posts = getStorageJSON('batihub_worker_posts', null);
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    posts = [
      {
        id: 'post_sample_01',
        trade: 'بناء',
        price: '850',
        unit: 'm2',
        phone: '0550123456',
        text: 'بناء معتمد ذو خبرة 15 سنة في أشغال البناء الخرساني، تركيب القوالب (Coffrage)، وبناء الجدران الآجرية بجودة عالية والتزام تام بالمواعيد. مستعد للعمل بالجزائر العاصمة وضواحيها.',
        image: null,
        authorId: 'batihubdz@gmail.com',
        authorName: 'BatiHub DZ (الإدارة)',
        authorAvatar: 'assets/batihub_logo.png',
        status: 'approved',
        likes: ['mouhanedguellif16@gmail.com'],
        comments: [
          {
            id: 'c_01',
            authorId: 'mouhanedguellif16@gmail.com',
            authorName: 'Mouhaned Guellif',
            text: 'عمل متقن وخدمة ممتازة، بالتوفيق!',
            createdAt: '2026-11-20T10:00:00.000Z'
          }
        ],
        createdAt: '2026-11-20T08:30:00.000Z'
      },
      {
        id: 'post_sample_02',
        trade: 'كهرباء',
        price: '3000',
        unit: 'day',
        phone: '0661234567',
        text: 'كهربائي معماري وصناعي، تمديد خطوط الكهرباء المنزلية، تركيب لوحات التوزيع وقواطع الحماية، تركيب الإضاءة المخفية والسبوتلايت الحديثة. العمل يومي أو بالمتر.',
        image: null,
        authorId: 'mouhanedguellif16@gmail.com',
        authorName: 'Mouhaned Guellif',
        authorAvatar: null,
        status: 'approved',
        likes: [],
        comments: [],
        createdAt: '2026-11-20T09:15:00.000Z'
      }
    ];
    setStorageJSON('batihub_worker_posts', posts);
  }

  // Study Offices default sample
  let offices = getStorageJSON('batihub_study_offices', null);
  if (!offices || !Array.isArray(offices) || offices.length === 0) {
    offices = [
      {
        id: 'office_sample_01',
        name: 'مكتب العمران للدراسات المعمارية والتقنية',
        engType: 'مهندس معماري',
        phone: '0550987654',
        address: 'الجزائر العاصمة - دالي براهيم',
        gps: 'https://maps.google.com/?q=36.7525,3.0420',
        services: 'إعداد مخططات ورخص البناء، تصاميم ثلاثية الأبعاد (3D)، شهادات المطابقة، ومتابعة الورشات حتى التسليم.',
        image: null,
        authorId: 'batihubdz@gmail.com',
        authorName: 'BatiHub DZ (الإدارة)',
        createdAt: '2026-11-20T07:00:00.000Z'
      },
      {
        id: 'office_sample_02',
        name: 'مكتب النخبة للهندسة المدنية ودراسات التربة',
        engType: 'مهندس مدني',
        phone: '0770112233',
        address: 'قسنطينة - حي زواغي سليمان',
        gps: 'https://maps.google.com/?q=36.3650,6.6147',
        services: 'دراسات الهيكل الخرساني والحديد المسلح (Génie Civil)، حسابات الزلازل، ودفاتر الشروط التقنية ومراقبة الجودة.',
        image: null,
        authorId: 'mouhanedguellif16@gmail.com',
        authorName: 'Mouhaned Guellif',
        createdAt: '2026-11-20T08:00:00.000Z'
      }
    ];
    setStorageJSON('batihub_study_offices', offices);
  }
}

/* ========================================================================= */
/* 7. TOAST & NOTIFICATION SYSTEM                                            */
/* ========================================================================= */

function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('appToastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  let typeClass = 'border-bh-yellow/50';
  let iconClass = 'fa-solid fa-circle-info text-bh-yellow';

  if (type === 'success') {
    typeClass = 'toast-success';
    iconClass = 'fa-solid fa-circle-check text-emerald-400';
  } else if (type === 'error') {
    typeClass = 'toast-error';
    iconClass = 'fa-solid fa-circle-xmark text-rose-400';
  } else if (type === 'warning') {
    typeClass = 'toast-warning';
    iconClass = 'fa-solid fa-triangle-exclamation text-amber-400';
  }

  toast.className = `app-toast ${typeClass}`;
  toast.innerHTML = `
    <i class="${iconClass} text-base shrink-0"></i>
    <span class="font-semibold text-slate-100 flex-1 leading-snug">${escapeHTML(message)}</span>
    <button type="button" class="text-slate-400 hover:text-white shrink-0 ml-1 text-xs">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  toast.querySelector('button').addEventListener('click', () => {
    toast.remove();
  });

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.isConnected) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }
  }, duration);
}

function showAppModalAlert(title, message, isConfirm = false, onConfirm = null) {
  const modal = document.getElementById('appNotificationModal');
  const titleEl = document.getElementById('appNotifyTitle');
  const msgEl = document.getElementById('appNotifyMessage');
  const btnCancel = document.getElementById('btnAppNotifyCancel');
  const btnConfirm = document.getElementById('btnAppNotifyConfirm');

  if (!modal) return;

  titleEl.textContent = title;
  msgEl.textContent = message;

  if (isConfirm) {
    btnCancel.classList.remove('hidden');
    btnCancel.onclick = () => {
      modal.classList.add('hidden');
    };
    btnConfirm.onclick = () => {
      modal.classList.add('hidden');
      if (typeof onConfirm === 'function') onConfirm();
    };
  } else {
    btnCancel.classList.add('hidden');
    btnConfirm.onclick = () => {
      modal.classList.add('hidden');
      if (typeof onConfirm === 'function') onConfirm();
    };
  }

  modal.classList.remove('hidden');
}

/* ========================================================================= */
/* 8. AUTHENTICATION & SESSION MANAGEMENT                                    */
/* ========================================================================= */

function switchAuthView(viewName) {
  const views = {
    login: document.getElementById('viewLogin'),
    register: document.getElementById('viewRegister'),
    otp: document.getElementById('viewOtp'),
    forgot: document.getElementById('viewForgot')
  };

  const headerTitle = document.getElementById('authScreenHeaderTitle');
  const headerSub = document.getElementById('authScreenHeaderSub');

  Object.values(views).forEach(el => el && el.classList.add('hidden'));

  if (viewName === 'login') {
    views.login.classList.remove('hidden');
    if (headerTitle) headerTitle.textContent = 'BatiHub DZ • تسجيل الدخول';
    if (headerSub) headerSub.textContent = 'منصة المحترفين وأصحاب المشاريع وعروض العمل في الجزائر';
  } else if (viewName === 'register') {
    views.register.classList.remove('hidden');
    if (headerTitle) headerTitle.textContent = 'إنشاء حساب جديد في BatiHub DZ';
    if (headerSub) headerSub.textContent = 'سجل بياناتك للبدء في نشر عروضك والتواصل المباشر';
  } else if (viewName === 'otp') {
    views.otp.classList.remove('hidden');
    if (headerTitle) headerTitle.textContent = 'تأكيد الحساب • رمز التحقق';
    if (headerSub) headerSub.textContent = 'أدخل الرمز المكون من 6 أرقام لتفعيل حسابك';
  } else if (viewName === 'forgot') {
    views.forgot.classList.remove('hidden');
    if (headerTitle) headerTitle.textContent = 'استعادة كلمة المرور';
    if (headerSub) headerSub.textContent = 'أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور';
  }
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const icon = btn.querySelector('i');
  if (input.type === 'password') {
    input.type = 'text';
    if (icon) {
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  } else {
    input.type = 'password';
    if (icon) {
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  }
}

async function handleUserLogin(event) {
  if (event) event.preventDefault();

  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const rememberCheck = document.getElementById('rememberMeCheck');

  const email = (emailInput.value || '').trim().toLowerCase();
  const password = passwordInput.value || '';

  if (!email || !password) {
    showToast('يرجى ملء جميع الحقول المطلوبة', 'warning');
    return;
  }

  const accounts = initAccountsDatabase();
  const account = accounts[email];

  if (!account) {
    showToast('الحساب غير موجود! تحقق من البريد أو قم بإنشاء حساب جديد.', 'error');
    return;
  }

  // Calculate hash
  const computedHash = await sha256Hash(password + (account.salt || SEED_SALT));

  if (computedHash !== account.passwordHash) {
    showToast('كلمة المرور غير صحيحة! يرجى المحاولة مرة أخرى.', 'error');
    return;
  }

  // Successful login
  currentUser = { ...account };

  if (rememberCheck && rememberCheck.checked) {
    setStorageJSON('batihub_current_user', currentUser);
  } else {
    sessionStorage.setItem('batihub_current_user', JSON.stringify(currentUser));
  }

  showToast(`أهلاً بك مجدداً ${currentUser.fullName || currentUser.firstName}!`, 'success');
  transitionToDashboard();
}

async function sendOtpEmail(toEmail, otpCode, purpose = 'registration') {
  const isReg = (purpose === 'registration');
  const subject = isReg 
    ? 'BatiHub DZ • رمز تأكيد الحساب وتفعيله'
    : 'BatiHub DZ • رمز استعادة كلمة المرور';

  const html = `
    <div dir="rtl" style="font-family: Arial, Tahoma, sans-serif; background-color: #07090e; color: #f1f5f9; padding: 25px; border-radius: 16px; max-width: 520px; margin: auto; border: 1px solid #1c2638;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #ffa000; font-size: 24px; margin: 0; font-weight: bold;">BatiHub DZ</h1>
        <p style="color: #94a3b8; font-size: 12px; margin-top: 5px;">منصة المحترفين وعروض العمل في الجزائر</p>
      </div>
      <div style="background-color: #0f1520; padding: 20px; border-radius: 12px; border: 1px solid #1c2638; text-align: center;">
        <h3 style="color: #ffffff; font-size: 16px; margin-top: 0;">${isReg ? 'رمز تفعيل حسابك الجديد' : 'رمز إعادة تعيين كلمة المرور'}</h3>
        <p style="color: #94a3b8; font-size: 13px;">أدخل هذا الرمز المكون من 6 أرقام لإكمال العملية:</p>
        <div style="display: inline-block; background: linear-gradient(135deg, #ffa000, #ff6d00); color: #07090e; font-size: 32px; font-weight: bold; letter-spacing: 8px; padding: 12px 28px; border-radius: 12px; margin: 15px 0; font-family: monospace;">
          ${otpCode}
        </div>
        <p style="color: #64748b; font-size: 11px; margin-bottom: 0;">هذا الرمز صالح لمدة 15 دقيقة. لا تشاركه مع أي شخص لحماية حسابك.</p>
      </div>
      <p style="text-align: center; font-size: 11px; color: #64748b; margin-top: 20px;">
        BatiHub DZ Official Support • Developed by Mouhaned Guellif
      </p>
    </div>
  `;

  if (window.electronMailAPI && typeof window.electronMailAPI.sendMail === 'function') {
    try {
      const res = await window.electronMailAPI.sendMail({
        to: toEmail,
        subject: subject,
        text: `رمز التحقق الخاص بك هو: ${otpCode}`,
        html: html
      });
      return res;
    } catch (err) {
      console.error('SMTP Mail send error:', err);
      return { success: false, error: err.message };
    }
  }

  // Web / PWA fallback
  return { success: true, fallback: true };
}

async function handleUserRegister(event) {
  if (event) event.preventDefault();

  const firstName = document.getElementById('regFirstName').value.trim();
  const lastName = document.getElementById('regLastName').value.trim();
  const dob = document.getElementById('regDob').value;
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;

  if (!firstName || !lastName || !dob || !email || !password) {
    showToast('يرجى ملء جميع بيانات التسجيل', 'warning');
    return;
  }

  if (password.length < 6) {
    showToast('يجب أن تتكون كلمة المرور من 6 أحرف على الأقل', 'warning');
    return;
  }

  if (password !== confirmPassword) {
    showToast('كلمة المرور وتأكيدها غير متطابقين!', 'error');
    return;
  }

  const accounts = initAccountsDatabase();
  if (accounts[email]) {
    showToast('هذا البريد الإلكتروني مسجل بالفعل! يمكنك تسجيل الدخول مباشرة.', 'warning');
    switchAuthView('login');
    document.getElementById('loginEmail').value = email;
    return;
  }

  // Generate 6-digit OTP
  const generatedOtp = String(Math.floor(100000 + Math.random() * 900000));
  pendingRegistration = {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    dob,
    email,
    password,
    otp: generatedOtp
  };

  showToast('جاري إرسال رمز التحقق إلى بريدك الإلكتروني عبر Gmail...', 'info', 3000);

  // Send real email via Gmail SMTP
  const mailRes = await sendOtpEmail(email, generatedOtp, 'registration');

  switchAuthView('otp');
  const otpInput = document.getElementById('otpCodeInput');

  if (mailRes && mailRes.success && !mailRes.fallback) {
    showToast(`تم إرسال رمز التحقق إلى ${email} بنجاح! تفقد بريدك الوارد أو الترويجي.`, 'success', 6000);
    if (otpInput) otpInput.value = '';
  } else {
    // If on web / fallback mode, also show/auto-fill for ease of testing
    if (otpInput) otpInput.value = generatedOtp;
    showToast(`رمز التحقق الخاص بك هو: ${generatedOtp}`, 'info', 6000);
  }
}

async function handleVerifyOtp(event) {
  if (event) event.preventDefault();

  if (!pendingRegistration) {
    showToast('لا توجد عملية تسجيل معلقة! يرجى إعادة إدخال البيانات.', 'error');
    switchAuthView('register');
    return;
  }

  const enteredCode = (document.getElementById('otpCodeInput').value || '').trim();
  if (enteredCode !== pendingRegistration.otp) {
    showToast('رمز التحقق غير صحيح! يرجى التأكد وإعادة المحاولة.', 'error');
    return;
  }

  // Create and save account
  const salt = SEED_SALT;
  const passwordHash = await sha256Hash(pendingRegistration.password + salt);
  const newAccount = {
    id: 'usr_' + Date.now(),
    firstName: pendingRegistration.firstName,
    lastName: pendingRegistration.lastName,
    fullName: pendingRegistration.fullName,
    dob: pendingRegistration.dob,
    email: pendingRegistration.email,
    passwordHash: passwordHash,
    salt: salt,
    isVerified: true,
    role: 'user',
    avatar: null,
    createdAt: new Date().toISOString()
  };

  const accounts = initAccountsDatabase();
  accounts[newAccount.email] = newAccount;
  setStorageJSON('batihub_registered_accounts', accounts);

  currentUser = { ...newAccount };
  setStorageJSON('batihub_current_user', currentUser);
  pendingRegistration = null;

  showToast('تم تأكيد حسابك بنجاح! مرحباً بك في BatiHub DZ.', 'success');
  transitionToDashboard();
}

async function handleSendPasswordResetCode() {
  const emailInput = document.getElementById('forgotEmail');
  const email = (emailInput.value || '').trim().toLowerCase();

  if (!email) {
    showToast('يرجى إدخال عنوان البريد الإلكتروني', 'warning');
    return;
  }

  const accounts = initAccountsDatabase();
  if (!accounts[email]) {
    showToast('البريد الإلكتروني المدخل غير مسجل لدينا.', 'error');
    return;
  }

  const resetOtp = String(Math.floor(100000 + Math.random() * 900000));
  showToast('جاري إرسال رمز إعادة التعيين إلى بريدك الإلكتروني...', 'info', 3000);

  const mailRes = await sendOtpEmail(email, resetOtp, 'reset');
  if (mailRes && mailRes.success && !mailRes.fallback) {
    showToast(`تم إرسال رمز استعادة كلمة المرور إلى ${email} بنجاح!`, 'success', 5000);
  } else {
    showToast(`رمز استعادة كلمة المرور هو: ${resetOtp}`, 'info', 5000);
  }

  setTimeout(() => switchAuthView('login'), 2000);
}

function handleSignOut() {
  currentUser = null;
  localStorage.removeItem('batihub_current_user');
  sessionStorage.removeItem('batihub_current_user');

  closeUserProfileModal();

  const authGate = document.getElementById('authGateScreen');
  const dashboard = document.getElementById('appDashboard');

  if (dashboard) dashboard.classList.add('hidden');
  if (authGate) {
    authGate.classList.remove('auth-hide');
    authGate.style.display = 'flex';
  }

  switchAuthView('login');
  showToast('تم تسجيل الخروج بنجاح', 'info');
}

function transitionToDashboard() {
  const authGate = document.getElementById('authGateScreen');
  const dashboard = document.getElementById('appDashboard');

  if (authGate) {
    authGate.classList.add('auth-hide');
    setTimeout(() => {
      authGate.style.display = 'none';
    }, 400);
  }

  if (dashboard) {
    dashboard.classList.remove('hidden');
  }

  updateUserProfileUI();
  applyLanguage(currentLanguage);
  renderWorkerPostsFeed();
  renderStudyOfficesFeed();
  updateUnreadMessagesCount();
}

function updateUserProfileUI() {
  if (!currentUser) return;

  const nameDisplays = [
    document.getElementById('userNameDisplay'),
    document.getElementById('profileModalName')
  ];
  nameDisplays.forEach(el => {
    if (el) el.textContent = currentUser.fullName || currentUser.firstName || 'مستخدم';
  });

  const emailDisplay = document.getElementById('profileModalEmail');
  if (emailDisplay) emailDisplay.textContent = currentUser.email;

  const headerAvatarImg = document.getElementById('userAvatarImg');
  const modalAvatarImg = document.getElementById('profileModalAvatar');

  const avatarSrc = resolveAvatarSrc(currentUser.avatar, currentUser.fullName, currentUser.email);
  if (headerAvatarImg) headerAvatarImg.src = avatarSrc;
  if (modalAvatarImg) modalAvatarImg.src = avatarSrc;

  // Show/Hide Admin pending posts filter button
  const adminFilterBtn = document.getElementById('adminPendingFilterBtn');
  if (adminFilterBtn) {
    if (currentUser.role === 'admin') {
      adminFilterBtn.classList.remove('hidden');
      updateAdminPendingBadge();
    } else {
      adminFilterBtn.classList.add('hidden');
    }
  }
}

function openUserProfileModal() {
  if (!currentUser) {
    showToast('يرجى تسجيل الدخول أولاً', 'warning');
    return;
  }
  updateUserProfileUI();
  const modal = document.getElementById('modalUserProfile');
  if (modal) modal.classList.remove('hidden');
}

function closeUserProfileModal() {
  const modal = document.getElementById('modalUserProfile');
  if (modal) modal.classList.add('hidden');
}

function handleProfilePhotoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file || !currentUser) return;

  if (file.size > 3 * 1024 * 1024) {
    showToast('حجم الصورة كبير جداً! يرجى اختيار صورة أقل من 3 ميغابايت.', 'warning');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64Data = e.target.result;
    currentUser.avatar = base64Data;

    // Update in database
    const accounts = initAccountsDatabase();
    if (accounts[currentUser.email]) {
      accounts[currentUser.email].avatar = base64Data;
      setStorageJSON('batihub_registered_accounts', accounts);
    }
    setStorageJSON('batihub_current_user', currentUser);

    updateUserProfileUI();
    renderWorkerPostsFeed();
    showToast('تم تحديث صورتك الشخصية بنجاح!', 'success');
  };
  reader.readAsDataURL(file);
}

function openChangePasswordModal() {
  const modal = document.getElementById('modalChangePassword');
  if (modal) modal.classList.remove('hidden');
}

function closeChangePasswordModal() {
  const modal = document.getElementById('modalChangePassword');
  if (modal) modal.classList.add('hidden');
}

async function handleDirectPasswordChange(event) {
  if (event) event.preventDefault();
  if (!currentUser) return;

  const currentPwd = document.getElementById('inputCurrentPassword').value;
  const newPwd = document.getElementById('inputNewPasswordDirect').value;
  const confirmPwd = document.getElementById('inputConfirmPasswordDirect').value;

  if (newPwd.length < 6) {
    showToast('كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل', 'warning');
    return;
  }

  if (newPwd !== confirmPwd) {
    showToast('كلمة المرور الجديدة وتأكيدها غير متطابقين!', 'error');
    return;
  }

  const accounts = initAccountsDatabase();
  const acc = accounts[currentUser.email];
  if (!acc) return;

  const currentComputedHash = await sha256Hash(currentPwd + (acc.salt || SEED_SALT));
  if (currentComputedHash !== acc.passwordHash) {
    showToast('كلمة المرور الحالية غير صحيحة!', 'error');
    return;
  }

  const newHash = await sha256Hash(newPwd + (acc.salt || SEED_SALT));
  acc.passwordHash = newHash;
  accounts[currentUser.email] = acc;
  setStorageJSON('batihub_registered_accounts', accounts);

  currentUser.passwordHash = newHash;
  setStorageJSON('batihub_current_user', currentUser);

  closeChangePasswordModal();
  showToast('تم تغيير كلمة المرور بنجاح!', 'success');
}

/* ========================================================================= */
/* 9. NAVIGATION & TAB SWITCHING ENGINE                                      */
/* ========================================================================= */

function switchTab(tabId) {
  if (!tabId) return;

  currentActiveTab = tabId;

  // 1. Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.add('hidden');
  });

  // 2. Show active tab content
  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.classList.remove('hidden');
  }

  // 3. Update desktop navigation tabs
  document.querySelectorAll('.nav-tab').forEach(btn => {
    const btnTab = btn.getAttribute('data-tab');
    if (btnTab === tabId) {
      btn.classList.add('active-tab');
    } else {
      btn.classList.remove('active-tab');
    }
  });

  // 4. Update mobile bottom navigation bar
  const mNavMapping = {
    'tab-scientific-calculator': 'mNavCalc',
    'tab-worker-board': 'mNavWorkers',
    'tab-study-offices': 'mNavOffices'
  };

  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.classList.remove('text-bh-yellow');
    item.classList.add('text-slate-400');
  });

  const activeMobileBtnId = mNavMapping[tabId];
  if (activeMobileBtnId) {
    const activeBtn = document.getElementById(activeMobileBtnId);
    if (activeBtn) {
      activeBtn.classList.remove('text-slate-400');
      activeBtn.classList.add('text-bh-yellow');
    }
  }
}

/* ========================================================================= */
/* 10. LANGUAGE & LOCALIZATION (i18n) ENGINE                                 */
/* ========================================================================= */

function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('batihub_lang', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.ar;
  const isRTL = (lang === 'ar');

  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

  // Update text nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update language switcher button states
  ['pLangAR', 'pLangFR', 'pLangEN'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.classList.remove('bg-bh-yellow', 'text-slate-950');
    btn.classList.add('bg-bh-bg', 'text-slate-200');
  });

  const activeBtnId = lang === 'ar' ? 'pLangAR' : (lang === 'fr' ? 'pLangFR' : 'pLangEN');
  const activeBtn = document.getElementById(activeBtnId);
  if (activeBtn) {
    activeBtn.classList.remove('bg-bh-bg', 'text-slate-200');
    activeBtn.classList.add('bg-bh-yellow', 'text-slate-950');
  }

  renderWorkerPostsFeed();
  renderStudyOfficesFeed();
}

/* ========================================================================= */
/* 11. REALTIME MULTI-DEVICE SYNCHRONIZATION ENGINE                          */
/* ========================================================================= */

const LIVE_SYNC_TOPIC = 'https://ntfy.sh/batihub_dz_live_sync_2026';
const currentDeviceId = 'dev_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
let liveEventSource = null;
let lastSyncedPacketTime = Date.now() - 3600000;

async function broadcastLiveEvent(action, payload) {
  try {
    const packet = {
      senderDeviceId: currentDeviceId,
      timestamp: Date.now(),
      action: action,
      payload: payload
    };

    await fetch(LIVE_SYNC_TOPIC, {
      method: 'POST',
      body: JSON.stringify(packet),
      headers: {
        'Title': 'BatiHub Live Sync',
        'Priority': 'default'
      }
    });
  } catch (err) {
    console.warn('[Sync Broadcast Warning]:', err);
  }
}

function initLiveSyncEngine() {
  if (liveEventSource) return;

  // 1. Initial poll for recent events
  pollLiveSyncHistory();

  // 2. Real-time Server-Sent Events (SSE) connection
  try {
    liveEventSource = new EventSource(`${LIVE_SYNC_TOPIC}/sse`);
    liveEventSource.onmessage = (event) => {
      try {
        const raw = JSON.parse(event.data);
        if (!raw.message) return;
        const packet = JSON.parse(raw.message);
        if (packet.senderDeviceId === currentDeviceId) return; // ignore own echo
        handleIncomingLiveSyncPacket(packet);
      } catch (e) {}
    };
    liveEventSource.onerror = () => {
      // Reconnects automatically by browser SSE spec
    };
  } catch (e) {}

  // 3. Fallback polling every 8 seconds for background or waking devices
  setInterval(pollLiveSyncHistory, 8000);
}

async function pollLiveSyncHistory() {
  try {
    const res = await fetch(`${LIVE_SYNC_TOPIC}/json?poll=1&since=20s`);
    if (!res.ok) return;
    const text = await res.text();
    const lines = text.trim().split('\n');

    lines.forEach(line => {
      if (!line.trim()) return;
      try {
        const item = JSON.parse(line);
        if (item.time && item.time * 1000 <= lastSyncedPacketTime) return;
        if (item.time) lastSyncedPacketTime = item.time * 1000;
        if (!item.message) return;
        const packet = JSON.parse(item.message);
        if (packet.senderDeviceId === currentDeviceId) return;
        handleIncomingLiveSyncPacket(packet);
      } catch (e) {}
    });
  } catch (e) {}
}

function handleIncomingLiveSyncPacket(packet) {
  const { action, payload } = packet;

  // 1. Chat Message Sync
  if (action === 'chat_message') {
    const { threadKey, recipientEmail, senderEmail, message } = payload;
    if (!currentUser) return;

    const userEmail = currentUser.email.toLowerCase();
    const isForMe = (userEmail === recipientEmail.toLowerCase() || userEmail === senderEmail.toLowerCase());
    if (!isForMe) return;

    const chats = getStorageJSON('batihub_private_chats', {});
    if (!chats[threadKey]) chats[threadKey] = [];

    // Avoid duplicate message IDs
    if (!chats[threadKey].some(m => m.id === message.id)) {
      chats[threadKey].push(message);
      setStorageJSON('batihub_private_chats', chats);

      // If chat modal is currently open with this sender
      if (currentChatPartner && currentChatPartner.email.toLowerCase() === senderEmail.toLowerCase()) {
        renderPrivateChatMessages();
      } else {
        // Notification & badge update
        showToast(`رسالة خاصة جديدة من ${escapeHTML(message.senderName || senderEmail)} 💬`, 'info', 4000);
        updateUnreadMessagesCount();
      }
    }
  }

  // 2. Worker Posts Sync (new post created)
  else if (action === 'new_worker_post') {
    let posts = getStorageJSON('batihub_worker_posts', []);
    if (!posts.some(p => p.id === payload.id)) {
      posts.unshift(payload);
      setStorageJSON('batihub_worker_posts', posts);
      renderWorkerPostsFeed();
      if (currentUser && currentUser.role === 'admin') {
        showToast(`طلب منشور عمل جديد قيد المراجعة من ${escapeHTML(payload.authorName)}`, 'warning', 4500);
      }
    }
  }

  // 3. Worker Post Approved
  else if (action === 'approve_worker_post') {
    let posts = getStorageJSON('batihub_worker_posts', []);
    const post = posts.find(p => p.id === payload.postId);
    if (post) {
      post.status = 'approved';
      setStorageJSON('batihub_worker_posts', posts);
      renderWorkerPostsFeed();
      showToast('تم اعتماد ونشر عرض عمل جديد في المنصة!', 'info', 2500);
    }
  }

  // 4. Worker Post Deleted / Rejected
  else if (action === 'delete_worker_post') {
    let posts = getStorageJSON('batihub_worker_posts', []);
    posts = posts.filter(p => p.id !== payload.postId);
    setStorageJSON('batihub_worker_posts', posts);
    renderWorkerPostsFeed();
  }

  // 5. Post Like Toggled
  else if (action === 'toggle_like') {
    let posts = getStorageJSON('batihub_worker_posts', []);
    const post = posts.find(p => p.id === payload.postId);
    if (post) {
      post.likes = payload.likes;
      setStorageJSON('batihub_worker_posts', posts);
      renderWorkerPostsFeed();
    }
  }

  // 6. Post Comment Added
  else if (action === 'add_comment') {
    let posts = getStorageJSON('batihub_worker_posts', []);
    const post = posts.find(p => p.id === payload.postId);
    if (post) {
      if (!post.comments) post.comments = [];
      if (!post.comments.some(c => c.id === payload.comment.id)) {
        post.comments.push(payload.comment);
        setStorageJSON('batihub_worker_posts', posts);
        renderWorkerPostsFeed();
      }
    }
  }

  // 7. Post Comment Deleted
  else if (action === 'delete_comment') {
    let posts = getStorageJSON('batihub_worker_posts', []);
    const post = posts.find(p => p.id === payload.postId);
    if (post && post.comments) {
      post.comments = post.comments.filter(c => c.id !== payload.commentId);
      setStorageJSON('batihub_worker_posts', posts);
      renderWorkerPostsFeed();
    }
  }

  // 8. Study Office Created
  else if (action === 'new_study_office') {
    let offices = getStorageJSON('batihub_study_offices', []);
    if (!offices.some(o => o.id === payload.id)) {
      offices.unshift(payload);
      setStorageJSON('batihub_study_offices', offices);
      renderStudyOfficesFeed();
    }
  }

  // 9. Study Office Deleted
  else if (action === 'delete_study_office') {
    let offices = getStorageJSON('batihub_study_offices', []);
    offices = offices.filter(o => o.id !== payload.officeId);
    setStorageJSON('batihub_study_offices', offices);
    renderStudyOfficesFeed();
  }
}

/* ========================================================================= */
/* 12. SCIENTIFIC CALCULATOR & QUICK TOOLS                                   */
/* ========================================================================= */

function updateCalcDisplay() {
  const exprDisplay = document.getElementById('calcExpressionDisplay');
  const currDisplay = document.getElementById('calcCurrentDisplay');

  if (exprDisplay) exprDisplay.textContent = calcExpression;
  if (currDisplay) currDisplay.textContent = calcCurrentVal || '0';
}

function calcAction(action, val) {
  let op = action;
  let numVal = val;

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '00'].includes(action)) {
    op = 'num';
    numVal = action;
  } else if (['+', '-', '*', '/', '%'].includes(action)) {
    op = 'op';
    numVal = action;
  } else if (action === '.') {
    op = 'dot';
  } else if (action === '(') {
    op = 'paren_open';
  } else if (action === ')') {
    op = 'paren_close';
  } else if (action === 'pow') {
    op = 'pow2';
  }

  if (calcJustEvaluated && op !== 'op') {
    calcExpression = '';
    calcCurrentVal = '0';
    calcJustEvaluated = false;
  } else {
    calcJustEvaluated = false;
  }

  switch (op) {
    case 'num':
      if (calcCurrentVal === '0') {
        calcCurrentVal = String(numVal);
      } else {
        calcCurrentVal += String(numVal);
      }
      break;

    case 'dot':
      if (!calcCurrentVal.includes('.')) {
        calcCurrentVal += '.';
      }
      break;

    case 'clear':
      calcExpression = '';
      calcCurrentVal = '0';
      break;

    case 'clear_entry':
      calcCurrentVal = '0';
      break;

    case 'backspace':
      if (calcCurrentVal.length > 1) {
        calcCurrentVal = calcCurrentVal.slice(0, -1);
      } else {
        calcCurrentVal = '0';
      }
      break;

    case 'op':
      calcExpression += (calcCurrentVal || '0') + ' ' + numVal + ' ';
      calcCurrentVal = '0';
      break;

    case 'paren_open':
      calcExpression += ' ( ';
      break;

    case 'paren_close':
      calcExpression += (calcCurrentVal || '0') + ' ) ';
      calcCurrentVal = '0';
      break;

    case 'pi':
      calcCurrentVal = String(Math.PI.toFixed(8));
      break;

    case 'sqrt':
      {
        const num = parseFloat(calcCurrentVal);
        if (num < 0) {
          calcCurrentVal = 'Error';
        } else {
          calcCurrentVal = String(Math.sqrt(num).toFixed(6));
        }
      }
      break;

    case 'pow2':
      {
        const num = parseFloat(calcCurrentVal);
        calcCurrentVal = String(Math.pow(num, 2).toFixed(4));
      }
      break;

    case 'pow3':
      {
        const num = parseFloat(calcCurrentVal);
        calcCurrentVal = String(Math.pow(num, 3).toFixed(4));
      }
      break;

    case 'reciprocal':
      {
        const num = parseFloat(calcCurrentVal);
        if (num === 0) {
          calcCurrentVal = 'Error';
        } else {
          calcCurrentVal = String((1 / num).toFixed(6));
        }
      }
      break;

    case 'sin':
      {
        const rad = (parseFloat(calcCurrentVal) * Math.PI) / 180;
        calcCurrentVal = String(Math.sin(rad).toFixed(6));
      }
      break;

    case 'cos':
      {
        const rad = (parseFloat(calcCurrentVal) * Math.PI) / 180;
        calcCurrentVal = String(Math.cos(rad).toFixed(6));
      }
      break;

    case 'tan':
      {
        const rad = (parseFloat(calcCurrentVal) * Math.PI) / 180;
        calcCurrentVal = String(Math.tan(rad).toFixed(6));
      }
      break;

    case 'equals':
      evaluateCalcExpression();
      return;
  }

  updateCalcDisplay();
}

function evaluateCalcExpression() {
  const fullExpr = (calcExpression + (calcCurrentVal || '')).trim();
  if (!fullExpr) return;

  try {
    // Sanitize expression tokens for math safety
    const sanitized = fullExpr
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/[^0-9+\-*/().%\s]/g, '');

    // Safely evaluate standard arithmetic
    const result = Function(`'use strict'; return (${sanitized});`)();
    const formattedResult = Number.isInteger(result) ? String(result) : String(parseFloat(result.toFixed(6)));

    // Save into history tape
    addCalcHistoryItem(fullExpr, formattedResult);

    calcExpression = fullExpr + ' =';
    calcCurrentVal = formattedResult;
    calcJustEvaluated = true;
  } catch (err) {
    calcCurrentVal = 'Error';
  }

  updateCalcDisplay();
}

function addCalcHistoryItem(expr, res) {
  const history = getStorageJSON('batihub_calc_history', []);
  history.unshift({ expr, res, time: new Date().toLocaleTimeString() });
  if (history.length > 20) history.pop();
  setStorageJSON('batihub_calc_history', history);
  renderCalcHistory();
}

function renderCalcHistory() {
  const container = document.getElementById('calcHistoryTapeContainer');
  if (!container) return;

  const history = getStorageJSON('batihub_calc_history', []);
  if (history.length === 0) {
    container.innerHTML = `<p class="text-[11px] text-slate-500 text-center py-4" dir="rtl">${I18N[currentLanguage].qc_history_empty || 'لا توجد عمليات سابقة بعد'}</p>`;
    return;
  }

  container.innerHTML = '';
  history.forEach(item => {
    const row = document.createElement('div');
    row.className = 'p-2 rounded-xl bg-bh-bg border border-bh-border/70 hover:border-bh-yellow/40 transition flex items-center justify-between text-xs cursor-pointer';
    row.innerHTML = `
      <div class="truncate mr-2">
        <span class="text-slate-400 font-mono text-[11px] block">${escapeHTML(item.expr)}</span>
        <span class="text-bh-yellow font-black font-mono text-sm">= ${escapeHTML(item.res)}</span>
      </div>
      <button type="button" class="text-[10px] text-slate-400 hover:text-white px-2 py-1 rounded bg-bh-cardhover" title="استخدام النتيجة">
        <i class="fa-solid fa-arrow-turn-up text-bh-yellow"></i>
      </button>
    `;
    row.onclick = () => {
      calcCurrentVal = item.res;
      updateCalcDisplay();
    };
    container.appendChild(row);
  });
}

function clearCalcHistory() {
  localStorage.removeItem('batihub_calc_history');
  renderCalcHistory();
  showToast('تم مسح سجل العمليات الحسابية', 'info');
}

/* Quick Tools Calculations */
function runQuickCalcSurface() {
  const lEl = document.getElementById('qcLength') || document.getElementById('qcSurfL');
  const wEl = document.getElementById('qcWidth') || document.getElementById('qcSurfW');
  const l = parseFloat(lEl ? lEl.value : 0) || 0;
  const w = parseFloat(wEl ? wEl.value : 0) || 0;
  const area = (l * w).toFixed(2);
  const perim = (2 * (l + w)).toFixed(2);

  const areaOut = document.getElementById('qcAreaOutput') || document.getElementById('qcSurfAreaOutput');
  const perimOut = document.getElementById('qcPerimOutput') || document.getElementById('qcSurfPerimOutput');

  if (areaOut) areaOut.textContent = `${area} m²`;
  if (perimOut) perimOut.textContent = `${perim} m`;
}

function runQuickCalcConcrete() {
  const l = parseFloat(document.getElementById('qcConcL').value) || 0;
  const w = parseFloat(document.getElementById('qcConcW').value) || 0;
  const h = parseFloat(document.getElementById('qcConcH').value) || 0;
  const dosage = parseFloat(document.getElementById('qcConcDosage').value) || 350;

  const vol = l * w * h;
  const volFormatted = vol.toFixed(2);

  const totalKg = vol * dosage;
  const bags = Math.ceil(totalKg / 50);
  const tons = (totalKg / 1000).toFixed(1);

  const sand = (vol * 0.4).toFixed(2);
  const gravel = (vol * 0.8).toFixed(2);

  document.getElementById('qcConcVolOutput').textContent = `${volFormatted} m³`;
  document.getElementById('qcBagsOutput').textContent = `${bags} كيس (${tons}T)`;
  document.getElementById('qcSandOutput').textContent = `${sand} m³`;
  document.getElementById('qcGravelOutput').textContent = `${gravel} m³`;
}

function runQuickCalcSteel() {
  const dia = parseFloat(document.getElementById('qcSteelDiameter').value) || 12;
  const len = parseFloat(document.getElementById('qcSteelLength').value) || 0;

  // Weight per meter formula: (dia^2) / 162
  const kgPerMeter = Math.pow(dia, 2) / 162;
  const totalWeight = len * kgPerMeter;
  const quintals = totalWeight / 100;

  document.getElementById('qcSteelWeightOutput').textContent = `${totalWeight.toFixed(2)} kg`;
  document.getElementById('qcSteelQuintalsOutput').textContent = `${quintals.toFixed(2)} Q`;
}

function injectQuickValue(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.textContent || '';
  const numMatch = text.match(/[0-9.]+/);
  if (numMatch) {
    calcCurrentVal = numMatch[0];
    updateCalcDisplay();
    showToast(`تم نقل القيمة (${numMatch[0]}) إلى الآلة الحاسبة`, 'info', 2000);
  }
}

/* ========================================================================= */
/* 13. WORKER POSTS & ARTISANS BOARD                                         */
/* ========================================================================= */

function filterWorkerFeed(tradeCategory, btn) {
  activeWorkerFilter = tradeCategory;
  showPendingOnly = false;

  document.querySelectorAll('.worker-filter-pill').forEach(b => {
    b.classList.remove('active-filter');
  });
  if (btn) btn.classList.add('active-filter');

  renderWorkerPostsFeed();
}

function togglePendingPostsFilter() {
  showPendingOnly = !showPendingOnly;
  const adminBtn = document.getElementById('adminPendingFilterBtn');

  if (showPendingOnly) {
    document.querySelectorAll('.worker-filter-pill').forEach(b => b.classList.remove('active-filter'));
    if (adminBtn) adminBtn.classList.add('active-filter');
  } else {
    filterWorkerFeed('all', document.querySelector('.worker-filter-pill'));
  }

  renderWorkerPostsFeed();
}

function updateAdminPendingBadge() {
  const badge = document.getElementById('pendingPostsCountBadge');
  if (!badge) return;

  const posts = getStorageJSON('batihub_worker_posts', []);
  const pendingCount = posts.filter(p => p.status === 'pending').length;
  badge.textContent = String(pendingCount);
}

function renderAdminPendingRequestsSection() {
  const section = document.getElementById('adminPendingRequestsSection');
  const list = document.getElementById('adminPendingCardsList');
  const countBadge = document.getElementById('adminPendingHeaderCount');
  if (!section || !list) return;

  if (!currentUser || currentUser.role !== 'admin') {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  const posts = getStorageJSON('batihub_worker_posts', []);
  const pendingPosts = posts.filter(p => p.status === 'pending');

  if (countBadge) countBadge.textContent = String(pendingPosts.length);

  if (pendingPosts.length === 0) {
    list.innerHTML = `
      <div class="bg-bh-bg/60 border border-bh-border p-5 rounded-xl text-center space-y-1">
        <i class="fa-solid fa-circle-check text-emerald-400 text-xl block mb-1"></i>
        <h4 class="font-bold text-xs text-white">لا توجد طلبات منشورات معلقة حالياً</h4>
        <p class="text-[11px] text-slate-400">جميع عروض العمل المنشورة معتمدة وتظهر للمستخدمين مباشرة.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = '';
  pendingPosts.forEach(post => {
    const rawPhone = (post.phone || '').replace(/[^0-9]/g, '');
    let intlPhone = rawPhone.startsWith('0') ? '213' + rawPhone.slice(1) : rawPhone;

    const unitMap = {
      m2: 'دج / م²',
      linear_m: 'دج / م خطي',
      hour: 'دج / ساعة',
      day: 'دج / يوم',
      global: 'مبلغ إجمالي',
      negotiable: 'قابل للتفاوض'
    };
    const unitLabel = unitMap[post.unit] || 'دج / م²';

    const avatarHTML = renderAvatarImgTag(post.authorAvatar, post.authorName, post.authorId, 'w-10 h-10 rounded-full object-cover border border-amber-500/50 shadow');

    let postImageHTML = '';
    if (post.image) {
      postImageHTML = `
        <div class="rounded-xl overflow-hidden border border-bh-border max-h-48 bg-bh-bg cursor-pointer mt-2" onclick="openImageLightbox('${escapeHTML(post.image)}')">
          <img src="${post.image}" alt="Attached Work" class="w-full h-auto object-cover max-h-48 hover:scale-102 transition">
        </div>
      `;
    }

    const card = document.createElement('div');
    card.className = 'bg-bh-card border border-amber-500/40 rounded-2xl p-4 shadow-xl space-y-3';
    card.innerHTML = `
      <div class="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-bh-border">
        <div class="flex items-center gap-2.5">
          ${avatarHTML}
          <div>
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-sm text-white">${escapeHTML(post.authorName)}</h4>
              <span class="text-[10px] text-slate-400 font-mono" dir="ltr">(${escapeHTML(post.authorId)})</span>
            </div>
            <div class="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
              <span class="text-bh-yellow font-bold">${escapeHTML(post.trade)}</span>
              <span>•</span>
              <span class="font-mono text-[10px]">${new Date(post.createdAt).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div class="px-3 py-1 rounded-xl bg-bh-yellow/20 border border-bh-yellow/40 text-bh-yellow font-mono font-bold text-xs">
          ${post.price ? `${escapeHTML(post.price)} ${unitLabel}` : unitLabel}
        </div>
      </div>

      <p class="text-xs text-slate-200 leading-relaxed whitespace-pre-line">${escapeHTML(post.text)}</p>

      ${postImageHTML}

      <!-- Contact Info -->
      <div class="flex items-center gap-2 text-xs pt-1">
        <a href="tel:${rawPhone}" class="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
          <i class="fa-solid fa-phone text-[10px]"></i>
          <span>${escapeHTML(post.phone)}</span>
        </a>
        <a href="https://wa.me/${intlPhone}" target="_blank" class="px-3 py-1.5 rounded-lg bg-green-500/20 text-green-300 border border-green-500/30 flex items-center gap-1">
          <i class="fa-brands fa-whatsapp text-xs"></i>
          <span>واتساب</span>
        </a>
      </div>

      <!-- Admin Decision Action Buttons -->
      <div class="pt-2 border-t border-bh-border flex items-center justify-end gap-2">
        <button type="button" onclick="rejectWorkerPost('${post.id}')" class="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-trash-can"></i>
          <span>رفض وحذف نهائياً ❌</span>
        </button>

        <button type="button" onclick="approveWorkerPost('${post.id}')" class="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:opacity-95 text-slate-950 text-xs font-black shadow-lg transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-circle-check"></i>
          <span>قبول ونشر المنشور للجميع ✅</span>
        </button>
      </div>
    `;

    list.appendChild(card);
  });
}

function renderWorkerPostsFeed() {
  renderAdminPendingRequestsSection();

  const container = document.getElementById('workerPostsFeedContainer');
  if (!container) return;

  const dict = I18N[currentLanguage] || I18N.ar;
  let posts = getStorageJSON('batihub_worker_posts', []);

  // Filter logic
  let filtered = posts.filter(p => {
    // Admin pending posts view toggle
    if (showPendingOnly) {
      return p.status === 'pending';
    }

    if (currentUser && currentUser.role === 'admin') {
      // In the general feed, admin sees approved posts (pending are in the dedicated panel above)
      if (p.status === 'pending') return false;
    } else {
      // Regular user: sees approved posts + their own pending posts
      if (p.status === 'pending') {
        if (!currentUser || p.authorId !== currentUser.email) return false;
      }
    }

    if (activeWorkerFilter !== 'all') {
      return p.trade === activeWorkerFilter;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="bg-bh-card border border-bh-border rounded-2xl p-8 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-bh-yellow/10 text-bh-yellow flex items-center justify-center text-3xl">
          <i class="fa-solid fa-briefcase"></i>
        </div>
        <h3 class="font-bold text-white text-base">${dict.empty_posts}</h3>
        <p class="text-xs text-slate-400 max-w-sm mx-auto">شارك خبرتك أو تواصل مع أفضل الحرفيين والمهندسين في الجزائر.</p>
        <button type="button" onclick="openCreateWorkerPostModal()" class="px-4 py-2 rounded-xl bg-gradient-to-r from-bh-yellow to-bh-orange text-slate-950 font-bold text-xs">
          ${dict.btn_new_worker_post}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = '';

  filtered.forEach(post => {
    const isOwner = currentUser && (currentUser.email === post.authorId);
    const isAdmin = currentUser && (currentUser.role === 'admin');
    const isLiked = currentUser && post.likes && post.likes.includes(currentUser.email);
    const likeCount = post.likes ? post.likes.length : 0;
    const comments = post.comments || [];

    // Unit label localization
    const unitMap = {
      m2: dict.unit_m2,
      linear_m: dict.unit_linear_m,
      hour: dict.unit_hour,
      day: dict.unit_day,
      global: dict.unit_global,
      negotiable: dict.unit_negotiable
    };
    const unitLabel = unitMap[post.unit] || dict.unit_m2;

    // Clean phone numbers
    const rawPhone = (post.phone || '').replace(/[^0-9]/g, '');
    let intlPhone = rawPhone;
    if (intlPhone.startsWith('0')) {
      intlPhone = '213' + intlPhone.slice(1);
    }

    const card = document.createElement('div');
    card.className = 'bg-bh-card border border-bh-border rounded-2xl p-4 sm:p-5 shadow-xl space-y-4 hover:border-bh-border/90 transition';

    // Pending badge
    let statusBadgeHTML = '';
    if (post.status === 'pending') {
      statusBadgeHTML = `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono">${dict.status_pending}</span>`;
    }

    // Avatar HTML
    const avatarHTML = renderAvatarImgTag(post.authorAvatar, post.authorName, post.authorId, 'w-10 h-10 rounded-full object-cover border border-bh-border shadow-sm');

    // Image attachment HTML
    let postImageHTML = '';
    if (post.image) {
      postImageHTML = `
        <div class="rounded-xl overflow-hidden border border-bh-border max-h-72 bg-bh-bg cursor-pointer" onclick="openImageLightbox('${escapeHTML(post.image)}')">
          <img src="${post.image}" alt="Attached Work" class="w-full h-auto object-cover hover:scale-102 transition duration-300">
        </div>
      `;
    }

    // Admin approval buttons HTML
    let adminControlsHTML = '';
    if (isAdmin && post.status === 'pending') {
      adminControlsHTML = `
        <div class="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-2">
          <span class="text-xs font-bold text-amber-300">مراجعة الإدارة :</span>
          <div class="flex items-center gap-2">
            <button type="button" onclick="approveWorkerPost('${post.id}')" class="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition">
              ${dict.approve_btn}
            </button>
            <button type="button" onclick="rejectWorkerPost('${post.id}')" class="px-3 py-1 rounded-lg bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs transition">
              ${dict.reject_btn}
            </button>
          </div>
        </div>
      `;
    }

    // Delete post button HTML
    let deleteBtnHTML = '';
    if (isOwner || isAdmin) {
      deleteBtnHTML = `
        <button type="button" onclick="deleteWorkerPost('${post.id}')" class="w-7 h-7 rounded-lg bg-bh-bg hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-bh-border flex items-center justify-center transition" title="${dict.delete_btn}">
          <i class="fa-regular fa-trash-can text-xs"></i>
        </button>
      `;
    }

    // Pending banner
    let pendingBannerHTML = '';
    if (post.status === 'pending') {
      pendingBannerHTML = `
        <div class="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-2">
          <i class="fa-solid fa-hourglass-half animate-spin text-sm shrink-0"></i>
          <span>منشورك قيد المعالجة والمراجعة من قبل الإدارة، وسيظهر للجميع فور اعتماده.</span>
        </div>
      `;
    }

    card.innerHTML = `
      ${pendingBannerHTML}
      <!-- Header Row -->
      <div class="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-bh-border">
        <div class="flex items-center gap-2.5">
          ${avatarHTML}
          <div>
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-sm text-white">${escapeHTML(post.authorName || 'حرفي')}</h4>
              ${isOwner ? '<span class="text-[9px] font-bold text-bh-yellow bg-bh-yellow/10 px-1.5 py-0.2 rounded border border-bh-yellow/30">(أنت)</span>' : ''}
              ${statusBadgeHTML}
            </div>
            <div class="flex items-center gap-2 text-[11px] text-slate-400">
              <span class="text-bh-yellow font-semibold">${escapeHTML(post.trade)}</span>
              <span>•</span>
              <span class="font-mono text-[10px]">${new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <!-- Price Badge -->
          <div class="px-3 py-1 rounded-xl bg-gradient-to-r from-bh-yellow/20 to-bh-orange/20 border border-bh-yellow/40 text-bh-yellow font-mono font-bold text-xs">
            ${post.price ? `${escapeHTML(post.price)} ${unitLabel}` : unitLabel}
          </div>
          ${deleteBtnHTML}
        </div>
      </div>

      ${adminControlsHTML}

      <!-- Description Body -->
      <p class="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">${escapeHTML(post.text)}</p>

      ${postImageHTML}

      <!-- Direct Contact Buttons Row -->
      <div class="flex flex-wrap items-center gap-2 pt-2">
        <a href="tel:${rawPhone}" class="flex-1 py-2 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 text-xs font-bold transition flex items-center justify-center gap-1.5">
          <i class="fa-solid fa-phone"></i>
          <span>${dict.call_btn} (${escapeHTML(post.phone)})</span>
        </a>

        <a href="https://wa.me/${intlPhone}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2 px-3 rounded-xl bg-green-500/15 hover:bg-green-500/25 text-green-400 border border-green-500/40 text-xs font-bold transition flex items-center justify-center gap-1.5">
          <i class="fa-brands fa-whatsapp text-sm"></i>
          <span>${dict.whatsapp_btn}</span>
        </a>

        <button type="button" onclick="startChatFromPost('${post.authorId}', '${escapeHTML(post.authorName)}', '${post.authorAvatar || ''}')" class="flex-1 py-2 px-3 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-400 border border-sky-500/40 text-xs font-bold transition flex items-center justify-center gap-1.5">
          <i class="fa-solid fa-comments text-xs"></i>
          <span>${dict.chat_btn}</span>
        </button>
      </div>

      <!-- Social Interactions: Like & Comments Toggle -->
      <div class="pt-3 border-t border-bh-border flex items-center justify-between text-xs text-slate-400">
        <button type="button" onclick="togglePostLike('${post.id}')" class="flex items-center gap-1.5 hover:text-rose-400 transition cursor-pointer">
          <i class="${isLiked ? 'fa-solid fa-heart text-rose-500' : 'fa-regular fa-heart'} text-sm"></i>
          <span class="font-mono">${likeCount} ${dict.like_btn}</span>
        </button>

        <button type="button" onclick="toggleCommentsSection('${post.id}')" class="flex items-center gap-1.5 hover:text-bh-yellow transition cursor-pointer">
          <i class="fa-regular fa-comment-dots text-sm"></i>
          <span class="font-mono">${comments.length} ${dict.comments_title}</span>
        </button>
      </div>

      <!-- Expandable Comments Container -->
      <div id="commentsContainer_${post.id}" class="hidden space-y-3 pt-3 border-t border-bh-border/70">
        <div id="commentsList_${post.id}" class="space-y-2 max-h-48 overflow-y-auto pr-1"></div>

        <!-- Add Comment Form -->
        <form onsubmit="handleAddCommentSubmit(event, '${post.id}')" class="flex items-center gap-2">
          <input type="text" id="commentInput_${post.id}" required placeholder="${dict.comment_placeholder}" class="flex-1 bg-bh-bg border border-bh-border rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-bh-yellow">
          <button type="submit" class="px-3 py-1.5 bg-bh-yellow hover:opacity-95 text-slate-950 font-bold rounded-xl text-xs transition">
            ${dict.send_btn}
          </button>
        </form>
      </div>
    `;

    container.appendChild(card);
    renderPostComments(post.id, comments);
  });
}

function openCreateWorkerPostModal() {
  if (!currentUser) {
    showToast('تسجيل الدخول مطلوب لنشر العروض والطلبات', 'warning');
    return;
  }

  // Clear previous previews
  cachedPostImageBase64 = null;
  const previewContainer = document.getElementById('postImagePreviewContainer');
  const previewImg = document.getElementById('postImagePreview');
  const fileInput = document.getElementById('workerPostImageInput');

  if (previewContainer) previewContainer.classList.add('hidden');
  if (previewImg) previewImg.src = '';
  if (fileInput) fileInput.value = '';

  const modal = document.getElementById('modalCreateWorkerPost');
  if (modal) modal.classList.remove('hidden');
}

function closeCreateWorkerPostModal() {
  const modal = document.getElementById('modalCreateWorkerPost');
  if (modal) modal.classList.add('hidden');
}

function handlePostImageSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (file.size > 4 * 1024 * 1024) {
    showToast('حجم الصورة كبير جداً! اختر صورة أصغر من 4 ميغابايت.', 'warning');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    cachedPostImageBase64 = e.target.result;
    const previewContainer = document.getElementById('postImagePreviewContainer');
    const previewImg = document.getElementById('postImagePreview');
    if (previewContainer && previewImg) {
      previewImg.src = cachedPostImageBase64;
      previewContainer.classList.remove('hidden');
    }
  };
  reader.readAsDataURL(file);
}

function removeSelectedPostImage() {
  cachedPostImageBase64 = null;
  const previewContainer = document.getElementById('postImagePreviewContainer');
  const previewImg = document.getElementById('postImagePreview');
  const fileInput = document.getElementById('workerPostImageInput');

  if (previewContainer) previewContainer.classList.add('hidden');
  if (previewImg) previewImg.src = '';
  if (fileInput) fileInput.value = '';
}

function handleCreateWorkerPostSubmit(event) {
  if (event) event.preventDefault();
  if (!currentUser) {
    showToast('يرجى تسجيل الدخول أولاً', 'warning');
    return;
  }

  const trade = document.getElementById('workerPostTrade').value;
  const price = document.getElementById('workerPostPrice').value.trim();
  const unit = document.getElementById('workerPostUnit').value;
  const phone = document.getElementById('workerPostPhone').value.trim();
  const text = document.getElementById('workerPostText').value.trim();

  if (!trade || !phone || !text) {
    showToast('يرجى ملء جميع الحقول الإلزامية', 'warning');
    return;
  }

  const posts = getStorageJSON('batihub_worker_posts', []);

  // One Post Per Trade Restriction Rule (Admin exempt)
  if (currentUser.role !== 'admin') {
    const existing = posts.find(p => p.authorId === currentUser.email && p.trade === trade);
    if (existing) {
      showAppModalAlert('تنبيه قيود النشر', I18N[currentLanguage].one_post_limit_alert);
      return;
    }
  }

  const isAdmin = currentUser.role === 'admin';
  const newPost = {
    id: 'post_' + Date.now(),
    trade,
    price,
    unit,
    phone,
    text,
    image: cachedPostImageBase64,
    authorId: currentUser.email,
    authorName: currentUser.fullName || currentUser.firstName,
    authorAvatar: currentUser.avatar,
    status: isAdmin ? 'approved' : 'pending',
    likes: [],
    comments: [],
    createdAt: new Date().toISOString()
  };

  posts.unshift(newPost);
  setStorageJSON('batihub_worker_posts', posts);

  // Broadcast to all other devices in real-time
  broadcastLiveEvent('new_worker_post', newPost);

  closeCreateWorkerPostModal();
  updateAdminPendingBadge();
  renderWorkerPostsFeed();

  if (isAdmin) {
    showToast(I18N[currentLanguage].post_published_admin_success, 'success');
  } else {
    showToast('تم إرسال المنشور بنجاح وهو الآن قيد المعالجة والمراجعة من قبل الإدارة.', 'success', 5000);
  }
}

function togglePostLike(postId) {
  if (!currentUser) {
    showToast('تسجيل الدخول مطلوب للتفاعل بالإعجاب', 'warning');
    return;
  }

  const posts = getStorageJSON('batihub_worker_posts', []);
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  if (!post.likes) post.likes = [];
  const idx = post.likes.indexOf(currentUser.email);

  if (idx > -1) {
    post.likes.splice(idx, 1);
  } else {
    post.likes.push(currentUser.email);
  }

  setStorageJSON('batihub_worker_posts', posts);
  broadcastLiveEvent('toggle_like', { postId, likes: post.likes });
  renderWorkerPostsFeed();
}

function toggleCommentsSection(postId) {
  const container = document.getElementById(`commentsContainer_${postId}`);
  if (container) {
    container.classList.toggle('hidden');
  }
}

function renderPostComments(postId, comments) {
  const list = document.getElementById(`commentsList_${postId}`);
  if (!list) return;

  if (!comments || comments.length === 0) {
    list.innerHTML = `<p class="text-[11px] text-slate-500 py-1 text-center">لا توجد تعليقات بعد.</p>`;
    return;
  }

  list.innerHTML = '';
  comments.forEach(comment => {
    const isCommentOwner = currentUser && (currentUser.email === comment.authorId);
    const isAdmin = currentUser && (currentUser.role === 'admin');

    const item = document.createElement('div');
    item.className = 'p-2 rounded-xl bg-bh-bg border border-bh-border/60 flex items-start justify-between gap-2 text-xs';
    item.innerHTML = `
      <div class="flex-1">
        <div class="flex items-center gap-1.5">
          <span class="font-bold text-slate-200 text-[11px]">${escapeHTML(comment.authorName)}</span>
          <span class="text-[9px] text-slate-500 font-mono">${new Date(comment.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <p class="text-slate-300 mt-0.5 text-xs leading-normal">${escapeHTML(comment.text)}</p>
      </div>
      ${(isCommentOwner || isAdmin) ? `
        <button type="button" onclick="deleteComment('${postId}', '${comment.id}')" class="text-slate-500 hover:text-rose-400 text-[10px] p-1" title="حذف التعليق">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      ` : ''}
    `;
    list.appendChild(item);
  });
}

function handleAddCommentSubmit(event, postId) {
  if (event) event.preventDefault();
  if (!currentUser) {
    showToast('تسجيل الدخول مطلوب لإضافة تعليق', 'warning');
    return;
  }

  const input = document.getElementById(`commentInput_${postId}`);
  const text = (input.value || '').trim();
  if (!text) return;

  const posts = getStorageJSON('batihub_worker_posts', []);
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  if (!post.comments) post.comments = [];
  const newComment = {
    id: 'c_' + Date.now(),
    authorId: currentUser.email,
    authorName: currentUser.fullName || currentUser.firstName,
    text,
    createdAt: new Date().toISOString()
  };

  post.comments.push(newComment);
  setStorageJSON('batihub_worker_posts', posts);
  broadcastLiveEvent('add_comment', { postId, comment: newComment });

  input.value = '';
  renderWorkerPostsFeed();
  toggleCommentsSection(postId); // keep open
}

function deleteComment(postId, commentId) {
  const posts = getStorageJSON('batihub_worker_posts', []);
  const post = posts.find(p => p.id === postId);
  if (!post || !post.comments) return;

  post.comments = post.comments.filter(c => c.id !== commentId);
  setStorageJSON('batihub_worker_posts', posts);
  broadcastLiveEvent('delete_comment', { postId, commentId });

  renderWorkerPostsFeed();
  toggleCommentsSection(postId);
  showToast('تم حذف التعليق بنجاح', 'info');
}

function approveWorkerPost(postId) {
  if (!currentUser || currentUser.role !== 'admin') return;

  const posts = getStorageJSON('batihub_worker_posts', []);
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  post.status = 'approved';
  setStorageJSON('batihub_worker_posts', posts);

  broadcastLiveEvent('approve_worker_post', { postId });

  updateAdminPendingBadge();
  renderWorkerPostsFeed();
  showToast('تمت الموافقة على المنشور ونشره للجميع بنجاح!', 'success');
}

function rejectWorkerPost(postId) {
  if (!currentUser || currentUser.role !== 'admin') return;

  showAppModalAlert('تأكيد رفض المنشور', 'هل أنت متأكد من رفض هذا المنشور وحذفه نهائياً؟', true, () => {
    deleteWorkerPost(postId);
  });
}

function deleteWorkerPost(postId) {
  const posts = getStorageJSON('batihub_worker_posts', []);
  const updated = posts.filter(p => p.id !== postId);
  setStorageJSON('batihub_worker_posts', updated);

  broadcastLiveEvent('delete_worker_post', { postId });

  updateAdminPendingBadge();
  renderWorkerPostsFeed();
  showToast('تم حذف المنشور بنجاح', 'info');
}

/* ========================================================================= */
/* 14. STUDY OFFICES & ENGINEERING SECTION                                   */
/* ========================================================================= */

function filterStudyOffices(engType, btn) {
  activeOfficeFilter = engType;

  document.querySelectorAll('.office-filter-pill').forEach(b => {
    b.classList.remove('active-filter');
  });
  if (btn) btn.classList.add('active-filter');

  renderStudyOfficesFeed();
}

function renderStudyOfficesFeed() {
  const container = document.getElementById('studyOfficesFeedContainer');
  if (!container) return;

  const dict = I18N[currentLanguage] || I18N.ar;
  let offices = getStorageJSON('batihub_study_offices', []);

  if (activeOfficeFilter !== 'all') {
    offices = offices.filter(o => o.engType === activeOfficeFilter);
  }

  if (offices.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-bh-card border border-bh-border rounded-2xl p-8 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center text-3xl">
          <i class="fa-solid fa-compass-drafting"></i>
        </div>
        <h3 class="font-bold text-white text-base">${dict.empty_offices}</h3>
        <p class="text-xs text-slate-400 max-w-sm mx-auto">سجل مكتبك الهندسي أو المعماري للوصول لأكبر شبكة من أصحاب المشاريع في الجزائر.</p>
        <button type="button" onclick="openAddStudyOfficeModal()" class="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-slate-950 font-bold text-xs">
          ${dict.btn_new_office}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = '';

  offices.forEach(office => {
    const isOwner = currentUser && (currentUser.email === office.authorId);
    const isAdmin = currentUser && (currentUser.role === 'admin');

    const rawPhone = (office.phone || '').replace(/[^0-9]/g, '');
    let intlPhone = rawPhone;
    if (intlPhone.startsWith('0')) {
      intlPhone = '213' + intlPhone.slice(1);
    }

    const card = document.createElement('div');
    card.className = 'bg-bh-card border border-bh-border rounded-2xl p-5 shadow-xl space-y-4 hover:border-sky-500/40 transition flex flex-col justify-between';

    // Google Maps target link
    const mapsLink = office.gps && office.gps.trim().startsWith('http')
      ? office.gps.trim()
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((office.gps || office.address || office.name) + ' الجزائر')}`;

    let officeImageHTML = '';
    if (office.image) {
      officeImageHTML = `
        <div class="rounded-xl overflow-hidden border border-bh-border h-36 bg-bh-bg cursor-pointer" onclick="openImageLightbox('${escapeHTML(office.image)}')">
          <img src="${office.image}" alt="Office Visual" class="w-full h-full object-cover hover:scale-105 transition duration-300">
        </div>
      `;
    }

    card.innerHTML = `
      <div class="space-y-3">
        <!-- Top Details -->
        <div class="flex items-start justify-between gap-2 pb-3 border-b border-bh-border">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${office.engType === 'مهندس معماري' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'} font-mono">
                ${escapeHTML(office.engType)}
              </span>
              <span class="text-[10px] text-slate-400 font-mono">${new Date(office.createdAt).toLocaleDateString()}</span>
            </div>
            <h4 class="font-bold text-base text-white mt-1.5 leading-snug">${escapeHTML(office.name)}</h4>
            <p class="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
              <i class="fa-solid fa-location-dot text-rose-400 text-[11px]"></i>
              <span>${escapeHTML(office.address)}</span>
            </p>
          </div>

          ${(isOwner || isAdmin) ? `
            <button type="button" onclick="deleteStudyOffice('${office.id}')" class="w-7 h-7 rounded-lg bg-bh-bg hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-bh-border flex items-center justify-center transition shrink-0" title="حذف المكتب">
              <i class="fa-regular fa-trash-can text-xs"></i>
            </button>
          ` : ''}
        </div>

        ${officeImageHTML}

        <!-- Services -->
        <div class="text-xs text-slate-300 leading-relaxed bg-bh-bg/60 p-3 rounded-xl border border-bh-border/70">
          <span class="text-[10px] text-slate-500 font-bold block mb-1">الخدمات والدراسات المقدمة :</span>
          ${escapeHTML(office.services)}
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-2 pt-2">
        <!-- Google Maps Location Link -->
        <a href="${mapsLink}" target="_blank" rel="noopener noreferrer" class="w-full py-2 px-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-bold transition flex items-center justify-center gap-1.5">
          <i class="fa-solid fa-map-location-dot text-sm"></i>
          <span>${dict.open_maps_btn}</span>
        </a>

        <!-- Direct Contact -->
        <div class="flex items-center gap-2">
          <a href="tel:${rawPhone}" class="flex-1 py-2 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 text-xs font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-phone"></i>
            <span>${dict.call_btn}</span>
          </a>

          <a href="https://wa.me/${intlPhone}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2 px-3 rounded-xl bg-green-500/15 hover:bg-green-500/25 text-green-400 border border-green-500/40 text-xs font-bold transition flex items-center justify-center gap-1.5">
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>${dict.whatsapp_btn}</span>
          </a>

          <button type="button" onclick="startChatFromPost('${office.authorId}', '${escapeHTML(office.name)}', '')" class="py-2 px-3 rounded-xl bg-bh-bg hover:bg-bh-cardhover text-slate-300 border border-bh-border text-xs font-bold transition flex items-center justify-center gap-1.5" title="${dict.chat_btn}">
            <i class="fa-solid fa-comments text-amber-400 text-xs"></i>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function openAddStudyOfficeModal() {
  if (!currentUser) {
    showToast('تسجيل الدخول مطلوب لإضافة مكتب دراسات', 'warning');
    return;
  }

  cachedOfficeImageBase64 = null;
  const previewContainer = document.getElementById('officeImagePreviewContainer');
  const previewImg = document.getElementById('officeImagePreview');
  const fileInput = document.getElementById('officeImageInput');

  if (previewContainer) previewContainer.classList.add('hidden');
  if (previewImg) previewImg.src = '';
  if (fileInput) fileInput.value = '';

  const modal = document.getElementById('modalAddStudyOffice');
  if (modal) modal.classList.remove('hidden');
}

function closeAddStudyOfficeModal() {
  const modal = document.getElementById('modalAddStudyOffice');
  if (modal) modal.classList.add('hidden');
}

function openGoogleMapsToPickLocation() {
  if (navigator.geolocation) {
    showToast('جاري تحديد إحداثيات موقعك الجغرافي عبر GPS...', 'info', 2000);
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude.toFixed(6);
        const lng = pos.coords.longitude.toFixed(6);
        const mapUrl = `https://www.google.com/maps?q=${lat},${lng}`;
        document.getElementById('officeGpsLink').value = mapUrl;
        showToast('تم التقاط إحداثيات موقعك بدقة!', 'success');
      },
      err => {
        // Fallback: Open Google Maps in a new tab
        window.open('https://www.google.com/maps', '_blank');
        showToast('انسخ رابط موقعك من Google Maps والصقه هنا', 'info', 4000);
      },
      { timeout: 7000 }
    );
  } else {
    window.open('https://www.google.com/maps', '_blank');
  }
}

function handleOfficeImageSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (file.size > 4 * 1024 * 1024) {
    showToast('حجم الشعار أو الصورة كبير جداً!', 'warning');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    cachedOfficeImageBase64 = e.target.result;
    const previewContainer = document.getElementById('officeImagePreviewContainer');
    const previewImg = document.getElementById('officeImagePreview');
    if (previewContainer && previewImg) {
      previewImg.src = cachedOfficeImageBase64;
      previewContainer.classList.remove('hidden');
    }
  };
  reader.readAsDataURL(file);
}

function removeSelectedOfficeImage() {
  cachedOfficeImageBase64 = null;
  const previewContainer = document.getElementById('officeImagePreviewContainer');
  const previewImg = document.getElementById('officeImagePreview');
  const fileInput = document.getElementById('officeImageInput');

  if (previewContainer) previewContainer.classList.add('hidden');
  if (previewImg) previewImg.src = '';
  if (fileInput) fileInput.value = '';
}

function handleCreateStudyOfficeSubmit(event) {
  if (event) event.preventDefault();
  if (!currentUser) return;

  const name = document.getElementById('officeName').value.trim();
  const engType = document.getElementById('officeEngType').value;
  const phone = document.getElementById('officePhone').value.trim();
  const address = document.getElementById('officeAddress').value.trim();
  const gps = document.getElementById('officeGpsLink').value.trim();
  const services = document.getElementById('officeServices').value.trim();

  if (!name || !phone || !address || !services) {
    showToast('يرجى ملء جميع الحقول المطلوبة', 'warning');
    return;
  }

  const offices = getStorageJSON('batihub_study_offices', []);
  const newOffice = {
    id: 'office_' + Date.now(),
    name,
    engType,
    phone,
    address,
    gps,
    services,
    image: cachedOfficeImageBase64,
    authorId: currentUser.email,
    authorName: currentUser.fullName || currentUser.firstName,
    createdAt: new Date().toISOString()
  };

  offices.unshift(newOffice);
  setStorageJSON('batihub_study_offices', offices);

  broadcastLiveEvent('new_study_office', newOffice);

  closeAddStudyOfficeModal();
  renderStudyOfficesFeed();
  showToast(I18N[currentLanguage].office_published_success, 'success');
}

function deleteStudyOffice(officeId) {
  const offices = getStorageJSON('batihub_study_offices', []);
  const updated = offices.filter(o => o.id !== officeId);
  setStorageJSON('batihub_study_offices', updated);

  broadcastLiveEvent('delete_study_office', { officeId });

  renderStudyOfficesFeed();
  showToast('تم حذف بطاقة مكتب الدراسات', 'info');
}

/* ========================================================================= */
/* 15. 1-ON-1 PRIVATE CHAT & MESSAGING ENGINE                                */
/* ========================================================================= */

function startChatFromPost(partnerEmail, partnerName, partnerAvatar) {
  if (!currentUser) {
    showToast('يرجى تسجيل الدخول لبدء محادثة خاصة', 'warning');
    return;
  }
  if (partnerEmail === currentUser.email) {
    showToast('لا يمكنك بدء محادثة خاصة مع حسابك الشخصي!', 'info');
    return;
  }
  openPrivateChat(partnerEmail, partnerName, partnerAvatar);
}

function getConversationKey(email1, email2) {
  const sorted = [email1.toLowerCase(), email2.toLowerCase()].sort();
  return `thread_${sorted[0]}__${sorted[1]}`;
}

function openPrivateChat(partnerEmail, partnerName, partnerAvatar) {
  currentChatPartner = {
    email: partnerEmail.toLowerCase(),
    name: partnerName || partnerEmail,
    avatar: partnerAvatar || null
  };

  const modal = document.getElementById('modalPrivateChat');
  const partnerNameEl = document.getElementById('chatPartnerName');
  const partnerAvatarEl = document.getElementById('chatPartnerAvatar');
  const blockBtn = document.getElementById('btnBlockUserChat');
  const blockedNotice = document.getElementById('chatBlockedNotice');
  const form = document.getElementById('privateChatForm');

  if (partnerNameEl) partnerNameEl.textContent = currentChatPartner.name;
  if (partnerAvatarEl) partnerAvatarEl.src = resolveAvatarSrc(currentChatPartner.avatar, currentChatPartner.name, currentChatPartner.email);

  // Check if blocked
  const blockedList = getStorageJSON('batihub_blocked_users', []);
  const isBlocked = blockedList.includes(currentChatPartner.email);

  if (blockBtn) {
    blockBtn.innerHTML = isBlocked
      ? '<i class="fa-solid fa-unlock text-[11px] mr-1"></i> <span>إلغاء الحظر</span>'
      : '<i class="fa-solid fa-ban text-[11px] mr-1"></i> <span>حظر</span>';
  }

  if (blockedNotice && form) {
    if (isBlocked) {
      blockedNotice.classList.remove('hidden');
      form.classList.add('opacity-40', 'pointer-events-none');
    } else {
      blockedNotice.classList.add('hidden');
      form.classList.remove('opacity-40', 'pointer-events-none');
    }
  }

  renderPrivateChatMessages();
  if (modal) modal.classList.remove('hidden');
}

function closePrivateChatModal() {
  const modal = document.getElementById('modalPrivateChat');
  if (modal) modal.classList.add('hidden');
  currentChatPartner = null;
  updateUnreadMessagesCount();
}

function renderPrivateChatMessages() {
  const body = document.getElementById('privateChatMessagesBody');
  if (!body || !currentChatPartner || !currentUser) return;

  const threadKey = getConversationKey(currentUser.email, currentChatPartner.email);
  const chats = getStorageJSON('batihub_private_chats', {});
  const messages = chats[threadKey] || [];

  if (messages.length === 0) {
    body.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center p-6 space-y-2">
        <div class="w-12 h-12 rounded-2xl bg-bh-yellow/10 text-bh-yellow flex items-center justify-center text-xl">
          <i class="fa-solid fa-handshake"></i>
        </div>
        <p class="text-xs text-slate-300 font-semibold">محادثة مشفرة ومباشرة مع ${escapeHTML(currentChatPartner.name)}</p>
        <p class="text-[11px] text-slate-500">يمكنك إرسال رسائل نصية، تسجيلات صوتية، أو صور سابقة لأعمالك.</p>
      </div>
    `;
    return;
  }

  body.innerHTML = '';
  messages.forEach(msg => {
    const isMe = (msg.senderEmail === currentUser.email);
    const bubble = document.createElement('div');
    bubble.className = `flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1`;

    let contentHTML = '';
    if (msg.text) {
      contentHTML += `<p class="text-xs leading-relaxed break-words">${escapeHTML(msg.text)}</p>`;
    }
    if (msg.image) {
      contentHTML += `
        <div class="mt-1 rounded-xl overflow-hidden max-w-xs border border-bh-border/50 cursor-pointer" onclick="openImageLightbox('${escapeHTML(msg.image)}')">
          <img src="${msg.image}" alt="Chat Attachment" class="w-full h-auto object-cover max-h-48">
        </div>
      `;
    }
    if (msg.audio) {
      contentHTML += `
        <div class="mt-1">
          <audio controls src="${msg.audio}" class="h-8 max-w-[220px] rounded-lg"></audio>
        </div>
      `;
    }

    bubble.innerHTML = `
      <div class="max-w-[85%] px-3.5 py-2.5 ${isMe ? 'chat-bubble-out' : 'chat-bubble-in'} shadow-md">
        ${contentHTML}
      </div>
      <span class="text-[9px] text-slate-500 font-mono px-1">${new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    `;

    body.appendChild(bubble);
  });

  body.scrollTop = body.scrollHeight;
}

function handleSendPrivateMessage(event) {
  if (event) event.preventDefault();
  if (!currentUser || !currentChatPartner) return;

  const input = document.getElementById('chatMessageInput');
  const text = (input.value || '').trim();

  if (!text && !cachedChatImageBase64) return;

  const threadKey = getConversationKey(currentUser.email, currentChatPartner.email);
  const chats = getStorageJSON('batihub_private_chats', {});
  if (!chats[threadKey]) chats[threadKey] = [];

  const newMsg = {
    id: 'msg_' + Date.now(),
    senderEmail: currentUser.email,
    senderName: currentUser.fullName || currentUser.firstName,
    text: text,
    image: cachedChatImageBase64,
    audio: null,
    createdAt: new Date().toISOString()
  };

  chats[threadKey].push(newMsg);
  setStorageJSON('batihub_private_chats', chats);

  // Broadcast in real-time across all devices
  broadcastLiveEvent('chat_message', {
    threadKey: threadKey,
    recipientEmail: currentChatPartner.email,
    senderEmail: currentUser.email,
    message: newMsg
  });

  input.value = '';
  cachedChatImageBase64 = null;
  renderPrivateChatMessages();
}

function handleChatImageSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    cachedChatImageBase64 = e.target.result;
    handleSendPrivateMessage(null);
  };
  reader.readAsDataURL(file);
}

/* Voice Recording Engine */
async function toggleVoiceRecording() {
  const btn = document.getElementById('btnRecordVoiceNote');

  if (!isRecordingAudio) {
    // Start Recording
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderInstance = new MediaRecorder(stream);
      recordedAudioChunks = [];

      mediaRecorderInstance.ondataavailable = e => {
        if (e.data.size > 0) recordedAudioChunks.push(e.data);
      };

      mediaRecorderInstance.onstop = () => {
        const audioBlob = new Blob(recordedAudioChunks, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onload = () => {
          const base64Audio = reader.result;
          sendVoiceMessage(base64Audio);
        };
        reader.readAsDataURL(audioBlob);

        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderInstance.start();
      isRecordingAudio = true;

      if (btn) {
        btn.classList.add('bg-rose-500', 'text-white', 'animate-pulse');
        btn.classList.remove('bg-bh-bg', 'text-slate-400');
      }
      showToast('جاري تسجيل الرسالة الصوتية... انقر مرة أخرى للإرسال', 'info', 3000);
    } catch (err) {
      showToast('تعذر الوصول إلى الميكروفون! يرجى منح الإذن.', 'error');
    }
  } else {
    // Stop & Send
    if (mediaRecorderInstance && mediaRecorderInstance.state !== 'inactive') {
      mediaRecorderInstance.stop();
    }
    isRecordingAudio = false;

    if (btn) {
      btn.classList.remove('bg-rose-500', 'text-white', 'animate-pulse');
      btn.classList.add('bg-bh-bg', 'text-slate-400');
    }
  }
}

function sendVoiceMessage(audioBase64) {
  if (!currentUser || !currentChatPartner) return;

  const threadKey = getConversationKey(currentUser.email, currentChatPartner.email);
  const chats = getStorageJSON('batihub_private_chats', {});
  if (!chats[threadKey]) chats[threadKey] = [];

  const newMsg = {
    id: 'msg_' + Date.now(),
    senderEmail: currentUser.email,
    senderName: currentUser.fullName || currentUser.firstName,
    text: '',
    image: null,
    audio: audioBase64,
    createdAt: new Date().toISOString()
  };

  chats[threadKey].push(newMsg);
  setStorageJSON('batihub_private_chats', chats);

  // Broadcast in real-time across all devices
  broadcastLiveEvent('chat_message', {
    threadKey: threadKey,
    recipientEmail: currentChatPartner.email,
    senderEmail: currentUser.email,
    message: newMsg
  });

  renderPrivateChatMessages();
  showToast('تم إرسال الرسالة الصوتية بنجاح!', 'success', 2000);
}

function toggleBlockCurrentChatPartner() {
  if (!currentChatPartner) return;

  const blockedList = getStorageJSON('batihub_blocked_users', []);
  const email = currentChatPartner.email;
  const idx = blockedList.indexOf(email);

  if (idx > -1) {
    blockedList.splice(idx, 1);
    showToast(`تم إلغاء حظر ${currentChatPartner.name}`, 'info');
  } else {
    blockedList.push(email);
    showToast(`تم حظر ${currentChatPartner.name} بنجاح`, 'warning');
  }

  setStorageJSON('batihub_blocked_users', blockedList);
  openPrivateChat(currentChatPartner.email, currentChatPartner.name, currentChatPartner.avatar);
}

/* ========================================================================= */
/* 16. MESSAGES HUB MODAL                                                    */
/* ========================================================================= */

function openMessagesHubModal() {
  if (!currentUser) {
    showToast('يرجى تسجيل الدخول لعرض الرسائل الخاصة', 'warning');
    return;
  }

  switchMessagesHubTab('chats');
  const modal = document.getElementById('modalMessagesHub');
  if (modal) modal.classList.remove('hidden');
}

function closeMessagesHubModal() {
  const modal = document.getElementById('modalMessagesHub');
  if (modal) modal.classList.add('hidden');
}

function switchMessagesHubTab(tabName) {
  const chatsView = document.getElementById('messagesHubChatsView');
  const blockedView = document.getElementById('messagesHubBlockedView');
  const btnChats = document.getElementById('btnHubChats');
  const btnBlocked = document.getElementById('btnHubBlocked');

  if (tabName === 'chats') {
    chatsView.classList.remove('hidden');
    blockedView.classList.add('hidden');

    btnChats.className = 'flex-1 py-1.5 rounded-xl bg-bh-yellow text-slate-950 text-xs font-bold transition';
    btnBlocked.className = 'flex-1 py-1.5 rounded-xl bg-bh-bg text-slate-400 border border-bh-border text-xs font-bold transition';

    renderMessagesHubChats();
  } else {
    chatsView.classList.add('hidden');
    blockedView.classList.remove('hidden');

    btnBlocked.className = 'flex-1 py-1.5 rounded-xl bg-bh-yellow text-slate-950 text-xs font-bold transition';
    btnChats.className = 'flex-1 py-1.5 rounded-xl bg-bh-bg text-slate-400 border border-bh-border text-xs font-bold transition';

    renderMessagesHubBlockedList();
  }
}

function renderMessagesHubChats() {
  const container = document.getElementById('messagesHubChatsView');
  if (!container || !currentUser) return;

  const chats = getStorageJSON('batihub_private_chats', {});
  const accounts = initAccountsDatabase();
  const threadKeys = Object.keys(chats).filter(k => k.includes(currentUser.email));

  if (threadKeys.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 space-y-2">
        <i class="fa-regular fa-comments text-3xl text-slate-500"></i>
        <p class="text-xs text-slate-400">لا توجد محادثات نشطة حالياً.</p>
        <p class="text-[11px] text-slate-500">انقر على زر "محادثة خاصة" في أي منشور لبدء تواصل فوري.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  threadKeys.forEach(key => {
    const messages = chats[key];
    if (messages.length === 0) return;

    const parts = key.replace('thread_', '').split('__');
    const partnerEmail = parts[0] === currentUser.email ? parts[1] : parts[0];
    const partnerAccount = accounts[partnerEmail] || { fullName: partnerEmail, email: partnerEmail, avatar: null };

    const lastMsg = messages[messages.length - 1];
    let previewText = lastMsg.text;
    if (lastMsg.audio) previewText = '🎤 رسالة صوتية';
    if (lastMsg.image) previewText = '📷 صورة مرفقة';

    const item = document.createElement('div');
    item.className = 'p-3 rounded-2xl bg-bh-card border border-bh-border hover:border-bh-yellow/40 transition flex items-center justify-between gap-3 cursor-pointer';

    const avatarHTML = renderAvatarImgTag(partnerAccount.avatar, partnerAccount.fullName, partnerAccount.email, 'w-10 h-10 rounded-full object-cover border border-bh-border');

    item.innerHTML = `
      <div class="flex items-center gap-3 truncate">
        ${avatarHTML}
        <div class="truncate">
          <h4 class="font-bold text-xs text-white truncate">${escapeHTML(partnerAccount.fullName || partnerAccount.email)}</h4>
          <p class="text-[11px] text-slate-400 truncate mt-0.5">${escapeHTML(previewText || '')}</p>
        </div>
      </div>
      <span class="text-[9px] text-slate-500 font-mono shrink-0">${new Date(lastMsg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    `;

    item.onclick = () => {
      closeMessagesHubModal();
      openPrivateChat(partnerEmail, partnerAccount.fullName, partnerAccount.avatar);
    };

    container.appendChild(item);
  });
}

function renderMessagesHubBlockedList() {
  const container = document.getElementById('messagesHubBlockedView');
  if (!container) return;

  const blockedList = getStorageJSON('batihub_blocked_users', []);
  const accounts = initAccountsDatabase();

  if (blockedList.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 space-y-2">
        <i class="fa-solid fa-shield-halved text-3xl text-slate-500"></i>
        <p class="text-xs text-slate-400">قائمة المحظورين فارغة.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  blockedList.forEach(email => {
    const acc = accounts[email] || { fullName: email, email: email, avatar: null };
    const item = document.createElement('div');
    item.className = 'p-3 rounded-2xl bg-bh-card border border-bh-border flex items-center justify-between gap-2';

    const avatarHTML = renderAvatarImgTag(acc.avatar, acc.fullName, acc.email, 'w-8 h-8 rounded-full object-cover border border-bh-border');

    item.innerHTML = `
      <div class="flex items-center gap-2.5 truncate">
        ${avatarHTML}
        <div class="truncate">
          <span class="font-bold text-xs text-white block truncate">${escapeHTML(acc.fullName || acc.email)}</span>
          <span class="text-[10px] text-slate-500 font-mono truncate">${escapeHTML(email)}</span>
        </div>
      </div>
      <button type="button" onclick="unblockUserFromHub('${email}')" class="px-3 py-1 rounded-xl bg-bh-bg hover:bg-slate-700 text-xs text-slate-200 border border-bh-border">
        إلغاء الحظر
      </button>
    `;

    container.appendChild(item);
  });
}

function unblockUserFromHub(email) {
  const blockedList = getStorageJSON('batihub_blocked_users', []);
  const updated = blockedList.filter(e => e !== email);
  setStorageJSON('batihub_blocked_users', updated);
  showToast(`تم إلغاء حظر الحساب بنجاح`, 'info');
  renderMessagesHubBlockedList();
}

function updateUnreadMessagesCount() {
  const badgeDesktop = document.getElementById('unreadMessagesBadge');
  const badgeMobile = document.getElementById('mUnreadBadge');

  if (!currentUser) {
    if (badgeDesktop) badgeDesktop.classList.add('hidden');
    if (badgeMobile) badgeMobile.classList.add('hidden');
    return;
  }

  const chats = getStorageJSON('batihub_private_chats', {});
  const threadKeys = Object.keys(chats).filter(k => k.includes(currentUser.email));
  let unread = 0;

  threadKeys.forEach(k => {
    const msgs = chats[k] || [];
    if (msgs.length > 0 && msgs[msgs.length - 1].senderEmail !== currentUser.email) {
      unread++;
    }
  });

  if (unread > 0) {
    if (badgeDesktop) {
      badgeDesktop.textContent = String(unread);
      badgeDesktop.classList.remove('hidden');
    }
    if (badgeMobile) {
      badgeMobile.classList.remove('hidden');
    }
  } else {
    if (badgeDesktop) badgeDesktop.classList.add('hidden');
    if (badgeMobile) badgeMobile.classList.add('hidden');
  }
}

/* ========================================================================= */
/* 17. IMAGE LIGHTBOX & UNIVERSAL MODAL DISMISS                              */
/* ========================================================================= */

function openImageLightbox(imgUrl) {
  const modal = document.getElementById('modalImageLightbox');
  const img = document.getElementById('lightboxImg');
  if (modal && img && imgUrl) {
    img.src = imgUrl;
    modal.classList.remove('hidden');
  }
}

function closeImageLightbox() {
  const modal = document.getElementById('modalImageLightbox');
  if (modal) modal.classList.add('hidden');
}

// Global dismiss on Escape key & backdrop click
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCreateWorkerPostModal();
    closeAddStudyOfficeModal();
    closeUserProfileModal();
    closeChangePasswordModal();
    closePrivateChatModal();
    closeMessagesHubModal();
    closeImageLightbox();
  }
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.add('hidden');
    if (e.target.id === 'modalPrivateChat') currentChatPartner = null;
  }
});

/* ========================================================================= */
/* 18. LIVE CLOCK                                                            */
/* ========================================================================= */

function startLiveClock() {
  const clockEl = document.getElementById('liveClockTime');
  function tick() {
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
  }
  tick();
  setInterval(tick, 1000);
}

/* ========================================================================= */
/* 19. APPLICATION INITIALIZATION LIFECYCLE                                  */
/* ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize databases & seed accounts
  initAccountsDatabase();
  initDefaultFeedsIfEmpty();

  // 2. Restore language preference
  const savedLang = localStorage.getItem('batihub_lang') || 'ar';
  currentLanguage = savedLang;

  // 3. Start live clock & realtime multi-device sync
  startLiveClock();
  initLiveSyncEngine();

  // 4. Initialize quick tools defaults
  runQuickCalcSurface();
  runQuickCalcConcrete();
  runQuickCalcSteel();
  renderCalcHistory();

  // 5. Check existing login session
  const storedUser = getStorageJSON('batihub_current_user', null) ||
    JSON.parse(sessionStorage.getItem('batihub_current_user') || 'null');

  // 6. Splash Screen Progress Animation
  const splashScreen = document.getElementById('splashScreen');
  const progressBar = document.getElementById('splashProgressBar');
  const percentText = document.getElementById('splashPercentText');
  const statusText = document.getElementById('splashStatusText');

  let progress = 0;
  const splashInterval = setInterval(() => {
    progress += 25;
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (percentText) percentText.textContent = `${progress}%`;

    if (progress === 50 && statusText) {
      statusText.textContent = 'جاري مزامنة قواعد البيانات وعروض العمل...';
    } else if (progress === 75 && statusText) {
      statusText.textContent = 'تحميل الآلة الحاسبة وخدمات البناء...';
    } else if (progress >= 100) {
      clearInterval(splashInterval);
      if (statusText) statusText.textContent = 'جاهز للاستخدام!';

      setTimeout(() => {
        if (splashScreen) {
          splashScreen.classList.add('splash-hide');
          setTimeout(() => {
            splashScreen.style.display = 'none';
          }, 500);
        }

        if (storedUser && storedUser.email) {
          currentUser = storedUser;
          transitionToDashboard();
        } else {
          switchAuthView('login');
        }
      }, 350);
    }
  }, 120);
});
