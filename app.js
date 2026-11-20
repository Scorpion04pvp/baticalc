/**
 * =========================================================================
 * BatiHub DZ - Build • Connect • Create
 * Plateforme Intégrée du Bâtiment & de la Construction en Algérie
 * Developed by Mouhaned Guellif
 * =========================================================================
 */

// =========================================================================
// 1. TRILINGUAL DICTIONARY (FRANÇAIS, ARABIC, ENGLISH) - 100% PURE & COMPLETE
// =========================================================================
const TRANSLATIONS = {
  fr: {
    nav_scientific_calc: "Calculatrice Scientifique",
    nav_worker_board: "Offres d'Emploi",
    m_nav_workers: "Offres",
    worker_board_title: "Offres d'Emploi & Artisans du Bâtiment",
    worker_board_sub: "Consultez et publiez des offres et demandes d'artisans en Algérie avec contact direct",
    btn_new_worker_post: "Publier une Offre d'Emploi",
    filter_all: "Tous",
    filter_mason: "Maçonnerie",
    filter_electric: "Électricité",
    filter_plumbing: "Plomberie",
    filter_painting: "Peinture",
    filter_tiling: "Carrelage",
    filter_carpentry: "Menuiserie & Alu",
    filter_steel: "Ferraillage",
    filter_hvac: "Climatisation",
    nav_study_offices: "Bureaux d'Études",
    m_nav_offices: "Bureaux",
    nav_messages: "Messages Privés",
    m_nav_messages: "Messages",
    offices_title: "Bureaux d'Études & Ingénierie en Algérie",
    offices_sub: "Architectes et ingénieurs agréés, permis de construire, études de sol et suivi de chantiers",
    btn_new_office: "Ajouter un Bureau d'Études",
    filter_offices_all: "Tous",
    filter_offices_arch: "Architecte",
    filter_offices_civil: "Génie Civil",
    filter_offices_bet: "BET Pluridisciplinaire",
    filter_offices_topo: "Topographie",
    messages_hub_title: "Messagerie & Conversations Privées",
    status_online: "Connecté à Internet",
    status_offline: "Hors ligne",
    btn_user_settings: "Paramètres & Profil",
    calc_title: "Calculatrice Scientifique & Génie Civil",
    calc_sub: "Outil professionnel haute précision pour ingénieurs, architectes & métreurs",
    calc_live_ready: "Calcul en temps réel actif",
    qc_surface_title: "1. Calcul Surface & Périmètre",
    qc_length: "Longueur (L en m) :",
    qc_width: "Largeur (W en m) :",
    qc_area_res: "Surface totale :",
    qc_perim_res: "Périmètre :",
    qc_btn_inject_calc: "Transférer la surface à la calculatrice",
    qc_concrete_title: "2. Volume de Béton & Ciment",
    qc_dosage: "Dosage Ciment :",
    qc_vol_res: "Volume béton :",
    qc_cement_bags: "Sacs de ciment :",
    qc_sand_vol: "Sable :",
    qc_gravel_vol: "Gravier :",
    qc_btn_inject_vol: "Transférer le volume à la calculatrice",
    qc_steel_title: "3. Poids d'Acier FeE500",
    qc_steel_dia: "Diamètre (mm) :",
    qc_steel_len: "Longueur totale (m) :",
    qc_steel_weight: "Poids total :",
    qc_steel_quintals: "En Quintaux :",
    qc_btn_inject_steel: "Transférer le poids à la calculatrice",
    qc_history_title: "Journal des Calculs",
    qc_btn_clear_history: "Effacer l'historique",
    qc_history_empty: "Aucun calcul récent",
    profile_title: "Profil Utilisateur",
    profile_verified: "Compte Vérifié & Protégé via Gmail",
    profile_lbl_language: "Langue de l'interface :",
    profile_lbl_security: "Sécurité & Protection :",
    profile_change_pwd: "Modifier le mot de passe",
    profile_sync_active: "Synchronisation Internet en direct active",
    profile_signout: "Se Déconnecter",
    pwd_modal_title: "Changement de mot de passe",
    pwd_current_lbl: "Mot de passe actuel :",
    pwd_new_lbl: "Nouveau mot de passe :",
    pwd_confirm_lbl: "Confirmer le nouveau mot de passe :",
    pwd_forgot_link: "Mot de passe actuel oublié ? Envoyer un code à Gmail",
    pwd_btn_save: "Enregistrer le mot de passe",
    pwd_btn_send_otp: "Envoyer le code de vérification à Gmail",
    pwd_btn_back_standard: "← Retour à la saisie du mot de passe actuel",
    auth_lbl_saved_accounts: "Comptes enregistrés sur cet appareil (cliquer pour préremplir) :",
    auth_remember_me: "Mémoriser mes identifiants sur cet appareil",

    app_slogan: "كل خدمات البناء في مكان واحد",
    dev_by: "Conçu & développé par:",
    auth_title: "Connexion à BatiHub DZ",
    auth_subtitle: "Accédez à votre espace professionnel et vos calculs de projets",
    auth_tab_login: "Connexion",
    auth_tab_register: "Créer un compte",
    auth_lbl_gmail: "Adresse Gmail :",
    auth_lbl_password: "Mot de passe :",
    auth_link_forgot: "Mot de passe oublié ?",
    auth_btn_signin: "Se Connecter",
    auth_prompt_no_account: "Vous n'avez pas de compte ?",
    auth_link_create_one: "Créer un compte maintenant",
    auth_lbl_first_name: "Prénom :",
    auth_lbl_last_name: "Nom :",
    auth_lbl_dob: "Date de Naissance :",
    auth_lbl_confirm_password: "Confirmer mot de passe :",
    auth_note_otp: "Un code de confirmation à 6 chiffres sera envoyé à votre Gmail pour activer et sécuriser votre compte.",
    auth_btn_signup: "Valider & Créer le compte (Envoyer le code)",
    auth_prompt_has_account: "Vous avez déjà un compte ?",
    auth_link_signin_now: "Se connecter maintenant",
    auth_title_otp: "Vérification de votre adresse Gmail",
    auth_sub_otp: "Entrez le code à 6 chiffres envoyé à :",
    auth_otp_preview_title: "Code de vérification généré :",
    auth_otp_preview_desc: "Cliquez sur le code pour le copier et le coller directement. (Si vous avez configuré le mot de passe d'application dans les paramètres Gmail, le code arrive dans votre boîte de réception).",
    auth_lbl_enter_otp: "Saisissez le code à 6 chiffres :",
    auth_btn_verify_otp: "Confirmer & Accéder à BatiHub DZ",
    auth_btn_resend_otp: "Renvoyer le code",
    auth_link_change_info: "Modifier les informations",
    auth_title_forgot: "Réinitialisation du mot de passe",
    auth_sub_forgot: "Entrez votre Gmail enregistré pour recevoir le code de réinitialisation",
    auth_btn_send_reset_code: "Envoyer le code de réinitialisation",
    auth_lbl_reset_code: "Code de vérification (6 chiffres) :",
    auth_lbl_new_password: "Nouveau mot de passe :",
    auth_lbl_confirm_new_password: "Confirmer le nouveau mot de passe :",
    auth_btn_save_new_password: "Enregistrer le mot de passe & Connexion",
    auth_btn_back_to_login: "Retour à la page de connexion",
    auth_btn_smtp_settings: "Paramètres de liaison Gmail (Envoi réel)",
    smtp_modal_title: "Liaison du compte Gmail pour l'envoi réel d'emails",
    smtp_modal_desc: "Pour envoyer automatiquement de vrais codes de vérification depuis votre adresse Gmail, saisissez votre adresse et le mot de passe d'application (App Password 16 caractères) de Google.",
    smtp_lbl_email: "Adresse Gmail expéditrice :",
    smtp_lbl_app_pwd: "Mot de passe d'application (16 caractères) :",
    smtp_hint_app_pwd: "Généré via: Compte Google > Sécurité > Validation en 2 étapes > Mots de passe d'application.",
    smtp_btn_test: "Tester la connexion",
    smtp_btn_save: "Enregistrer les paramètres",
    preset_btn: "Modèles Types",
    preset_heading: "Modèles de Maisons en Algérie",
    preset_1_title: "1. Villa Plain-pied (120 m² - RDC)",
    preset_1_sub: "Terrain 160m², Bâti 120m², 1 Niveau",
    preset_2_title: "2. Maison Familiale R+1 (240 m²)",
    preset_2_sub: "Terrain 180m², Bâti 120m², 2 Niveaux",
    preset_3_title: "3. Villa Moderne avec Décor R+2 (360 m²)",
    preset_3_sub: "Terrain 250m², Bâti 120m², Finitions Haut Standing",
    preset_4_title: "4. Petit Immeuble Résidentiel R+3 (600 m²)",
    preset_4_sub: "Terrain 200m², Bâti 150m², 4 Niveaux",
    export_pdf_btn: "Imprimer Devis (PDF)",
    nav_calculator: "Calculateur de Coûts & Matériaux",
    nav_boq: "Bordereau Détaillé (BOQ)",
    nav_report: "Devis Officiel A4",
    hero_total_cost: "Coût Total Estimé",
    cost_per_m2: "Coût au m² bâti:",
    hero_built_area: "Surface Bâtie Totale",
    hero_footprint: "Emprise au Sol:",
    hero_yard_area: "Cour & Espaces Libres",
    hero_ces_ratio: "Coefficient d'Emprise (CES):",
    hero_key_materials: "Matériaux Principaux",
    mat_cement_short: "Ciment:",
    mat_steel_short: "Acier:",
    mat_bricks_short: "Briques:",
    mat_aggregates_short: "Granulats:",
    sec1_title: "1. Dimensions du Terrain & Bâti",
    sec1_subtitle: "Surfaces de la parcelle, de l'emprise et nombre d'étages",
    lbl_land_area: "Surface Totale du Terrain",
    hint_land_area: "Surface totale de la parcelle cadastrale en m²",
    lbl_footprint_area: "Emprise au Sol du Bâtiment",
    hint_footprint_area: "Surface couverte au rez-de-chaussée en m²",
    lbl_yard_area: "Cour & Espaces Libres:",
    hint_yard_area: "Jardin, cour intérieure et allée",
    lbl_floors_count: "Nombre d'Étages Total",
    opt_basement: "Sous-sol Inclus",
    opt_basement_sub: "Sous-sol (+1 niveau bas)",
    opt_overhang: "Encorbellement",
    opt_overhang_sub: "+10% étages hauts",
    sec2_title: "2. Qualité des Finitions & Décoration",
    sec2_subtitle: "Maison standard, haut standing décorée ou gros œuvre seul",
    tier_standard_title: "Maison Résidentielle Standard",
    tier_standard_desc: "Finitions classiques durables: Carrelage monocuisson, plâtre traditionnel, menuiserie aluminium standard, sanitaires classiques.",
    tier_standard_badge: "Économique & Optimisé",
    tier_decorated_title: "Villa Moderne avec Décor & Moulures",
    tier_decorated_desc: "Faux plafonds BA13 avec gorge lumineuse LED, grès cérame 60x60, peinture décorative (stucco/carénia), aluminium à rupture de pont thermique.",
    tier_decorated_badge: "Haut Standing Moderne",
    tier_shell_title: "Gros Œuvre / Carcasse Seule",
    tier_shell_desc: "Fondations, poteaux-poutres béton armé, dalles hourdis, double cloison brique et étanchéité terrasse (sans finitions intérieures).",
    tier_shell_badge: "Structure Seule",
    lbl_foundation_type: "Type de Fondations:",
    opt_isolated: "Semelles Isolées & Filantes",
    opt_raft: "Radier Général (+20% béton)",
    lbl_contingency: "Marge Aléas / Imprévus:",
    sec3_title: "3. Prix Unitaires des Matériaux",
    sec3_subtitle: "Ajustez les prix en DZD selon votre marché local",
    btn_reset_prices: "Réinitialiser",
    price_cement_name: "Sac de Ciment 50kg (كيس إسمنت)",
    price_steel_name: "Acier / Quintal (قنطار حديد)",
    price_sand_name: "Sable au m³ (متر مكعب رمل)",
    price_gravel_name: "Gravier au m³ (متر مكعب حصى)",
    price_brick12_name: "Brique 12 Trous (حبة آجر 12)",
    price_brick8_name: "Brique 8 Trous (حبة آجر 8)",
    price_stones_name: "Moellons au m³ (حجارة الأساسات)",
    price_labor_name: "Main d'œuvre Gros Œuvre / m² (أجرة البناء)",
    mat_detail_title: "Quantités Exactes de Matériaux Nécessaires",
    mat_detail_subtitle: "Calcul automatique selon les ratios techniques du DTR Algérien",
    card_cement_title: "Ciment Portland (الإسمنت)",
    calc_cement_bags: "Nombre de Sacs (50kg):",
    calc_unit_price: "Prix Unitaire:",
    calc_total_cost: "Coût Total Estimé:",
    card_steel_title: "Acier pour Béton (حديد التسليح)",
    calc_steel_quintals: "Quantité en Quintaux (100kg):",
    card_bricks_title: "Briques en Terre Cuite (الآجر)",
    calc_brick12: "Brique 12 Trous (Extérieur):",
    calc_brick8: "Brique 8 Trous (Intérieur):",
    card_sand_title: "Sable de Rivière Lavé (الرمل)",
    calc_sand_trucks: "Camions Estimés (~16m³):",
    card_gravel_title: "Gravier Concassé (الحصى)",
    calc_gravel_trucks: "Camions Estimés (~16m³):",
    card_hourdis_title: "Hourdis & Moellons (الهوردي والدبش)",
    calc_foundation_rocks: "Pierres Fondations:",
    calc_waterproofing: "Étanchéité Toiture:",
    sec5_title: "Décomposition par Phase d'Exécution",
    sec5_subtitle: "Coûts détaillés par corps d'état du génie civil et architecture",
    btn_expand_details: "Développer / Réduire Tout",
    sec6_title: "Répartition Budgétaire",
    sec6_subtitle: "Structure financière et part de la main d'œuvre",
    chart_btn_phase: "Par Phase",
    chart_btn_mat: "Par Catégorie",
    chart_lbl_struct: "Gros Œuvre & Structure:",
    chart_lbl_finishes: "Second Œuvre & Finitions:",
    chart_lbl_labor: "Part Main d'œuvre:",
    disclaimer_market: "Estimations conformes aux règles techniques DTR B.C. 2.2 et standards nationaux de construction.",
    boq_title: "Bordereau Quantitatif & Estimatif (BOQ)",
    boq_subtitle: "Métré prévisionnel détaillé selon les ratios et normes de construction en Algérie",
    filter_all: "Tous les Postes",
    filter_structure: "Gros Œuvre",
    filter_masonry: "Maçonnerie",
    filter_finishes: "Finitions & Décor",
    filter_mep: "Plomberie & Électricité",
    filter_labor: "Main d'œuvre",
    th_category: "Catégorie",
    th_description: "Description du Poste & Matériaux",
    th_quantity: "Quantité",
    th_unit: "Unité",
    th_unit_price: "Prix Unitaire",
    th_total: "Montant Total",
    boq_grand_total_lbl: "MONTANT TOTAL ESTIMÉ DU PROJET:",
    boq_note: "* Calculs conformes aux règles techniques de construction algériennes DTR B.C. 2.2.",
    copy_boq: "Copier le Devis",
    report_page_title: "Devis Estimatif Préliminaire Officiel A4",
    report_page_sub: "Document formaté prêt pour l'impression A4, la signature ou l'exportation PDF.",
    print_sheet_btn: "Imprimer / Exporter en PDF",
    doc_type_lbl: "Document:",
    doc_type_val: "Devis Quantitatif & Estimatif Préliminaire",
    rep_tech_title: "Données Techniques du Projet",
    rep_finish_title: "Paramètres & Finitions",
    rep_duration_lbl: "Durée Estimée Travaux:",
    rep_phases_title: "Récapitulatif Financier par Phase",
    rep_materials_title: "Bordereau Prévisionnel des Matériaux",
    client_sign_lbl: "Vérification & Validation Client:",
    client_role_lbl: "Maître d'Ouvrage / Client",
    client_mention_lbl: "Mention manuscrite « Lu et Approuvé »",
    footer_rights: "BatiHub DZ © 2026 • Plateforme Intégrée du Bâtiment & de la Construction en Algérie."
  },
  ar: {
    nav_scientific_calc: "آلة حاسبة علمية",
    nav_worker_board: "عروض العمل",
    m_nav_workers: "عروض العمل",
    worker_board_title: "عروض العمل والحرفيين",
    worker_board_sub: "انشر واستكشف عروض العمل وطلبات الحرفيين في الجزائر مع تواصل مباشر وتحديث فوري",
    btn_new_worker_post: "نشر عرض أو طلب عمل",
    filter_all: "الكل",
    filter_mason: "بناء",
    filter_electric: "كهرباء",
    filter_plumbing: "ترصيص وصحي",
    filter_painting: "دهان وديكور",
    filter_tiling: "بلاط وسيراميك",
    filter_carpentry: "نجارة وألمنيوم",
    filter_steel: "حدادة وتسليح",
    filter_hvac: "تكييف وتبريد",
    nav_study_offices: "مكاتب دراسات",
    m_nav_offices: "مكاتب دراسات",
    nav_messages: "المحادثات الخاصة",
    m_nav_messages: "محادثات",
    offices_title: "دليل مكاتب الدراسات والهندسة في الجزائر",
    offices_sub: "مهندسون معماريون ومدنيون معتمدون، رخص البناء، دراسات التربة ومتابعة الورشات مع تحديد الموقع المباشر",
    btn_new_office: "إضافة مكتب دراسات جديد",
    filter_offices_all: "الكل",
    filter_offices_arch: "مهندس معماري",
    filter_offices_civil: "مهندس مدني",
    filter_offices_bet: "مكتب دراسات متكامل",
    filter_offices_topo: "توبوغرافيا ومسح أراضي",
    messages_hub_title: "الرسائل والمحادثات الخاصة",
    status_online: "متصل بالإنترنت",
    status_offline: "غير متصل بالإنترنت",
    btn_user_settings: "الإعدادات والملف الشخصي",
    calc_title: "الآلة الحاسبة العلمية والهندسية",
    calc_sub: "أداة احترافية بدقة عالية للمهندسين المعماريين، الهندسة المدنية وخبراء البناء",
    calc_live_ready: "تحديث لحظي ومستمر",
    qc_surface_title: "1. حساب المساحة والمحيط",
    qc_length: "الطول (بالمتر) :",
    qc_width: "العرض (بالمتر) :",
    qc_area_res: "المساحة الإجمالية:",
    qc_perim_res: "المحيط:",
    qc_btn_inject_calc: "نقل المساحة إلى الآلة الحاسبة",
    qc_concrete_title: "2. حجم الخرسانة وأكياس الإسمنت",
    qc_dosage: "عيار الإسمنت :",
    qc_vol_res: "حجم الخرسانة:",
    qc_cement_bags: "أكياس الإسمنت:",
    qc_sand_vol: "الرمل :",
    qc_gravel_vol: "الحصى :",
    qc_btn_inject_vol: "نقل الحجم إلى الآلة الحاسبة",
    qc_steel_title: "3. وزن حديد التسليح",
    qc_steel_dia: "قطر السيخ :",
    qc_steel_len: "الطول الإجمالي (بالمتر) :",
    qc_steel_weight: "الوزن الإجمالي:",
    qc_steel_quintals: "بالقنطار :",
    qc_btn_inject_steel: "نقل الوزن إلى الآلة الحاسبة",
    qc_history_title: "سجل العمليات الحسابية",
    qc_btn_clear_history: "مسح السجل",
    qc_history_empty: "لا توجد عمليات سابقة بعد",
    profile_title: "الملف الشخصي للمستخدم",
    profile_verified: "حساب مؤكد ومحمي عبر Gmail",
    profile_lbl_language: "لغة واجهة التطبيق :",
    profile_lbl_security: "الأمان والحماية :",
    profile_change_pwd: "تغيير كلمة المرور الخاصة بحسابك",
    profile_sync_active: "التزامن الحي مع الإنترنت نشط",
    profile_signout: "تسجيل الخروج من الحساب",
    pwd_modal_title: "تغيير كلمة المرور",
    pwd_current_lbl: "كلمة المرور الحالية :",
    pwd_new_lbl: "كلمة المرور الجديدة :",
    pwd_confirm_lbl: "تأكيد كلمة المرور الجديدة :",
    pwd_forgot_link: "نسيت كلمة المرور الحالية؟ إرسال رمز تحقق إلى بريدك Gmail",
    pwd_btn_save: "حفظ وتأكيد كلمة المرور",
    pwd_btn_send_otp: "إرسال رمز التحقق إلى Gmail",
    pwd_btn_back_standard: "← الرجوع إلى الإدخال المباشر بكلمة المرور الحالية",
    auth_lbl_saved_accounts: "الحسابات المحفوظة على هذا الجهاز (انقر للملء التلقائي) :",
    auth_remember_me: "تذكر بيانات تسجيل الدخول على هذا الجهاز",

    app_slogan: "كل خدمات البناء في مكان واحد",
    dev_by: "إعداد وتطوير المهندس:",
    auth_title: "تسجيل الدخول إلى BatiHub DZ",
    auth_subtitle: "الوصول إلى مساحتك المهنية وحسابات مشاريع البناء الخاصة بك",
    auth_tab_login: "تسجيل الدخول",
    auth_tab_register: "إنشاء حساب جديد",
    auth_lbl_gmail: "عنوان بريد Gmail :",
    auth_lbl_password: "كلمة المرور :",
    auth_link_forgot: "نسيت كلمة المرور؟",
    auth_btn_signin: "تسجيل الدخول",
    auth_prompt_no_account: "ليس لديك حساب بعد؟",
    auth_link_create_one: "إنشاء حساب جديد الآن",
    auth_lbl_first_name: "الاسم :",
    auth_lbl_last_name: "اللقب :",
    auth_lbl_dob: "تاريخ الميلاد :",
    auth_lbl_confirm_password: "تأكيد كلمة المرور :",
    auth_note_otp: "سيتم إرسال رمز تحقق مكوّن من 6 أرقام إلى بريدك الإلكتروني لتأكيد ملكية الحساب وحمايته.",
    auth_btn_signup: "تأكيد وإنشاء الحساب (إرسال رمز التحقق)",
    auth_prompt_has_account: "لديك حساب بالفعل؟",
    auth_link_signin_now: "تسجيل الدخول الآن",
    auth_title_otp: "تأكيد بريدك الإلكتروني",
    auth_sub_otp: "أدخل الرمز المكوّن من 6 أرقام المرسل إلى :",
    auth_otp_preview_title: "رمز التحقق المولد :",
    auth_otp_preview_desc: "انقر على الرمز أعلاه لنسخه ولصقه مباشرة. (إذا قمت بربط كلمة مرور التطبيقات في إعدادات Gmail فسيصلك الرمز في صندوق بريدك الحقيقي).",
    auth_lbl_enter_otp: "أدخل الرمز المكون من 6 أرقام :",
    auth_btn_verify_otp: "تأكيد الرمز والدخول إلى BatiHub DZ",
    auth_btn_resend_otp: "إعادة إرسال الرمز",
    auth_link_change_info: "تعديل البيانات",
    auth_title_forgot: "استرجاع كلمة المرور",
    auth_sub_forgot: "أدخل بريدك الإلكتروني Gmail المسجل لإرسال رمز إعادة التعيين",
    auth_btn_send_reset_code: "إرسال رمز إعادة التعيين",
    auth_lbl_reset_code: "رمز التحقق (6 أرقام) :",
    auth_lbl_new_password: "كلمة المرور الجديدة :",
    auth_lbl_confirm_new_password: "تأكيد كلمة المرور الجديدة :",
    auth_btn_save_new_password: "حفظ كلمة المرور الجديدة والدخول",
    auth_btn_back_to_login: "العودة إلى تسجيل الدخول",
    auth_btn_smtp_settings: "إعدادات ربط Gmail الحقيقي",
    smtp_modal_title: "ربط بريد Gmail لإرسال الرسائل الحقيقية",
    smtp_modal_desc: "لإرسال رموز التحقق الحقيقية تلقائياً من حساب Gmail الخاص بك إلى الزبائن، يرجى إدخال عنوان Gmail وكلمة مرور التطبيقات (App Password) المكونة من 16 حرفاً من حساب Google.",
    smtp_lbl_email: "بريد Gmail للمرسل :",
    smtp_lbl_app_pwd: "كلمة مرور التطبيق (16 حرفاً) :",
    smtp_hint_app_pwd: "يتم توليدها من: Google Account > Security > 2-Step Verification > App Passwords.",
    smtp_btn_test: "اختبار الاتصال",
    smtp_btn_save: "حفظ الإعدادات",
    preset_btn: "نماذج مساكن جاهزة",
    preset_heading: "نماذج المنازل الأكثر طلباً في الجزائر",
    preset_1_title: "1. فيلا طابق أرضي (120 م² - RDC)",
    preset_1_sub: "أرض 160م²، مبنى 120م²، طابق واحد",
    preset_2_title: "2. منزل عائلي طابقين (240 م² - R+1)",
    preset_2_sub: "أرض 180م²، مبنى 120م²، طابقين",
    preset_3_title: "3. فيلا عصرية فخمة مع ديكور (360 م² - R+2)",
    preset_3_sub: "أرض 250م²، مبنى 120م²، تشطيبات فاخرة 3 طوابق",
    preset_4_title: "4. عمارة سكنية صغيرة (600 م² - R+3)",
    preset_4_sub: "أرض 200م²، مبنى 150م²، 4 طوابق",
    export_pdf_btn: "طباعة كشف التقدير (PDF)",
    nav_calculator: "حاسبة تكلفة البناء والمواد",
    nav_boq: "جدول الكميات والأسعار (BOQ)",
    nav_report: "كشف التقدير الرسمي A4",
    hero_total_cost: "التكلفة الإجمالية التقديرية",
    cost_per_m2: "تكلفة المتر المربع مبني:",
    hero_built_area: "إجمالي المساحة المبنية",
    hero_footprint: "مساحة المبنى في الأرضية:",
    hero_yard_area: "مساحة الفناء والفراغات",
    hero_ces_ratio: "نسبة استغلال الأرضية:",
    hero_key_materials: "ملخص كميات المواد الأساسية",
    mat_cement_short: "الإسمنت:",
    mat_steel_short: "الحديد:",
    mat_bricks_short: "الآجر:",
    mat_aggregates_short: "الحصى والرمل:",
    sec1_title: "1. أبعاد الأرض والمبنى والفراغات",
    sec1_subtitle: "حدد مساحة الأرضية، مساحة المبنى، وعدد الطوابق",
    lbl_land_area: "المساحة الإجمالية للأرضية",
    hint_land_area: "المساحة الكلية لقطعة الأرض بالمتر المربع",
    lbl_footprint_area: "مساحة المبنى في الأرضية",
    hint_footprint_area: "المساحة المغطاة للمبنى في الطابق الأرضي",
    lbl_yard_area: "مساحة الفناء والفراغات غير المبنية:",
    hint_yard_area: "الحوش، الحديقة وممر السيارة (مساحة الفراغات)",
    lbl_floors_count: "عدد الطوابق الإجمالي",
    opt_basement: "إضافة طابق تحت أرضي",
    opt_basement_sub: "قبو (+1 طابق تحت الأرض)",
    opt_overhang: "شرفات وبروز معمارية",
    opt_overhang_sub: "+10% مساحة الطوابق العليا",
    sec2_title: "2. جودة التشطيب والديكور المعماري",
    sec2_subtitle: "اختر ما إذا كان منزلاً عادياً أو يحتاج زخرفة وديكور",
    tier_standard_title: "منزل سكني عادي",
    tier_standard_desc: "بناء وتشطيب كلاسيكي متين: سيراميك عادي، لياسة جبس عادية، نوافذ ألمنيوم قياسية، وتجهيزات صحية عادية.",
    tier_standard_badge: "اقتصادي ومناسب",
    tier_decorated_title: "منزل مزخرف وعصري (ديكور وفخامة)",
    tier_decorated_desc: "تشطيبات فاخرة: أسقف معلقة جبسية بإضاءة مخفية، بورسلان رفيع، دهانات ديكورية فاخرة، وألمنيوم عازل حراري.",
    tier_decorated_badge: "ديكور ولمسات عصرية",
    tier_shell_title: "هيكل خرساني فقط (بناء عظم)",
    tier_shell_desc: "أساسات، أعمدة خرسانية، أسقف وهوردي، وجدران آجر مع عزل السطح فقط (بدون تشطيبات داخلية).",
    tier_shell_badge: "هيكل وبناء فقط",
    lbl_foundation_type: "نوع الأساسات:",
    opt_isolated: "أساسات منفصلة وشريطية",
    opt_raft: "حصيرة خرسانية عامة (+20% خرسانة)",
    lbl_contingency: "هامش الطوارئ والتقلبات:",
    sec3_title: "3. تحديد أسعار مواد البناء مباشرة",
    sec3_subtitle: "حدد أسعار الإسمنت والرمل والحديد لحساب فوري دقيق",
    btn_reset_prices: "استعادة الأسعار الافتراضية",
    price_cement_name: "كيس إسمنت 50 كغ",
    price_steel_name: "قنطار حديد التسليح (100 كغ)",
    price_sand_name: "متر مكعب رمل البناء واللياسة",
    price_gravel_name: "متر مكعب حصى خرسانة مسلحة",
    price_brick12_name: "سعر حبة آجر 12 فتحة (للخارج)",
    price_brick8_name: "سعر حبة آجر 8 فتحات (للداخل)",
    price_stones_name: "متر مكعب حجارة الأساسات (الدبش)",
    price_labor_name: "أجرة اليد العاملة للبناء (لكل م²)",
    mat_detail_title: "كميات مواد البناء المطلوبة وتكلفتها التقديرية",
    mat_detail_subtitle: "شحال لازمك بالضبط إسمنت، حديد، آجر، رمل، وحجارة للبناء",
    card_cement_title: "الإسمنت البورتلاندي",
    calc_cement_bags: "عدد الأكياس (50 كغ):",
    calc_unit_price: "سعر الكيس الواحد:",
    calc_total_cost: "التكلفة التقديرية للإسمنت:",
    card_steel_title: "حديد التسليح",
    calc_steel_quintals: "الكمية بالقنطار (100 كغ):",
    card_bricks_title: "الآجر الأحمر",
    calc_brick12: "آجر 12 فتحة (جدران مزدوجة):",
    calc_brick8: "آجر 8 فتحات (قواطع داخلية):",
    card_sand_title: "رمل البناء واللياسة",
    calc_sand_trucks: "عدد الشاحنات التقريبي (~16م³):",
    card_gravel_title: "حصى الخرسانة المسلحة",
    calc_gravel_trucks: "عدد الشاحنات التقريبي (~16م³):",
    card_hourdis_title: "الهوردي وحجارة الأساسات",
    calc_foundation_rocks: "حجارة الأساسات والدبش:",
    calc_waterproofing: "عزل الأسطح:",
    sec5_title: "تفصيل تكاليف البناء حسب مراحل الإنجاز",
    sec5_subtitle: "كشف مرحلي منظم لجميع مراحل الهندسة المعمارية والمدنية",
    btn_expand_details: "عرض / طي الكل",
    sec6_title: "التحليل المالي وتوزيع النفقات",
    sec6_subtitle: "رسم بياني يوضح نسبة كل عنصر في الميزانية",
    chart_btn_phase: "حسب المراحل",
    chart_btn_mat: "حسب التصنيف",
    chart_lbl_struct: "الأشغال الكبرى والهيكل الخرساني:",
    chart_lbl_finishes: "التشطيبات والدهان والديكور:",
    chart_lbl_labor: "حصة اليد العاملة (أجرة البنائين):",
    disclaimer_market: "الأسعار والكميات معايرة وفق المعايير الجزائرية للبناء (DTR B.C. 2.2). يمكنك تعديل أي سعر مباشرة في لوحة التحكم.",
    boq_title: "جدول الكميات والمواصفات والأسعار (BOQ)",
    boq_subtitle: "حسابات هندسية مدنية دقيقة بالاستناد للمعايير الرسمية الجزائرية (DTR)",
    filter_all: "جميع المواد",
    filter_structure: "الهيكل والخرسانة",
    filter_masonry: "البناء والآجر",
    filter_finishes: "التشطيبات والديكور",
    filter_mep: "الكهرباء والسباكة",
    filter_labor: "اليد العاملة",
    th_category: "التصنيف",
    th_description: "وصف المادة أو الأشغال والمواصفات",
    th_quantity: "الكمية",
    th_unit: "الوحدة",
    th_unit_price: "سعر الوحدة",
    th_total: "المبلغ الإجمالي",
    boq_grand_total_lbl: "المجموع الكلي التقديري لتكلفة المشروع:",
    boq_note: "* الحسابات مطابقة لقواعد الحساب التقنية الجزائرية DTR B.C. 2.2 والكود الأوروبي.",
    copy_boq: "نسخ ملخص الحساب",
    report_page_title: "كشف التقدير المالي الرسمي للبناء",
    report_page_sub: "معد وجاهز للطباعة بحجم A4 وتصديره بصيغة PDF لتقديمه للجهات المعنية أو الزبائن.",
    print_sheet_btn: "طباعة كشف الحساب A4",
    doc_type_lbl: "نوع الوثيقة:",
    doc_type_val: "كشف تقديري كمي ومالي رسمي للمشروع",
    rep_tech_title: "البيانات الفنية والتقنية للمشروع",
    rep_finish_title: "معايير الجودة والتشطيبات",
    rep_duration_lbl: "المدة التقديرية للإنجاز:",
    rep_phases_title: "التوزيع المالي حسب مراحل البناء",
    rep_materials_title: "جدول التقدير الأولي لكميات المواد",
    client_sign_lbl: "مراجعة وتأشيرة صاحب المشروع:",
    client_role_lbl: "الزبون / صاحب المشروع",
    client_mention_lbl: "مع كتابة عبارة «قُرئ وصودق عليه»",
    footer_rights: "BatiHub DZ © 2026 • المنصة المتكاملة للبناء والهندسة المعمارية في الجزائر."
  },
  en: {
    nav_scientific_calc: "Scientific Calculator",
    nav_worker_board: "Job Offers",
    m_nav_workers: "Jobs",
    worker_board_title: "Job Offers & Skilled Artisans",
    worker_board_sub: "Post and explore construction jobs and tradesmen requests in Algeria with live updates",
    btn_new_worker_post: "Post a Job Offer",
    filter_all: "All",
    filter_mason: "Masonry",
    filter_electric: "Electricity",
    filter_plumbing: "Plumbing",
    filter_painting: "Painting",
    filter_tiling: "Tiling",
    filter_carpentry: "Carpentry & Alu",
    filter_steel: "Steel & Ironwork",
    filter_hvac: "HVAC",
    nav_study_offices: "Design Offices",
    m_nav_offices: "Offices",
    nav_messages: "Private Messages",
    m_nav_messages: "Chats",
    offices_title: "Engineering & Design Offices in Algeria",
    offices_sub: "Certified architects and civil engineers, building permits, soil studies and site supervision",
    btn_new_office: "Add Design Office",
    filter_offices_all: "All",
    filter_offices_arch: "Architect",
    filter_offices_civil: "Civil Engineer",
    filter_offices_bet: "Pluridisciplinary BET",
    filter_offices_topo: "Topography",
    messages_hub_title: "Private Messaging & Chats",
    status_online: "Online",
    status_offline: "Offline",
    btn_user_settings: "Settings & Profile",
    calc_title: "Scientific & Civil Engineering Calculator",
    calc_sub: "High-precision professional tool for civil engineers, architects & builders",
    calc_live_ready: "Real-time calculation active",
    qc_surface_title: "1. Surface & Perimeter Calculation",
    qc_length: "Length (L in m):",
    qc_width: "Width (W in m):",
    qc_area_res: "Total Area:",
    qc_perim_res: "Perimeter:",
    qc_btn_inject_calc: "Transfer area to calculator",
    qc_concrete_title: "2. Concrete Volume & Cement Bags",
    qc_dosage: "Cement Dosage:",
    qc_vol_res: "Concrete Volume:",
    qc_cement_bags: "Cement Bags:",
    qc_sand_vol: "Sand:",
    qc_gravel_vol: "Gravel:",
    qc_btn_inject_vol: "Transfer volume to calculator",
    qc_steel_title: "3. FeE500 Steel Rebar Weight",
    qc_steel_dia: "Rebar Diameter (mm):",
    qc_steel_len: "Total Length (m):",
    qc_steel_weight: "Total Weight:",
    qc_steel_quintals: "In Quintals:",
    qc_btn_inject_steel: "Transfer weight to calculator",
    qc_history_title: "Calculation Journal",
    qc_btn_clear_history: "Clear History",
    qc_history_empty: "No calculations yet",
    profile_title: "User Profile",
    profile_verified: "Verified & Protected via Gmail",
    profile_lbl_language: "Interface Language:",
    profile_lbl_security: "Security & Protection:",
    profile_change_pwd: "Change Account Password",
    profile_sync_active: "Live Internet synchronization active",
    profile_signout: "Sign Out",
    pwd_modal_title: "Change Password",
    pwd_current_lbl: "Current Password:",
    pwd_new_lbl: "New Password:",
    pwd_confirm_lbl: "Confirm New Password:",
    pwd_forgot_link: "Forgot current password? Send code to Gmail",
    pwd_btn_save: "Save New Password",
    pwd_btn_send_otp: "Send verification code to Gmail",
    pwd_btn_back_standard: "← Back to current password input",
    auth_lbl_saved_accounts: "Saved accounts on this device (click to autofill):",
    auth_remember_me: "Remember my login on this device",

    app_slogan: "BUILD • CONNECT • CREATE",
    dev_by: "Designed & developed by:",
    auth_title: "Sign in to BatiHub DZ",
    auth_subtitle: "Access your professional workspace and construction project calculations",
    auth_tab_login: "Sign In",
    auth_tab_register: "Create Account",
    auth_lbl_gmail: "Gmail Address:",
    auth_lbl_password: "Password:",
    auth_link_forgot: "Forgot Password?",
    auth_btn_signin: "Sign In",
    auth_prompt_no_account: "Don't have an account yet?",
    auth_link_create_one: "Create an account now",
    auth_lbl_first_name: "First Name:",
    auth_lbl_last_name: "Last Name:",
    auth_lbl_dob: "Date of Birth:",
    auth_lbl_confirm_password: "Confirm Password:",
    auth_note_otp: "A 6-digit confirmation code will be sent to your Gmail to activate and protect your account.",
    auth_btn_signup: "Validate & Create Account (Send Code)",
    auth_prompt_has_account: "Already have an account?",
    auth_link_signin_now: "Sign In now",
    auth_title_otp: "Verify your Gmail address",
    auth_sub_otp: "Enter the 6-digit code sent to:",
    auth_otp_preview_title: "Generated Verification Code:",
    auth_otp_preview_desc: "Click on the code to copy and paste it directly. (If you have configured the Google App Password in Gmail settings, the code will be delivered to your inbox).",
    auth_lbl_enter_otp: "Enter 6-digit verification code:",
    auth_btn_verify_otp: "Confirm & Enter BatiHub DZ",
    auth_btn_resend_otp: "Resend Code",
    auth_link_change_info: "Edit Information",
    auth_title_forgot: "Password Recovery",
    auth_sub_forgot: "Enter your registered Gmail to receive a password reset code",
    auth_btn_send_reset_code: "Send Reset Code",
    auth_lbl_reset_code: "Verification Code (6 digits):",
    auth_lbl_new_password: "New Password:",
    auth_lbl_confirm_new_password: "Confirm New Password:",
    auth_btn_save_new_password: "Save New Password & Sign In",
    auth_btn_back_to_login: "Back to Login",
    auth_btn_smtp_settings: "Gmail SMTP Settings (Real Sending)",
    smtp_modal_title: "Link Gmail Account for Real Email Delivery",
    smtp_modal_desc: "To automatically send real verification codes from your Gmail account to clients, enter your Gmail address and 16-character Google App Password.",
    smtp_lbl_email: "Sender Gmail Address:",
    smtp_lbl_app_pwd: "App Password (16 characters):",
    smtp_hint_app_pwd: "Generated via: Google Account > Security > 2-Step Verification > App Passwords.",
    smtp_btn_test: "Test Connection",
    smtp_btn_save: "Save Settings",
    preset_btn: "House Presets",
    preset_heading: "Popular Housing Models in Algeria",
    preset_1_title: "1. Single-Storey Villa (120 m² - Ground)",
    preset_1_sub: "Plot 160m², Footprint 120m², 1 Floor",
    preset_2_title: "2. Family House R+1 (240 m²)",
    preset_2_sub: "Plot 180m², Footprint 120m², 2 Floors",
    preset_3_title: "3. Modern Luxury Villa R+2 (360 m²)",
    preset_3_sub: "Plot 250m², Footprint 120m², Luxury Finish 3 Floors",
    preset_4_title: "4. Residential Building R+3 (600 m²)",
    preset_4_sub: "Plot 200m², Footprint 150m², 4 Floors",
    export_pdf_btn: "Print Official Quote (PDF)",
    nav_calculator: "Cost & Materials Calculator",
    nav_boq: "Bill of Quantities (BOQ)",
    nav_report: "Official Quote A4",
    hero_total_cost: "Total Estimated Cost",
    cost_per_m2: "Cost per built m²:",
    hero_built_area: "Total Built Area",
    hero_footprint: "Footprint / Ground:",
    hero_yard_area: "Unbuilt / Yard Space",
    hero_ces_ratio: "Site Coverage (CES):",
    hero_key_materials: "Primary Materials Summary",
    mat_cement_short: "Cement:",
    mat_steel_short: "Steel:",
    mat_bricks_short: "Bricks:",
    mat_aggregates_short: "Aggregates:",
    sec1_title: "1. Land & Building Dimensions",
    sec1_subtitle: "Plot surface, building footprint, and floor levels",
    lbl_land_area: "Total Plot / Land Area",
    hint_land_area: "Total property parcel area in m²",
    lbl_footprint_area: "Ground Footprint Area",
    hint_footprint_area: "Ground floor covered building footprint in m²",
    lbl_yard_area: "Open Yard & Setbacks:",
    hint_yard_area: "Courtyard, garden & vehicle driveway",
    lbl_floors_count: "Total Floors Count",
    opt_basement: "Include Basement",
    opt_basement_sub: "Underground floor (+1 level)",
    opt_overhang: "Balcony / Corbel",
    opt_overhang_sub: "+10% upper floors area",
    sec2_title: "2. Finishing Quality & Architectural Style",
    sec2_subtitle: "Choose between standard house, modern decorated, or grey shell only",
    tier_standard_title: "Standard Residential House",
    tier_standard_desc: "Durable classic finishes: ceramic floor tiles, gypsum plastering, standard aluminum windows, classic sanitary ware.",
    tier_standard_badge: "Cost-optimized",
    tier_decorated_title: "Architectural Decorated Modern Villa",
    tier_decorated_desc: "Luxury finishes: BA13 suspended false ceilings with LED cove lighting, porcelain tiles, decorative stucco paint, thermal break aluminum.",
    tier_decorated_badge: "Modern Luxury",
    tier_shell_title: "Grey Structural Shell Only",
    tier_shell_desc: "Foundations, reinforced concrete columns, beams, floor slabs, red clay brick walls & terrace waterproofing only.",
    tier_shell_badge: "Structure Only",
    lbl_foundation_type: "Foundation Type:",
    opt_isolated: "Pad Footings (Isolated)",
    opt_raft: "Raft Foundation (+20% concrete)",
    lbl_contingency: "Contingency Margin:",
    sec3_title: "3. Direct Material Unit Prices",
    sec3_subtitle: "Adjust cement, sand, gravel and steel prices for instant accurate calculations",
    btn_reset_prices: "Reset Defaults",
    price_cement_name: "Cement 50kg Bag",
    price_steel_name: "Steel Rebar / Quintal (100kg)",
    price_sand_name: "Sand per m³",
    price_gravel_name: "Gravel per m³",
    price_brick12_name: "Red Brick 12 Holes (Exterior)",
    price_brick8_name: "Red Brick 8 Holes (Interior)",
    price_stones_name: "Foundation Rocks per m³",
    price_labor_name: "Civil Labor per m²",
    mat_detail_title: "Required Materials Quantities & Costs",
    mat_detail_subtitle: "Exact amounts of cement, steel, bricks, sand, and stones needed",
    card_cement_title: "Portland Cement",
    calc_cement_bags: "Total 50kg Bags:",
    calc_unit_price: "Unit Price:",
    calc_total_cost: "Estimated Cement Cost:",
    card_steel_title: "Reinforced Steel Rebar",
    calc_steel_quintals: "Total Quintals (100kg):",
    card_bricks_title: "Red Clay Bricks",
    calc_brick12: "12-Hole Bricks (Double Wall):",
    calc_brick8: "8-Hole Bricks (Internal Partitions):",
    card_sand_title: "Washed River Sand",
    calc_sand_trucks: "Truck Loads (~16m³):",
    card_gravel_title: "Crushed Concrete Gravel",
    calc_gravel_trucks: "Truck Loads (~16m³):",
    card_hourdis_title: "Hollow Blocks & Foundation Stones",
    calc_foundation_rocks: "Foundation Packing Rocks:",
    calc_waterproofing: "Roof Waterproofing:",
    sec5_title: "Cost Breakdown by Phase",
    sec5_subtitle: "Detailed stages of civil engineering and architectural works",
    btn_expand_details: "Expand / Collapse All",
    sec6_title: "Financial Distribution",
    sec6_subtitle: "Budget allocation and labor percentage",
    chart_btn_phase: "By Phase",
    chart_btn_mat: "By Category",
    chart_lbl_struct: "Structural Civil Works:",
    chart_lbl_finishes: "Finishing & Decoration:",
    chart_lbl_labor: "Labor Share:",
    disclaimer_market: "Estimates calibrated according to Algerian DTR B.C. 2.2 regulations. You can adjust any price in the control panel.",
    boq_title: "Bill of Quantities (BOQ)",
    boq_subtitle: "Detailed itemized civil engineering quantities based on Algerian DTR standards",
    filter_all: "All Items",
    filter_structure: "Structure & Concrete",
    filter_masonry: "Masonry & Bricks",
    filter_finishes: "Finishes & Decor",
    filter_mep: "Plumbing & Electrical",
    filter_labor: "Labor",
    th_category: "Category",
    th_description: "Description of Work & Materials",
    th_quantity: "Quantity",
    th_unit: "Unit",
    th_unit_price: "Unit Price",
    th_total: "Total Amount",
    boq_grand_total_lbl: "ESTIMATED PROJECT GRAND TOTAL:",
    boq_note: "* Calculated in compliance with Algerian DTR B.C. 2.2 and Eurocode standards.",
    copy_boq: "Copy Summary",
    report_page_title: "Official Preliminary Cost Estimation Sheet A4",
    report_page_sub: "Formatted document ready for A4 printing, official signing, or PDF export.",
    print_sheet_btn: "Print A4 Sheet",
    doc_type_lbl: "Document:",
    doc_type_val: "Official Preliminary Quantity & Cost Estimation",
    rep_tech_title: "Project Technical Specifications",
    rep_finish_title: "Quality Standards & Finishes",
    rep_duration_lbl: "Estimated Project Duration:",
    rep_phases_title: "Phase-by-Phase Financial Summary",
    rep_materials_title: "Preliminary Key Materials Schedule",
    client_sign_lbl: "Client Verification & Approval:",
    client_role_lbl: "Client / Project Owner",
    client_mention_lbl: "Handwritten note «Read and Approved»",
    footer_rights: "BatiHub DZ © 2026 • Integrated Construction & Architecture Platform in Algeria."
  }
};

// =========================================================================
// 2. DEFAULT CONSTRUCTION PRICES IN ALGERIA (DZD - 2026)
// =========================================================================
const DEFAULT_PRICES_DZD = {
  cement_bag: { name: 'Ciment Portland CPJ-CEM II 42.5 (Sac 50kg)', unit: 'Sac (50kg)', price: 680, category: 'structure' },
  steel_quintal: { name: 'Acier à Béton Haute Adhérence FeE500 (Quintal = 100kg)', unit: 'Quintal (100kg)', price: 12800, category: 'structure' },
  sand_m3: { name: 'Sable de Rivière Lavé', unit: 'm³', price: 2800, category: 'structure' },
  gravel_m3: { name: 'Gravier Concassé pour Béton (8/15 & 15/25)', unit: 'm³', price: 2300, category: 'structure' },
  foundation_stones_m3: { name: 'Moellons de Fondations (Hérisson)', unit: 'm³', price: 1900, category: 'structure' },
  excavation_m3: { name: 'Terrassement & Fouilles Mécaniques', unit: 'm³', price: 650, category: 'structure' },
  brick_12: { name: 'Brique Rouge Creuse 12 Trous (Murs Extérieurs)', unit: 'Pièce', price: 40, category: 'masonry' },
  brick_8: { name: 'Brique Rouge Creuse 8 Trous (Cloisons Intérieures)', unit: 'Pièce', price: 34, category: 'masonry' },
  hourdis_piece: { name: 'Corps Creux / Hourdis Plancher 16+4', unit: 'Pièce', price: 48, category: 'masonry' },
  plaster_bag: { name: 'Plâtre de Construction Traditionnel (Sac 40kg)', unit: 'Sac (40kg)', price: 480, category: 'finishes' },
  ba13_sheet: { name: 'Plaque de Plâtre BA13 (2.5m x 1.2m)', unit: 'Plaque', price: 1350, category: 'finishes' },
  tile_floor_std: { name: 'Carrelage Sol Monocuisson Standard', unit: 'm²', price: 1950, category: 'finishes' },
  tile_floor_luxury: { name: 'Grès Cérame Rectifié 60x60 Haut Standing', unit: 'm²', price: 4200, category: 'finishes' },
  tile_wall_std: { name: 'Faïence Murale Standard pour Cuisine/SDB', unit: 'm²', price: 1800, category: 'finishes' },
  tile_wall_luxury: { name: 'Faïence Rectifiée Importée Haut Standing', unit: 'm²', price: 3600, category: 'finishes' },
  tile_adhesive_bag: { name: 'Mortier Colle pour Carrelage (Sac 25kg)', unit: 'Sac (25kg)', price: 620, category: 'finishes' },
  paint_primer_kg: { name: 'Primaire d\'Accrochage & Fixateur de Fond', unit: 'kg', price: 450, category: 'finishes' },
  paint_wall_std_L: { name: 'Peinture Acrylique Lavable Blanche', unit: 'Litre', price: 500, category: 'finishes' },
  paint_wall_decor_L: { name: 'Peinture Décorative Sablée / Stucco / Carénia', unit: 'Litre', price: 1650, category: 'finishes' },
  waterproofing_m2: { name: 'Étanchéité Toiture Terrasse Paxalu 4mm', unit: 'm²', price: 2100, category: 'structure' },
  door_interior_std: { name: 'Porte Intérieure Isoplane avec Huisserie', unit: 'Unité', price: 14000, category: 'finishes' },
  door_interior_luxury: { name: 'Porte Intérieure en Bois Massif Design', unit: 'Unité', price: 28000, category: 'finishes' },
  door_exterior_armored: { name: 'Porte d\'Entrée Principale Blindée Sécurisée', unit: 'Unité', price: 65000, category: 'finishes' },
  window_alu_std: { name: 'Fenêtre Aluminium Blanc Vitrage Simple', unit: 'Unité', price: 16000, category: 'finishes' },
  window_alu_thermal: { name: 'Fenêtre Alu Rupture de Pont Thermique & Double Vitrage', unit: 'Unité', price: 32000, category: 'finishes' },
  plumbing_m2_std: { name: 'Installation Plomberie & Sanitaires Standards (au m²)', unit: 'm²', price: 2800, category: 'mep' },
  plumbing_m2_luxury: { name: 'Plomberie Encastrée Multicouche & Sanitaires Suspendus (au m²)', unit: 'm²', price: 5500, category: 'mep' },
  electrical_m2_std: { name: 'Installation Électrique Standard & Tableau (au m²)', unit: 'm²', price: 2400, category: 'mep' },
  electrical_m2_luxury: { name: 'Électricité Architecturale, Spots LED & Domotique (au m²)', unit: 'm²', price: 5200, category: 'mep' },
  labor_shell_m2: { name: 'Main d\'œuvre Gros Œuvre (Coffrage, Ferraillage, Coulage)', unit: 'm²', price: 9500, category: 'labor' },
  labor_plaster_std_m2: { name: 'Main d\'œuvre Plâtrerie & Enduits', unit: 'm²', price: 450, category: 'labor' },
  labor_drywall_ba13_m2: { name: 'Main d\'œuvre Pose Faux Plafonds BA13 & Gorges', unit: 'm²', price: 1200, category: 'labor' },
  labor_tiling_m2: { name: 'Main d\'œuvre Pose Carrelage & Faïence', unit: 'm²', price: 850, category: 'labor' },
  labor_painting_std_m2: { name: 'Main d\'œuvre Peinture Standard', unit: 'm²', price: 550, category: 'labor' },
  labor_painting_decor_m2: { name: 'Main d\'œuvre Peinture Décorative Spécialisée', unit: 'm²', price: 1100, category: 'labor' }
};

// =========================================================================
// 3. APPLICATION STATE
// =========================================================================
let state = {
  lang: 'fr', // 'fr', 'ar', 'en'
  landArea: 160,
  footprintArea: 120,
  floorsCount: 1,
  hasBasement: false,
  hasOverhang: true,
  finishQuality: 'standard', // 'standard', 'decorated', 'shell'
  foundationType: 'isolated',
  contingencyRate: 0.10,
  currency: 'DZD', // 'DZD', 'USD'
  exchangeRate: 135.0,
  prices: JSON.parse(JSON.stringify(DEFAULT_PRICES_DZD)),
  activeBoqFilter: 'all',
  chartView: 'phase'
};

let breakdownChart = null;

// =========================================================================
// 4. CRYPTOGRAPHY, ACCOUNTS & GMAIL OTP AUTHENTICATION SYSTEM
// =========================================================================

// Temporary storage for in-progress operations
let pendingRegistration = null;
let pendingPasswordReset = null;
let resendIntervalTimer = null;

function getPendingRegistration() {
  if (pendingRegistration) return pendingRegistration;
  try {
    const raw = localStorage.getItem('batihub_pending_reg');
    if (raw) {
      pendingRegistration = JSON.parse(raw);
      return pendingRegistration;
    }
  } catch (e) {}
  return null;
}

// Helper: Secure password hashing with SHA-256 and salt
async function hashPassword(password, salt) {
  const enc = new TextEncoder();
  const data = enc.encode(password + '::salt::' + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function generateSalt() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function generate6DigitOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// =========================================================================
// SECURE VAULT & USER DATA ENCRYPTION (حماية وتشفير بيانات المستخدمين)
// =========================================================================
const VAULT_SECURITY_KEY = 'BTH_SEC_VAULT_KEY_2026_MOUHANED_GUELLIF_DZ_BATI_PRO';

function encryptVaultData(str) {
  try {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i) ^ VAULT_SECURITY_KEY.charCodeAt(i % VAULT_SECURITY_KEY.length);
      result += String.fromCharCode(code);
    }
    return 'BTH_VAULT_v2:' + btoa(unescape(encodeURIComponent(result)));
  } catch (e) {
    return str;
  }
}

function decryptVaultData(enc) {
  try {
    if (!enc || typeof enc !== 'string') return {};
    if (!enc.startsWith('BTH_VAULT_v2:')) {
      // Legacy JSON fallback
      return JSON.parse(enc);
    }
    const base64Str = enc.replace('BTH_VAULT_v2:', '');
    const decoded = decodeURIComponent(escape(atob(base64Str)));
    let result = '';
    for (let i = 0; i < decoded.length; i++) {
      const code = decoded.charCodeAt(i) ^ VAULT_SECURITY_KEY.charCodeAt(i % VAULT_SECURITY_KEY.length);
      result += String.fromCharCode(code);
    }
    return JSON.parse(result);
  } catch (e) {
    return {};
  }
}

let GLOBAL_ACCOUNTS_CACHE = null;

async function initAccountsDatabase() {
  let diskAccounts = {};
  if (window.electronDB && window.electronDB.getAccounts) {
    try {
      diskAccounts = (await window.electronDB.getAccounts()) || {};
    } catch (e) {
      console.warn('Error reading accounts from disk:', e);
    }
  }

  let localAccounts = {};
  try {
    const raw = localStorage.getItem('batihub_registered_accounts');
    if (raw) localAccounts = decryptVaultData(raw) || {};
  } catch (e) {}

  const SEED_ACCOUNTS = {
    "mouhanedguellif16@gmail.com": {
      "id": "usr_1795125988035",
      "firstName": "fateh",
      "lastName": "fateh",
      "fullName": "fateh fateh",
      "dob": "1984-12-11",
      "email": "mouhanedguellif16@gmail.com",
      "passwordHash": "9133423a433d0f66c10901a073af9f9b6d50e5e70d63a67ce415fbfee9ffe884",
      "salt": "7vjx6gpgjb31pc5dvnexgp",
      "isVerified": true,
      "role": "user",
      "avatar": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\"><rect width=\"64\" height=\"64\" rx=\"32\" fill=\"%23ffa000\"/><text x=\"50%\" y=\"55%\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"%2306080c\" font-family=\"sans-serif\" font-size=\"28\" font-weight=\"bold\">F</text></svg>",
      "createdAt": "2026-11-19T22:06:28.035Z"
    },
    "batihubdz@gmail.com": {
      "id": "usr_admin_batihub_dz",
      "firstName": "BatiHub DZ",
      "lastName": "Admin",
      "fullName": "BatiHub DZ (الإدارة)",
      "dob": "2000-01-01",
      "email": "batihubdz@gmail.com",
      "passwordHash": "41b9a3a3828a2839e215fa31a84d5d500fc4b16699eed7219b2a0e0c20bd0d45",
      "salt": "batihub_admin_salt_2026",
      "isVerified": true,
      "role": "admin",
      "avatar": "assets/batihub_logo.png",
      "createdAt": "2026-11-20T00:00:00.000Z"
    }
  };

  const merged = Object.assign({}, SEED_ACCOUNTS, localAccounts, diskAccounts);
  merged["batihubdz@gmail.com"] = Object.assign({}, merged["batihubdz@gmail.com"] || {}, SEED_ACCOUNTS["batihubdz@gmail.com"]);

  // Sync with Web & Mobile API when not running inside Electron
  if (!window.electronDB) {
    try {
      const resp = await fetch('/api/accounts');
      if (resp.ok) {
        const cloudAccounts = await resp.json();
        Object.assign(merged, cloudAccounts);
      }
    } catch (e) {}
  }

  GLOBAL_ACCOUNTS_CACHE = merged;

  try {
    const raw = JSON.stringify(merged);
    const encrypted = encryptVaultData(raw);
    localStorage.setItem('batihub_registered_accounts', encrypted);
  } catch (e) {}

  if (window.electronDB && window.electronDB.saveAccounts) {
    try {
      window.electronDB.saveAccounts(merged);
    } catch (e) {}
  }

  // Sync saved device profiles from disk
  if (window.electronDB && window.electronDB.getSavedProfiles) {
    try {
      const diskProfiles = (await window.electronDB.getSavedProfiles()) || [];
      const localProfiles = getSavedProfiles();
      const combined = [...localProfiles];
      diskProfiles.forEach(dp => {
        if (!combined.some(lp => lp.email.toLowerCase() === dp.email.toLowerCase())) {
          combined.push(dp);
        }
      });
      localStorage.setItem('batihub_saved_profiles', JSON.stringify(combined));
    } catch (e) {}
  }

  // Sync active session if local is empty
  if (!localStorage.getItem('batihub_user') && window.electronDB && window.electronDB.getActiveSession) {
    try {
      const diskSession = await window.electronDB.getActiveSession();
      if (diskSession && diskSession.email) {
        localStorage.setItem('batihub_user', JSON.stringify(diskSession));
      }
    } catch (e) {}
  }

  // Sync worker posts from disk on Electron
  if (window.electronDB && window.electronDB.getWorkerPosts) {
    try {
      const diskPosts = await window.electronDB.getWorkerPosts();
      if (Array.isArray(diskPosts) && diskPosts.length > 0) {
        localStorage.setItem('batihub_worker_posts_v1', JSON.stringify(diskPosts));
      }
    } catch (e) {}
  }

  return merged;
}

function getStoredAccounts() {
  if (GLOBAL_ACCOUNTS_CACHE && Object.keys(GLOBAL_ACCOUNTS_CACHE).length > 0) {
    return GLOBAL_ACCOUNTS_CACHE;
  }
  try {
    const raw = localStorage.getItem('batihub_registered_accounts');
    if (raw) {
      const dec = decryptVaultData(raw);
      if (dec && Object.keys(dec).length > 0) {
        GLOBAL_ACCOUNTS_CACHE = dec;
        return dec;
      }
    }
  } catch (e) {}
  return GLOBAL_ACCOUNTS_CACHE || {};
}

function saveStoredAccounts(accounts) {
  GLOBAL_ACCOUNTS_CACHE = accounts;
  try {
    const raw = JSON.stringify(accounts);
    const encrypted = encryptVaultData(raw);
    localStorage.setItem('batihub_registered_accounts', encrypted);
  } catch (e) {
    console.error('Storage error:', e);
  }

  if (window.electronDB && window.electronDB.saveAccounts) {
    try {
      window.electronDB.saveAccounts(accounts);
    } catch (e) {
      console.error('Disk save error:', e);
    }
  } else {
    // Sync with Web & Mobile API
    try {
      fetch('/api/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(accounts)
      }).catch(() => {});
    } catch (e) {}
  }
}

// Strict Email Validator
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  email = email.trim();
  if (/\s/.test(email)) return false;
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!re.test(email)) return false;
  const parts = email.split('@');
  if (parts.length !== 2) return false;
  const domain = parts[1];
  if (!domain.includes('.') || domain.startsWith('.') || domain.endsWith('.')) return false;
  const tld = domain.split('.').pop();
  if (!tld || tld.length < 2) return false;
  return true;
}

// Switch view inside Auth Gate: 'login', 'register', 'otp', 'forgot'
function switchAuthView(viewName) {
  const vLogin = document.getElementById('viewLogin');
  const vRegister = document.getElementById('viewRegister');
  const vOtp = document.getElementById('viewOtp');
  const vForgot = document.getElementById('viewForgotPassword');
  const tabsContainer = document.getElementById('authModeTabsContainer');
  const btnTabLogin = document.getElementById('btnTabLogin');
  const btnTabRegister = document.getElementById('btnTabRegister');

  const titleEl = document.getElementById('authScreenHeaderTitle');
  const subEl = document.getElementById('authScreenHeaderSubtitle');

  const isAr = state.lang === 'ar';
  const isEn = state.lang === 'en';

  [vLogin, vRegister, vOtp, vForgot].forEach(v => {
    if (v) v.classList.add('hidden');
  });

  if (viewName === 'login') {
    if (vLogin) vLogin.classList.remove('hidden');
    if (tabsContainer) tabsContainer.classList.remove('hidden');
    if (btnTabLogin) {
      btnTabLogin.classList.add('active-auth-tab');
      btnTabLogin.classList.remove('text-slate-400');
    }
    if (btnTabRegister) {
      btnTabRegister.classList.remove('active-auth-tab');
      btnTabRegister.classList.add('text-slate-400');
    }
    if (titleEl) titleEl.innerText = isAr ? 'تسجيل الدخول إلى BatiHub DZ' : (isEn ? 'Sign In to BatiHub DZ' : 'Connexion à BatiHub DZ');
    if (subEl) subEl.innerText = isAr ? 'أدخل عنوان بريد Gmail وكلمة المرور للوصول إلى حسابك' : (isEn ? 'Enter your Gmail address and password to access your account' : 'Accédez à votre espace professionnel et vos calculs');
  } 
  else if (viewName === 'register') {
    if (vRegister) vRegister.classList.remove('hidden');
    if (tabsContainer) tabsContainer.classList.remove('hidden');
    if (btnTabRegister) {
      btnTabRegister.classList.add('active-auth-tab');
      btnTabRegister.classList.remove('text-slate-400');
    }
    if (btnTabLogin) {
      btnTabLogin.classList.remove('active-auth-tab');
      btnTabLogin.classList.add('text-slate-400');
    }
    if (titleEl) titleEl.innerText = isAr ? 'إنشاء حساب جديد في BatiHub DZ' : (isEn ? 'Create New Account' : 'Créer un nouveau compte');
    if (subEl) subEl.innerText = isAr ? 'املأ البيانات لتأكيد وربط حسابك عبر بريد Gmail' : (isEn ? 'Fill in your details to verify and link your Gmail account' : 'Remplissez vos coordonnées pour lier votre compte Gmail');
  } 
  else if (viewName === 'otp') {
    if (vOtp) vOtp.classList.remove('hidden');
    if (tabsContainer) tabsContainer.classList.add('hidden');
    if (titleEl) titleEl.innerText = isAr ? 'تأكيد الحساب عبر رمز Gmail' : (isEn ? 'Verify Gmail OTP Code' : 'Vérification du code Gmail');
    if (subEl) subEl.innerText = isAr ? 'يرجى إدخال رمز التحقق المكون من 6 أرقام لتفعيل الحساب' : (isEn ? 'Please enter the 6-digit verification code to activate your account' : 'Saisissez le code à 6 chiffres pour activer votre compte');
  } 
  else if (viewName === 'forgot') {
    if (vForgot) vForgot.classList.remove('hidden');
    if (tabsContainer) tabsContainer.classList.add('hidden');
    document.getElementById('forgotStepRequest')?.classList.remove('hidden');
    document.getElementById('forgotStepReset')?.classList.add('hidden');
    if (titleEl) titleEl.innerText = isAr ? 'استرجاع كلمة المرور' : (isEn ? 'Password Recovery' : 'Récupération de mot de passe');
    if (subEl) subEl.innerText = isAr ? 'أدخل بريدك الإلكتروني لإرسال رمز إعادة التعيين' : (isEn ? 'Enter your registered Gmail to receive a reset code' : 'Saisissez votre Gmail pour recevoir le code de réinitialisation');
  }
}

// Toggle password text visibility
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPwd = input.type === 'password';
  input.type = isPwd ? 'text' : 'password';
  const icon = btn.querySelector('i');
  if (icon) {
    if (isPwd) {
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  }
}

// Send Email via Electron IPC (Clean High-Deliverability Template)
async function sendVerificationEmail(toEmail, code, type) {
  const isAr = state.lang === 'ar';
  const isEn = state.lang === 'en';
  const subject = type === 'register' 
    ? `Support Bati Hub DZ - Code: ${code}`
    : `Support Bati Hub DZ - Code: ${code}`;

  const textBody = `Bonjour,\n\nVotre code de vérification Bati Hub DZ est : ${code}\nرمز التأكيد الخاص بك هو: ${code}\n\nCe code est valable pendant 15 minutes.\n\nCordialement,\nSupport Bati Hub DZ`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin:0; padding:20px; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color:#f8fafc; color:#1e293b;">
      <div style="max-width:520px; margin:0 auto; background:#ffffff; border-radius:12px; padding:30px; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
        
        <div style="text-align:center; margin-bottom:24px;">
          <h1 style="color:#f59e0b; margin:0; font-size:26px; font-weight:800; letter-spacing:-0.5px;">Bati Hub DZ</h1>
          <p style="color:#64748b; font-size:13px; margin:4px 0 0 0;">Plateforme des Services de Construction en Algérie • كل خدمات البناء في مكان واحد</p>
        </div>

        <div style="background-color:#fffbeb; border:1px solid #fef3c7; border-radius:10px; padding:20px; text-align:center; margin-bottom:24px;">
          <p style="margin:0 0 10px 0; font-size:14px; color:#92400e; font-weight:600;">
            ${type === 'register' ? 'Votre code de confirmation / رمز التأكيد الخاص بك :' : 'Réinitialisation de mot de passe / رمز إعادة التعيين :'}
          </p>
          <div style="font-size:34px; font-weight:800; letter-spacing:8px; color:#d97706; font-family:'Courier New', monospace; padding:10px 0;">
            ${code}
          </div>
          <p style="margin:10px 0 0 0; font-size:12px; color:#b45309;">
            Valable pendant 15 minutes • صالح لمدة 15 دقيقة
          </p>
        </div>

        <div style="direction:rtl; text-align:right; font-size:13px; color:#475569; line-height:1.6; border-top:1px solid #f1f5f9; padding-top:16px;">
          <p style="margin:0 0 8px 0;">مرحباً بك في منصة <b>Bati Hub DZ</b>.</p>
          <p style="margin:0;">أدخل هذا الرمز لتأكيد حسابك والانضمام للمنصة. يرجى عدم مشاركة هذا الرمز مع أي شخص لضمان أمان حسابك.</p>
        </div>

        <div style="margin-top:24px; padding-top:16px; border-top:1px solid #f1f5f9; text-align:center; font-size:11px; color:#94a3b8;">
          Bati Hub DZ • Développé par Mouhaned Guellif
        </div>

      </div>
    </body>
    </html>
  `;

  if (window.electronMailAPI && typeof window.electronMailAPI.sendMail === 'function') {
    try {
      const res = await window.electronMailAPI.sendMail({
        to: toEmail,
        subject: subject,
        text: textBody,
        html: html
      });
      return res;
    } catch (err) {
      console.error('Native mail error:', err);
      return { success: false, error: err.message };
    }
  }

  // Web & Mobile API Fallback (runs when accessed on mobile phone or web browser)
  try {
    const resp = await fetch('/api/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: toEmail,
        subject: subject,
        text: textBody,
        html: html
      })
    });
    const data = await resp.json();
    return data;
  } catch (webErr) {
    console.error('Web mail fallback error:', webErr);
    return { success: false, error: 'تعذر الاتصال بخادم إرسال البريد، يرجى التأكد من اتصال الإنترنت' };
  }
}

// 1. REGISTER FLOW
async function handleUserRegister(e) {
  if (e && e.preventDefault) e.preventDefault();

  const firstName = document.getElementById('regFirstName')?.value.trim() || '';
  const lastName = document.getElementById('regLastName')?.value.trim() || '';
  const dob = document.getElementById('regDob')?.value || '';
  const email = document.getElementById('regEmail')?.value.trim().toLowerCase() || '';
  const password = document.getElementById('regPassword')?.value || '';
  const confirmPassword = document.getElementById('regConfirmPassword')?.value || '';

  const isAr = state.lang === 'ar';

  // 1. Strict Email Validation
  if (!isValidEmail(email)) {
    alert(isAr 
      ? 'عنوان البريد الإلكتروني غير صحيح! يرجى إدخال بريد إلكتروني حقيقي وصالح (مثال: example@gmail.com).' 
      : 'Format d\'adresse email invalide ! Veuillez saisir une adresse réelle et valide (ex: exemple@gmail.com).');
    return;
  }

  // 2. Strict Duplicate Email Check
  const accounts = getStoredAccounts();
  if (accounts[email]) {
    alert(isAr 
      ? 'هذا البريد الإلكتروني مسجل بالفعل بحساب آخر! لا يمكن فتح أكثر من حساب بنفس البريد.\nيرجى تسجيل الدخول مباشرة أو النقر على "نسيت كلمة المرور؟" لاسترجاعه.' 
      : 'Cette adresse email possède déjà un compte enregistré !\nVous ne pouvez pas créer plusieurs comptes avec la même adresse.');
    switchAuthView('login');
    const loginEmailInput = document.getElementById('loginEmail');
    if (loginEmailInput) loginEmailInput.value = email;
    return;
  }

  if (password.length < 6) {
    alert(isAr ? 'يجب أن تتكون كلمة المرور من 6 أحرف أو أرقام على الأقل' : 'Le mot de passe doit comporter au moins 6 caractères.');
    return;
  }

  if (password !== confirmPassword) {
    alert(isAr ? 'كلمتا المرور غير متطابقتين، يرجى إعادة التأكد' : 'Les mots de passe ne correspondent pas.');
    return;
  }

  // Show Loading state on button
  const submitBtn = document.getElementById('btnSubmitRegister');
  const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> ${isAr ? 'جاري إرسال رمز التحقق إلى بريدك...' : 'Envoi du code à votre Gmail...'}`;
  }

  // Generate 6-digit verification code and salt
  const salt = generateSalt();
  const passwordHash = await hashPassword(password, salt);
  const otpCode = generate6DigitOtp();

  // Send Email via Google SMTP
  const mailResult = await sendVerificationEmail(email, otpCode, 'register');

  // Restore button
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHtml;
  }

  if (!mailResult || !mailResult.success) {
    const errorDetail = mailResult && mailResult.error ? `\n(${mailResult.error})` : '';
    alert(isAr 
      ? `تعذر إرسال رمز التحقق إلى بريدك الإلكتروني! يرجى التأكد من اتصال الإنترنت وأن البريد المدخل يعمل.${errorDetail}` 
      : `Échec de l'envoi du code à votre email ! Veuillez vérifier votre adresse et votre connexion Internet.${errorDetail}`);
    return; // STOP! Never go to OTP screen if sending failed!
  }

  pendingRegistration = {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`.trim(),
    dob,
    email,
    passwordHash,
    salt,
    otpCode,
    expiresAt: Date.now() + 15 * 60 * 1000
  };
  try {
    localStorage.setItem('batihub_pending_reg', JSON.stringify(pendingRegistration));
  } catch (e) {}

  // Update OTP View (Email target, NO code displayed)
  const targetEmailEl = document.getElementById('otpTargetEmail');
  if (targetEmailEl) targetEmailEl.innerText = email;

  // Switch to OTP view
  switchAuthView('otp');
  startResendCountdown();

  const otpInput = document.getElementById('inputOtpCode');
  if (otpInput) {
    otpInput.value = '';
    otpInput.focus();
  }
}

function startResendCountdown() {
  let seconds = 60;
  const btn = document.getElementById('btnResendOtp');
  const timerText = document.getElementById('resendTimerText');

  if (resendIntervalTimer) clearInterval(resendIntervalTimer);

  if (btn) btn.disabled = true;

  resendIntervalTimer = setInterval(() => {
    seconds--;
    if (timerText) timerText.innerText = `(${seconds}s)`;
    if (seconds <= 0) {
      clearInterval(resendIntervalTimer);
      if (btn) btn.disabled = false;
      if (timerText) timerText.innerText = '';
    }
  }, 1000);
}

async function handleResendOtp() {
  if (!pendingRegistration) return;
  const isAr = state.lang === 'ar';
  const btn = document.getElementById('btnResendOtp');
  const originalHtml = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> ${isAr ? 'جاري الإرسال...' : 'Envoi...'}`;
  }

  const newCode = generate6DigitOtp();
  pendingRegistration.otpCode = newCode;
  pendingRegistration.expiresAt = Date.now() + 15 * 60 * 1000;
  try {
    localStorage.setItem('batihub_pending_reg', JSON.stringify(pendingRegistration));
  } catch (e) {}

  const mailResult = await sendVerificationEmail(pendingRegistration.email, newCode, 'register');

  if (btn) {
    btn.innerHTML = originalHtml;
  }

  if (mailResult && mailResult.success) {
    alert(isAr 
      ? 'تم إرسال رمز تحقق جديد إلى بريدك الإلكتروني بنجاح! تفقد بريدك الوارد.' 
      : 'Nouveau code envoyé avec succès ! Consultez votre boîte de réception.');
    startResendCountdown();
  } else {
    alert(isAr 
      ? 'تعذر إعادة إرسال الرمز، يرجى المحاولة بعد قليل.' 
      : 'Échec de l\'envoi du code. Veuillez réessayer.');
    if (btn) btn.disabled = false;
  }
}

// 2. VERIFY OTP FLOW
let isVerifyingOtp = false;
async function handleVerifyOtp(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (isVerifyingOtp) return;
  isVerifyingOtp = true;

  const rawInput = document.getElementById('inputOtpCode')?.value || '';
  const inputCode = rawInput.replace(/\D/g, '').trim();
  const isAr = state.lang === 'ar';
  const submitBtn = document.getElementById('btnSubmitOtp');
  const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';

  try {
    const reg = getPendingRegistration();
    if (!reg) {
      alert(isAr ? 'انتهت صلاحية الجلسة، يرجى ملء استمارة التسجيل مرة أخرى' : 'Session expirée. Veuillez recommencer l\'inscription.');
      switchAuthView('register');
      return;
    }

    if (Date.now() > reg.expiresAt) {
      alert(isAr ? 'انتهت صلاحية هذا الرمز (15 دقيقة). يرجى طلب رمز جديد بالضغط على "إعادة إرسال الرمز".' : 'Ce code a expiré. Veuillez en demander un nouveau.');
      return;
    }

    if (!inputCode || inputCode.length !== 6) {
      alert(isAr ? 'يرجى إدخال رمز التحقق المكون من 6 أرقام كاملاً' : 'Veuillez saisir le code complet à 6 chiffres.');
      return;
    }

    if (inputCode !== String(reg.otpCode).trim()) {
      alert(isAr ? 'رمز التحقق غير صحيح، يرجى التأكد من الرمز المدخل وإعادة المحاولة' : 'Code de vérification incorrect. Veuillez vérifier.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> ${isAr ? 'جاري تأكيد وإنشاء الحساب...' : 'Création du compte en cours...'}`;
    }

    // Account confirmed & verified!
    const accounts = getStoredAccounts();
    const initial = ((reg.firstName || 'B').charAt(0)).toUpperCase();
    const avatarSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="%23ffa000"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="%2306080c" font-family="sans-serif" font-size="28" font-weight="bold">${initial}</text></svg>`;

    const userRecord = {
      id: 'usr_' + Date.now(),
      firstName: reg.firstName,
      lastName: reg.lastName,
      fullName: reg.fullName,
      dob: reg.dob,
      email: reg.email,
      passwordHash: reg.passwordHash,
      salt: reg.salt,
      isVerified: true,
      avatar: avatarSvg,
      createdAt: new Date().toISOString()
    };

    accounts[reg.email] = userRecord;
    saveStoredAccounts(accounts);

    // Set active session
    const activeSession = {
      name: userRecord.fullName || userRecord.email,
      email: userRecord.email,
      avatar: avatarSvg,
      token: 'bth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8),
      passwordHash: userRecord.passwordHash,
      signedAt: new Date().toISOString()
    };
    localStorage.setItem('batihub_user', JSON.stringify(activeSession));
    if (window.electronDB && window.electronDB.saveActiveSession) {
      window.electronDB.saveActiveSession(activeSession);
    }

    // Save profile to device remembered list
    saveProfileToDeviceList(userRecord.email, activeSession.name, avatarSvg);

    // Clear pending registration
    pendingRegistration = null;
    localStorage.removeItem('batihub_pending_reg');

    // Update Header UI
    const nameDisplay = document.getElementById('userNameDisplay');
    const avatarImg = document.getElementById('userAvatarImg');
    if (nameDisplay) nameDisplay.innerText = activeSession.name;
    if (avatarImg) avatarImg.src = avatarSvg;

    // Show Dashboard
    const appDashboard = document.getElementById('appDashboard');
    if (appDashboard) appDashboard.classList.remove('hidden');

    // Dismiss auth gate
    const authGate = document.getElementById('authGateScreen');
    if (authGate) {
      authGate.classList.add('auth-hide');
      setTimeout(() => {
        authGate.style.display = 'none';
      }, 450);
    }

    // Confetti celebration
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffa000', '#ff6d00', '#ffc107', '#ffffff']
      });
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span data-i18n="auth_btn_verify_otp">${isAr ? 'تم تأكيد الحساب بنجاح!' : 'Compte confirmé avec succès !'}</span>`;
    }
  } catch (err) {
    console.error('Error in handleVerifyOtp:', err);
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
    alert(isAr ? `حدث خطأ أثناء تأكيد الرمز: ${err.message}` : `Erreur lors de la vérification : ${err.message}`);
  } finally {
    isVerifyingOtp = false;
  }
}

// 3. LOGIN FLOW
async function handleUserLogin(e) {
  if (e && e.preventDefault) e.preventDefault();

  const email = (document.getElementById('loginEmail')?.value || '').trim().toLowerCase();
  const password = document.getElementById('loginPassword')?.value || '';
  const isAr = state.lang === 'ar';

  if (!email || !password) {
    alert(isAr ? 'يرجى إدخال البريد الإلكتروني وكلمة المرور' : 'Veuillez saisir votre Gmail et mot de passe.');
    return;
  }

  const accounts = getStoredAccounts();
  const user = accounts[email];

  if (!user) {
    alert(isAr ? 'هذا الحساب غير مسجل بعد. يرجى إنشاء حساب جديد أولاً.' : 'Aucun compte trouvé avec cet email. Veuillez créer un compte.');
    switchAuthView('register');
    const regEmailInput = document.getElementById('regEmail');
    if (regEmailInput) regEmailInput.value = email;
    return;
  }

  // Verify password hash
  const checkHash = await hashPassword(password, user.salt);
  if (checkHash !== user.passwordHash) {
    alert(isAr ? 'كلمة المرور غير صحيحة! يرجى المحاولة مجدداً أو النقر على "نسيت كلمة المرور؟"' : 'Mot de passe incorrect. Veuillez réessayer ou cliquer sur "Mot de passe oublié ?".');
    return;
  }

  // Login successful
  const initial = ((user.firstName || user.fullName || 'B').charAt(0)).toUpperCase();
  const avatarSvg = user.avatar || `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="%23ffa000"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="%2306080c" font-family="sans-serif" font-size="28" font-weight="bold">${initial}</text></svg>`;

  const activeSession = {
    name: user.fullName || user.firstName || user.email,
    email: user.email,
    role: user.role || (user.email === 'batihubdz@gmail.com' ? 'admin' : 'user'),
    avatar: avatarSvg,
    token: 'bth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8),
    passwordHash: user.passwordHash,
    signedAt: new Date().toISOString()
  };
  localStorage.setItem('batihub_user', JSON.stringify(activeSession));
  if (window.electronDB && window.electronDB.saveActiveSession) {
    window.electronDB.saveActiveSession(activeSession);
  }

  // Save profile to device remembered list (exclude super admin to keep it completely private)
  const rememberCheck = document.getElementById('rememberMeCheck');
  if (user.email !== 'batihubdz@gmail.com' && (!rememberCheck || rememberCheck.checked)) {
    saveProfileToDeviceList(user.email, activeSession.name, avatarSvg);
  }

  // Update Header UI
  const nameDisplay = document.getElementById('userNameDisplay');
  const avatarImg = document.getElementById('userAvatarImg');
  if (nameDisplay) nameDisplay.innerText = activeSession.name;
  if (avatarImg) avatarImg.src = avatarSvg;

  // Show Dashboard
  const appDashboard = document.getElementById('appDashboard');
  if (appDashboard) appDashboard.classList.remove('hidden');

  // Dismiss auth gate
  const authGate = document.getElementById('authGateScreen');
  if (authGate) {
    authGate.classList.add('auth-hide');
    setTimeout(() => {
      authGate.style.display = 'none';
    }, 450);
  }
}

// 4. FORGOT PASSWORD FLOW
async function handleSendPasswordResetCode() {
  const email = (document.getElementById('forgotEmail')?.value || '').trim().toLowerCase();
  const isAr = state.lang === 'ar';

  if (!isValidEmail(email)) {
    alert(isAr 
      ? 'عنوان البريد الإلكتروني غير صحيح! يرجى إدخال بريد إلكتروني صالح.' 
      : 'Veuillez saisir une adresse Gmail valide.');
    return;
  }

  const accounts = getStoredAccounts();
  if (!accounts[email]) {
    alert(isAr 
      ? 'هذا البريد الإلكتروني غير مسجل لدينا في منصة BatiHub DZ! يرجى التأكد من البريد أو إنشاء حساب جديد.' 
      : 'Cet email n\'est pas enregistré sur la plateforme.');
    return;
  }

  const btn = document.getElementById('btnSendPasswordReset');
  const origHtml = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> ${isAr ? 'جاري إرسال الرمز إلى بريدك...' : 'Envoi en cours...'}`;
  }

  const resetCode = generate6DigitOtp();
  pendingPasswordReset = {
    email: email,
    code: resetCode,
    expiresAt: Date.now() + 15 * 60 * 1000
  };

  const mailResult = await sendVerificationEmail(email, resetCode, 'reset');

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = origHtml;
  }

  if (!mailResult || !mailResult.success) {
    const errorDetail = mailResult && mailResult.error ? `\n(${mailResult.error})` : '';
    alert(isAr 
      ? `تعذر إرسال رمز إعادة التعيين إلى بريدك الإلكتروني!${errorDetail}` 
      : `Impossible d'envoyer le code de réinitialisation.${errorDetail}`);
    return;
  }

  document.getElementById('forgotStepRequest')?.classList.add('hidden');
  document.getElementById('forgotStepReset')?.classList.remove('hidden');

  alert(isAr 
    ? 'تم إرسال رمز إعادة التعيين بنجاح إلى بريدك الإلكتروني! تفقد صندوق الوارد أو البريد غير المرغوب فيه (Spam).' 
    : 'Code de réinitialisation envoyé avec succès à votre Gmail !');
}

async function handleConfirmPasswordReset() {
  const code = (document.getElementById('forgotOtpCode')?.value || '').trim();
  const newPwd = document.getElementById('forgotNewPassword')?.value || '';
  const confirmNewPwd = document.getElementById('forgotConfirmNewPassword')?.value || '';
  const isAr = state.lang === 'ar';

  if (!pendingPasswordReset) {
    alert(isAr ? 'انتهت صلاحية جلسة إعادة التعيين' : 'Session de réinitialisation expirée.');
    switchAuthView('forgot');
    return;
  }

  if (Date.now() > pendingPasswordReset.expiresAt) {
    alert(isAr ? 'انتهت صلاحية الرمز، يرجى طلب رمز جديد' : 'Le code a expiré.');
    return;
  }

  if (code !== pendingPasswordReset.code) {
    alert(isAr ? 'رمز التحقق غير صحيح، يرجى التأكد' : 'Code de vérification incorrect.');
    return;
  }

  if (newPwd.length < 6) {
    alert(isAr ? 'يجب أن تتكون كلمة المرور الجديدة من 6 أحرف على الأقل' : 'Le mot de passe doit comporter au moins 6 caractères.');
    return;
  }

  if (newPwd !== confirmNewPwd) {
    alert(isAr ? 'كلمتا المرور غير متطابقتين' : 'Les mots de passe ne correspondent pas.');
    return;
  }

  // Update account in encrypted database
  const accounts = getStoredAccounts();
  const user = accounts[pendingPasswordReset.email];
  if (user) {
    const newSalt = generateSalt();
    user.salt = newSalt;
    user.passwordHash = await hashPassword(newPwd, newSalt);
    accounts[pendingPasswordReset.email] = user;
    saveStoredAccounts(accounts);

    alert(isAr ? 'تم تحديث كلمة المرور بنجاح! يمكنك الآن تسجيل الدخول بها.' : 'Mot de passe réinitialisé avec succès ! Vous pouvez maintenant vous connecter.');
    pendingPasswordReset = null;

    switchAuthView('login');
    const loginEmailInput = document.getElementById('loginEmail');
    if (loginEmailInput) loginEmailInput.value = user.email;
  }
}

// Check session on startup
function checkAuthStatus() {
  const saved = localStorage.getItem('batihub_user');
  const authGate = document.getElementById('authGateScreen');
  const appDashboard = document.getElementById('appDashboard');
  const nameDisplay = document.getElementById('userNameDisplay');
  const avatarImg = document.getElementById('userAvatarImg');

  if (saved) {
    try {
      const user = JSON.parse(saved);
      const accounts = getStoredAccounts();
      const accountRecord = accounts[user.email?.toLowerCase()];

      // If user's password was changed in DB, invalidate saved session so they must log in with new password
      if (accountRecord && user.passwordHash && accountRecord.passwordHash !== user.passwordHash) {
        localStorage.removeItem('batihub_user');
        if (window.electronDB && window.electronDB.saveActiveSession) {
          window.electronDB.saveActiveSession(null);
        }
        alert(state.lang === 'ar' 
          ? 'تم تغيير كلمة المرور لهذا الحساب. يرجى إعادة تسجيل الدخول بكلمة المرور الجديدة لحفظها.' 
          : 'Le mot de passe de ce compte a été modifié. Veuillez vous reconnecter avec le nouveau mot de passe.');
      } else {
        if (nameDisplay) nameDisplay.innerText = user.name || 'Utilisateur';
        if (avatarImg && user.avatar) avatarImg.src = user.avatar;
        if (authGate) {
          authGate.classList.add('auth-hide');
          authGate.style.display = 'none';
        }
        if (appDashboard) {
          appDashboard.classList.remove('hidden');
        }
        return true;
      }
    } catch (e) {
      console.error('Error parsing stored user:', e);
    }
  }

  // Not logged in -> Keep dashboard completely hidden, show auth gate
  if (appDashboard) {
    appDashboard.classList.add('hidden');
  }
  if (authGate) {
    authGate.style.display = 'flex';
    authGate.classList.remove('auth-hide');
    switchAuthView('login');
    renderSavedAccounts();
  }
  return false;
}

function handleSignOut() {
  const isAr = state.lang === 'ar';
  const confirmMsg = isAr 
    ? 'هل أنت متأكد من رغبتك في تسجيل الخروج من حسابك؟' 
    : (state.lang === 'en' ? 'Are you sure you want to sign out?' : 'Voulez-vous vraiment vous déconnecter de votre compte ?');

  if (confirm(confirmMsg)) {
    closeUserProfileModal();
    localStorage.removeItem('batihub_user');
    if (window.electronDB && window.electronDB.saveActiveSession) {
      window.electronDB.saveActiveSession(null);
    }

    const nameDisplay = document.getElementById('userNameDisplay');
    const avatarImg = document.getElementById('userAvatarImg');
    if (nameDisplay) nameDisplay.innerText = isAr ? 'مستخدم' : (state.lang === 'en' ? 'User' : 'Utilisateur');
    if (avatarImg) avatarImg.src = 'assets/batihub_logo.png';

    const appDashboard = document.getElementById('appDashboard');
    if (appDashboard) appDashboard.classList.add('hidden');

    const authGate = document.getElementById('authGateScreen');
    if (authGate) {
      authGate.style.display = 'flex';
      authGate.classList.remove('auth-hide');
      switchAuthView('login');
      renderSavedAccounts();
    }
  }
}

// =========================================================================
// 5. YELLOW SPLASH LOADING SCREEN SEQUENCE (CLEAN LUXURY - NO SKIP)
// =========================================================================
function initSplashScreen() {
  const splash = document.getElementById('splashScreen');
  const bar = document.getElementById('splashProgressBar');
  const text = document.getElementById('splashStatusText');
  const percentText = document.getElementById('splashPercentText');

  if (!splash) {
    checkAuthStatus();
    return;
  }

  const steps = [
    { pct: 20, msg: "Initialisation du noyau BatiHub DZ..." },
    { pct: 45, msg: "Chargement des modules BTP & Architecture..." },
    { pct: 75, msg: "Chargement de la base des prix DTR Algérie 2026..." },
    { pct: 95, msg: "Configuration des paramètres de calcul..." },
    { pct: 100, msg: "Prêt ! Bienvenue sur BatiHub DZ." }
  ];

  let stepIdx = 0;

  function runStep() {
    if (stepIdx < steps.length) {
      const s = steps[stepIdx];
      if (bar) bar.style.width = `${s.pct}%`;
      if (text) text.innerText = s.msg;
      if (percentText) percentText.innerText = `${s.pct}%`;
      stepIdx++;
      setTimeout(runStep, 300);
    } else {
      setTimeout(() => {
        dismissSplash();
      }, 350);
    }
  }

  setTimeout(runStep, 150);
}

function dismissSplash() {
  const splash = document.getElementById('splashScreen');
  if (splash) {
    splash.classList.add('splash-hide');
    setTimeout(() => {
      splash.style.display = 'none';
      checkAuthStatus();
    }, 650);
  } else {
    checkAuthStatus();
  }
}

// =========================================================================
// 6. LANGUAGE SWITCHER LOGIC (100% PURE AR / FR / EN)
// =========================================================================
function setLanguage(lang) {
  state.lang = lang;
  const htmlRoot = document.getElementById('htmlRoot');

  // Active button styling
  ['FR', 'AR', 'EN'].forEach(code => {
    const btn = document.getElementById(`lang${code}`);
    if (btn) {
      if (code.toLowerCase() === lang) {
        btn.classList.add('active-lang');
        btn.classList.remove('text-slate-400');
      } else {
        btn.classList.remove('active-lang');
        btn.classList.add('text-slate-400');
      }
    }
  });

  if (lang === 'ar') {
    htmlRoot.setAttribute('dir', 'rtl');
    htmlRoot.setAttribute('lang', 'ar');
  } else {
    htmlRoot.setAttribute('dir', 'ltr');
    htmlRoot.setAttribute('lang', lang);
  }

  // Update i18n texts
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  renderApp();
}

// =========================================================================
// 7. CIVIL ENGINEERING CALCULATION ENGINE (ALGERIAN DTR B.C. 2.2 COMPLIANT)
// =========================================================================
function calculateProjectEstimates() {
  const landArea = state.landArea;
  const footprintArea = Math.min(state.footprintArea, landArea);
  const yardArea = Math.max(0, landArea - footprintArea);
  const floors = state.floorsCount;
  const overhangMultiplier = state.hasOverhang ? 1.10 : 1.0;

  // Total Gross Built Area
  let totalBuiltArea = footprintArea;
  if (floors > 1) {
    totalBuiltArea += (floors - 1) * (footprintArea * overhangMultiplier);
  }
  if (state.hasBasement) {
    totalBuiltArea += footprintArea;
  }

  const isLuxury = state.finishQuality === 'decorated';
  const isShell = state.finishQuality === 'shell';
  const isRaft = state.foundationType === 'raft';
  const lang = state.lang;

  // 1. Earthwork & Excavation
  const excavationDepth = state.hasBasement ? 3.5 : (isRaft ? 1.8 : 1.4);
  const excavationVol = footprintArea * excavationDepth * 1.15;
  const foundationStonesVol = isRaft ? 0 : footprintArea * 0.25;

  // 2. Reinforced Concrete Quantities
  const foundationConcreteRatio = isRaft ? 0.45 : 0.28;
  const foundationConcrete = footprintArea * foundationConcreteRatio;
  const upperConcrete = (totalBuiltArea - footprintArea) * 0.24;
  const groundSlabConcrete = footprintArea * 0.15;
  const totalConcreteM3 = foundationConcrete + upperConcrete + groundSlabConcrete;

  // 3. Cement (CPJ-CEM II 42.5)
  const cementKg = (totalConcreteM3 * 350) + (totalBuiltArea * 55);
  const cementBags = Math.ceil(cementKg / 50);
  const cementTonnes = cementKg / 1000;

  // 4. Steel Rebar FeE500
  const steelRatioKgPerM3 = isLuxury ? 115 : 100;
  const steelKg = totalConcreteM3 * steelRatioKgPerM3;
  const steelQuintals = steelKg / 100;
  const steelTonnes = steelKg / 1000;

  // 5. Aggregates (Sand & Gravel)
  const sandVol = totalConcreteM3 * 0.45 + (totalBuiltArea * 0.08);
  const gravelVol = totalConcreteM3 * 0.85;
  const sandTrucks = Math.ceil(sandVol / 16);
  const gravelTrucks = Math.ceil(gravelVol / 16);

  // 6. Masonry & Red Clay Bricks
  const wallSurfaceGross = totalBuiltArea * 1.8;
  const bricks12Count = Math.round(wallSurfaceGross * 0.55 * 18);
  const bricks8Count = Math.round(wallSurfaceGross * 0.45 * 19);
  const totalBricks = bricks12Count + bricks8Count;
  const hourdisCount = Math.round(totalBuiltArea * 0.85 * 8);

  // 7. Finishes Surfaces
  const plasterPlacoArea = isShell ? 0 : totalBuiltArea * 2.7;
  const plasterBags = isShell ? 0 : Math.ceil((plasterPlacoArea * 0.6) / 4);
  const ba13Sheets = isLuxury ? Math.ceil((totalBuiltArea * 0.9) / 3.0) : 0;

  const floorTilesArea = isShell ? 0 : totalBuiltArea * 0.95;
  const wallTilesArea = isShell ? 0 : totalBuiltArea * 0.35;
  const tileAdhesiveBags = isShell ? 0 : Math.ceil((floorTilesArea + wallTilesArea) / 4.5);

  const paintArea = isShell ? 0 : totalBuiltArea * 2.6;
  const paintPrimerKg = isShell ? 0 : Math.ceil(paintArea * 0.15);
  const paintLiters = isShell ? 0 : Math.ceil(paintArea * 0.35);

  const interiorDoors = isShell ? 0 : Math.max(3, Math.round(totalBuiltArea / 22));
  const exteriorDoors = isShell ? 0 : Math.max(1, Math.round(floors / 2));
  const windowsCount = isShell ? 0 : Math.max(4, Math.round(totalBuiltArea / 16));

  const waterproofingArea = footprintArea * 1.1;

  // 8. Civil Labor Area
  const laborShellM2 = totalBuiltArea;
  const laborPlasterM2 = isShell ? 0 : (isLuxury ? plasterPlacoArea * 0.4 : plasterPlacoArea);
  const laborDrywallM2 = isLuxury ? totalBuiltArea * 0.9 : 0;
  const laborTilingM2 = isShell ? 0 : floorTilesArea + wallTilesArea;
  const laborPaintM2 = isShell ? 0 : paintArea;

  const cesRatio = (footprintArea / landArea) * 100;
  const cosRatio = totalBuiltArea / landArea;
  const p = state.prices;

  function phName(fr, ar, en) {
    if (lang === 'ar') return ar;
    if (lang === 'en') return en;
    return fr;
  }

  const items = [];

  // Phase 1: Earthwork & Foundations
  items.push({
    id: 'excavation',
    phase: phName('Phase 1: Terrassement & Fondations', 'المرحلة 1: الحفر والتسوية والأساسات', 'Phase 1: Earthwork & Foundations'),
    category: 'structure',
    desc: phName('Fouilles en pleine masse, tranchées pour semelles & remblai compacté', 'حفر وتسوية وردم ميكانيكي للأساسات', 'Excavation, trenching & backfill compaction'),
    qty: Math.round(excavationVol),
    unit: p.excavation_m3.unit,
    unitPrice: p.excavation_m3.price,
    total: Math.round(excavationVol * p.excavation_m3.price)
  });

  if (foundationStonesVol > 0) {
    items.push({
      id: 'foundation_stones',
      phase: phName('Phase 1: Terrassement & Fondations', 'المرحلة 1: الحفر والتسوية والأساسات', 'Phase 1: Earthwork & Foundations'),
      category: 'structure',
      desc: phName('Moellons de calage pour hérissonage sous dallage', 'حجارة الدبش لفرشة الأساسات', 'Foundation packing rocks / Moellons hérissonage'),
      qty: Math.round(foundationStonesVol),
      unit: p.foundation_stones_m3.unit,
      unitPrice: p.foundation_stones_m3.price,
      total: Math.round(foundationStonesVol * p.foundation_stones_m3.price)
    });
  }

  // Phase 2: Reinforced Concrete Structure
  items.push({
    id: 'cement',
    phase: phName('Phase 2: Structure Béton Armé', 'المرحلة 2: الهيكل الخرساني المسلح', 'Phase 2: Reinforced Concrete Structure'),
    category: 'structure',
    desc: phName(`Ciment CPJ-CEM II 42.5 (${cementTonnes.toFixed(1)} T béton + mortiers)`, `إسمنت بورتلاندي CPJ 42.5 (${cementTonnes.toFixed(1)} طن إجمالي)`, `Portland Cement CPJ 42.5 (${cementTonnes.toFixed(1)} Tonnes)`),
    qty: cementBags,
    unit: p.cement_bag.unit,
    unitPrice: p.cement_bag.price,
    total: cementBags * p.cement_bag.price
  });

  items.push({
    id: 'steel',
    phase: phName('Phase 2: Structure Béton Armé', 'المرحلة 2: الهيكل الخرساني المسلح', 'Phase 2: Reinforced Concrete Structure'),
    category: 'structure',
    desc: phName(`Acier FeE500 haute adhérence (${steelTonnes.toFixed(2)} T pour poteaux, poutres & dalles)`, `حديد التسليح FeE500 (${steelTonnes.toFixed(2)} طن)`, `High-Bond Rebar FeE500 (${steelTonnes.toFixed(2)} Tonnes)`),
    qty: Math.round(steelQuintals * 10) / 10,
    unit: p.steel_quintal.unit,
    unitPrice: p.steel_quintal.price,
    total: Math.round(steelQuintals * p.steel_quintal.price)
  });

  items.push({
    id: 'sand',
    phase: phName('Phase 2: Structure Béton Armé', 'المرحلة 2: الهيكل الخرساني المسلح', 'Phase 2: Reinforced Concrete Structure'),
    category: 'structure',
    desc: phName('Sable de carrière lavé pour béton et mortiers', 'رمل مغسول للخرسانة والمونة واللياسة', 'Washed river sand for concrete & mortars'),
    qty: Math.round(sandVol),
    unit: p.sand_m3.unit,
    unitPrice: p.sand_m3.price,
    total: Math.round(sandVol * p.sand_m3.price)
  });

  items.push({
    id: 'gravel',
    phase: phName('Phase 2: Structure Béton Armé', 'المرحلة 2: الهيكل الخرساني المسلح', 'Phase 2: Reinforced Concrete Structure'),
    category: 'structure',
    desc: phName('Gravier concassé calibré (8/15 et 15/25) pour béton armé', 'حصى مكسر متدرج للخرسانة المسلحة', 'Crushed calibrated gravel for reinforced concrete'),
    qty: Math.round(gravelVol),
    unit: p.gravel_m3.unit,
    unitPrice: p.gravel_m3.price,
    total: Math.round(gravelVol * p.gravel_m3.price)
  });

  items.push({
    id: 'waterproofing',
    phase: phName('Phase 2: Structure Béton Armé', 'المرحلة 2: الهيكل الخرساني المسلح', 'Phase 2: Reinforced Concrete Structure'),
    category: 'structure',
    desc: phName('Étanchéité multicouche toiture terrasse avec forme de pente et Paxalu 4mm', 'عزل مائي وحراري للأسطح مع طبقة الميلان وبكسالو 4ملم', 'Terrace roof multi-layer waterproofing with Paxalu 4mm'),
    qty: Math.round(waterproofingArea),
    unit: p.waterproofing_m2.unit,
    unitPrice: p.waterproofing_m2.price,
    total: Math.round(waterproofingArea * p.waterproofing_m2.price)
  });

  // Phase 3: Masonry & Hollow Blocks
  items.push({
    id: 'brick12',
    phase: phName('Phase 3: Maçonnerie & Cloisons', 'المرحلة 3: البناء والآجر والجدران', 'Phase 3: Masonry & Walls'),
    category: 'masonry',
    desc: phName('Brique rouge en terre cuite 12 trous pour murs extérieurs doubles', 'آجر أحمر 12 فتحة للجدران الخارجية المزدوجة', '12-Hole red clay brick for external double walls'),
    qty: bricks12Count,
    unit: p.brick_12.unit,
    unitPrice: p.brick_12.price,
    total: bricks12Count * p.brick_12.price
  });

  items.push({
    id: 'brick8',
    phase: phName('Phase 3: Maçonnerie & Cloisons', 'المرحلة 3: البناء والآجر والجدران', 'Phase 3: Masonry & Walls'),
    category: 'masonry',
    desc: phName('Brique rouge 8 trous pour cloisons intérieures et séparations', 'آجر أحمر 8 فتحات للقواطع والغرف الداخلية', '8-Hole red brick for interior partition walls'),
    qty: bricks8Count,
    unit: p.brick_8.unit,
    unitPrice: p.brick_8.price,
    total: bricks8Count * p.brick_8.price
  });

  items.push({
    id: 'hourdis',
    phase: phName('Phase 3: Maçonnerie & Cloisons', 'المرحلة 3: البناء والآجر والجدران', 'Phase 3: Masonry & Walls'),
    category: 'masonry',
    desc: phName('Corps creux / Hourdis 16+4 pour planchers à poutrelles', 'هوردي وقوالب مفرغة 16+4 للأسقف والبلاطات', 'Hollow floor hourdis blocks 16+4 for ribbed slabs'),
    qty: hourdisCount,
    unit: p.hourdis_piece.unit,
    unitPrice: p.hourdis_piece.price,
    total: hourdisCount * p.hourdis_piece.price
  });

  // Phase 4: Plaster & False Ceilings
  if (!isShell) {
    if (plasterBags > 0) {
      items.push({
        id: 'plaster',
        phase: phName('Phase 4: Plâtrerie & Faux Plafonds', 'المرحلة 4: اللياسة والأسقف الجبسية', 'Phase 4: Plaster & Ceilings'),
        category: 'finishes',
        desc: phName('Plâtre traditionnel de construction pour enduits muraux lissés', 'جبس بناء تقليدي للياسة الجدران الداخلية وتنعيمها', 'Traditional gypsum plaster for smooth interior wall coats'),
        qty: plasterBags,
        unit: p.plaster_bag.unit,
        unitPrice: p.plaster_bag.price,
        total: plasterBags * p.plaster_bag.price
      });
    }

    if (ba13Sheets > 0) {
      items.push({
        id: 'ba13',
        phase: phName('Phase 4: Plâtrerie & Faux Plafonds', 'المرحلة 4: اللياسة والأسقف الجبسية', 'Phase 4: Plaster & Ceilings'),
        category: 'finishes',
        desc: phName('Plaques de plâtre BA13 avec suspentes, rails et gorges LED décoratives', 'ألواح جبس بورد BA13 مع شاسيه حديدي ومسارات إضاءة مخفية', 'BA13 plasterboard sheets with framing & LED light coves'),
        qty: ba13Sheets,
        unit: p.ba13_sheet.unit,
        unitPrice: p.ba13_sheet.price,
        total: ba13Sheets * p.ba13_sheet.price
      });
    }
  }

  // Phase 5: Flooring & Wall Tiles
  if (!isShell) {
    const floorPrice = isLuxury ? p.tile_floor_luxury.price : p.tile_floor_std.price;
    const floorDesc = isLuxury 
      ? phName('Grès cérame rectifié 60x60 premier choix avec plinthes assorties', 'بورسلان رفيع 60×60 مع حواف حائطية متناسقة', 'Rectified 60x60 porcelain floor stoneware with matching skirting')
      : phName('Carrelage monocuisson émaillé standard avec plinthes', 'سيراميك أرضي كلاسيكي متين مع حواف حائطية', 'Standard glazed ceramic floor tiles with skirting');

    items.push({
      id: 'tile_floor',
      phase: phName('Phase 5: Revêtements Sols & Murs', 'المرحلة 5: تبليط الأرضيات والحوائط', 'Phase 5: Floor & Wall Tiling'),
      category: 'finishes',
      desc: floorDesc,
      qty: Math.round(floorTilesArea),
      unit: 'm²',
      unitPrice: floorPrice,
      total: Math.round(floorTilesArea * floorPrice)
    });

    const wallTilePrice = isLuxury ? p.tile_wall_luxury.price : p.tile_wall_std.price;
    const wallTileDesc = isLuxury
      ? phName('Faïence décorative rectifiée grand format pour SDB et cuisine', 'سيراميك حائطي فاخر قياس كبير للحمامات والمطابخ', 'Luxury rectified wall tiles for bathrooms and kitchens')
      : phName('Faïence murale standard pour pièces d\'eau', 'سيراميك حوائط كلاسيكي للحمامات والمطبخ', 'Standard ceramic wall tiles for wet rooms');

    items.push({
      id: 'tile_wall',
      phase: phName('Phase 5: Revêtements Sols & Murs', 'المرحلة 5: تبليط الأرضيات والحوائط', 'Phase 5: Floor & Wall Tiling'),
      category: 'finishes',
      desc: wallTileDesc,
      qty: Math.round(wallTilesArea),
      unit: 'm²',
      unitPrice: wallTilePrice,
      total: Math.round(wallTilesArea * wallTilePrice)
    });

    items.push({
      id: 'tile_adhesive',
      phase: phName('Phase 5: Revêtements Sols & Murs', 'المرحلة 5: تبليط الأرضيات والحوائط', 'Phase 5: Floor & Wall Tiling'),
      category: 'finishes',
      desc: phName('Mortier colle haute performance et joint de carrelage hydrofuge', 'غراء إسمنتي عالي الالتصاق ومعجون فواصل مقاوم للرطوبة', 'High-performance tile adhesive & water-repellent joint grout'),
      qty: tileAdhesiveBags,
      unit: p.tile_adhesive_bag.unit,
      unitPrice: p.tile_adhesive_bag.price,
      total: tileAdhesiveBags * p.tile_adhesive_bag.price
    });
  }

  // Phase 6: Painting & Decorative Finishes
  if (!isShell) {
    items.push({
      id: 'paint_primer',
      phase: phName('Phase 6: Peinture & Décoration', 'المرحلة 6: الدهان والديكور', 'Phase 6: Painting & Decoration'),
      category: 'finishes',
      desc: phName('Primaire d\'imprégnation et fixateur de fond pour plâtre et maçonnerie', 'دهان أساس تمهيدي ومثبت لأسطح الجبس والجدران', 'Penetrating primer & substrate sealer for plaster & walls'),
      qty: paintPrimerKg,
      unit: p.paint_primer_kg.unit,
      unitPrice: p.paint_primer_kg.price,
      total: paintPrimerKg * p.paint_primer_kg.price
    });

    items.push({
      id: 'paint_wall_std',
      phase: phName('Phase 6: Peinture & Décoration', 'المرحلة 6: الدهان والديكور', 'Phase 6: Painting & Decoration'),
      category: 'finishes',
      desc: phName('Peinture acrylique satinée lavable blanche pour plafonds et chambres', 'دهان أكريليك حريري قابل للغسل للأسقف والغرف', 'Washable satin acrylic wall paint for bedrooms and ceilings'),
      qty: paintLiters,
      unit: p.paint_wall_std_L.unit,
      unitPrice: p.paint_wall_std_L.price,
      total: paintLiters * p.paint_wall_std_L.price
    });

    if (isLuxury) {
      const decorLiters = Math.ceil(paintLiters * 0.4);
      items.push({
        id: 'paint_decor',
        phase: phName('Phase 6: Peinture & Décoration', 'المرحلة 6: الدهان والديكور', 'Phase 6: Painting & Decoration'),
        category: 'finishes',
        desc: phName('Enduit décoratif haut de gamme effet sablé / Stucco / Carénia', 'دهانات ديكورية فاخرة بالرمل والستوكو والكارينيا للصالون والممرات', 'Luxury decorative textured coating (Stucco/Carénia/Sablé) for living areas'),
        qty: decorLiters,
        unit: p.paint_wall_decor_L.unit,
        unitPrice: p.paint_wall_decor_L.price,
        total: decorLiters * p.paint_wall_decor_L.price
      });
    }
  }

  // Phase 7: Joinery & Openings
  if (!isShell) {
    const doorPrice = isLuxury ? p.door_interior_luxury.price : p.door_interior_std.price;
    const doorDesc = isLuxury
      ? phName('Porte intérieure design contemporain avec chambranle et poignée inox', 'أبواب داخلية عصرية بتصميم فخم ومقابض غير قابلة للصدأ', 'Contemporary flush interior design doors with stainless hardware')
      : phName('Porte isoplane prépeinte avec huisserie métallique standard', 'أبواب خشبية مدمجة قياسية مع إطارات معدنية', 'Standard flush interior doors with frames');

    items.push({
      id: 'door_interior',
      phase: phName('Phase 7: Menuiserie Bois & Aluminium', 'المرحلة 7: النجارة والألمنيوم', 'Phase 7: Doors & Windows'),
      category: 'finishes',
      desc: doorDesc,
      qty: interiorDoors,
      unit: 'Unité',
      unitPrice: doorPrice,
      total: interiorDoors * doorPrice
    });

    items.push({
      id: 'door_exterior',
      phase: phName('Phase 7: Menuiserie Bois & Aluminium', 'المرحلة 7: النجارة والألمنيوم', 'Phase 7: Doors & Windows'),
      category: 'finishes',
      desc: phName('Porte d\'entrée principale blindée multipoints haute sécurité', 'باب مدخل رئيسي مصفح بأقفال أمان متعددة النقاط', 'Multi-point reinforced high-security armored entrance door'),
      qty: exteriorDoors,
      unit: 'Unité',
      unitPrice: p.door_exterior_armored.price,
      total: exteriorDoors * p.door_exterior_armored.price
    });

    const windowPrice = isLuxury ? p.window_alu_thermal.price : p.window_alu_std.price;
    const windowDesc = isLuxury
      ? phName('Fenêtre aluminium à rupture de pont thermique et double vitrage isolant 4/12/4', 'نوافذ ألمنيوم عازل حرارياً مع زجاج مزدوج عازل', 'Thermal break aluminum windows with insulated double glazing')
      : phName('Fenêtre aluminium profil standard laqué blanc avec vitrage clair', 'نوافذ ألمنيوم قياسية بيضاء مع زجاج شفاف', 'Standard white aluminum windows with clear glazing');

    items.push({
      id: 'windows_alu',
      phase: phName('Phase 7: Menuiserie Bois & Aluminium', 'المرحلة 7: النجارة والألمنيوم', 'Phase 7: Doors & Windows'),
      category: 'finishes',
      desc: windowDesc,
      qty: windowsCount,
      unit: 'Unité',
      unitPrice: windowPrice,
      total: windowsCount * windowPrice
    });
  }

  // Phase 8: Plumbing & Electrical (MEP)
  if (!isShell) {
    const plumbingPrice = isLuxury ? p.plumbing_m2_luxury.price : p.plumbing_m2_std.price;
    const plumbingDesc = isLuxury
      ? phName('Plomberie encastrée multicouche, chauffe-eau solaire & sanitaires suspendus', 'شبكة سباكة متعددة الطبقات وتجهيزات صحية معلقة وسخان شمسي', 'Concealed multilayer plumbing network, solar water heater & wall-hung sanitaries')
      : phName('Réseau plomberie sanitaire PPR/PVC avec équipement standard', 'تمديدات سباكة وصرف صحي وتجهيزات حمام ومطبخ عادية', 'Standard PPR/PVC water supply, drainage and sanitary fixtures');

    items.push({
      id: 'plumbing',
      phase: phName('Phase 8: Plomberie & Électricité', 'المرحلة 8: الكهرباء والسباكة', 'Phase 8: MEP & Utilities'),
      category: 'mep',
      desc: plumbingDesc,
      qty: Math.round(totalBuiltArea),
      unit: 'm²',
      unitPrice: plumbingPrice,
      total: Math.round(totalBuiltArea * plumbingPrice)
    });

    const electricalPrice = isLuxury ? p.electrical_m2_luxury.price : p.electrical_m2_std.price;
    const electricalDesc = isLuxury
      ? phName('Installation électrique complète, spots LED encastrés, va-et-vient et pré-équipement domotique', 'تأسيسات كهربائية متطورة مع سبوت لايت وتجهيزات سمارت', 'Full architectural electrical distribution, recessed LED spots and smart-ready cabling')
      : phName('Installation électrique classique selon norme NF C 15-100 avec tableau divisionnaire', 'تأسيسات كهربائية قياسية وتوزيع إنارة ومآخذ ولوحة قواطع', 'Standard electrical wiring, sockets, lighting points and main breaker panel');

    items.push({
      id: 'electrical',
      phase: phName('Phase 8: Plomberie & Électricité', 'المرحلة 8: الكهرباء والسباكة', 'Phase 8: MEP & Utilities'),
      category: 'mep',
      desc: electricalDesc,
      qty: Math.round(totalBuiltArea),
      unit: 'm²',
      unitPrice: electricalPrice,
      total: Math.round(totalBuiltArea * electricalPrice)
    });
  }

  // Phase 9: Skilled Labor (Main d'œuvre)
  items.push({
    id: 'labor_shell',
    phase: phName('Phase 9: Main d\'œuvre Qualifiée', 'المرحلة 9: أجرة اليد العاملة', 'Phase 9: Skilled Construction Labor'),
    category: 'labor',
    desc: phName('Main d\'œuvre maçonnerie, coffrage, ferraillage & coulage dalle', 'أجرة البنائين للهيكل الخرساني والنجارة والحديد والصب', 'Civil masonry, formwork, steel bending & concrete labor'),
    qty: Math.round(laborShellM2),
    unit: p.labor_shell_m2.unit,
    unitPrice: p.labor_shell_m2.price,
    total: Math.round(laborShellM2 * p.labor_shell_m2.price)
  });

  if (!isShell) {
    if (laborDrywallM2 > 0) {
      items.push({
        id: 'labor_drywall',
        phase: phName('Phase 9: Main d\'œuvre Qualifiée', 'المرحلة 9: أجرة اليد العاملة', 'Phase 9: Skilled Construction Labor'),
        category: 'labor',
        desc: phName('Poseur faux plafonds placo BA13 & gorges décoratives', 'أجرة تركيب أسقف الجبس والديكور والإضاءة المخفية', 'Specialized BA13 ceiling installation & cove labor'),
        qty: Math.round(laborDrywallM2),
        unit: p.labor_drywall_ba13_m2.unit,
        unitPrice: p.labor_drywall_ba13_m2.price,
        total: Math.round(laborDrywallM2 * p.labor_drywall_ba13_m2.price)
      });
    }

    if (laborPlasterM2 > 0) {
      items.push({
        id: 'labor_plaster',
        phase: phName('Phase 9: Main d\'œuvre Qualifiée', 'المرحلة 9: أجرة اليد العاملة', 'Phase 9: Skilled Construction Labor'),
        category: 'labor',
        desc: phName('Plâtrier pour enduits intérieurs et finitions', 'أجرة اللياسة والجبس للجدران', 'Wall plastering & rendering labor'),
        qty: Math.round(laborPlasterM2),
        unit: p.labor_plaster_std_m2.unit,
        unitPrice: p.labor_plaster_std_m2.price,
        total: Math.round(laborPlasterM2 * p.labor_plaster_std_m2.price)
      });
    }

    items.push({
      id: 'labor_tiling',
      phase: phName('Phase 9: Main d\'œuvre Qualifiée', 'المرحلة 9: أجرة اليد العاملة', 'Phase 9: Skilled Construction Labor'),
      category: 'labor',
      desc: phName('Carreleur pour pose carrelage et faïence', 'أجرة تبليط الأرضيات والحوائط', 'Floor and wall ceramic tiling labor'),
      qty: Math.round(laborTilingM2),
      unit: p.labor_tiling_m2.unit,
      unitPrice: p.labor_tiling_m2.price,
      total: Math.round(laborTilingM2 * p.labor_tiling_m2.price)
    });

    items.push({
      id: 'labor_painting',
      phase: phName('Phase 9: Main d\'œuvre Qualifiée', 'المرحلة 9: أجرة اليد العاملة', 'Phase 9: Skilled Construction Labor'),
      category: 'labor',
      desc: isLuxury 
        ? phName('Peintre décorateur pour effets sablés et stucco', 'أجرة الدهان المعماري والديكوري الراقي', 'Master painter decorative coating & stucco labor') 
        : phName('Peintre en bâtiment pour couches de finition', 'أجرة الدهان الداخلي العادي', 'Standard interior wall painting labor'),
      qty: Math.round(laborPaintM2),
      unit: 'm²',
      unitPrice: isLuxury ? p.labor_painting_decor_m2.price : p.labor_painting_std_m2.price,
      total: Math.round(laborPaintM2 * (isLuxury ? p.labor_painting_decor_m2.price : p.labor_painting_std_m2.price))
    });
  }

  // Totals
  const subtotalCost = items.reduce((sum, item) => sum + item.total, 0);
  const contingencyAmount = Math.round(subtotalCost * state.contingencyRate);
  const totalCost = subtotalCost + contingencyAmount;
  const costPerM2 = Math.round(totalCost / totalBuiltArea);

  // Group by Phase
  const phasesMap = {};
  items.forEach(it => {
    if (!phasesMap[it.phase]) {
      phasesMap[it.phase] = { name: it.phase, total: 0, items: [] };
    }
    phasesMap[it.phase].total += it.total;
    phasesMap[it.phase].items.push(it);
  });
  const phases = Object.values(phasesMap);

  // Group by Category
  const categories = {
    structure: items.filter(i => i.category === 'structure').reduce((s, i) => s + i.total, 0),
    masonry: items.filter(i => i.category === 'masonry').reduce((s, i) => s + i.total, 0),
    finishes: items.filter(i => i.category === 'finishes').reduce((s, i) => s + i.total, 0),
    mep: items.filter(i => i.category === 'mep').reduce((s, i) => s + i.total, 0),
    labor: items.filter(i => i.category === 'labor').reduce((s, i) => s + i.total, 0)
  };

  // Specific Material Cost Totals
  const cementCost = cementBags * p.cement_bag.price;
  const steelCost = Math.round(steelQuintals * p.steel_quintal.price);
  const bricksCost = (bricks12Count * p.brick_12.price) + (bricks8Count * p.brick_8.price);
  const sandCost = Math.round(sandVol) * p.sand_m3.price;
  const gravelCost = Math.round(gravelVol) * p.gravel_m3.price;
  const hourdisStonesCost = (hourdisCount * p.hourdis_piece.price) + (Math.round(foundationStonesVol) * p.foundation_stones_m3.price);

  return {
    landArea,
    footprintArea,
    yardArea,
    totalBuiltArea,
    floors,
    cesRatio,
    cosRatio,
    cementBags,
    cementTonnes,
    cementCost,
    steelKg,
    steelQuintals,
    steelTonnes,
    steelCost,
    sandVol,
    sandTrucks,
    sandCost,
    gravelVol,
    gravelTrucks,
    gravelCost,
    bricks12Count,
    bricks8Count,
    totalBricks,
    bricksCost,
    hourdisCount,
    foundationStonesVol,
    hourdisStonesCost,
    waterproofingArea,
    floorTilesArea,
    wallTilesArea,
    items,
    phases,
    categories,
    subtotalCost,
    contingencyAmount,
    totalCost,
    costPerM2,
    estimatedDurationMonths: Math.max(4, Math.round(3 + (totalBuiltArea / 60)))
  };
}

// =========================================================================
// 8. FORMATTING & LOCALIZATION HELPERS
// =========================================================================
function formatCurrency(amountDZD) {
  const isAr = state.lang === 'ar';
  const isEn = state.lang === 'en';

  if (state.currency === 'USD') {
    const usd = amountDZD / state.exchangeRate;
    const formatted = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0
    }).format(usd);
    return isAr ? `${formatted} دولار ($)` : (isEn ? `$${formatted}` : `${formatted} $`);
  } else {
    const formatted = new Intl.NumberFormat('fr-FR', {
      maximumFractionDigits: 0
    }).format(amountDZD);
    return isAr ? `${formatted} د.ج` : (isEn ? `${formatted} DZD` : `${formatted} DZD`);
  }
}

function getConvertedUnitPrice(priceDZD) {
  const isAr = state.lang === 'ar';
  const isEn = state.lang === 'en';

  if (state.currency === 'USD') {
    const usd = priceDZD / state.exchangeRate;
    const val = usd < 10 ? usd.toFixed(2) : Math.round(usd).toLocaleString('en-US');
    return isAr ? `${val} $` : (isEn ? `$${val}` : `${val} $`);
  }
  const formatted = Number(priceDZD).toLocaleString('fr-FR');
  return isAr ? `${formatted} د.ج` : (isEn ? `${formatted} DZD` : `${formatted} DZD`);
}

function formatUnit(unit, lang) {
  const unitMap = {
    ar: {
      'Sac (50kg)': 'كيس (50 كغ)',
      'Quintal (100kg)': 'قنطار (100 كغ)',
      'Sac (40kg)': 'كيس (40 كغ)',
      'Sac (25kg)': 'كيس (25 كغ)',
      'Pièce': 'حبة / قطعة',
      'Plaque': 'لوح',
      'Unité': 'وحدة',
      'Litre': 'لتر',
      'kg': 'كغ',
      'm²': 'م²',
      'm³': 'م³'
    },
    en: {
      'Sac (50kg)': 'Bag (50kg)',
      'Quintal (100kg)': 'Quintal (100kg)',
      'Sac (40kg)': 'Bag (40kg)',
      'Sac (25kg)': 'Bag (25kg)',
      'Pièce': 'Piece',
      'Plaque': 'Sheet',
      'Unité': 'Unit',
      'Litre': 'Liter',
      'kg': 'kg',
      'm²': 'sqm',
      'm³': 'cbm'
    },
    fr: {
      'Sac (50kg)': 'Sac (50kg)',
      'Quintal (100kg)': 'Quintal (100kg)',
      'Sac (40kg)': 'Sac (40kg)',
      'Sac (25kg)': 'Sac (25kg)',
      'Pièce': 'Pièce',
      'Plaque': 'Plaque',
      'Unité': 'Unité',
      'Litre': 'Litre',
      'kg': 'kg',
      'm²': 'm²',
      'm³': 'm³'
    }
  };

  return (unitMap[lang] && unitMap[lang][unit]) || unit;
}

function getCategoryBadge(category, lang) {
  const labels = {
    ar: {
      structure: 'الهيكل الخرساني',
      masonry: 'البناء والآجر',
      finishes: 'التشطيبات والديكور',
      mep: 'الكهرباء والسباكة',
      labor: 'اليد العاملة'
    },
    en: {
      structure: 'Structure',
      masonry: 'Masonry',
      finishes: 'Finishes',
      mep: 'MEP (Utilities)',
      labor: 'Labor'
    },
    fr: {
      structure: 'Structure',
      masonry: 'Maçonnerie',
      finishes: 'Finitions',
      mep: 'MEP (Fluides)',
      labor: 'Main d\'œuvre'
    }
  }[lang] || {};

  const styles = {
    structure: 'bg-sky-500/20 text-sky-400 border border-sky-500/30',
    masonry: 'bg-bh-orange/20 text-bh-orange border border-bh-orange/30',
    finishes: 'bg-bh-yellow/20 text-bh-yellow border border-bh-yellow/30',
    mep: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    labor: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
  };

  return `<span class="${styles[category] || ''} px-2 py-0.5 rounded text-[10px] font-bold">${labels[category] || category}</span>`;
}

// =========================================================================
// 9. APPLICATION RENDERER
// =========================================================================
function renderApp() {
  if (!document.getElementById('heroTotalCost')) return;
  const data = calculateProjectEstimates();
  const isAr = state.lang === 'ar';
  const isEn = state.lang === 'en';

  // 1. Hero Updates
  document.getElementById('heroTotalCost').innerHTML = `${formatCurrency(data.totalCost)}`;
  document.getElementById('heroCostPerM2').innerText = `${formatCurrency(data.costPerM2)} / m²`;
  document.getElementById('heroTotalArea').innerHTML = `${Math.round(data.totalBuiltArea)} <span class="text-sm font-normal text-slate-400">m²</span>`;
  document.getElementById('heroFootprintArea').innerText = `${data.footprintArea} m²`;
  document.getElementById('heroUnbuiltArea').innerHTML = `${data.yardArea} <span class="text-sm font-normal text-slate-400">m²</span>`;
  document.getElementById('heroCESRatio').innerText = `${data.cesRatio.toFixed(1)}%`;
  
  // Quick Material Summary in Hero
  const cementLabel = isAr ? 'كيس' : (isEn ? 'bags' : 'sacs');
  const steelLabel = isAr ? 'قنطار' : (isEn ? 'Qtl' : 'Qx');
  const bricksLabel = isAr ? 'حبة' : (isEn ? 'pcs' : 'pcs');
  const tonLabel = isAr ? 'طن' : (isEn ? 'T' : 'T');

  document.getElementById('heroCementTons').innerText = `${data.cementTonnes.toFixed(1)} ${tonLabel} (${data.cementBags} ${cementLabel})`;
  document.getElementById('heroSteelTons').innerText = `${data.steelTonnes.toFixed(2)} ${tonLabel} (${Math.round(data.steelQuintals)} ${steelLabel})`;
  document.getElementById('heroBricksCount').innerText = `${data.totalBricks.toLocaleString()} ${bricksLabel}`;
  document.getElementById('heroAggregates').innerText = `${Math.round(data.sandVol + data.gravelVol)} m³`;

  // 2. Section 1 Inputs sync
  document.getElementById('labelLandAreaVal').innerText = `${state.landArea} m²`;
  document.getElementById('labelFootprintVal').innerText = `${state.footprintArea} m²`;
  document.getElementById('calcYardAreaVal').innerText = `${data.yardArea} m²`;
  document.getElementById('calcYardPercentVal').innerText = `(${((data.yardArea / state.landArea) * 100).toFixed(0)}% ${isAr ? 'فراغ' : (isEn ? 'open' : 'libre')})`;
  
  const floorLabels = {
    fr: {
      1: 'Rez-de-chaussée seul (RDC)',
      2: 'RDC + 1 Étage (R+1)',
      3: 'RDC + 2 Étages (R+2)',
      4: 'RDC + 3 Étages (R+3)',
      5: 'RDC + 4 Étages (R+4)'
    },
    ar: {
      1: 'طابق أرضي فقط (RDC)',
      2: 'طابق أرضي + 1 (R+1)',
      3: 'طابق أرضي + 2 (R+2)',
      4: 'طابق أرضي + 3 (R+3)',
      5: 'طابق أرضي + 4 (R+4)'
    },
    en: {
      1: 'Ground Floor only (Ground)',
      2: 'Ground + 1 Floor (G+1)',
      3: 'Ground + 2 Floors (G+2)',
      4: 'Ground + 3 Floors (G+3)',
      5: 'Ground + 4 Floors (G+4)'
    }
  }[state.lang] || {};
  document.getElementById('labelFloorsVal').innerText = floorLabels[state.floorsCount] || `${state.floorsCount} Étages`;

  // 3. Section 3 Quick Price Inputs Sync
  document.getElementById('quickPriceCement').value = state.prices.cement_bag.price;
  document.getElementById('quickPriceSteel').value = state.prices.steel_quintal.price;
  document.getElementById('quickPriceSand').value = state.prices.sand_m3.price;
  document.getElementById('quickPriceGravel').value = state.prices.gravel_m3.price;
  document.getElementById('quickPriceBrick12').value = state.prices.brick_12.price;
  document.getElementById('quickPriceBrick8').value = state.prices.brick_8.price;
  document.getElementById('quickPriceStones').value = state.prices.foundation_stones_m3.price;
  document.getElementById('quickPriceLabor').value = state.prices.labor_shell_m2.price;

  // 4. Section 4 Detailed Material Cards Sync
  const bagsWord = isAr ? 'كيس' : (isEn ? 'Bags' : 'Sacs');
  const tonnesWord = isAr ? 'طن' : (isEn ? 'Tonnes' : 'Tonnes');
  const piecesWord = isAr ? 'حبة' : (isEn ? 'Pieces' : 'Pièces');
  const trucksWord = isAr ? 'شاحنات' : (isEn ? 'Trucks' : 'Camions');

  document.getElementById('calcCementTonnes').innerText = `${data.cementTonnes.toFixed(1)} ${tonnesWord}`;
  document.getElementById('calcCementBags').innerText = `${data.cementBags.toLocaleString()} ${bagsWord}`;
  document.getElementById('calcCementUnitPrice').innerText = getConvertedUnitPrice(state.prices.cement_bag.price);
  document.getElementById('calcCementTotalCost').innerText = formatCurrency(data.cementCost);

  document.getElementById('calcSteelTonnes').innerText = `${data.steelTonnes.toFixed(2)} ${tonnesWord}`;
  document.getElementById('calcSteelQuintals').innerText = `${Math.round(data.steelQuintals).toLocaleString()} ${steelLabel}`;
  document.getElementById('calcSteelUnitPrice').innerText = getConvertedUnitPrice(state.prices.steel_quintal.price);
  document.getElementById('calcSteelTotalCost').innerText = formatCurrency(data.steelCost);

  document.getElementById('calcTotalBricks').innerText = `${data.totalBricks.toLocaleString()} ${piecesWord}`;
  document.getElementById('calcBricks12Count').innerText = `${data.bricks12Count.toLocaleString()} ${piecesWord}`;
  document.getElementById('calcBricks8Count').innerText = `${data.bricks8Count.toLocaleString()} ${piecesWord}`;
  document.getElementById('calcBricksTotalCost').innerText = formatCurrency(data.bricksCost);

  document.getElementById('calcSandVol').innerText = `${Math.round(data.sandVol)} m³`;
  document.getElementById('calcSandTrucks').innerText = `~${data.sandTrucks} ${trucksWord}`;
  document.getElementById('calcSandUnitPrice').innerText = getConvertedUnitPrice(state.prices.sand_m3.price);
  document.getElementById('calcSandTotalCost').innerText = formatCurrency(data.sandCost);

  document.getElementById('calcGravelVol').innerText = `${Math.round(data.gravelVol)} m³`;
  document.getElementById('calcGravelTrucks').innerText = `~${data.gravelTrucks} ${trucksWord}`;
  document.getElementById('calcGravelUnitPrice').innerText = getConvertedUnitPrice(state.prices.gravel_m3.price);
  document.getElementById('calcGravelTotalCost').innerText = formatCurrency(data.gravelCost);

  document.getElementById('calcHourdisCount').innerText = `${data.hourdisCount.toLocaleString()} ${isAr ? 'حبة هوردي' : piecesWord}`;
  document.getElementById('calcStonesVol').innerText = `${Math.round(data.foundationStonesVol)} m³`;
  document.getElementById('calcWaterproofingArea').innerText = `${Math.round(data.waterproofingArea)} m²`;
  document.getElementById('calcHourdisStonesCost').innerText = formatCurrency(data.hourdisStonesCost);

  // 5. Section 5 Phase Breakdown
  renderPhaseBreakdown(data);

  // 6. Section 6 Percentages
  const grossWorkCost = data.categories.structure + data.categories.masonry;
  const structPercent = Math.round((grossWorkCost / data.subtotalCost) * 100) || 45;
  const finishPercent = Math.round(((data.categories.finishes + data.categories.mep) / data.subtotalCost) * 100) || 35;
  const laborPercent = Math.round((data.categories.labor / data.subtotalCost) * 100) || 20;

  document.getElementById('statStructurePercent').innerText = `${structPercent}%`;
  document.getElementById('barStructurePercent').style.width = `${structPercent}%`;
  document.getElementById('statFinishesPercent').innerText = `${finishPercent}%`;
  document.getElementById('barFinishesPercent').style.width = `${finishPercent}%`;
  document.getElementById('statLaborPercent').innerText = `${laborPercent}%`;
  document.getElementById('barLaborPercent').style.width = `${laborPercent}%`;

  // 7. Update BOQ Table
  renderBoqTable(data);

  // 8. Update Formal Printable Report (Tab 3)
  renderFormalReport(data);

  // 9. Update Chart.js
  updateChart(data);

  // Currency symbols in tables
  document.querySelectorAll('.curr-symbol').forEach(el => {
    el.innerText = state.currency === 'USD' ? '$' : (isAr ? 'د.ج' : 'DZD');
  });
}

// Render Phase Breakdown Accordion
function renderPhaseBreakdown(data) {
  const container = document.getElementById('phaseBreakdownList');
  if (!container) return;
  const isAr = state.lang === 'ar';
  const isEn = state.lang === 'en';

  const itemsIncludedText = isAr ? 'عناصر متضمنة' : (isEn ? 'items included' : 'postes métrés inclus');

  container.innerHTML = data.phases.map((phase, idx) => {
    const percent = ((phase.total / data.subtotalCost) * 100).toFixed(1);
    return `
      <div class="bg-bh-bg border border-bh-border rounded-xl p-3.5 hover:border-bh-yellow transition">
        <div class="flex items-center justify-between cursor-pointer" onclick="togglePhaseDetails('phase-sub-${idx}')">
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-md bg-bh-yellow/20 text-bh-yellow font-mono text-xs font-bold flex items-center justify-center">
              ${idx + 1}
            </span>
            <div>
              <span class="font-bold text-sm text-white">${phase.name}</span>
              <span class="text-[11px] text-slate-400 block">${phase.items.length} ${itemsIncludedText}</span>
            </div>
          </div>
          <div class="text-right">
            <span class="font-heading font-black text-sm text-bh-yellow font-mono block">${formatCurrency(phase.total)}</span>
            <span class="text-[10px] text-slate-500">${percent}%</span>
          </div>
        </div>

        <div id="phase-sub-${idx}" class="hidden mt-3 pt-3 border-t border-bh-border text-xs space-y-1.5">
          ${phase.items.map(it => `
            <div class="flex items-center justify-between text-slate-300 py-1 px-2 rounded hover:bg-bh-card">
              <span class="text-[11px] text-slate-300 flex-1 pr-2">${it.desc}</span>
              <span class="text-[11px] text-slate-400 font-mono mr-4">${it.qty} ${formatUnit(it.unit, state.lang)}</span>
              <span class="font-mono text-xs text-slate-200 font-bold">${formatCurrency(it.total)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function togglePhaseDetails(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('hidden');
}

// Render BOQ Table (Tab 2)
function renderBoqTable(data) {
  const tbody = document.getElementById('boqTableBody');
  if (!tbody) return;

  const filter = state.activeBoqFilter;
  const filtered = filter === 'all' 
    ? data.items 
    : data.items.filter(it => it.category === filter);

  tbody.innerHTML = filtered.map((item, index) => {
    const categoryBadge = getCategoryBadge(item.category, state.lang);
    const localizedUnit = formatUnit(item.unit, state.lang);

    return `
      <tr class="hover:bg-bh-border/40 transition">
        <td class="py-2.5 px-3.5 text-slate-500 font-mono">${index + 1}</td>
        <td class="py-2.5 px-3.5">${categoryBadge}</td>
        <td class="py-2.5 px-3.5 text-slate-200 font-medium">
          <div>${item.desc}</div>
          <span class="text-[10px] text-slate-500">${item.phase}</span>
        </td>
        <td class="py-2.5 px-3.5 text-right font-mono font-bold text-white">${item.qty.toLocaleString()}</td>
        <td class="py-2.5 px-3.5 text-center text-slate-400 text-[11px]">${localizedUnit}</td>
        <td class="py-2.5 px-3.5 text-right font-mono text-slate-300">${getConvertedUnitPrice(item.unitPrice)}</td>
        <td class="py-2.5 px-3.5 text-right font-mono font-bold text-bh-yellow">${formatCurrency(item.total)}</td>
      </tr>
    `;
  }).join('');

  document.getElementById('boqGrandTotal').innerText = formatCurrency(data.totalCost);
}

// Render Formal Printable Report (Tab 3)
function renderFormalReport(data) {
  const isAr = state.lang === 'ar';
  const isEn = state.lang === 'en';

  const dateStr = new Date().toLocaleDateString(isAr ? 'ar-DZ' : (isEn ? 'en-US' : 'fr-FR'), {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dateEl = document.getElementById('reportDate');
  if (dateEl) dateEl.innerText = dateStr;

  document.getElementById('repPlotArea').innerText = `${state.landArea} m²`;
  document.getElementById('repFootprint').innerText = `${state.footprintArea} m²`;
  document.getElementById('repYard').innerText = `${data.yardArea} m²`;
  document.getElementById('repTotalArea').innerText = `${Math.round(data.totalBuiltArea)} m²`;
  
  const finishNames = {
    standard: isAr ? 'منزل سكني عادي' : (isEn ? 'Standard Residential' : 'Standard Résidentiel'),
    decorated: isAr ? 'منزل مزخرف وعصري' : (isEn ? 'Architectural Decorated Modern' : 'Haut Standing Moderne Décoré'),
    shell: isAr ? 'هيكل خرساني فقط (بناء عظم)' : (isEn ? 'Grey Structural Shell Only' : 'Gros Œuvre / Carcasse Seule')
  };
  document.getElementById('repFinishTier').innerText = finishNames[state.finishQuality];

  document.getElementById('repFoundation').innerText = state.foundationType === 'isolated' 
    ? (isAr ? 'أساسات منفصلة وشريطية' : (isEn ? 'Isolated Pad Footings' : 'Semelles Isolées & Filantes')) 
    : (isAr ? 'حصيرة خرسانية عامة' : (isEn ? 'Raft Foundation' : 'Radier Général'));

  document.getElementById('repCurrency').innerText = state.currency === 'USD' 
    ? (isAr ? 'دولار أمريكي (USD)' : (isEn ? 'US Dollar (USD)' : 'Dollar Américain (USD)')) 
    : (isAr ? 'دينار جزائري (DZD)' : (isEn ? 'Algerian Dinar (DZD)' : 'Dinar Algérien (DZD)'));

  document.getElementById('repDuration').innerText = `${data.estimatedDurationMonths} - ${data.estimatedDurationMonths + 2} ${isAr ? 'أشهر' : (isEn ? 'Months' : 'Mois')}`;

  const floorRepText = {
    fr: state.floorsCount === 1 ? 'RDC Seul (1 Niveau)' : `R+${state.floorsCount - 1} (${state.floorsCount} Niveaux)`,
    ar: state.floorsCount === 1 ? 'طابق أرضي فقط (مستوى واحد)' : `طابق أرضي + ${state.floorsCount - 1} (${state.floorsCount} طوابق)`,
    en: state.floorsCount === 1 ? 'Ground Floor Only (1 Floor)' : `G+${state.floorsCount - 1} (${state.floorsCount} Floors)`
  }[state.lang] || `R+${state.floorsCount - 1}`;
  document.getElementById('repFloors').innerText = floorRepText;

  // Key Materials Schedule in Report
  const bagsUnit = isAr ? 'كيس' : (isEn ? 'Bags' : 'Sacs');
  const tonUnit = isAr ? 'طن' : (isEn ? 'T' : 'T');
  const qtlUnit = isAr ? 'قنطار' : (isEn ? 'Qtl' : 'Qx');
  const bricksUnit = isAr ? 'حبة' : (isEn ? 'Pieces' : 'Briques');

  document.getElementById('repCementDetail').innerText = `${data.cementBags.toLocaleString()} ${bagsUnit} (${data.cementTonnes.toFixed(1)} ${tonUnit})`;
  document.getElementById('repSteelDetail').innerText = `${Math.round(data.steelQuintals).toLocaleString()} ${qtlUnit} (${data.steelTonnes.toFixed(2)} ${tonUnit})`;
  document.getElementById('repBricksDetail').innerText = `${data.totalBricks.toLocaleString()} ${bricksUnit}`;
  document.getElementById('repSandDetail').innerText = `${Math.round(data.sandVol)} m³`;
  document.getElementById('repGravelDetail').innerText = `${Math.round(data.gravelVol)} m³`;
  document.getElementById('repTilesDetail').innerText = `${Math.round(data.floorTilesArea + data.wallTilesArea).toLocaleString()} m²`;

  // Phases Table in Report
  const tableBody = document.getElementById('repPhaseTableBody');
  if (tableBody) {
    tableBody.innerHTML = data.phases.map((ph, idx) => {
      const weight = ((ph.total / data.subtotalCost) * 100).toFixed(1);
      return `
        <tr>
          <td class="py-2 px-3 text-slate-500 font-mono">0${idx + 1}</td>
          <td class="py-2 px-3 font-semibold text-slate-900">${ph.name}</td>
          <td class="py-2 px-3 text-right font-mono text-slate-600">${weight}%</td>
          <td class="py-2 px-3 text-right font-mono font-bold text-slate-900">${formatCurrency(ph.total)}</td>
        </tr>
      `;
    }).join('');
  }

  document.getElementById('repGrandTotal').innerText = formatCurrency(data.totalCost);
}

// Chart.js instance update
function updateChart(data) {
  const ctx = document.getElementById('mainBreakdownChart');
  if (!ctx) return;

  const isByMaterial = state.chartView === 'material';
  const isAr = state.lang === 'ar';
  const isEn = state.lang === 'en';

  let labels = [];
  let values = [];
  let bgColors = [];

  if (!isByMaterial) {
    labels = data.phases.map(p => p.name.split(':')[1]?.trim() || p.name);
    values = data.phases.map(p => state.currency === 'USD' ? Math.round(p.total / state.exchangeRate) : p.total);
    bgColors = [
      '#ffa000', '#ff6d00', '#ffc107', '#0284c7', '#10b981', '#8b5cf6', '#ec4899', '#14b8a6', '#f43f5e'
    ];
  } else {
    labels = isAr 
      ? ['الهيكل الخرساني والأساسات', 'البناء والآجر والأسقف', 'التشطيبات والدهان', 'الكهرباء والسباكة', 'أجرة اليد العاملة']
      : (isEn 
        ? ['Concrete & Foundations', 'Masonry & Slabs', 'Finishes & Paint', 'MEP (Utilities)', 'Skilled Labor']
        : ['Gros Œuvre & Fondations', 'Maçonnerie & Planchers', 'Finitions & Peinture', 'Électricité & Plomberie', 'Main d\'œuvre']);
    values = [
      data.categories.structure,
      data.categories.masonry,
      data.categories.finishes,
      data.categories.mep,
      data.categories.labor
    ].map(v => state.currency === 'USD' ? Math.round(v / state.exchangeRate) : v);
    bgColors = ['#0284c7', '#ff6d00', '#ffa000', '#8b5cf6', '#10b981'];
  }

  if (breakdownChart) {
    breakdownChart.data.labels = labels;
    breakdownChart.data.datasets[0].data = values;
    breakdownChart.data.datasets[0].backgroundColor = bgColors;
    breakdownChart.update();
  } else {
    breakdownChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: bgColors,
          borderWidth: 2,
          borderColor: '#0f1520',
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              padding: 12,
              color: '#94a3b8',
              font: {
                family: isAr ? 'Cairo' : 'Plus Jakarta Sans',
                size: 11
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const val = context.raw || 0;
                const formatted = state.currency === 'USD' ? `$${val.toLocaleString()}` : `${val.toLocaleString()} DZD`;
                return ` ${label}: ${formatted}`;
              }
            }
          }
        },
        cutout: '68%'
      }
    });
  }
}

// Navigation Tab switcher
function switchTab(tabId) {
  document.querySelectorAll('.nav-tab').forEach(t => {
    if (t.getAttribute('data-tab') === tabId) {
      t.classList.add('active-tab');
    } else {
      t.classList.remove('active-tab');
    }
  });

  document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
  const target = document.getElementById(tabId);
  if (target) {
    target.classList.remove('hidden');
    if (window.innerWidth <= 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  }

  // Update mobile bottom nav active classes
  const mNavCalc = document.getElementById('mNavCalc');
  const mNavWorkers = document.getElementById('mNavWorkers');
  if (mNavCalc && mNavWorkers) {
    if (tabId === 'tab-worker-board') {
      mNavWorkers.classList.add('text-bh-yellow');
      mNavWorkers.classList.remove('text-slate-400');
      mNavCalc.classList.remove('text-bh-yellow');
      mNavCalc.classList.add('text-slate-400');
    } else {
      mNavCalc.classList.add('text-bh-yellow');
      mNavCalc.classList.remove('text-slate-400');
      mNavWorkers.classList.remove('text-bh-yellow');
      mNavWorkers.classList.add('text-slate-400');
    }
  }

  if (tabId === 'tab-worker-board') {
    renderWorkerPostsFeed();
  }
}

// =========================================================================
// 10. EVENT BINDINGS & APP BOOTSTRAP
// =========================================================================
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initAccountsDatabase();
  } catch (err) {
    console.error('Failed to initialize accounts database:', err);
  }

  // Start yellow splash screen loader
  initSplashScreen();

  // Initialize Real-time Worker Board Sync
  initWorkerRealtimeSync();

  // Language buttons
  document.getElementById('langFR')?.addEventListener('click', () => setLanguage('fr'));
  document.getElementById('langAR')?.addEventListener('click', () => setLanguage('ar'));
  document.getElementById('langEN')?.addEventListener('click', () => setLanguage('en'));

  // Sliders & Dimension inputs
  const sliderLand = document.getElementById('sliderLandArea');
  const inputLand = document.getElementById('inputLandArea');
  const sliderFootprint = document.getElementById('sliderFootprintArea');
  const inputFootprint = document.getElementById('inputFootprintArea');

  function syncLand(val) {
    state.landArea = Math.max(30, Number(val));
    sliderLand.value = state.landArea;
    inputLand.value = state.landArea;
    if (state.footprintArea > state.landArea) {
      syncFootprint(state.landArea);
    }
    renderApp();
  }

  function syncFootprint(val) {
    state.footprintArea = Math.min(Number(val), state.landArea);
    sliderFootprint.value = state.footprintArea;
    inputFootprint.value = state.footprintArea;
    renderApp();
  }

  sliderLand?.addEventListener('input', (e) => syncLand(e.target.value));
  inputLand?.addEventListener('change', (e) => syncLand(e.target.value));
  sliderFootprint?.addEventListener('input', (e) => syncFootprint(e.target.value));
  inputFootprint?.addEventListener('change', (e) => syncFootprint(e.target.value));

  // Floor Buttons
  const floorButtons = document.querySelectorAll('.floor-btn');
  floorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      floorButtons.forEach(b => {
        b.classList.remove('active-floor-btn');
        b.classList.add('bg-bh-bg', 'text-slate-400');
      });
      btn.classList.add('active-floor-btn');
      btn.classList.remove('bg-bh-bg', 'text-slate-400');
      state.floorsCount = parseInt(btn.getAttribute('data-floors'));
      renderApp();
    });
  });

  // Finish Tier Cards
  const finishCards = document.querySelectorAll('.finish-card');
  finishCards.forEach(card => {
    card.addEventListener('click', () => {
      finishCards.forEach(c => {
        c.classList.remove('active-finish-card', 'border-bh-yellow');
        c.classList.add('border-bh-border');
        c.querySelector('input[type="radio"]').checked = false;
      });
      card.classList.add('active-finish-card', 'border-bh-yellow');
      card.classList.remove('border-bh-border');
      card.querySelector('input[type="radio"]').checked = true;
      state.finishQuality = card.getAttribute('data-tier');
      renderApp();
    });
  });

  // Checkboxes & Selects
  document.getElementById('checkBasement')?.addEventListener('change', (e) => {
    state.hasBasement = e.target.checked;
    renderApp();
  });

  document.getElementById('checkOverhang')?.addEventListener('change', (e) => {
    state.hasOverhang = e.target.checked;
    renderApp();
  });

  document.getElementById('selectFoundationType')?.addEventListener('change', (e) => {
    state.foundationType = e.target.value;
    renderApp();
  });

  document.getElementById('sliderContingency')?.addEventListener('input', (e) => {
    state.contingencyRate = Number(e.target.value) / 100;
    document.getElementById('contingencyVal').innerText = `${e.target.value}%`;
    document.getElementById('repContingency').innerText = `${e.target.value}%`;
    renderApp();
  });

  // Quick Price Inputs
  const priceMap = {
    quickPriceCement: 'cement_bag',
    quickPriceSteel: 'steel_quintal',
    quickPriceSand: 'sand_m3',
    quickPriceGravel: 'gravel_m3',
    quickPriceBrick12: 'brick_12',
    quickPriceBrick8: 'brick_8',
    quickPriceStones: 'foundation_stones_m3',
    quickPriceLabor: 'labor_shell_m2'
  };

  Object.entries(priceMap).forEach(([id, key]) => {
    document.getElementById(id)?.addEventListener('input', (e) => {
      const val = Math.max(0, Number(e.target.value));
      state.prices[key].price = val;
      renderApp();
    });
  });

  document.getElementById('resetPricesBtn')?.addEventListener('click', () => {
    restoreAllDefaultPrices();
  });

  // Currency Toggle Buttons
  document.getElementById('currDZD')?.addEventListener('click', () => {
    state.currency = 'DZD';
    document.getElementById('currDZD').classList.add('active-currency');
    document.getElementById('currUSD').classList.remove('active-currency');
    renderApp();
  });

  document.getElementById('currUSD')?.addEventListener('click', () => {
    state.currency = 'USD';
    document.getElementById('currUSD').classList.add('active-currency');
    document.getElementById('currDZD').classList.remove('active-currency');
    renderApp();
  });

  // Presets Dropdown
  const presetBtn = document.getElementById('presetBtn');
  const presetMenu = document.getElementById('presetMenu');
  presetBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    presetMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (presetMenu && !presetMenu.contains(e.target) && !presetBtn.contains(e.target)) {
      presetMenu.classList.add('hidden');
    }
  });

  document.querySelectorAll('.preset-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const presetKey = opt.getAttribute('data-preset');
      applyPreset(presetKey);
      presetMenu.classList.add('hidden');
    });
  });

  // Navigation Tabs
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // BOQ Filters
  document.querySelectorAll('.boq-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.boq-filter-btn').forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');
      state.activeBoqFilter = btn.getAttribute('data-filter');
      renderBoqTable(calculateProjectEstimates());
    });
  });

  // Chart Toggle Buttons
  document.getElementById('chartBtnPhase')?.addEventListener('click', () => {
    state.chartView = 'phase';
    document.getElementById('chartBtnPhase').classList.add('active-chart-toggle');
    document.getElementById('chartBtnMat').classList.remove('active-chart-toggle');
    updateChart(calculateProjectEstimates());
  });

  document.getElementById('chartBtnMat')?.addEventListener('click', () => {
    state.chartView = 'material';
    document.getElementById('chartBtnMat').classList.add('active-chart-toggle');
    document.getElementById('chartBtnPhase').classList.remove('active-chart-toggle');
    updateChart(calculateProjectEstimates());
  });

  // Print Devis Buttons
  document.getElementById('printReportBtn')?.addEventListener('click', () => {
    switchTab('tab-report');
    setTimeout(() => window.print(), 350);
  });

  // Copy BOQ
  document.getElementById('copyBoqBtn')?.addEventListener('click', () => {
    const data = calculateProjectEstimates();
    const isAr = state.lang === 'ar';
    let text = `BatiHub DZ - Build • Connect • Create\n`;
    text += `Developed by Mouhaned Guellif\n\n`;
    text += `${isAr ? 'المساحة المبنية' : 'Surface Bâtie'}: ${Math.round(data.totalBuiltArea)} m² | ${isAr ? 'الميزانية الإجمالية' : 'Budget Estimé'}: ${formatCurrency(data.totalCost)}\n\n`;
    text += `- ${isAr ? 'الإسمنت' : 'Ciment'}: ${data.cementBags} sacs (${data.cementTonnes.toFixed(1)} T) = ${formatCurrency(data.cementCost)}\n`;
    text += `- ${isAr ? 'حديد التسليح' : 'Acier FeE500'}: ${Math.round(data.steelQuintals)} Qx (${data.steelTonnes.toFixed(2)} T) = ${formatCurrency(data.steelCost)}\n`;
    text += `- ${isAr ? 'الآجر الأحمر' : 'Briques'}: ${data.totalBricks} pcs = ${formatCurrency(data.bricksCost)}\n`;
    text += `- ${isAr ? 'الرمل' : 'Sable'}: ${Math.round(data.sandVol)} m³ = ${formatCurrency(data.sandCost)}\n`;
    text += `- ${isAr ? 'الحصى' : 'Gravier'}: ${Math.round(data.gravelVol)} m³ = ${formatCurrency(data.gravelCost)}\n`;

    navigator.clipboard.writeText(text).then(() => {
      alert(isAr ? 'تم نسخ ملخص المشروع إلى الحافظة بنجاح!' : 'Récapitulatif copié dans le presse-papiers avec succès !');
    });
  });

  // Expand / collapse all phases
  let allExpanded = false;
  document.getElementById('toggleAllPhasesBtn')?.addEventListener('click', () => {
    allExpanded = !allExpanded;
    document.querySelectorAll('[id^="phase-sub-"]').forEach(d => {
      if (allExpanded) d.classList.remove('hidden');
      else d.classList.add('hidden');
    });
    const isAr = state.lang === 'ar';
    document.getElementById('toggleAllPhasesBtn').innerText = allExpanded 
      ? (isAr ? 'طي التفاصيل' : 'Réduire les Détails') 
      : (isAr ? 'عرض التفاصيل' : 'Développer les Détails');
  });

  // Boot app
  renderApp();
});

// Helper: Presets logic
function applyPreset(key) {
  const presets = {
    economy_villa: { land: 160, footprint: 120, floors: 1, tier: 'standard', basement: false, foundation: 'isolated' },
    family_r1: { land: 180, footprint: 120, floors: 2, tier: 'standard', basement: false, foundation: 'isolated' },
    luxury_r2: { land: 250, footprint: 120, floors: 3, tier: 'decorated', basement: false, foundation: 'isolated' },
    residential_building: { land: 200, footprint: 150, floors: 4, tier: 'standard', basement: true, foundation: 'raft' }
  };

  const p = presets[key];
  if (!p) return;

  state.landArea = p.land;
  state.footprintArea = p.footprint;
  state.floorsCount = p.floors;
  state.finishQuality = p.tier;
  state.hasBasement = p.basement;
  state.foundationType = p.foundation;

  document.getElementById('sliderLandArea').value = p.land;
  document.getElementById('inputLandArea').value = p.land;
  document.getElementById('sliderFootprintArea').value = p.footprint;
  document.getElementById('inputFootprintArea').value = p.footprint;
  document.getElementById('checkBasement').checked = p.basement;
  document.getElementById('selectFoundationType').value = p.foundation;

  document.querySelectorAll('.floor-btn').forEach(btn => {
    if (parseInt(btn.getAttribute('data-floors')) === p.floors) {
      btn.classList.add('active-floor-btn');
    } else {
      btn.classList.remove('active-floor-btn');
    }
  });

  document.querySelectorAll('.finish-card').forEach(card => {
    if (card.getAttribute('data-tier') === p.tier) {
      card.classList.add('active-finish-card', 'border-bh-yellow');
      card.querySelector('input[type="radio"]').checked = true;
    } else {
      card.classList.remove('active-finish-card', 'border-bh-yellow');
      card.querySelector('input[type="radio"]').checked = false;
    }
  });

  renderApp();
}

function restoreAllDefaultPrices() {
  if (confirm(state.lang === 'ar' ? 'هل تريد استعادة جميع أسعار المواد الافتراضية؟' : 'Réinitialiser tous les prix des matériaux aux valeurs moyennes par défaut ?')) {
    state.prices = JSON.parse(JSON.stringify(DEFAULT_PRICES_DZD));
    renderApp();
  }
}


// =========================================================================
// 11. SAVED ACCOUNTS MANAGER (DEVICE STORAGE & 1-CLICK AUTOFILL)
// =========================================================================
function getSavedProfiles() {
  try {
    const list = localStorage.getItem('batihub_saved_profiles');
    if (list) {
      const parsed = JSON.parse(list);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
    return [
      {
        email: "mouhanedguellif16@gmail.com",
        name: "fateh fateh",
        avatar: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\"><rect width=\"64\" height=\"64\" rx=\"32\" fill=\"%23ffa000\"/><text x=\"50%\" y=\"55%\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"%2306080c\" font-family=\"sans-serif\" font-size=\"28\" font-weight=\"bold\">F</text></svg>"
      }
    ];
  } catch (e) {
    return [];
  }
}

function saveProfileToDeviceList(email, name, avatar) {
  let list = getSavedProfiles();
  list = list.filter(p => p.email.toLowerCase() !== email.toLowerCase());
  list.unshift({ email: email.toLowerCase(), name, avatar });
  if (list.length > 5) list = list.slice(0, 5);
  localStorage.setItem('batihub_saved_profiles', JSON.stringify(list));
  if (window.electronDB && window.electronDB.saveSavedProfiles) {
    window.electronDB.saveSavedProfiles(list);
  }
}

function removeSavedProfile(email, e) {
  if (e && e.stopPropagation) e.stopPropagation();
  let list = getSavedProfiles();
  list = list.filter(p => p.email.toLowerCase() !== email.toLowerCase());
  localStorage.setItem('batihub_saved_profiles', JSON.stringify(list));
  if (window.electronDB && window.electronDB.saveSavedProfiles) {
    window.electronDB.saveSavedProfiles(list);
  }
  renderSavedAccounts();
}

function selectSavedAccount(email) {
  const emailInput = document.getElementById('loginEmail');
  const pwdInput = document.getElementById('loginPassword');
  if (emailInput) {
    emailInput.value = email;
    emailInput.classList.add('border-bh-yellow');
    setTimeout(() => emailInput.classList.remove('border-bh-yellow'), 1200);
  }
  if (pwdInput) {
    pwdInput.value = '';
    pwdInput.focus();
  }
}

function renderSavedAccounts() {
  const container = document.getElementById('savedAccountsContainer');
  const listEl = document.getElementById('savedAccountsList');
  if (!container || !listEl) return;

  const profiles = getSavedProfiles().filter(p => p.email && p.email.toLowerCase() !== 'batihubdz@gmail.com');
  if (!profiles || profiles.length === 0) {
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  listEl.innerHTML = profiles.map(p => `
    <div onclick="selectSavedAccount('${p.email}')" class="group flex items-center gap-2 p-1.5 pr-2.5 rounded-xl bg-bh-card hover:bg-slate-800 border border-bh-border hover:border-bh-yellow/50 cursor-pointer transition text-xs">
      <img src="${p.avatar || 'assets/batihub_logo.png'}" class="w-6 h-6 rounded-full object-cover border border-bh-yellow">
      <div class="text-left leading-tight">
        <span class="font-bold text-white block text-[11px] truncate max-w-[110px]">${p.name || p.email}</span>
        <span class="text-[9px] text-slate-400 font-mono block truncate max-w-[110px]">${p.email}</span>
      </div>
      <button type="button" onclick="removeSavedProfile('${p.email}', event)" title="إزالة من هذا الجهاز" class="text-slate-500 hover:text-rose-400 ml-1 p-0.5 rounded text-[10px] transition">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join('');
}

// =========================================================================
// 12. USER PROFILE & CHANGE PASSWORD MODAL LOGIC
// =========================================================================
function openUserProfileModal() {
  const modal = document.getElementById('modalUserProfile');
  if (!modal) return;

  const saved = localStorage.getItem('batihub_user');
  let user = { name: 'مستخدم BatiHub DZ', email: 'user@gmail.com', avatar: 'assets/batihub_logo.png' };
  if (saved) {
    try { user = JSON.parse(saved); } catch (e) {}
  }

  const nameEl = document.getElementById('profileModalName');
  const emailEl = document.getElementById('profileModalEmail');
  const avatarEl = document.getElementById('profileModalAvatar');

  if (nameEl) nameEl.innerText = user.name || 'مستخدم BatiHub DZ';
  if (emailEl) emailEl.innerText = user.email || 'user@gmail.com';
  if (avatarEl) avatarEl.src = user.avatar || 'assets/batihub_logo.png';

  // Highlight active language button in profile modal
  ['FR', 'AR', 'EN'].forEach(code => {
    const btn = document.getElementById(`pLang${code}`);
    if (btn) {
      if (code.toLowerCase() === state.lang) {
        btn.classList.add('active-lang', 'border-bh-yellow', 'text-white');
        btn.classList.remove('text-slate-300');
      } else {
        btn.classList.remove('active-lang', 'border-bh-yellow', 'text-white');
        btn.classList.add('text-slate-300');
      }
    }
  });

  modal.classList.remove('hidden');
}

function closeUserProfileModal() {
  const modal = document.getElementById('modalUserProfile');
  if (modal) modal.classList.add('hidden');
}

let pendingChangePwdOtp = null;

function openChangePasswordModal() {
  closeUserProfileModal();
  const modal = document.getElementById('modalChangePassword');
  if (!modal) return;

  ['inputCurrentPassword', 'inputNewPasswordDirect', 'inputConfirmPasswordDirect', 'inputChangePwdOtp', 'inputNewPasswordOtp', 'inputConfirmPasswordOtp'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  switchToPwdModeStandard();
  modal.classList.remove('hidden');
}

function closeChangePasswordModal() {
  const modal = document.getElementById('modalChangePassword');
  if (modal) modal.classList.add('hidden');
  pendingChangePwdOtp = null;
}

function switchToPwdModeStandard() {
  document.getElementById('pwdModeStandard')?.classList.remove('hidden');
  document.getElementById('pwdModeOtp')?.classList.add('hidden');
}

function switchToPwdModeOtp() {
  const saved = localStorage.getItem('batihub_user');
  let email = '';
  if (saved) {
    try { email = JSON.parse(saved).email; } catch (e) {}
  }
  const targetEmailEl = document.getElementById('pwdOtpTargetEmail');
  if (targetEmailEl) targetEmailEl.innerText = email || 'user@gmail.com';

  document.getElementById('pwdModeStandard')?.classList.add('hidden');
  document.getElementById('pwdModeOtp')?.classList.remove('hidden');
  document.getElementById('pwdOtpRequestBlock')?.classList.remove('hidden');
  document.getElementById('pwdOtpVerifyBlock')?.classList.add('hidden');
}

async function handleSubmitChangePasswordDirect() {
  const currentPwd = (document.getElementById('inputCurrentPassword')?.value || '').trim();
  const newPwd = (document.getElementById('inputNewPasswordDirect')?.value || '').trim();
  const confirmPwd = (document.getElementById('inputConfirmPasswordDirect')?.value || '').trim();
  const isAr = state.lang === 'ar';

  if (!currentPwd || !newPwd || !confirmPwd) {
    alert(isAr ? 'يرجى ملء جميع الحقول المطلوبة' : 'Veuillez remplir tous les champs obligatoires.');
    return;
  }

  if (newPwd.length < 6) {
    alert(isAr ? 'يجب أن تتكون كلمة المرور الجديدة من 6 أحرف على الأقل' : 'Le nouveau mot de passe doit comporter au moins 6 caractères.');
    return;
  }

  if (newPwd !== confirmPwd) {
    alert(isAr ? 'كلمتا المرور الجديدتان غير متطابقتين' : 'Les deux nouveaux mots de passe ne correspondent pas.');
    return;
  }

  const saved = localStorage.getItem('batihub_user');
  if (!saved) return;
  const activeSession = JSON.parse(saved);
  const email = (activeSession.email || '').toLowerCase();

  const accounts = getStoredAccounts();
  const user = accounts[email];
  if (!user) {
    alert(isAr ? 'تعذر العثور على بيانات الحساب' : 'Compte introuvable dans la base sécurisée.');
    return;
  }

  // Verify current password hash
  const checkHash = await hashPassword(currentPwd, user.salt);
  if (checkHash !== user.passwordHash) {
    alert(isAr ? 'كلمة المرور الحالية غير صحيحة! إذا كنت قد نسيتها، اضغط على الرابط بالأسفل لإرسال رمز تحقق إلى بريدك Gmail.' : 'Mot de passe actuel incorrect !');
    return;
  }

  // Update password with new salt and hash
  const newSalt = generateSalt();
  user.salt = newSalt;
  user.passwordHash = await hashPassword(newPwd, newSalt);
  accounts[email] = user;
  saveStoredAccounts(accounts);

  alert(isAr ? 'تم تغيير كلمة المرور بنجاح وحفظها بأمان!' : 'Mot de passe modifié avec succès !');
  closeChangePasswordModal();
}

async function handleSendChangePwdOtp() {
  const saved = localStorage.getItem('batihub_user');
  if (!saved) return;
  const activeSession = JSON.parse(saved);
  const email = (activeSession.email || '').toLowerCase();
  const isAr = state.lang === 'ar';

  const btn = document.getElementById('btnSendChangePwdOtp');
  const origHtml = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> ${isAr ? 'جاري إرسال الرمز إلى بريدك...' : 'Envoi en cours...'}`;
  }

  const otpCode = generate6DigitOtp();
  pendingChangePwdOtp = {
    email: email,
    code: otpCode,
    expiresAt: Date.now() + 15 * 60 * 1000
  };

  const mailResult = await sendVerificationEmail(email, otpCode, 'reset');

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = origHtml;
  }

  if (!mailResult || !mailResult.success) {
    alert(isAr ? 'تعذر إرسال رمز التحقق إلى بريدك الإلكتروني!' : 'Impossible d\'envoyer le code de vérification.');
    return;
  }

  document.getElementById('pwdOtpRequestBlock')?.classList.add('hidden');
  document.getElementById('pwdOtpVerifyBlock')?.classList.remove('hidden');

  alert(isAr 
    ? 'تم إرسال رمز التحقق بنجاح إلى Gmail! تفقد صندوق الوارد أو البريد غير المرغوب فيه (Spam).' 
    : 'Code de vérification envoyé avec succès à votre Gmail !');
}

async function handleSubmitChangePasswordOtp() {
  const code = (document.getElementById('inputChangePwdOtp')?.value || '').trim();
  const newPwd = (document.getElementById('inputNewPasswordOtp')?.value || '').trim();
  const confirmPwd = (document.getElementById('inputConfirmPasswordOtp')?.value || '').trim();
  const isAr = state.lang === 'ar';

  if (!pendingChangePwdOtp) {
    alert(isAr ? 'انتهت صلاحية جلسة التحقق، يرجى إعادة المحاولة' : 'Session de vérification expirée.');
    return;
  }

  if (Date.now() > pendingChangePwdOtp.expiresAt) {
    alert(isAr ? 'انتهت صلاحية الرمز، يرجى طلب رمز جديد' : 'Le code a expiré.');
    return;
  }

  if (code !== pendingChangePwdOtp.code) {
    alert(isAr ? 'رمز التحقق غير صحيح، يرجى التأكد' : 'Code de vérification incorrect.');
    return;
  }

  if (newPwd.length < 6) {
    alert(isAr ? 'يجب أن تتكون كلمة المرور الجديدة من 6 أحرف على الأقل' : 'Le mot de passe doit comporter au moins 6 caractères.');
    return;
  }

  if (newPwd !== confirmPwd) {
    alert(isAr ? 'كلمتا المرور غير متطابقتين' : 'Les mots de passe ne correspondent pas.');
    return;
  }

  const accounts = getStoredAccounts();
  const user = accounts[pendingChangePwdOtp.email];
  if (user) {
    const newSalt = generateSalt();
    user.salt = newSalt;
    user.passwordHash = await hashPassword(newPwd, newSalt);
    accounts[pendingChangePwdOtp.email] = user;
    saveStoredAccounts(accounts);

    alert(isAr ? 'تم تحديث كلمة المرور بنجاح! حسابك محمي بالكامل.' : 'Mot de passe mis à jour avec succès !');
    pendingChangePwdOtp = null;
    closeChangePasswordModal();
  }
}

// =========================================================================
// 13. SCIENTIFIC & CIVIL ENGINEERING CALCULATOR ENGINE
// =========================================================================
let calcExpr = '';
let calcResult = '0';
let calcAngleMode = 'DEG';
let calcMemory = 0;
let calcHasEvaluated = false;

function getCalcHistory() {
  try {
    const h = localStorage.getItem('batihub_calc_history');
    return h ? JSON.parse(h) : [];
  } catch (e) {
    return [];
  }
}

function saveCalcHistoryItem(expr, res) {
  let list = getCalcHistory();
  list.unshift({ expr, res, time: new Date().toLocaleTimeString() });
  if (list.length > 20) list = list.slice(0, 20);
  localStorage.setItem('batihub_calc_history', JSON.stringify(list));
  renderCalcHistory();
}

function renderCalcHistory() {
  const container = document.getElementById('calcHistoryTapeContainer');
  if (!container) return;
  const list = getCalcHistory();
  if (list.length === 0) {
    const isAr = state.lang === 'ar';
    container.innerHTML = `<p class="text-[11px] text-slate-500 text-center py-4">${isAr ? 'لا توجد عمليات سابقة بعد' : 'Aucun calcul récent'}</p>`;
    return;
  }

  container.innerHTML = list.map((item, idx) => `
    <div onclick="restoreCalcHistoryItem(${idx})" class="p-2 rounded-xl bg-bh-bg hover:bg-slate-800 border border-bh-border hover:border-bh-yellow/40 cursor-pointer transition text-xs flex items-center justify-between group">
      <div class="truncate max-w-[200px]">
        <span class="text-slate-400 block text-[10px] truncate">${item.expr} =</span>
        <span class="font-bold text-bh-yellow font-mono text-sm">${item.res}</span>
      </div>
      <span class="text-[9px] text-slate-500 font-mono group-hover:text-slate-300">${item.time}</span>
    </div>
  `).join('');
}

function restoreCalcHistoryItem(idx) {
  const list = getCalcHistory();
  const item = list[idx];
  if (item) {
    calcExpr = String(item.res);
    calcResult = String(item.res);
    calcHasEvaluated = true;
    updateCalcDisplay();
  }
}

function clearCalcHistory() {
  localStorage.removeItem('batihub_calc_history');
  renderCalcHistory();
}

function toggleCalcAngleMode() {
  calcAngleMode = calcAngleMode === 'DEG' ? 'RAD' : 'DEG';
  const badge1 = document.getElementById('calcAngleModeBadge');
  const badge2 = document.getElementById('calcScreenAngleMode');
  if (badge1) badge1.innerText = calcAngleMode;
  if (badge2) badge2.innerText = calcAngleMode;
}

function updateCalcDisplay() {
  const hist = document.getElementById('calcHistoryDisplay');
  const main = document.getElementById('calcMainDisplay');
  if (hist) hist.innerText = calcExpr || '';
  if (main) main.innerText = calcResult || '0';
}

function calcInsert(char) {
  if (calcHasEvaluated && /[0-9πe(]/.test(char)) {
    calcExpr = '';
  }
  calcHasEvaluated = false;

  calcExpr += char;
  calcResult = calcExpr;
  updateCalcDisplay();
}

function calcScientific(func) {
  calcHasEvaluated = false;
  switch (func) {
    case 'sin':
    case 'cos':
    case 'tan':
    case 'asin':
    case 'acos':
    case 'atan':
    case 'log':
    case 'ln':
    case 'sqrt':
      calcExpr += func + '(';
      break;
    case 'sqr':
      calcExpr += '^2';
      break;
    case 'cube':
      calcExpr += '^3';
      break;
    case 'inv':
      calcExpr += '^(-1)';
      break;
    case 'abs':
      calcExpr = `abs(${calcExpr || calcResult})`;
      break;
  }
  calcResult = calcExpr;
  updateCalcDisplay();
}

function calcBackspace() {
  if (calcExpr.length > 0) {
    calcExpr = calcExpr.slice(0, -1);
    calcResult = calcExpr || '0';
    updateCalcDisplay();
  }
}

function calcClear() {
  calcExpr = '';
  calcResult = '0';
  calcHasEvaluated = false;
  updateCalcDisplay();
}

function calcClearAll() {
  calcExpr = '';
  calcResult = '0';
  calcMemory = 0;
  calcHasEvaluated = false;
  const memFlag = document.getElementById('calcScreenMemoryFlag');
  if (memFlag) memFlag.classList.add('hidden');
  updateCalcDisplay();
}

function calcToggleSign() {
  if (!calcExpr) {
    if (calcResult !== '0') {
      calcResult = String(-parseFloat(calcResult));
      calcExpr = calcResult;
    }
  } else {
    calcExpr = `-(${calcExpr})`;
    calcResult = calcExpr;
  }
  updateCalcDisplay();
}

function calcMemoryOp(op) {
  const currentVal = parseFloat(calcResult) || 0;
  const memFlag = document.getElementById('calcScreenMemoryFlag');
  switch (op) {
    case 'MC':
      calcMemory = 0;
      if (memFlag) memFlag.classList.add('hidden');
      break;
    case 'MR':
      calcInsert(String(calcMemory));
      break;
    case 'M+':
      calcMemory += currentVal;
      if (memFlag) memFlag.classList.remove('hidden');
      break;
    case 'M-':
      calcMemory -= currentVal;
      if (memFlag) memFlag.classList.remove('hidden');
      break;
    case 'MS':
      calcMemory = currentVal;
      if (memFlag) memFlag.classList.remove('hidden');
      break;
  }
}

function copyCalcResult() {
  const text = calcResult || '0';
  navigator.clipboard.writeText(text).then(() => {
    alert(state.lang === 'ar' ? `تم نسخ النتيجة (${text}) إلى الحافظة!` : `Résultat (${text}) copié dans le presse-papiers !`);
  });
}

function safeCalcEval(expr) {
  if (!expr || !expr.trim()) return 0;

  let sanitized = expr
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-')
    .replace(/π/g, 'Math.PI')
    .replace(/\be\b/g, 'Math.E')
    .replace(/\^/g, '**');

  const isDeg = calcAngleMode === 'DEG';
  const toRad = isDeg ? '*(Math.PI/180)' : '';
  const fromRad = isDeg ? '*(180/Math.PI)' : '';

  sanitized = sanitized.replace(/sin\(([^)]+)\)/g, `Math.sin(($1)${toRad})`);
  sanitized = sanitized.replace(/cos\(([^)]+)\)/g, `Math.cos(($1)${toRad})`);
  sanitized = sanitized.replace(/tan\(([^)]+)\)/g, `Math.tan(($1)${toRad})`);

  sanitized = sanitized.replace(/asin\(([^)]+)\)/g, `(Math.asin($1)${fromRad})`);
  sanitized = sanitized.replace(/acos\(([^)]+)\)/g, `(Math.acos($1)${fromRad})`);
  sanitized = sanitized.replace(/atan\(([^)]+)\)/g, `(Math.atan($1)${fromRad})`);

  sanitized = sanitized.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
  sanitized = sanitized.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
  sanitized = sanitized.replace(/ln\(([^)]+)\)/g, 'Math.log($1)');
  sanitized = sanitized.replace(/abs\(([^)]+)\)/g, 'Math.abs($1)');

  if (!/^[0-9+\-*/()., %*MathPIE\s]+$/.test(sanitized)) {
    throw new Error('Caractères non autorisés');
  }

  const result = Function(`'use strict'; return (${sanitized});`)();
  if (isNaN(result) || !isFinite(result)) {
    throw new Error('Résultat non défini');
  }

  if (Math.abs(result) < 1e-12) return 0;
  return Number(result.toFixed(8));
}

function calcEvaluate() {
  if (!calcExpr) return;
  try {
    const rawRes = safeCalcEval(calcExpr);
    saveCalcHistoryItem(calcExpr, rawRes);
    calcResult = String(rawRes);
    calcExpr = String(rawRes);
    calcHasEvaluated = true;
    updateCalcDisplay();
  } catch (e) {
    calcResult = 'Error';
    updateCalcDisplay();
  }
}

// Quick Civil Engineering Calculations
function runQuickCalcSurface() {
  const l = parseFloat(document.getElementById('qcLength')?.value) || 0;
  const w = parseFloat(document.getElementById('qcWidth')?.value) || 0;
  const area = l * w;
  const perim = 2 * (l + w);

  const outArea = document.getElementById('qcAreaOutput');
  const outPerim = document.getElementById('qcPerimOutput');
  if (outArea) outArea.innerText = `${area.toFixed(2)} m²`;
  if (outPerim) outPerim.innerText = `${perim.toFixed(2)} m`;
}

function runQuickCalcConcrete() {
  const l = parseFloat(document.getElementById('qcConcL')?.value) || 0;
  const w = parseFloat(document.getElementById('qcConcW')?.value) || 0;
  const h = parseFloat(document.getElementById('qcConcH')?.value) || 0;
  const dosage = parseFloat(document.getElementById('qcConcDosage')?.value) || 350;

  const vol = l * w * h;
  const totalCementKg = vol * dosage;
  const bags = Math.ceil(totalCementKg / 50);
  const tonnes = totalCementKg / 1000;
  const sandVol = vol * 0.4;
  const gravelVol = vol * 0.8;

  const isAr = state.lang === 'ar';
  const outVol = document.getElementById('qcConcVolOutput');
  const outBags = document.getElementById('qcBagsOutput');
  const outSand = document.getElementById('qcSandOutput');
  const outGravel = document.getElementById('qcGravelOutput');

  if (outVol) outVol.innerText = `${vol.toFixed(2)} m³`;
  if (outBags) outBags.innerText = `${bags} ${isAr ? 'كيس' : 'sacs'} (${tonnes.toFixed(1)}T)`;
  if (outSand) outSand.innerText = `${sandVol.toFixed(2)} m³`;
  if (outGravel) outGravel.innerText = `${gravelVol.toFixed(2)} m³`;
}

function runQuickCalcSteel() {
  const dia = parseFloat(document.getElementById('qcSteelDiameter')?.value) || 12;
  const len = parseFloat(document.getElementById('qcSteelLength')?.value) || 0;

  const weightKg = (Math.pow(dia, 2) / 162) * len;
  const quintals = weightKg / 100;

  const outWeight = document.getElementById('qcSteelWeightOutput');
  const outQ = document.getElementById('qcSteelQuintalsOutput');
  if (outWeight) outWeight.innerText = `${weightKg.toFixed(2)} kg`;
  if (outQ) outQ.innerText = `${quintals.toFixed(2)} Q`;
}

function injectQuickValue(elemId) {
  const el = document.getElementById(elemId);
  if (!el) return;
  const match = el.innerText.match(/([0-9.]+)/);
  if (match && match[1]) {
    calcInsert(match[1]);
  }
}

// =========================================================================
// 14. REAL-TIME INTERNET CONNECTIVITY & LIVE CLOCK
// =========================================================================
function updateNetworkStatus() {
  const isOnline = navigator.onLine;
  const badge = document.getElementById('networkStatusBadge');
  const text = document.getElementById('networkStatusText');
  const dot = document.getElementById('networkStatusDot');

  const dict = TRANSLATIONS[state.lang] || TRANSLATIONS.ar;
  const isAr = state.lang === 'ar';

  if (isOnline) {
    let modeText = isAr ? 'متصل بالإنترنت' : 'Connecté à Internet';
    if (navigator.connection) {
      const type = navigator.connection.type;
      const eff = navigator.connection.effectiveType;
      if (type === 'cellular' || eff === '4g' || eff === '3g' || eff === '2g') {
        modeText = isAr ? 'متصل (بيانات الهاتف 4G/3G 📶)' : 'Connecté (Données 4G 📶)';
      } else if (type === 'wifi') {
        modeText = isAr ? 'متصل (Wi-Fi ⚡)' : 'Connecté (Wi-Fi ⚡)';
      }
    }
    if (badge) {
      badge.className = "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono";
    }
    if (dot) {
      dot.className = "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse";
    }
    if (text) {
      text.innerText = modeText;
    }
  } else {
    if (badge) {
      badge.className = "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] font-mono";
    }
    if (dot) {
      dot.className = "w-1.5 h-1.5 rounded-full bg-rose-400";
    }
    if (text) {
      text.innerText = isAr ? 'غير متصل بالإنترنت ⚠️' : 'Hors ligne ⚠️';
    }
  }
}

if (navigator.connection) {
  try {
    navigator.connection.addEventListener('change', updateNetworkStatus);
  } catch (e) {}
}

function updateLiveClock() {
  const clockEl = document.getElementById('liveClockTime');
  if (clockEl) {
    const now = new Date();
    clockEl.innerText = now.toTimeString().split(' ')[0];
  }
}

// Global Keyboard Listener for Calculator
window.addEventListener('keydown', (e) => {
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
  if (!document.getElementById('modalUserProfile')?.classList.contains('hidden')) return;
  if (!document.getElementById('modalChangePassword')?.classList.contains('hidden')) return;

  const key = e.key;
  if (/[0-9]/.test(key)) {
    calcInsert(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    calcInsert(key);
  } else if (key === '.') {
    calcInsert('.');
  } else if (key === '(' || key === ')') {
    calcInsert(key);
  } else if (key === '^') {
    calcInsert('^');
  } else if (key === '%') {
    calcInsert('%');
  } else if (key === 'Enter' || key === '=') {
    e.preventDefault();
    calcEvaluate();
  } else if (key === 'Backspace') {
    calcBackspace();
  } else if (key === 'Escape') {
    calcClear();
  }
});

// Setup online events and clock at load
window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);
setInterval(updateLiveClock, 1000);
setTimeout(() => {
  updateNetworkStatus();
  updateLiveClock();
  runQuickCalcSurface();
  runQuickCalcConcrete();
  runQuickCalcSteel();
  renderCalcHistory();
}, 200);

// =========================================================================
// 14. PWA MOBILE APP ENGINE & INSTALLATION PROMPT
// =========================================================================
if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('[PWA] Service Worker registered with scope:', reg.scope))
      .catch((err) => console.log('[PWA] Service Worker registration failed:', err));
  });
}

let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const banner = document.getElementById('pwaInstallPromptBanner');
  const btn = document.getElementById('btnMobileInstallPwa');
  if (banner) banner.classList.remove('hidden');
  if (btn) btn.classList.remove('hidden');
});

function promptInstallPwa() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        dismissPwaBanner();
      }
      deferredInstallPrompt = null;
    });
  } else {
    const isAr = state.lang === 'ar';
    alert(isAr 
      ? 'لتثبيت التطبيق على هاتفك المحمول:\n1. اضغط على زر خيارات المتصفح (⋮) في الأعلى أو الأسفل.\n2. اختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية" (Installer l\'application).\n3. سيظهر تطبيق BatiHub DZ كأيقونة مستقلة على شاشة هاتفك!'
      : 'Pour installer l\'application sur votre téléphone :\n1. Ouvrez le menu de votre navigateur (⋮).\n2. Appuyez sur "Installer l\'application" ou "Ajouter à l\'écran d\'accueil".\n3. L\'icône BatiHub DZ apparaîtra directement sur votre écran !');
  }
}

function dismissPwaBanner() {
  const banner = document.getElementById('pwaInstallPromptBanner');
  if (banner) banner.classList.add('hidden');
}

function toggleLanguageQuick() {
  const currentLang = state.lang || 'ar';
  const nextLang = currentLang === 'ar' ? 'fr' : (currentLang === 'fr' ? 'en' : 'ar');
  setLanguage(nextLang);
}

function checkPwaInstallState() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (!isStandalone && window.innerWidth <= 768) {
    const banner = document.getElementById('pwaInstallPromptBanner');
    const btn = document.getElementById('btnMobileInstallPwa');
    if (banner) banner.classList.remove('hidden');
    if (btn) btn.classList.remove('hidden');
  }
}
window.addEventListener('load', () => {
  setTimeout(checkPwaInstallState, 1200);
});

// =========================================================================
// 12. WORKER & ARTISAN REQUESTS BOARD (سوق العمل وطلب الحرفيين)
// REAL-TIME PC & MOBILE CROSS-DEVICE SYNCHRONIZATION
// =========================================================================

let currentWorkerFilter = 'all';
let selectedPostImageDataUrl = null;
const activeCommentImages = {};
const editingCommentState = {};
const openCommentsMap = {};

let currentDeviceId = localStorage.getItem('bh_device_id');
if (!currentDeviceId) {
  currentDeviceId = 'dev_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8);
  localStorage.setItem('bh_device_id', currentDeviceId);
}

function getCurrentSessionUser() {
  try {
    const raw = localStorage.getItem('batihub_user');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}


// =========================================================================
// 15. CUSTOM APP NOTIFICATION & TOAST ENGINE
// =========================================================================

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatPostTime(ts) {
  if (!ts) return '';
  const diffSec = Math.floor((Date.now() - ts) / 1000);
  const isAr = state.lang === 'ar';
  if (diffSec < 60) return isAr ? 'الآن' : "À l'instant";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return isAr ? `منذ ${diffMin} دقيقة` : `Il y a ${diffMin} min`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return isAr ? `منذ ${diffHours} ساعة` : `Il y a ${diffHours} h`;
  const diffDays = Math.floor(diffHours / 24);
  return isAr ? `منذ ${diffDays} يوم` : `Il y a ${diffDays} j`;
}

function getLocalizedTradeName(tradeKey) {
  const isAr = state.lang === 'ar';
  const isEn = state.lang === 'en';
  const clean = (tradeKey || '').trim();

  const map = {
    'بناء': { ar: 'بناء', fr: 'Maçonnerie', en: 'Masonry' },
    'كهرباء': { ar: 'كهرباء', fr: 'Électricité', en: 'Electricity' },
    'ترصيص وصحي': { ar: 'ترصيص وصحي', fr: 'Plomberie & Sanitaire', en: 'Plumbing' },
    'دهان وديكور': { ar: 'دهان وديكور', fr: 'Peinture & Décoration', en: 'Painting' },
    'بلاط وسيراميك': { ar: 'بلاط وسيراميك', fr: 'Carrelage & Céramique', en: 'Tiling' },
    'نجارة وألمنيوم': { ar: 'نجارة وألمنيوم', fr: 'Menuiserie & Alu', en: 'Carpentry & Alu' },
    'حدادة وتسليح': { ar: 'حدادة وتسليح', fr: 'Ferraillage & Métallerie', en: 'Steel & Ironwork' },
    'تكييف وتبريد': { ar: 'تكييف وتبريد', fr: 'Climatisation & Chauffage', en: 'HVAC' },
    'أشغال حفر وتطهير': { ar: 'أشغال حفر وتطهير', fr: 'Terrassement & Engins', en: 'Earthworks' },
    'تخصص آخر': { ar: 'تخصص آخر', fr: 'Autre métier', en: 'Other' }
  };

  if (map[clean]) {
    return isAr ? map[clean].ar : (isEn ? map[clean].en : map[clean].fr);
  }
  return clean;
}

function showAppToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('appToastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `app-toast toast-${type}`;
  
  let icon = 'fa-solid fa-circle-info text-sky-400';
  if (type === 'success') icon = 'fa-solid fa-circle-check text-emerald-400';
  if (type === 'error') icon = 'fa-solid fa-triangle-exclamation text-rose-400';
  if (type === 'warning') icon = 'fa-solid fa-circle-exclamation text-amber-400';

  toast.innerHTML = `
    <i class="${icon} text-base shrink-0"></i>
    <span class="flex-1 text-right text-xs leading-snug">${escapeHtml(message)}</span>
    <button type="button" class="text-slate-400 hover:text-white text-xs cursor-pointer ml-1" onclick="this.parentElement.remove()">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-15px) scale(0.95)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function showAppAlert(title, message, type = 'info') {
  return new Promise((resolve) => {
    const modal = document.getElementById('appNotificationModal');
    const titleEl = document.getElementById('appNotifyTitle');
    const msgEl = document.getElementById('appNotifyMessage');
    const iconEl = document.getElementById('appNotifyIcon');
    const iconWrapper = document.getElementById('appNotifyIconWrapper');
    const btnConfirm = document.getElementById('btnAppNotifyConfirm');
    const btnCancel = document.getElementById('btnAppNotifyCancel');

    if (!modal) {
      alert(message);
      resolve(true);
      return;
    }

    if (titleEl) titleEl.innerText = title || 'تنبيه';
    if (msgEl) msgEl.innerText = message || '';

    // Icon & Color styling
    if (iconEl && iconWrapper) {
      if (type === 'success') {
        iconEl.className = 'fa-solid fa-circle-check';
        iconWrapper.className = 'w-14 h-14 mx-auto rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-2xl shadow-lg';
      } else if (type === 'error') {
        iconEl.className = 'fa-solid fa-circle-xmark';
        iconWrapper.className = 'w-14 h-14 mx-auto rounded-2xl bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center justify-center text-2xl shadow-lg';
      } else if (type === 'warning') {
        iconEl.className = 'fa-solid fa-triangle-exclamation';
        iconWrapper.className = 'w-14 h-14 mx-auto rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center text-2xl shadow-lg';
      } else {
        iconEl.className = 'fa-solid fa-circle-info';
        iconWrapper.className = 'w-14 h-14 mx-auto rounded-2xl bg-sky-500/15 text-sky-400 border border-sky-500/30 flex items-center justify-center text-2xl shadow-lg';
      }
    }

    if (btnCancel) btnCancel.classList.add('hidden');
    if (btnConfirm) {
      btnConfirm.innerText = 'حسناً';
      btnConfirm.onclick = () => {
        modal.classList.add('hidden');
        resolve(true);
      };
    }

    modal.classList.remove('hidden');
  });
}

function showAppConfirm(title, message, confirmText = 'تأكيد', cancelText = 'إلغاء', type = 'warning') {
  return new Promise((resolve) => {
    const modal = document.getElementById('appNotificationModal');
    const titleEl = document.getElementById('appNotifyTitle');
    const msgEl = document.getElementById('appNotifyMessage');
    const iconEl = document.getElementById('appNotifyIcon');
    const iconWrapper = document.getElementById('appNotifyIconWrapper');
    const btnConfirm = document.getElementById('btnAppNotifyConfirm');
    const btnCancel = document.getElementById('btnAppNotifyCancel');

    if (!modal) {
      resolve(confirm(message));
      return;
    }

    if (titleEl) titleEl.innerText = title || 'تأكيد الإجراء';
    if (msgEl) msgEl.innerText = message || '';

    if (iconEl && iconWrapper) {
      iconEl.className = 'fa-solid fa-triangle-exclamation';
      iconWrapper.className = 'w-14 h-14 mx-auto rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center text-2xl shadow-lg';
    }

    if (btnCancel) {
      btnCancel.classList.remove('hidden');
      btnCancel.innerText = cancelText;
      btnCancel.onclick = () => {
        modal.classList.add('hidden');
        resolve(false);
      };
    }

    if (btnConfirm) {
      btnConfirm.innerText = confirmText;
      btnConfirm.onclick = () => {
        modal.classList.add('hidden');
        resolve(true);
      };
    }

    modal.classList.remove('hidden');
  });
}

// =========================================================================
// 16. JOB OFFERS & TRADESMEN BOARD (عروض العمل والحرفيين)
// =========================================================================

const SEED_WORKER_POSTS = [
  {
    id: 'wp_seed_1',
    authorEmail: 'mouhanedguellif16@gmail.com',
    authorName: 'فاتح',
    authorAvatar: 'assets/batihub_logo.png',
    trade: 'بناء',
    priceAmount: '800',
    priceUnit: 'm2',
    location: 'الجزائر العاصمة (درارية)',
    description: 'مطلوب بناء محترف وخبير في بناء الجدران وصب الساريات الخرسانية والتلبيس لورشة فيلا. العمل متوفر فوراً مع توفير كافة مواد البناء والعتاد.',
    phone: '0550123456',
    image: null,
    likes: ['mouhanedguellif16@gmail.com', 'client1@batihub.dz'],
    status: 'approved',
    comments: [
      {
        id: 'wc_seed_c1',
        authorEmail: 'artisan.alger@batihub.dz',
        authorName: 'عمي رشيد البناء',
        authorAvatar: '',
        text: 'السلام عليكم أخي، أنا متوفر مع فريقي من 3 عمال متمرسين. تواصل معي في الهاتف أو الواتساب نتفاهمو.',
        image: null,
        timestamp: Date.now() - 3600000 * 2,
        edited: false
      }
    ],
    timestamp: Date.now() - 3600000 * 5,
    updatedAt: Date.now() - 3600000 * 5,
    deleted: false
  },
  {
    id: 'wp_seed_2',
    authorEmail: 'kamal.electric@gmail.com',
    authorName: 'كمال كهربائي',
    authorAvatar: '',
    trade: 'كهرباء',
    priceAmount: '',
    priceUnit: 'negotiable',
    location: 'سطيف (العلمة)',
    description: 'كهربائي معماري وصناعي متمرس، أقوم بجميع أعمال التمديدات الكهربائية، لوحات التوزيع الرئيسية، الإنارة المخفية ليد، وتركيب كاميرات المراقبة بحرفية عالية.',
    phone: '0661234567',
    image: null,
    likes: ['mouhanedguellif16@gmail.com'],
    status: 'approved',
    comments: [],
    timestamp: Date.now() - 3600000 * 8,
    updatedAt: Date.now() - 3600000 * 8,
    deleted: false
  },
  {
    id: 'wp_seed_3',
    authorEmail: 'amine.plomb@gmail.com',
    authorName: 'أمين بلومبي',
    authorAvatar: '',
    trade: 'ترصيص وصحي',
    priceAmount: '1200',
    priceUnit: 'linear_m',
    location: 'وهران (بئر الجير)',
    description: 'سباك صحي محترف: تمديد شبكات الغاز والماء بتقنية البولي إيثيلين والـ PPR، تركيب التدفئة المركزية، وتركيب خزانات المياه والمضخات ومعدات الحمامات العصرية.',
    phone: '0770987654',
    image: null,
    likes: ['client2@batihub.dz', 'mouhanedguellif16@gmail.com'],
    status: 'approved',
    comments: [
      {
        id: 'wc_seed_c2',
        authorEmail: 'mouhanedguellif16@gmail.com',
        authorName: 'فاتح',
        authorAvatar: 'assets/batihub_logo.png',
        text: 'خدمة ممتازة بالتوفيق خويا أمين ربي يوفقك',
        image: null,
        timestamp: Date.now() - 3600000 * 1,
        edited: false
      }
    ],
    timestamp: Date.now() - 3600000 * 12,
    updatedAt: Date.now() - 3600000 * 12,
    deleted: false
  }
];

let showOnlyPendingPostsFilter = false;

function getStoredWorkerPosts() {
  try {
    const raw = localStorage.getItem('batihub_worker_posts_v3');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error('Error reading stored worker posts:', e);
  }
  localStorage.setItem('batihub_worker_posts_v3', JSON.stringify(SEED_WORKER_POSTS));
  return [...SEED_WORKER_POSTS];
}

function saveStoredWorkerPosts(posts) {
  try {
    localStorage.setItem('batihub_worker_posts_v3', JSON.stringify(posts));
    if (window.electronDB && window.electronDB.saveWorkerPosts) {
      window.electronDB.saveWorkerPosts(posts);
    }
  } catch (e) {
    console.error('Error saving worker posts:', e);
  }
}

// -------------------------------------------------------------
// Real-time Cloud Sync Engine (ntfy.sh Server-Sent Events & Polling)
// -------------------------------------------------------------
const WORKER_SYNC_TOPIC = 'https://ntfy.sh/batihub_dz_workers_v1';

async function broadcastWorkerAction(actionType, payload) {
  try {
    const messageBody = JSON.stringify({
      action: actionType,
      payload: payload,
      senderDeviceId: currentDeviceId,
      timestamp: Date.now()
    });
    await fetch(WORKER_SYNC_TOPIC, {
      method: 'POST',
      body: messageBody,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.warn('[Sync] Broadcast failed, will sync via polling:', err);
  }
}

let workerEventSource = null;
let lastSyncedMessageTime = Date.now() - 3600000 * 12;

function initWorkerRealtimeSync() {
  if (workerEventSource) return;

  pollWorkerSyncHistory();

  try {
    workerEventSource = new EventSource(`${WORKER_SYNC_TOPIC}/sse`);
    workerEventSource.onmessage = (event) => {
      try {
        const parsedWrapper = JSON.parse(event.data);
        if (!parsedWrapper.message) return;
        const packet = JSON.parse(parsedWrapper.message);
        if (packet.senderDeviceId === currentDeviceId) return;
        handleIncomingWorkerSyncPacket(packet);
      } catch (e) {}
    };
    workerEventSource.onerror = () => {};
  } catch (e) {}

  setInterval(pollWorkerSyncHistory, 12000);
}

async function pollWorkerSyncHistory() {
  try {
    const res = await fetch(`${WORKER_SYNC_TOPIC}/json?poll=1&since=12h`);
    if (!res.ok) return;
    const text = await res.text();
    const lines = text.trim().split('\n');
    lines.forEach(line => {
      if (!line.trim()) return;
      try {
        const obj = JSON.parse(line);
        if (obj.time && obj.time * 1000 <= lastSyncedMessageTime) return;
        if (obj.time) lastSyncedMessageTime = obj.time * 1000;
        if (!obj.message) return;
        const packet = JSON.parse(obj.message);
        if (packet.senderDeviceId === currentDeviceId) return;
        handleIncomingWorkerSyncPacket(packet);
      } catch (e) {}
    });
  } catch (e) {}
}

function handleIncomingWorkerSyncPacket(packet) {
  const { action, payload } = packet;

  // 1. Worker Posts Actions
  if (['publish_post', 'edit_post', 'delete_post', 'toggle_like', 'add_comment', 'edit_comment', 'delete_comment', 'approve_post', 'reject_post'].includes(action)) {
    let posts = getStoredWorkerPosts();
    let changed = false;

    if (action === 'publish_post') {
      if (!posts.some(p => p.id === payload.id)) {
        posts.unshift(payload);
        changed = true;
      }
    } else if (action === 'approve_post') {
      const post = posts.find(p => p.id === payload.postId);
      if (post) {
        post.status = 'approved';
        changed = true;
      }
    } else if (action === 'reject_post' || action === 'delete_post') {
      posts = posts.filter(p => p.id !== payload.postId);
      changed = true;
    } else if (action === 'edit_post') {
      const idx = posts.findIndex(p => p.id === payload.id);
      if (idx !== -1) {
        posts[idx] = { ...posts[idx], ...payload };
        changed = true;
      }
    } else if (action === 'toggle_like') {
      const post = posts.find(p => p.id === payload.postId);
      if (post) {
        post.likes = payload.likes;
        changed = true;
      }
    } else if (action === 'add_comment') {
      const post = posts.find(p => p.id === payload.postId);
      if (post) {
        if (!post.comments) post.comments = [];
        if (!post.comments.some(c => c.id === payload.comment.id)) {
          post.comments.push(payload.comment);
          changed = true;
        }
      }
    } else if (action === 'edit_comment') {
      const post = posts.find(p => p.id === payload.postId);
      if (post && post.comments) {
        const c = post.comments.find(c => c.id === payload.commentId);
        if (c) {
          c.text = payload.text;
          c.edited = true;
          changed = true;
        }
      }
    } else if (action === 'delete_comment') {
      const post = posts.find(p => p.id === payload.postId);
      if (post && post.comments) {
        post.comments = post.comments.filter(c => c.id !== payload.commentId);
        changed = true;
      }
    }

    if (changed) {
      saveStoredWorkerPosts(posts);
      renderWorkerPostsFeed();
    }
  }

  // 2. Study Offices Actions
  if (['publish_office', 'approve_office', 'reject_office', 'delete_office'].includes(action)) {
    let offices = getStoredStudyOffices();
    let changed = false;

    if (action === 'publish_office') {
      if (!offices.some(o => o.id === payload.id)) {
        offices.unshift(payload);
        changed = true;
      }
    } else if (action === 'approve_office') {
      const off = offices.find(o => o.id === payload.officeId);
      if (off) {
        off.status = 'approved';
        changed = true;
      }
    } else if (action === 'reject_office' || action === 'delete_office') {
      offices = offices.filter(o => o.id !== payload.officeId);
      changed = true;
    }

    if (changed) {
      saveStoredStudyOffices(offices);
      renderStudyOfficesFeed();
    }
  }

  // 3. Private Chat Actions
  if (action === 'chat_message') {
    handleIncomingChatMessage(payload);
  } else if (action === 'edit_chat_message') {
    handleIncomingEditChatMessage(payload);
  }
}

// -------------------------------------------------------------
// Admin & Authorization Helper
// -------------------------------------------------------------
function isCurrentUserAdmin() {
  const currentUser = getCurrentSessionUser();
  if (!currentUser) return false;
  return currentUser.role === 'admin' || (currentUser.email && currentUser.email.toLowerCase() === 'batihubdz@gmail.com');
}

// -------------------------------------------------------------
// Direct Phone Call & WhatsApp Deep Linking
// -------------------------------------------------------------
function makeDirectPhoneCall(phone) {
  if (!phone) return;
  const clean = phone.replace(/[^\d+]/g, '');
  window.location.href = `tel:${clean}`;
}

function openWhatsAppChat(phone) {
  if (!phone) return;
  let clean = phone.replace(/\D/g, '');
  if (clean.startsWith('0')) clean = clean.substring(1);
  if (!clean.startsWith('213')) clean = '213' + clean;
  const url = `https://api.whatsapp.com/send?phone=${clean}`;
  window.open(url, '_blank');
}

// -------------------------------------------------------------
// Image Compression for Lightweight Sync
// -------------------------------------------------------------
function compressImageFile(file, maxDimension = 640, quality = 0.65) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => resolve(null);
      img.src = e.target.result;
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

// -------------------------------------------------------------
// UI Modals & Handlers for Worker Posts
// -------------------------------------------------------------
function openCreateWorkerPostModal() {
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) {
    showAppAlert('تسجيل الدخول مطلوب', 'يرجى تسجيل الدخول أولاً لتتمكن من نشر عرض عمل.', 'warning');
    return;
  }
  document.getElementById('modalCreateWorkerPost').classList.remove('hidden');
}

function closeCreateWorkerPostModal() {
  document.getElementById('modalCreateWorkerPost').classList.add('hidden');
}

async function handlePostImageSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const dataUrl = await compressImageFile(file, 640, 0.65);
  selectedPostImageDataUrl = dataUrl;
  const nameEl = document.getElementById('postImageFileName');
  const previewCont = document.getElementById('postImagePreviewContainer');
  const previewImg = document.getElementById('postImagePreview');
  const removeBtn = document.getElementById('btnRemovePostImage');
  if (nameEl) nameEl.innerText = file.name;
  if (previewImg) previewImg.src = dataUrl;
  if (previewCont) previewCont.classList.remove('hidden');
  if (removeBtn) removeBtn.classList.remove('hidden');
}

function clearPostImageSelection() {
  selectedPostImageDataUrl = null;
  const input = document.getElementById('inputPostImage');
  if (input) input.value = '';
  const nameEl = document.getElementById('postImageFileName');
  const previewCont = document.getElementById('postImagePreviewContainer');
  const removeBtn = document.getElementById('btnRemovePostImage');
  if (nameEl) nameEl.innerText = 'لم يتم اختيار صورة';
  if (previewCont) previewCont.classList.add('hidden');
  if (removeBtn) removeBtn.classList.add('hidden');
}

async function handlePublishWorkerPost(event) {
  event.preventDefault();
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) {
    showAppAlert('تسجيل الدخول مطلوب', 'يرجى تسجيل الدخول أولاً لتتمكن من نشر عرض عمل.', 'warning');
    return;
  }

  const trade = document.getElementById('inputPostTrade').value;
  const location = document.getElementById('inputPostLocation').value.trim();
  const description = document.getElementById('inputPostDescription').value.trim();
  const phone = document.getElementById('inputPostPhone').value.trim();
  const priceAmount = document.getElementById('inputPostPriceAmount').value.trim();
  const priceUnit = document.getElementById('inputPostPriceUnit').value;

  if (!trade || !location || !description || !phone) {
    showAppAlert('حقول ناقصة', 'يرجى ملء جميع الحقول الإلزامية المطلوبة.', 'warning');
    return;
  }

  // Enforcement: Only 1 active post per category/trade per user (Admin is exempt)
  const posts = getStoredWorkerPosts();
  const userEmail = currentUser.email.toLowerCase();
  const isAdmin = isCurrentUserAdmin();

  if (!isAdmin) {
    const existingTradePost = posts.find(p => 
      !p.deleted && 
      p.authorEmail?.toLowerCase() === userEmail && 
      p.trade === trade &&
      p.status !== 'rejected'
    );

    if (existingTradePost) {
      showAppAlert('عرض مكرر في نفس التخصص', `لديك بالفعل منشور نشط في تخصص (${trade}).\n\nيُسمح بنشر عرض واحد فقط في كل تخصص. يمكنك تعديل منشورك السابق أو حذفه لتتمكن من نشر عرض جديد في هذا التخصص.`, 'warning');
      return;
    }
  }

  const newPost = {
    id: 'wp_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    authorEmail: currentUser.email,
    authorName: currentUser.name || 'مستخدم',
    authorAvatar: currentUser.avatar || 'assets/batihub_logo.png',
    role: currentUser.role || (currentUser.email === 'batihubdz@gmail.com' ? 'admin' : 'user'),
    trade: trade,
    priceAmount: priceAmount || '',
    priceUnit: priceUnit || 'negotiable',
    location: location,
    description: description,
    phone: phone,
    image: selectedPostImageDataUrl || null,
    likes: [],
    comments: [],
    status: isAdmin ? 'approved' : 'pending', // Admin posts approved immediately, users require approval
    timestamp: Date.now(),
    updatedAt: Date.now(),
    deleted: false
  };

  posts.unshift(newPost);
  saveStoredWorkerPosts(posts);

  broadcastWorkerAction('publish_post', newPost);

  document.getElementById('inputPostLocation').value = '';
  document.getElementById('inputPostDescription').value = '';
  document.getElementById('inputPostPhone').value = '';
  document.getElementById('inputPostPriceAmount').value = '';
  clearPostImageSelection();
  closeCreateWorkerPostModal();

  renderWorkerPostsFeed();

  if (isAdmin) {
    showAppToast('تم نشر العرض بنجاح وبشكل فوري!', 'success');
  } else {
    showAppAlert('تم إرسال العرض بنجاح', 'تم إرسال عرضك بنجاح وهو الآن قيد مراجعة إدارة BatiHub DZ للتأكد من المحتوى، وسيتم نشره للجميع فور الموافقة عليه.', 'info');
  }
}

async function handleApproveWorkerPost(postId) {
  if (!isCurrentUserAdmin()) return;
  const posts = getStoredWorkerPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  post.status = 'approved';
  saveStoredWorkerPosts(posts);
  broadcastWorkerAction('approve_post', { postId: postId });
  renderWorkerPostsFeed();
  showAppToast('تمت الموافقة على المنشور ونُشر للجميع بنجاح!', 'success');
}

async function handleRejectWorkerPost(postId) {
  if (!isCurrentUserAdmin()) return;
  const confirmed = await showAppConfirm('رفض المنشور', 'هل أنت متأكد من رفض وحذف هذا المنشور المعلق؟', 'رفض وحذف', 'إلغاء');
  if (!confirmed) return;

  let posts = getStoredWorkerPosts();
  posts = posts.filter(p => p.id !== postId);
  saveStoredWorkerPosts(posts);
  broadcastWorkerAction('reject_post', { postId: postId });
  renderWorkerPostsFeed();
  showAppToast('تم رفض المنشور وحذفه.', 'info');
}

async function handleDeleteWorkerPost(postId) {
  const currentUser = getCurrentSessionUser();
  if (!currentUser) return;
  const posts = getStoredWorkerPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  const isAuthor = currentUser.email && post.authorEmail && post.authorEmail.toLowerCase() === currentUser.email.toLowerCase();
  const isAdmin = isCurrentUserAdmin();

  if (!isAuthor && !isAdmin) {
    showAppAlert('غير مسموح', 'لا يمكنك حذف هذا المنشور (صلاحية خاصة بالكاتب أو إدارة التطبيق).', 'error');
    return;
  }

  const confirmed = await showAppConfirm(
    isAdmin && !isAuthor ? 'حذف إداري' : 'حذف المنشور',
    isAdmin && !isAuthor ? 'هل أنت متأكد من حذف هذا المنشور بصفة إدارية؟' : 'هل أنت متأكد من حذف هذا المنشور نهائياً؟',
    'نعم، احذف',
    'إلغاء'
  );

  if (confirmed) {
    const updatedPosts = posts.filter(p => p.id !== postId);
    saveStoredWorkerPosts(updatedPosts);
    broadcastWorkerAction('delete_post', { postId: postId });
    renderWorkerPostsFeed();
    showAppToast('تم حذف المنشور بنجاح!', 'success');
  }
}

function openEditWorkerPostModal(postId) {
  const posts = getStoredWorkerPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  document.getElementById('editPostId').value = post.id;
  document.getElementById('editPostTrade').value = post.trade;
  document.getElementById('editPostPriceAmount').value = post.priceAmount || '';
  document.getElementById('editPostPriceUnit').value = post.priceUnit || 'negotiable';
  document.getElementById('editPostLocation').value = post.location;
  document.getElementById('editPostDescription').value = post.description;
  document.getElementById('editPostPhone').value = post.phone;

  document.getElementById('modalEditWorkerPost').classList.remove('hidden');
}

function closeEditWorkerPostModal() {
  document.getElementById('modalEditWorkerPost').classList.add('hidden');
}

function handleSaveEditedWorkerPost(event) {
  event.preventDefault();
  const postId = document.getElementById('editPostId').value;
  const posts = getStoredWorkerPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  post.trade = document.getElementById('editPostTrade').value;
  post.priceAmount = document.getElementById('editPostPriceAmount').value.trim();
  post.priceUnit = document.getElementById('editPostPriceUnit').value;
  post.location = document.getElementById('editPostLocation').value.trim();
  post.description = document.getElementById('editPostDescription').value.trim();
  post.phone = document.getElementById('editPostPhone').value.trim();
  post.updatedAt = Date.now();

  saveStoredWorkerPosts(posts);
  broadcastWorkerAction('edit_post', {
    id: post.id,
    trade: post.trade,
    priceAmount: post.priceAmount,
    priceUnit: post.priceUnit,
    location: post.location,
    description: post.description,
    phone: post.phone,
    updatedAt: post.updatedAt
  });

  closeEditWorkerPostModal();
  renderWorkerPostsFeed();
  showAppToast('تم تحديث تفاصيل المنشور بنجاح!', 'success');
}

function togglePendingPostsFilter() {
  showOnlyPendingPostsFilter = !showOnlyPendingPostsFilter;
  const btn = document.getElementById('adminPendingFilterBtn');
  if (btn) {
    btn.classList.toggle('bg-amber-500/30', showOnlyPendingPostsFilter);
  }
  renderWorkerPostsFeed();
}

function filterWorkerFeed(trade, btn) {
  currentWorkerFilter = trade;
  showOnlyPendingPostsFilter = false;
  document.querySelectorAll('.worker-filter-pill').forEach(b => {
    b.classList.remove('active-filter');
  });
  if (btn) {
    btn.classList.add('active-filter');
  }
  renderWorkerPostsFeed();
}

function formatPriceUnit(amount, unit) {
  if (!amount || amount === '0') {
    return 'السعر قابل للتفاوض';
  }
  const amtFormatted = Number(amount).toLocaleString('fr-DZ') + ' دج';
  const unitMap = {
    'm2': 'لكل م²',
    'hour': 'للساعة',
    'day': 'باليوم',
    'linear_m': 'للمتر الطولي',
    'forfait': 'مقاولة إجمالية',
    'negotiable': 'قابل للتفاوض'
  };
  return `${amtFormatted} (${unitMap[unit] || unitMap.m2})`;
}

function renderWorkerPostsFeed() {
  const container = document.getElementById('workerPostsFeedContainer');
  if (!container) return;

  const currentUser = getCurrentSessionUser();
  const userEmail = currentUser?.email?.toLowerCase() || '';
  const isAdmin = isCurrentUserAdmin();
  const allPosts = getStoredWorkerPosts().filter(p => !p.deleted);

  // Update Pending Posts Counter badge for Admin
  const pendingCount = allPosts.filter(p => p.status === 'pending').length;
  const pendingFilterBtn = document.getElementById('adminPendingFilterBtn');
  const pendingCountBadge = document.getElementById('pendingPostsCountBadge');
  if (pendingFilterBtn) {
    if (isAdmin && pendingCount > 0) {
      pendingFilterBtn.classList.remove('hidden');
      if (pendingCountBadge) pendingCountBadge.innerText = pendingCount;
    } else {
      pendingFilterBtn.classList.add('hidden');
    }
  }

  // Filter posts visibility:
  // Approved posts: visible to everyone
  // Pending posts: visible only to Author and Admin
  let visiblePosts = allPosts.filter(p => {
    if (p.status === 'approved') return true;
    if (isAdmin) return true;
    if (userEmail && p.authorEmail?.toLowerCase() === userEmail) return true;
    return false;
  });

  if (showOnlyPendingPostsFilter && isAdmin) {
    visiblePosts = visiblePosts.filter(p => p.status === 'pending');
  } else if (currentWorkerFilter !== 'all') {
    visiblePosts = visiblePosts.filter(p => p.trade === currentWorkerFilter || (p.trade && p.trade.includes(currentWorkerFilter)));
  }

  if (visiblePosts.length === 0) {
    container.innerHTML = `
      <div class="bg-bh-card border border-bh-border rounded-2xl p-10 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-bh-bg border border-bh-border flex items-center justify-center text-bh-yellow text-2xl">
          <i class="fa-solid fa-briefcase"></i>
        </div>
        <h4 class="text-base font-bold text-white">${showOnlyPendingPostsFilter ? 'لا توجد طلبات معلقة بانتظار الموافقة حالياً' : 'لا توجد عروض في هذا التخصص حالياً'}</h4>
        <p class="text-xs text-slate-400 max-w-md mx-auto">كن أول من ينشر عرض أو طلب عمل وسيصل إشعار فوري لجميع المستخدمين في الحاسوب والهاتف!</p>
        <button onclick="openCreateWorkerPostModal()" class="mt-2 px-4 py-2 bg-bh-yellow hover:bg-bh-orange text-slate-950 font-bold rounded-xl text-xs transition cursor-pointer">
          <i class="fa-solid fa-plus mr-1"></i> نشر عرض جديد الآن
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = visiblePosts.map(post => {
    const isAuthor = userEmail && post.authorEmail && post.authorEmail.toLowerCase() === userEmail;
    const isPostAdmin = (post.authorEmail && post.authorEmail.toLowerCase() === 'batihubdz@gmail.com') || post.role === 'admin';
    const isLiked = post.likes && post.likes.map(e => e.toLowerCase()).includes(userEmail);
    const likesCount = post.likes ? post.likes.length : 0;
    const commentsCount = post.comments ? post.comments.length : 0;
    const commentsOpen = openCommentsMap[post.id] === true;
    const localizedTrade = getLocalizedTradeName(post.trade);
    const isPending = post.status === 'pending';

    return `
      <article class="bg-bh-card border border-bh-border rounded-2xl p-4 sm:p-5 shadow-xl space-y-3.5 transition hover:border-bh-yellow/40 ${isPending ? 'border-amber-500/40 bg-amber-500/5' : ''}">
        
        <!-- Header -->
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <img src="${post.authorAvatar || 'assets/batihub_logo.png'}" alt="${escapeHtml(post.authorName)}" class="w-10 h-10 rounded-full object-cover border border-bh-border shadow-sm">
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-bold text-sm text-white">${escapeHtml(post.authorName)}</span>
                ${isPostAdmin ? '<span class="px-2 py-0.5 rounded-full bg-bh-yellow/20 text-bh-yellow border border-bh-yellow/40 text-[10px] font-black flex items-center gap-1"><i class="fa-solid fa-shield-halved text-[9px]"></i> إدارة التطبيق</span>' : ''}
                ${isAuthor && !isPostAdmin ? '<span class="text-[10px] font-bold text-bh-yellow bg-bh-yellow/10 px-2 py-0.5 rounded-full border border-bh-yellow/20">(أنت)</span>' : ''}
                ${isPending ? '<span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold flex items-center gap-1"><i class="fa-solid fa-hourglass-half text-[9px] animate-pulse"></i> قيد مراجعة الإدارة</span>' : ''}
              </div>
              <div class="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                <span><i class="fa-regular fa-clock mr-1 text-[10px]"></i>${formatPostTime(post.timestamp)}</span>
                <span>•</span>
                <span class="text-slate-300"><i class="fa-solid fa-location-dot mr-1 text-bh-orange text-[10px]"></i>${escapeHtml(post.location)}</span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 flex-wrap justify-end">
            <!-- Trade Badge -->
            <span class="px-3 py-1 rounded-xl text-xs font-bold bg-bh-yellow/15 text-bh-yellow border border-bh-yellow/30 flex items-center gap-1.5 shadow-sm">
              <i class="fa-solid fa-hammer text-[11px]"></i>
              <span>${escapeHtml(localizedTrade)}</span>
            </span>

            <!-- Admin Approval / Rejection Actions for Pending Post -->
            ${(isAdmin && isPending) ? `
              <div class="flex items-center gap-1.5">
                <button type="button" onclick="handleApproveWorkerPost('${post.id}')" title="قبول ونشر للجميع" class="px-2.5 py-1 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs flex items-center gap-1 transition shadow-md cursor-pointer">
                  <i class="fa-solid fa-check"></i>
                  <span>قبول ونشر</span>
                </button>
                <button type="button" onclick="handleRejectWorkerPost('${post.id}')" title="رفض المنشور" class="px-2.5 py-1 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs flex items-center gap-1 transition shadow-md cursor-pointer">
                  <i class="fa-solid fa-xmark"></i>
                  <span>رفض</span>
                </button>
              </div>
            ` : ''}

            <!-- Author Edit Button -->
            ${isAuthor ? `
              <button onclick="openEditWorkerPostModal('${post.id}')" title="تعديل المنشور" class="w-8 h-8 rounded-xl bg-bh-bg border border-bh-border hover:border-bh-yellow/60 text-slate-400 hover:text-bh-yellow transition flex items-center justify-center text-xs cursor-pointer">
                <i class="fa-solid fa-pen"></i>
              </button>
            ` : ''}

            <!-- Author OR Admin Delete Button -->
            ${isAuthor ? `
              <button onclick="handleDeleteWorkerPost('${post.id}')" title="حذف المنشور" class="w-8 h-8 rounded-xl bg-bh-bg border border-bh-border hover:border-rose-500/60 text-slate-400 hover:text-rose-400 transition flex items-center justify-center text-xs cursor-pointer">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            ` : (isAdmin ? `
              <button onclick="handleDeleteWorkerPost('${post.id}')" title="حذف إداري للمنشور" class="px-2.5 py-1 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-400 hover:bg-rose-500/30 transition flex items-center gap-1 text-[11px] font-bold cursor-pointer">
                <i class="fa-solid fa-trash-can text-[10px]"></i>
                <span>حذف إداري</span>
              </button>
            ` : '')}
          </div>
        </div>

        <!-- Pricing Badge (if set) -->
        ${(post.priceAmount || post.priceUnit === 'negotiable') ? `
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-xl ${post.priceAmount ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400' : 'bg-bh-yellow/15 border border-bh-yellow/30 text-bh-yellow'} text-xs font-bold font-mono flex items-center gap-1.5 shadow-sm">
              <i class="fa-solid fa-tag text-[10px]"></i>
              <span>${formatPriceUnit(post.priceAmount, post.priceUnit)}</span>
            </span>
          </div>
        ` : ''}

        <!-- Post Description -->
        <p class="text-sm text-slate-200 leading-relaxed whitespace-pre-line select-text font-normal">${escapeHtml(post.description)}</p>

        <!-- Optional Attached Image -->
        ${post.image ? `
          <div class="rounded-xl overflow-hidden border border-bh-border bg-bh-bg cursor-pointer max-h-96" onclick="openImageLightbox('${post.image}')">
            <img src="${post.image}" alt="صورة الورشة" class="w-full h-auto max-h-96 object-contain hover:scale-[1.01] transition duration-200">
          </div>
        ` : ''}

        <!-- Direct Actions: Phone Call, WhatsApp, and 1-on-1 Private Chat -->
        <div class="flex items-center gap-2 flex-wrap pt-2 border-t border-bh-border/70">
          <button type="button" onclick="makeDirectPhoneCall('${escapeHtml(post.phone)}')" class="px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition flex items-center gap-2 cursor-pointer active:scale-95 shadow-sm">
            <i class="fa-solid fa-phone text-xs"></i>
            <span>اتصال مباشر: <span class="font-mono tracking-wider">${escapeHtml(post.phone)}</span></span>
          </button>

          <button type="button" onclick="openWhatsAppChat('${escapeHtml(post.phone)}')" class="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer active:scale-95 shadow-md shadow-emerald-600/30">
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>تواصل عبر واتساب</span>
          </button>

          <!-- 1-on-1 Private Chat Button -->
          <button type="button" onclick="openPrivateChat('${escapeHtml(post.authorEmail)}', '${escapeHtml(post.authorName)}', '${escapeHtml(post.authorAvatar || '')}')" class="px-3.5 py-2 rounded-xl bg-bh-yellow/15 hover:bg-bh-yellow/25 text-bh-yellow border border-bh-yellow/30 text-xs font-bold transition flex items-center gap-2 cursor-pointer active:scale-95 shadow-sm">
            <i class="fa-solid fa-comments text-xs"></i>
            <span>محادثة خاصة</span>
          </button>
        </div>

        <!-- Likes & Comments Toggle Bar -->
        <div class="flex items-center justify-between pt-2 border-t border-bh-border/50 text-xs text-slate-400">
          <div class="flex items-center gap-3">
            <button onclick="toggleWorkerPostLike('${post.id}')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition active:scale-95 cursor-pointer ${isLiked ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 font-bold' : 'bg-bh-bg text-slate-400 border-bh-border hover:border-bh-yellow/40'}">
              <i class="${isLiked ? 'fa-solid text-rose-500' : 'fa-regular'} fa-heart"></i>
              <span>${likesCount}</span>
            </button>

            <button onclick="togglePostComments('${post.id}')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-bh-bg text-slate-300 border border-bh-border hover:border-bh-yellow/40 transition active:scale-95 cursor-pointer">
              <i class="fa-regular fa-comment-dots text-bh-yellow"></i>
              <span>${commentsCount} تعليق</span>
            </button>
          </div>

          <span class="text-[11px] text-slate-500 font-mono">BatiHub DZ • منصة البناء الأولى</span>
        </div>

        <!-- Comments Drawer -->
        <div id="comments-drawer-${post.id}" class="${commentsOpen ? '' : 'hidden'} pt-3 border-t border-bh-border space-y-3">
          
          <div class="space-y-2 max-h-72 overflow-y-auto no-scrollbar">
            ${(!post.comments || post.comments.length === 0) ? `
              <p class="text-xs text-slate-500 text-center py-2">لا توجد تعليقات بعد. كن أول من يترك تعليقاً أو استفساراً!</p>
            ` : post.comments.map(comment => {
              const isCommentAuthor = userEmail && comment.authorEmail && comment.authorEmail.toLowerCase() === userEmail;
              const isCommentAdmin = (comment.authorEmail && comment.authorEmail.toLowerCase() === 'batihubdz@gmail.com') || comment.role === 'admin';
              const isEditing = editingCommentState[`${post.id}_${comment.id}`] === true;

              if (isEditing) {
                return `
                  <div class="p-2.5 rounded-xl bg-bh-bg border border-bh-yellow/40 space-y-2">
                    <span class="text-[11px] text-bh-yellow font-bold">تعديل تعليقك :</span>
                    <textarea id="editCommentInput-${post.id}-${comment.id}" rows="2" class="w-full bg-bh-card border border-bh-border rounded-lg p-2 text-xs text-white focus:outline-none focus:border-bh-yellow resize-none">${escapeHtml(comment.text)}</textarea>
                    <div class="flex items-center justify-end gap-2">
                      <button onclick="handleCancelEditComment('${post.id}', '${comment.id}')" class="px-2.5 py-1 rounded-lg text-xs text-slate-400 hover:text-white cursor-pointer">إلغاء</button>
                      <button onclick="handleSaveEditedWorkerComment('${post.id}', '${comment.id}')" class="px-3 py-1 rounded-lg bg-bh-yellow text-slate-950 font-bold text-xs cursor-pointer">حفظ</button>
                    </div>
                  </div>
                `;
              }

              return `
                <div class="flex items-start gap-2.5 p-2.5 rounded-xl bg-bh-bg/60 border border-bh-border/60">
                  <img src="${comment.authorAvatar || 'assets/batihub_logo.png'}" alt="${escapeHtml(comment.authorName)}" class="w-7 h-7 rounded-full object-cover border border-bh-border shrink-0 mt-0.5">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-2">
                      <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="text-xs font-bold text-white">${escapeHtml(comment.authorName)}</span>
                        ${isCommentAdmin ? '<span class="px-1.5 py-0.2 rounded bg-bh-yellow/20 text-bh-yellow border border-bh-yellow/40 text-[9px] font-black"><i class="fa-solid fa-shield-halved mr-0.5"></i> إدارة</span>' : ''}
                        ${isCommentAuthor && !isCommentAdmin ? '<span class="text-[9px] text-bh-yellow font-bold">(أنت)</span>' : ''}
                        <span class="text-[10px] text-slate-500">${formatPostTime(comment.timestamp)}</span>
                        ${comment.edited ? '<span class="text-[9px] text-slate-500 font-mono">(معدل)</span>' : ''}
                      </div>

                      <div class="flex items-center gap-1">
                        ${isCommentAuthor ? `
                          <button onclick="handleStartEditComment('${post.id}', '${comment.id}')" title="تعديل التعليق" class="text-slate-400 hover:text-bh-yellow text-[11px] px-1 cursor-pointer">
                            <i class="fa-solid fa-pen"></i>
                          </button>
                          <button onclick="handleDeleteWorkerComment('${post.id}', '${comment.id}')" title="حذف التعليق" class="text-slate-400 hover:text-rose-400 text-[11px] px-1 cursor-pointer">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        ` : (isAdmin ? `
                          <button onclick="handleDeleteWorkerComment('${post.id}', '${comment.id}')" title="حذف إداري للتعليق" class="text-rose-400 hover:text-rose-300 text-[11px] px-1 font-bold cursor-pointer">
                            <i class="fa-solid fa-trash-can"></i>
                          </button>
                        ` : '')}
                      </div>
                    </div>

                    <p class="text-xs text-slate-300 mt-1 whitespace-pre-line leading-relaxed select-text">${escapeHtml(comment.text)}</p>

                    ${comment.image ? `
                      <div class="mt-2 inline-block cursor-pointer" onclick="openImageLightbox('${comment.image}')">
                        <img src="${comment.image}" alt="صورة مرفقة بالتعليق" class="max-h-32 rounded-lg border border-bh-border object-contain hover:scale-105 transition">
                      </div>
                    ` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Add Comment Form -->
          <form onsubmit="handleAddWorkerComment('${post.id}', event)" class="pt-2">
            <div class="flex items-center gap-2">
              <div class="flex-1 relative">
                <input type="text" id="commentInput-${post.id}" placeholder="اكتب تعليقك أو استفسارك هنا..." class="w-full bg-bh-bg border border-bh-border rounded-xl pr-3 pl-10 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-bh-yellow">
                <label class="absolute inset-y-0 left-0 pl-2.5 flex items-center cursor-pointer text-slate-400 hover:text-bh-yellow transition" title="إرفاق صورة مع التعليق">
                  <i class="fa-solid fa-camera text-sm"></i>
                  <input type="file" accept="image/*" class="hidden" onchange="handleCommentImageSelect(event, '${post.id}')">
                </label>
              </div>

              <button type="submit" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-bh-yellow to-bh-orange text-slate-950 font-bold text-xs shadow-md hover:opacity-90 transition shrink-0 active:scale-95 flex items-center gap-1 cursor-pointer">
                <i class="fa-solid fa-paper-plane"></i>
                <span>إرسال</span>
              </button>
            </div>

            <div class="mt-1 flex items-center gap-2">
              <img id="commentImgPreview-${post.id}" src="" alt="معاينة" class="hidden max-h-12 rounded border border-bh-border">
            </div>
          </form>

        </div>

      </article>
    `;
  }).join('');
}

function toggleWorkerPostLike(postId) {
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) {
    showAppAlert('تسجيل الدخول مطلوب', 'يرجى تسجيل الدخول أولاً للإعجاب والتفاعل مع المنشور.', 'warning');
    return;
  }
  const posts = getStoredWorkerPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  if (!post.likes) post.likes = [];
  const userEmail = currentUser.email.toLowerCase();
  const idx = post.likes.map(e => e.toLowerCase()).indexOf(userEmail);
  if (idx !== -1) {
    post.likes.splice(idx, 1);
  } else {
    post.likes.push(currentUser.email);
  }

  saveStoredWorkerPosts(posts);
  broadcastWorkerAction('toggle_like', { postId: postId, likes: post.likes });
  renderWorkerPostsFeed();
}

function togglePostComments(postId) {
  openCommentsMap[postId] = !openCommentsMap[postId];
  const drawer = document.getElementById(`comments-drawer-${postId}`);
  if (drawer) {
    drawer.classList.toggle('hidden', !openCommentsMap[postId]);
  }
}

async function handleCommentImageSelect(event, postId) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const dataUrl = await compressImageFile(file, 480, 0.6);
  activeCommentImages[postId] = dataUrl;
  const previewEl = document.getElementById(`commentImgPreview-${postId}`);
  if (previewEl) {
    previewEl.src = dataUrl;
    previewEl.classList.remove('hidden');
  }
}

async function handleAddWorkerComment(postId, event) {
  if (event) event.preventDefault();
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) {
    showAppAlert('تسجيل الدخول مطلوب', 'يرجى تسجيل الدخول أولاً لإضافة تعليق.', 'warning');
    return;
  }

  const input = document.getElementById(`commentInput-${postId}`);
  if (!input) return;
  const text = input.value.trim();
  const attachedImage = activeCommentImages[postId] || null;

  if (!text && !attachedImage) return;

  const posts = getStoredWorkerPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;
  if (!post.comments) post.comments = [];

  const newComment = {
    id: 'wc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    authorEmail: currentUser.email,
    authorName: currentUser.name || 'مستخدم',
    authorAvatar: currentUser.avatar || 'assets/batihub_logo.png',
    role: currentUser.role || (currentUser.email === 'batihubdz@gmail.com' ? 'admin' : 'user'),
    text: text,
    image: attachedImage,
    timestamp: Date.now(),
    edited: false
  };

  post.comments.push(newComment);
  saveStoredWorkerPosts(posts);

  broadcastWorkerAction('add_comment', { postId: postId, comment: newComment });

  input.value = '';
  delete activeCommentImages[postId];
  openCommentsMap[postId] = true;

  renderWorkerPostsFeed();
}

function handleStartEditComment(postId, commentId) {
  editingCommentState[`${postId}_${commentId}`] = true;
  renderWorkerPostsFeed();
}

function handleCancelEditComment(postId, commentId) {
  delete editingCommentState[`${postId}_${commentId}`];
  renderWorkerPostsFeed();
}

function handleSaveEditedWorkerComment(postId, commentId) {
  const input = document.getElementById(`editCommentInput-${postId}-${commentId}`);
  if (!input) return;
  const newText = input.value.trim();
  if (!newText) return;

  const posts = getStoredWorkerPosts();
  const post = posts.find(p => p.id === postId);
  if (!post || !post.comments) return;
  const comment = post.comments.find(c => c.id === commentId);
  if (!comment) return;

  comment.text = newText;
  comment.edited = true;
  comment.updatedAt = Date.now();

  delete editingCommentState[`${postId}_${commentId}`];
  saveStoredWorkerPosts(posts);
  broadcastWorkerAction('edit_comment', {
    postId: postId,
    commentId: commentId,
    text: newText,
    updatedAt: comment.updatedAt
  });

  renderWorkerPostsFeed();
}

async function handleDeleteWorkerComment(postId, commentId) {
  const currentUser = getCurrentSessionUser();
  if (!currentUser) return;
  const posts = getStoredWorkerPosts();
  const post = posts.find(p => p.id === postId);
  if (!post || !post.comments) return;
  const comment = post.comments.find(c => c.id === commentId);
  if (!comment) return;

  const isCommentAuthor = currentUser.email && comment.authorEmail && comment.authorEmail.toLowerCase() === currentUser.email.toLowerCase();
  const isAdmin = isCurrentUserAdmin();

  if (!isCommentAuthor && !isAdmin) {
    showAppAlert('غير مسموح', 'لا يمكنك حذف تعليق شخص آخر.', 'error');
    return;
  }

  const confirmed = await showAppConfirm('حذف التعليق', 'هل أنت متأكد من حذف هذا التعليق؟', 'حذف', 'إلغاء');
  if (confirmed) {
    post.comments = post.comments.filter(c => c.id !== commentId);
    saveStoredWorkerPosts(posts);
    broadcastWorkerAction('delete_comment', { postId: postId, commentId: commentId });
    renderWorkerPostsFeed();
    showAppToast('تم حذف التعليق بنجاح.', 'info');
  }
}

// =========================================================================
// 17. BUREAUX D'ÉTUDES & ENGINEERING OFFICES (مكاتب دراسات وهندسة معمارية)
// =========================================================================

const SEED_STUDY_OFFICES = [
  {
    id: 'off_seed_1',
    name: 'مكتب الأفق للدراسات المعمارية والهندسة المدنية',
    specialty: 'مكتب دراسات متكامل',
    engineerName: 'م. حسام الدين زبيري',
    wilaya: 'الجزائر العاصمة',
    address: 'شارع ديدوش مراد، وسط العاصمة',
    phone: '0555123456',
    whatsapp: '0555123456',
    gps: '36.7725, 3.0560',
    description: 'مكتب معتمد متخصص في تصميم المخططات المعمارية والتنفيذية، استخراج رخص البناء، ملفات مطابقة البنايات، دراسات التربة وحساب الهياكل الخرسانية المسلحة والمعدنية.',
    image: null,
    authorEmail: 'batihubdz@gmail.com',
    status: 'approved',
    timestamp: Date.now() - 3600000 * 24
  },
  {
    id: 'off_seed_2',
    name: 'المهندس المعماري وليد قاسم',
    specialty: 'مهندس معماري',
    engineerName: 'م. وليد قاسم (معماري معتمد)',
    wilaya: 'وهران',
    address: 'حي العقيد لطفي، بجانب محطة الترامواي',
    phone: '0770112233',
    whatsapp: '0770112233',
    gps: '35.7065, -0.6308',
    description: 'تصميم فيلات عصرية راقية ومباني سكنية وتجارية بتقنية 3D ثلاثية الأبعاد، إعداد ملفات رخص البناء والتجزئة ومتابعة التنفيذ في الورشة حتى التسليم.',
    image: null,
    authorEmail: 'walid.arch@gmail.com',
    status: 'approved',
    timestamp: Date.now() - 3600000 * 48
  },
  {
    id: 'off_seed_3',
    name: 'مكتب سيرتا للهندسة المدنية ومسح الأراضي',
    specialty: 'مهندس مدني',
    engineerName: 'م. فؤاد شريف',
    wilaya: 'قسنطينة',
    address: 'حي الزيادية، قسنطينة',
    phone: '0661445566',
    whatsapp: '0661445566',
    gps: '36.3650, 6.6147',
    description: 'حساب حمولات الخرسانة المسلحة والهياكل الحديدية، دراسات ميكانيك التربة (Géotechnique)، أعمال التوبوغرافيا وتحديد الحدود العقارية مع اعتماد رسمي.',
    image: null,
    authorEmail: 'fouad.civil@gmail.com',
    status: 'approved',
    timestamp: Date.now() - 3600000 * 72
  }
];

let currentOfficeFilter = 'all';
let showOnlyPendingOfficesFilter = false;
let selectedOfficeImageDataUrl = null;

function getStoredStudyOffices() {
  try {
    const raw = localStorage.getItem('batihub_study_offices_v1');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error('Error reading study offices:', e);
  }
  localStorage.setItem('batihub_study_offices_v1', JSON.stringify(SEED_STUDY_OFFICES));
  return [...SEED_STUDY_OFFICES];
}

function saveStoredStudyOffices(offices) {
  try {
    localStorage.setItem('batihub_study_offices_v1', JSON.stringify(offices));
    if (window.electronDB && window.electronDB.saveStudyOffices) {
      window.electronDB.saveStudyOffices(offices);
    }
  } catch (e) {
    console.error('Error saving study offices:', e);
  }
}

function openAddStudyOfficeModal() {
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) {
    showAppAlert('تسجيل الدخول مطلوب', 'يرجى تسجيل الدخول أولاً لتتمكن من إضافة مكتب دراسات.', 'warning');
    return;
  }
  document.getElementById('modalAddStudyOffice').classList.remove('hidden');
}

function closeAddStudyOfficeModal() {
  document.getElementById('modalAddStudyOffice').classList.add('hidden');
}

function autoDetectOfficeGps() {
  const btnLabel = document.getElementById('btnDetectGpsLabel');
  if (!navigator.geolocation) {
    showAppAlert('نظام GPS غير مدعوم', 'متصفحك لا يدعم جلب الموقع الجغرافي تلقائياً. يرجى كتابة الإحداثيات أو رابط خرائط Google يدوياً.', 'warning');
    return;
  }

  if (btnLabel) btnLabel.innerText = 'جاري التحديد... ⏳';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(6);
      const lng = position.coords.longitude.toFixed(6);
      const input = document.getElementById('inputOfficeGps');
      if (input) {
        input.value = `${lat}, ${lng}`;
      }
      if (btnLabel) btnLabel.innerText = 'تم التحديد بنجاح ✓';
      showAppToast(`تم تحديد موقعك بدقة: ${lat}, ${lng}`, 'success');
      setTimeout(() => { if (btnLabel) btnLabel.innerText = 'تحديد موقعي الآن 📍'; }, 3000);
    },
    (err) => {
      if (btnLabel) btnLabel.innerText = 'تحديد موقعي الآن 📍';
      showAppAlert('تعذر تحديد الموقع', 'يرجى تفعيل خدمة تحديد الموقع (GPS) في هاتفك أو متصفحك أو إدخال العنوان والإحداثيات يدوياً.', 'warning');
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

function openOfficeGps(gpsLocation) {
  if (!gpsLocation) {
    showAppToast('لم يتم إرفاق إحداثيات GPS لهذا المكتب', 'info');
    return;
  }
  const clean = gpsLocation.trim();
  if (clean.startsWith('http://') || clean.startsWith('https://')) {
    window.open(clean, '_blank');
  } else {
    // Open in Google Maps
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clean)}`;
    window.open(mapsUrl, '_blank');
  }
}

async function handleOfficeImageSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const dataUrl = await compressImageFile(file, 640, 0.65);
  selectedOfficeImageDataUrl = dataUrl;
  const nameEl = document.getElementById('officeImageFileName');
  const previewCont = document.getElementById('officeImagePreviewContainer');
  const previewImg = document.getElementById('officeImagePreview');
  const removeBtn = document.getElementById('btnRemoveOfficeImage');
  if (nameEl) nameEl.innerText = file.name;
  if (previewImg) previewImg.src = dataUrl;
  if (previewCont) previewCont.classList.remove('hidden');
  if (removeBtn) removeBtn.classList.remove('hidden');
}

function clearOfficeImageSelection() {
  selectedOfficeImageDataUrl = null;
  const input = document.getElementById('inputOfficeImage');
  if (input) input.value = '';
  const nameEl = document.getElementById('officeImageFileName');
  const previewCont = document.getElementById('officeImagePreviewContainer');
  const removeBtn = document.getElementById('btnRemoveOfficeImage');
  if (nameEl) nameEl.innerText = 'لم يتم اختيار صورة';
  if (previewCont) previewCont.classList.add('hidden');
  if (removeBtn) removeBtn.classList.add('hidden');
}

async function handlePublishStudyOffice(event) {
  event.preventDefault();
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) {
    showAppAlert('تسجيل الدخول مطلوب', 'يرجى تسجيل الدخول أولاً.', 'warning');
    return;
  }

  const name = document.getElementById('inputOfficeName').value.trim();
  const specialty = document.getElementById('inputOfficeSpecialty').value;
  const engineerName = document.getElementById('inputOfficeEngineer').value.trim();
  const wilaya = document.getElementById('inputOfficeWilaya').value.trim();
  const address = document.getElementById('inputOfficeAddress').value.trim();
  const phone = document.getElementById('inputOfficePhone').value.trim();
  const whatsapp = document.getElementById('inputOfficeWhatsapp').value.trim() || phone;
  const gps = document.getElementById('inputOfficeGps').value.trim();
  const description = document.getElementById('inputOfficeDescription').value.trim();

  if (!name || !specialty || !engineerName || !wilaya || !phone || !description) {
    showAppAlert('بيانات ناقصة', 'يرجى ملء جميع الحقول الإلزامية لمكتب الدراسات.', 'warning');
    return;
  }

  const isAdmin = isCurrentUserAdmin();

  const newOffice = {
    id: 'off_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    name: name,
    specialty: specialty,
    engineerName: engineerName,
    wilaya: wilaya,
    address: address,
    phone: phone,
    whatsapp: whatsapp,
    gps: gps,
    description: description,
    image: selectedOfficeImageDataUrl || null,
    authorEmail: currentUser.email,
    status: isAdmin ? 'approved' : 'pending',
    timestamp: Date.now()
  };

  const offices = getStoredStudyOffices();
  offices.unshift(newOffice);
  saveStoredStudyOffices(offices);

  broadcastWorkerAction('publish_office', newOffice);

  clearOfficeImageSelection();
  document.getElementById('formAddStudyOffice').reset();
  closeAddStudyOfficeModal();
  renderStudyOfficesFeed();

  if (isAdmin) {
    showAppToast('تم نشر مكتب الدراسات بنجاح وبشكل فوري!', 'success');
  } else {
    showAppAlert('تم إرسال المكتب بنجاح', 'تم استلام بيانات مكتب الدراسات بنجاح وهو الآن قيد مراجعة إدارة التطبيق، وسيتم نشره للجميع فور اعتماده.', 'info');
  }
}

async function handleApproveStudyOffice(officeId) {
  if (!isCurrentUserAdmin()) return;
  const offices = getStoredStudyOffices();
  const off = offices.find(o => o.id === officeId);
  if (!off) return;

  off.status = 'approved';
  saveStoredStudyOffices(offices);
  broadcastWorkerAction('approve_office', { officeId: officeId });
  renderStudyOfficesFeed();
  showAppToast('تم اعتماد مكتب الدراسات ونشره للجميع بنجاح!', 'success');
}

async function handleRejectStudyOffice(officeId) {
  if (!isCurrentUserAdmin()) return;
  const confirmed = await showAppConfirm('رفض المكتب', 'هل أنت متأكد من رفض وحذف هذا المكتب المعلق؟', 'رفض وحذف', 'إلغاء');
  if (!confirmed) return;

  let offices = getStoredStudyOffices();
  offices = offices.filter(o => o.id !== officeId);
  saveStoredStudyOffices(offices);
  broadcastWorkerAction('reject_office', { officeId: officeId });
  renderStudyOfficesFeed();
  showAppToast('تم رفض مكتب الدراسات وحذفه.', 'info');
}

async function handleDeleteStudyOffice(officeId) {
  const currentUser = getCurrentSessionUser();
  if (!currentUser) return;
  const offices = getStoredStudyOffices();
  const off = offices.find(o => o.id === officeId);
  if (!off) return;

  const isAuthor = currentUser.email && off.authorEmail && off.authorEmail.toLowerCase() === currentUser.email.toLowerCase();
  const isAdmin = isCurrentUserAdmin();

  if (!isAuthor && !isAdmin) {
    showAppAlert('غير مسموح', 'لا تملك صلاحية حذف هذا المكتب.', 'error');
    return;
  }

  const confirmed = await showAppConfirm('حذف المكتب', 'هل أنت متأكد من حذف بطاقة هذا المكتب نهائياً؟', 'نعم، احذف', 'إلغاء');
  if (confirmed) {
    const updated = offices.filter(o => o.id !== officeId);
    saveStoredStudyOffices(updated);
    broadcastWorkerAction('delete_office', { officeId: officeId });
    renderStudyOfficesFeed();
    showAppToast('تم حذف بطاقة مكتب الدراسات بنجاح.', 'success');
  }
}

function togglePendingOfficesFilter() {
  showOnlyPendingOfficesFilter = !showOnlyPendingOfficesFilter;
  const btn = document.getElementById('adminPendingOfficesBtn');
  if (btn) {
    btn.classList.toggle('bg-amber-500/30', showOnlyPendingOfficesFilter);
  }
  renderStudyOfficesFeed();
}

function filterOfficesFeed(specialty, btn) {
  currentOfficeFilter = specialty;
  showOnlyPendingOfficesFilter = false;
  document.querySelectorAll('.office-filter-pill').forEach(b => {
    b.classList.remove('active-filter');
  });
  if (btn) {
    btn.classList.add('active-filter');
  }
  renderStudyOfficesFeed();
}

function renderStudyOfficesFeed() {
  const container = document.getElementById('studyOfficesFeedContainer');
  if (!container) return;

  const currentUser = getCurrentSessionUser();
  const userEmail = currentUser?.email?.toLowerCase() || '';
  const isAdmin = isCurrentUserAdmin();
  const allOffices = getStoredStudyOffices();

  // Pending offices counter for admin
  const pendingCount = allOffices.filter(o => o.status === 'pending').length;
  const pendingFilterBtn = document.getElementById('adminPendingOfficesBtn');
  const pendingCountBadge = document.getElementById('pendingOfficesCountBadge');
  if (pendingFilterBtn) {
    if (isAdmin && pendingCount > 0) {
      pendingFilterBtn.classList.remove('hidden');
      if (pendingCountBadge) pendingCountBadge.innerText = pendingCount;
    } else {
      pendingFilterBtn.classList.add('hidden');
    }
  }

  let visible = allOffices.filter(o => {
    if (o.status === 'approved') return true;
    if (isAdmin) return true;
    if (userEmail && o.authorEmail?.toLowerCase() === userEmail) return true;
    return false;
  });

  if (showOnlyPendingOfficesFilter && isAdmin) {
    visible = visible.filter(o => o.status === 'pending');
  } else if (currentOfficeFilter !== 'all') {
    visible = visible.filter(o => o.specialty === currentOfficeFilter || (o.specialty && o.specialty.includes(currentOfficeFilter)));
  }

  if (visible.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-bh-card border border-bh-border rounded-2xl p-10 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-bh-bg border border-bh-border flex items-center justify-center text-sky-400 text-2xl">
          <i class="fa-solid fa-compass-drafting"></i>
        </div>
        <h4 class="text-base font-bold text-white">${showOnlyPendingOfficesFilter ? 'لا توجد مكاتب دراسات معلقة بانتظار الموافقة' : 'لا توجد مكاتب دراسات في هذا التصنيف حالياً'}</h4>
        <p class="text-xs text-slate-400 max-w-md mx-auto">سجّل مكتبك الهندسي أو المعماري الآن ليظهر لآلاف أصحاب المشاريع والورشات مع موقعك على خرائط GPS!</p>
        <button onclick="openAddStudyOfficeModal()" class="mt-2 px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-slate-950 font-bold rounded-xl text-xs transition cursor-pointer">
          <i class="fa-solid fa-plus mr-1"></i> إضافة مكتب دراسات جديد
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = visible.map(office => {
    const isAuthor = userEmail && office.authorEmail && office.authorEmail.toLowerCase() === userEmail;
    const isPending = office.status === 'pending';

    let specBadgeClass = 'bg-sky-500/15 text-sky-400 border-sky-500/30';
    if (office.specialty.includes('معماري')) specBadgeClass = 'bg-amber-500/15 text-amber-400 border-amber-500/30';
    if (office.specialty.includes('مدني')) specBadgeClass = 'bg-blue-500/15 text-blue-400 border-blue-500/30';
    if (office.specialty.includes('توبوغرافيا')) specBadgeClass = 'bg-purple-500/15 text-purple-400 border-purple-500/30';

    return `
      <div class="bg-bh-card border border-bh-border rounded-2xl p-4 sm:p-5 shadow-xl space-y-3.5 transition hover:border-sky-400/50 flex flex-col justify-between ${isPending ? 'border-amber-500/40 bg-amber-500/5' : ''}">
        
        <div class="space-y-3">
          <!-- Top Row: Avatar/Logo, Name, Specialty -->
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-start gap-3">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xl font-bold shrink-0 overflow-hidden shadow-inner">
                ${office.image ? `<img src="${office.image}" alt="${escapeHtml(office.name)}" class="w-full h-full object-cover">` : '<i class="fa-solid fa-compass-drafting"></i>'}
              </div>
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="font-bold text-sm sm:text-base text-white leading-tight">${escapeHtml(office.name)}</h3>
                  <i class="fa-solid fa-certificate text-sky-400 text-xs" title="مكتب معتمد"></i>
                </div>
                <p class="text-xs text-bh-yellow font-medium mt-0.5">${escapeHtml(office.engineerName)}</p>
                <p class="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                  <i class="fa-solid fa-location-dot text-rose-400 text-[10px]"></i>
                  <span>${escapeHtml(office.wilaya)}</span>
                  ${office.address ? `• <span>${escapeHtml(office.address)}</span>` : ''}
                </p>
              </div>
            </div>

            <!-- Specialty Pill -->
            <span class="px-2.5 py-1 rounded-xl text-[11px] font-bold border shrink-0 ${specBadgeClass}">
              ${escapeHtml(office.specialty)}
            </span>
          </div>

          <!-- Pending notice -->
          ${isPending ? `
            <div class="flex items-center justify-between p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
              <span class="flex items-center gap-1 font-bold">
                <i class="fa-solid fa-hourglass-half animate-pulse text-[11px]"></i>
                <span>قيد مراجعة واعتماد الإدارة</span>
              </span>
              ${isAdmin ? `
                <div class="flex items-center gap-1.5">
                  <button type="button" onclick="handleApproveStudyOffice('${office.id}')" class="px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 font-bold text-[11px] cursor-pointer">قبول</button>
                  <button type="button" onclick="handleRejectStudyOffice('${office.id}')" class="px-2.5 py-1 rounded-lg bg-rose-500 text-white font-bold text-[11px] cursor-pointer">رفض</button>
                </div>
              ` : ''}
            </div>
          ` : ''}

          <!-- Description / Services -->
          <p class="text-xs text-slate-300 leading-relaxed whitespace-pre-line">${escapeHtml(office.description)}</p>
        </div>

        <!-- Action Buttons: GPS, Call, WhatsApp, Private Chat -->
        <div class="pt-3 border-t border-bh-border space-y-2">
          
          <div class="flex items-center gap-2 flex-wrap">
            <!-- GPS Location Button (Direct Google Maps) -->
            ${office.gps ? `
              <button type="button" onclick="openOfficeGps('${escapeHtml(office.gps)}')" class="flex-1 min-w-[140px] px-3 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-400 border border-sky-500/30 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-sm">
                <i class="fa-solid fa-location-crosshairs text-sky-400"></i>
                <span>فتح الموقع (GPS) 📍</span>
              </button>
            ` : ''}

            <!-- Direct Phone Call -->
            <button type="button" onclick="makeDirectPhoneCall('${escapeHtml(office.phone)}')" class="flex-1 min-w-[120px] px-3 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-sm font-mono">
              <i class="fa-solid fa-phone text-[11px]"></i>
              <span>${escapeHtml(office.phone)}</span>
            </button>
          </div>

          <div class="flex items-center gap-2">
            <!-- WhatsApp -->
            <button type="button" onclick="openWhatsAppChat('${escapeHtml(office.whatsapp || office.phone)}')" class="flex-1 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md shadow-emerald-600/30">
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>واتساب</span>
            </button>

            <!-- 1-on-1 Private Chat -->
            <button type="button" onclick="openPrivateChat('${escapeHtml(office.authorEmail)}', '${escapeHtml(office.name)}', '${escapeHtml(office.image || '')}')" class="flex-1 px-3 py-2 rounded-xl bg-bh-yellow/15 hover:bg-bh-yellow/25 text-bh-yellow border border-bh-yellow/30 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-sm">
              <i class="fa-solid fa-comments text-xs"></i>
              <span>محادثة خاصة</span>
            </button>

            <!-- Author or Admin Delete Button -->
            ${(isAuthor || isAdmin) ? `
              <button type="button" onclick="handleDeleteStudyOffice('${office.id}')" title="حذف بطاقة المكتب" class="w-9 h-9 rounded-xl bg-bh-bg border border-bh-border hover:border-rose-500/60 text-slate-400 hover:text-rose-400 transition flex items-center justify-center text-xs shrink-0 cursor-pointer">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            ` : ''}
          </div>

        </div>

      </div>
    `;
  }).join('');
}

// =========================================================================
// 18. 1-ON-1 PRIVATE CHAT & MESSAGING SYSTEM (نظام المحادثات الخاصة المباشرة)
// =========================================================================

let activeChatPartnerEmail = null;
let activeChatPartnerName = null;
let activeChatPartnerAvatar = null;
let mediaRecorderInstance = null;
let voiceRecordingChunks = [];
let voiceRecordingTimerInterval = null;
let voiceRecordingSeconds = 0;
let pendingVoiceBlobUrl = null;
let pendingChatAttachment = null; // { type: 'image'|'video'|'audio', dataUrl: string, name: string }

function getPrivateChatKey(user1, user2) {
  const sorted = [user1.toLowerCase().trim(), user2.toLowerCase().trim()].sort();
  return `bth_chat_${sorted[0]}___${sorted[1]}`;
}

function getStoredPrivateChats(convKey) {
  try {
    const raw = localStorage.getItem(convKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {}
  return [];
}

function saveStoredPrivateChats(convKey, messages) {
  try {
    localStorage.setItem(convKey, JSON.stringify(messages));
    if (window.electronDB && window.electronDB.savePrivateChat) {
      window.electronDB.savePrivateChat(convKey, messages);
    }
  } catch (e) {}
}

function getBlockedUsersList() {
  try {
    const raw = localStorage.getItem('batihub_blocked_users_v1');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveBlockedUsersList(list) {
  try {
    localStorage.setItem('batihub_blocked_users_v1', JSON.stringify(list));
  } catch (e) {}
}

function isUserBlockedByMe(targetEmail) {
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) return false;
  const list = getBlockedUsersList();
  return list.some(b => b.blockerEmail.toLowerCase() === currentUser.email.toLowerCase() && b.blockedEmail.toLowerCase() === targetEmail.toLowerCase());
}

function openPrivateChat(targetEmail, targetName, targetAvatar) {
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) {
    showAppAlert('تسجيل الدخول مطلوب', 'يرجى تسجيل الدخول أولاً لتتمكن من مراسلة هذا المستخدم في محادثة خاصة.', 'warning');
    return;
  }

  if (targetEmail.toLowerCase() === currentUser.email.toLowerCase()) {
    showAppToast('هذا حسابك الشخصي!', 'info');
    return;
  }

  activeChatPartnerEmail = targetEmail;
  activeChatPartnerName = targetName || targetEmail;
  activeChatPartnerAvatar = targetAvatar || 'assets/batihub_logo.png';

  const modal = document.getElementById('modalPrivateChat');
  const nameEl = document.getElementById('chatPartnerName');
  const avatarEl = document.getElementById('chatPartnerAvatar');
  const adminBadge = document.getElementById('chatPartnerAdminBadge');
  const blockNotice = document.getElementById('chatBlockedNotice');
  const blockBtnLabel = document.getElementById('blockButtonLabel');

  if (nameEl) nameEl.innerText = activeChatPartnerName;
  if (avatarEl) avatarEl.src = activeChatPartnerAvatar;
  if (adminBadge) {
    if (activeChatPartnerEmail.toLowerCase() === 'batihubdz@gmail.com') {
      adminBadge.classList.remove('hidden');
    } else {
      adminBadge.classList.add('hidden');
    }
  }

  const isBlocked = isUserBlockedByMe(activeChatPartnerEmail);
  if (blockNotice) blockNotice.classList.toggle('hidden', !isBlocked);
  if (blockBtnLabel) blockBtnLabel.innerText = isBlocked ? 'إلغاء الحظر' : 'حظر';

  const inputMsg = document.getElementById('inputChatMessage');
  if (inputMsg) inputMsg.disabled = isBlocked;

  renderActiveChatMessages();
  clearChatAttachment();

  if (modal) modal.classList.remove('hidden');

  // Mark messages from partner as read
  markConversationAsRead(currentUser.email, activeChatPartnerEmail);
}

function closePrivateChatModal() {
  const modal = document.getElementById('modalPrivateChat');
  if (modal) modal.classList.add('hidden');
  cancelVoiceRecording();
  clearChatAttachment();
  activeChatPartnerEmail = null;
}

function renderActiveChatMessages() {
  const container = document.getElementById('chatMessagesContainer');
  if (!container || !activeChatPartnerEmail) return;

  const currentUser = getCurrentSessionUser();
  if (!currentUser) return;

  const convKey = getPrivateChatKey(currentUser.email, activeChatPartnerEmail);
  const messages = getStoredPrivateChats(convKey);

  if (messages.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center p-6 space-y-2 text-slate-400">
        <div class="w-12 h-12 rounded-full bg-bh-bg border border-bh-border flex items-center justify-center text-bh-yellow text-xl">
          <i class="fa-regular fa-comment-dots"></i>
        </div>
        <p class="text-xs font-bold text-white">بداية المحادثة الخاصة مع ${escapeHtml(activeChatPartnerName)}</p>
        <p class="text-[11px] max-w-xs text-slate-500">يمكنك إرسال رسائل نصية، تسجيلات صوتية (فوكال)، صور، وفيديوهات بالتزامن المباشر والآمن.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = messages.map(msg => {
    const isMe = msg.senderEmail.toLowerCase() === currentUser.email.toLowerCase();

    return `
      <div class="flex items-end gap-2 ${isMe ? 'flex-row-reverse' : 'flex-row'}">
        <img src="${msg.senderAvatar || 'assets/batihub_logo.png'}" alt="Avatar" class="w-7 h-7 rounded-full object-cover border border-bh-border shrink-0 mb-1">
        
        <div class="max-w-[82%] sm:max-w-[70%] space-y-1.5 p-3 rounded-2xl ${isMe ? 'chat-bubble-out text-white' : 'chat-bubble-in text-slate-200'}">
          
          <!-- Text content -->
          ${msg.text ? `
            <div class="flex items-start justify-between gap-2">
              <p class="text-xs leading-relaxed whitespace-pre-line select-text">${escapeHtml(msg.text)}</p>
              ${isMe ? `
                <button type="button" onclick="handleEditChatMessage('${msg.id}')" title="تعديل الرسالة" class="text-slate-400 hover:text-bh-yellow text-[10px] shrink-0 cursor-pointer">
                  <i class="fa-solid fa-pen"></i>
                </button>
              ` : ''}
            </div>
          ` : ''}

          <!-- Voice Note Player (فوكال) -->
          ${msg.audioUrl ? `
            <div class="bg-black/30 p-2 rounded-xl border border-white/10 space-y-1">
              <div class="flex items-center gap-2 text-xs font-bold ${isMe ? 'text-bh-yellow' : 'text-sky-400'}">
                <i class="fa-solid fa-microphone text-[11px]"></i>
                <span>رسالة صوتية (فوكال)</span>
              </div>
              <audio controls src="${msg.audioUrl}" class="w-full h-8 mt-1 rounded"></audio>
            </div>
          ` : ''}

          <!-- Image Attachment -->
          ${msg.imageUrl ? `
            <div class="rounded-xl overflow-hidden border border-white/10 cursor-pointer max-h-60" onclick="openImageLightbox('${msg.imageUrl}')">
              <img src="${msg.imageUrl}" alt="صورة" class="w-full h-auto max-h-60 object-contain hover:scale-105 transition">
            </div>
          ` : ''}

          <!-- Video Attachment -->
          ${msg.videoUrl ? `
            <div class="rounded-xl overflow-hidden border border-white/10 bg-black">
              <video controls playsinline src="${msg.videoUrl}" class="w-full max-h-60 object-contain"></video>
            </div>
          ` : ''}

          <!-- Meta (Time & Edited) -->
          <div class="flex items-center justify-end gap-1 text-[9px] text-slate-400 font-mono">
            <span>${formatPostTime(msg.timestamp)}</span>
            ${msg.edited ? '<span>• (معدلة)</span>' : ''}
            ${isMe ? '<i class="fa-solid fa-check-double text-bh-yellow ml-0.5 text-[8px]"></i>' : ''}
          </div>

        </div>
      </div>
    `;
  }).join('');

  container.scrollTop = container.scrollHeight;
}

// -------------------------------------------------------------
// Voice Note Recorder (MediaRecorder API)
// -------------------------------------------------------------
async function toggleVoiceRecording() {
  if (mediaRecorderInstance && mediaRecorderInstance.state === 'recording') {
    stopAndAttachVoiceRecording();
  } else {
    startVoiceRecording();
  }
}

async function startVoiceRecording() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    showAppAlert('تسجيل الصوت غير مدعوم', 'متصفحك لا يدعم تسجيل الصوت المباشر.', 'warning');
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    voiceRecordingChunks = [];
    mediaRecorderInstance = new MediaRecorder(stream);

    mediaRecorderInstance.ondataavailable = (e) => {
      if (e.data.size > 0) voiceRecordingChunks.push(e.data);
    };

    mediaRecorderInstance.onstop = () => {
      const audioBlob = new Blob(voiceRecordingChunks, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.onloadend = () => {
        pendingChatAttachment = {
          type: 'audio',
          dataUrl: reader.result,
          name: 'تسجيل صوتي'
        };
        showChatAttachmentPreview();
      };
      reader.readAsDataURL(audioBlob);

      // Stop all audio tracks
      stream.getTracks().forEach(track => track.stop());
    };

    mediaRecorderInstance.start();
    voiceRecordingSeconds = 0;

    const bar = document.getElementById('chatVoiceRecordingBar');
    const timer = document.getElementById('voiceRecordingTimer');
    const btnRecord = document.getElementById('btnVoiceRecord');

    if (bar) bar.classList.remove('hidden');
    if (btnRecord) btnRecord.classList.add('recording-pulse');

    voiceRecordingTimerInterval = setInterval(() => {
      voiceRecordingSeconds++;
      const m = Math.floor(voiceRecordingSeconds / 60).toString().padStart(2, '0');
      const s = (voiceRecordingSeconds % 60).toString().padStart(2, '0');
      if (timer) timer.innerText = `${m}:${s}`;
    }, 1000);

  } catch (err) {
    showAppAlert('إذن الميكروفون مطلوب', 'يرجى السماح بالوصول إلى الميكروفون لتتمكن من تسجيل رسائل صوتية.', 'warning');
  }
}

function stopAndAttachVoiceRecording() {
  if (mediaRecorderInstance && mediaRecorderInstance.state === 'recording') {
    mediaRecorderInstance.stop();
  }
  cancelVoiceRecordingUI();
}

function cancelVoiceRecording() {
  if (mediaRecorderInstance && mediaRecorderInstance.state === 'recording') {
    mediaRecorderInstance.stop();
  }
  cancelVoiceRecordingUI();
  voiceRecordingChunks = [];
}

function cancelVoiceRecordingUI() {
  if (voiceRecordingTimerInterval) {
    clearInterval(voiceRecordingTimerInterval);
    voiceRecordingTimerInterval = null;
  }
  const bar = document.getElementById('chatVoiceRecordingBar');
  const btnRecord = document.getElementById('btnVoiceRecord');
  if (bar) bar.classList.add('hidden');
  if (btnRecord) btnRecord.classList.remove('recording-pulse');
}

function showChatAttachmentPreview() {
  const bar = document.getElementById('chatAttachmentPreviewBar');
  const content = document.getElementById('chatAttachmentContent');
  if (!bar || !content || !pendingChatAttachment) return;

  if (pendingChatAttachment.type === 'audio') {
    content.innerHTML = `
      <i class="fa-solid fa-microphone text-rose-400 text-sm"></i>
      <span class="text-xs text-white font-bold">تسجيل صوتي جاهز للإرسال</span>
      <audio controls src="${pendingChatAttachment.dataUrl}" class="h-7 w-48 ml-2"></audio>
    `;
  } else if (pendingChatAttachment.type === 'image') {
    content.innerHTML = `
      <img src="${pendingChatAttachment.dataUrl}" class="w-10 h-10 rounded-lg object-cover border border-bh-border">
      <span class="text-xs text-white font-bold truncate max-w-[180px]">صورة: ${escapeHtml(pendingChatAttachment.name)}</span>
    `;
  } else if (pendingChatAttachment.type === 'video') {
    content.innerHTML = `
      <i class="fa-solid fa-video text-sky-400 text-sm"></i>
      <span class="text-xs text-white font-bold truncate max-w-[180px]">فيديو: ${escapeHtml(pendingChatAttachment.name)}</span>
    `;
  }

  bar.classList.remove('hidden');
}

function clearChatAttachment() {
  pendingChatAttachment = null;
  const bar = document.getElementById('chatAttachmentPreviewBar');
  if (bar) bar.classList.add('hidden');
  const inImg = document.getElementById('inputChatImage');
  const inVid = document.getElementById('inputChatVideo');
  if (inImg) inImg.value = '';
  if (inVid) inVid.value = '';
}

async function handleChatImageSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const dataUrl = await compressImageFile(file, 800, 0.7);
  pendingChatAttachment = {
    type: 'image',
    dataUrl: dataUrl,
    name: file.name
  };
  showChatAttachmentPreview();
}

function handleChatVideoSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (file.size > 15 * 1024 * 1024) {
    showAppAlert('حجم الفيديو كبير', 'يرجى اختيار مقطع فيديو لا يتجاوز 15 ميغابايت لضمان سرعة الإرسال والتزامن.', 'warning');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    pendingChatAttachment = {
      type: 'video',
      dataUrl: e.target.result,
      name: file.name
    };
    showChatAttachmentPreview();
  };
  reader.readAsDataURL(file);
}

async function handleSendChatMessage(event) {
  if (event) event.preventDefault();
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email || !activeChatPartnerEmail) return;

  if (isUserBlockedByMe(activeChatPartnerEmail)) {
    showAppAlert('المستخدم محظور', 'لقد قمت بحظر هذا المستخدم. يرجى إلغاء الحظر أولاً لتتمكن من مراسلته.', 'warning');
    return;
  }

  const input = document.getElementById('inputChatMessage');
  const text = input ? input.value.trim() : '';

  if (!text && !pendingChatAttachment) return;

  const convKey = getPrivateChatKey(currentUser.email, activeChatPartnerEmail);
  const messages = getStoredPrivateChats(convKey);

  const newMsg = {
    id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    senderEmail: currentUser.email,
    senderName: currentUser.name || 'مستخدم',
    senderAvatar: currentUser.avatar || 'assets/batihub_logo.png',
    recipientEmail: activeChatPartnerEmail,
    text: text,
    audioUrl: pendingChatAttachment?.type === 'audio' ? pendingChatAttachment.dataUrl : null,
    imageUrl: pendingChatAttachment?.type === 'image' ? pendingChatAttachment.dataUrl : null,
    videoUrl: pendingChatAttachment?.type === 'video' ? pendingChatAttachment.dataUrl : null,
    timestamp: Date.now(),
    edited: false
  };

  messages.push(newMsg);
  saveStoredPrivateChats(convKey, messages);

  // Broadcast to cloud for real-time delivery
  broadcastWorkerAction('chat_message', newMsg);

  if (input) input.value = '';
  clearChatAttachment();
  renderActiveChatMessages();
}

function handleIncomingChatMessage(payload) {
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) return;

  const userEmail = currentUser.email.toLowerCase();
  const senderEmail = payload.senderEmail?.toLowerCase();
  const recipientEmail = payload.recipientEmail?.toLowerCase();

  // Process only if addressed to me or from me
  if (recipientEmail !== userEmail && senderEmail !== userEmail) return;

  // If sender is blocked, drop message silently
  if (isUserBlockedByMe(payload.senderEmail)) return;

  const partnerEmail = senderEmail === userEmail ? recipientEmail : senderEmail;
  const convKey = getPrivateChatKey(userEmail, partnerEmail);
  const messages = getStoredPrivateChats(convKey);

  if (!messages.some(m => m.id === payload.id)) {
    messages.push(payload);
    saveStoredPrivateChats(convKey, messages);

    // If chat is currently open with this partner, re-render
    if (activeChatPartnerEmail && activeChatPartnerEmail.toLowerCase() === partnerEmail) {
      renderActiveChatMessages();
    } else {
      showAppToast(`رسالة جديدة من ${payload.senderName}: ${payload.text || 'مرفق جديد'}`, 'info');
      updateUnreadMessagesCount();
    }
  }
}

async function handleEditChatMessage(messageId) {
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !activeChatPartnerEmail) return;

  const convKey = getPrivateChatKey(currentUser.email, activeChatPartnerEmail);
  const messages = getStoredPrivateChats(convKey);
  const msg = messages.find(m => m.id === messageId);
  if (!msg) return;

  const newText = prompt('تعديل نص الرسالة :', msg.text || '');
  if (newText === null || newText.trim() === '') return;

  msg.text = newText.trim();
  msg.edited = true;
  msg.updatedAt = Date.now();

  saveStoredPrivateChats(convKey, messages);
  broadcastWorkerAction('edit_chat_message', {
    messageId: messageId,
    senderEmail: currentUser.email,
    recipientEmail: activeChatPartnerEmail,
    text: msg.text
  });

  renderActiveChatMessages();
  showAppToast('تم تعديل الرسالة بنجاح.', 'success');
}

function handleIncomingEditChatMessage(payload) {
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) return;

  const convKey = getPrivateChatKey(payload.senderEmail, payload.recipientEmail);
  const messages = getStoredPrivateChats(convKey);
  const msg = messages.find(m => m.id === payload.messageId);
  if (msg) {
    msg.text = payload.text;
    msg.edited = true;
    saveStoredPrivateChats(convKey, messages);
    if (activeChatPartnerEmail) renderActiveChatMessages();
  }
}

// -------------------------------------------------------------
// Blocking & Unblocking Users
// -------------------------------------------------------------
async function handleToggleBlockActiveChatUser() {
  if (!activeChatPartnerEmail) return;
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) return;

  const isBlocked = isUserBlockedByMe(activeChatPartnerEmail);

  if (isBlocked) {
    // Unblock
    unblockUser(activeChatPartnerEmail);
    showAppToast(`تم إلغاء حظر ${activeChatPartnerName}`, 'success');
  } else {
    // Confirm and Block
    const confirmed = await showAppConfirm('حظر المستخدم', `هل أنت متأكد من حظر (${activeChatPartnerName})؟ لن يتمكن من مراسلتك مرة أخرى حتى تلغي الحظر.`, 'حظر المستخدم', 'إلغاء');
    if (!confirmed) return;

    blockUser(activeChatPartnerEmail, activeChatPartnerName);
    showAppToast(`تم حظر ${activeChatPartnerName} بنجاح.`, 'warning');
  }

  // Update UI in chat modal
  const blockNotice = document.getElementById('chatBlockedNotice');
  const blockBtnLabel = document.getElementById('blockButtonLabel');
  const inputMsg = document.getElementById('inputChatMessage');

  const nowBlocked = isUserBlockedByMe(activeChatPartnerEmail);
  if (blockNotice) blockNotice.classList.toggle('hidden', !nowBlocked);
  if (blockBtnLabel) blockBtnLabel.innerText = nowBlocked ? 'إلغاء الحظر' : 'حظر';
  if (inputMsg) inputMsg.disabled = nowBlocked;
}

function blockUser(email, name) {
  const currentUser = getCurrentSessionUser();
  if (!currentUser) return;
  let list = getBlockedUsersList();
  if (!list.some(b => b.blockerEmail.toLowerCase() === currentUser.email.toLowerCase() && b.blockedEmail.toLowerCase() === email.toLowerCase())) {
    list.push({
      blockerEmail: currentUser.email,
      blockedEmail: email,
      blockedName: name || email,
      timestamp: Date.now()
    });
    saveBlockedUsersList(list);
  }
}

function unblockUser(email) {
  const currentUser = getCurrentSessionUser();
  if (!currentUser) return;
  let list = getBlockedUsersList();
  list = list.filter(b => !(b.blockerEmail.toLowerCase() === currentUser.email.toLowerCase() && b.blockedEmail.toLowerCase() === email.toLowerCase()));
  saveBlockedUsersList(list);
}

// -------------------------------------------------------------
// Messages Hub Modal (المحادثات الواردة وقائمة المحظورين)
// -------------------------------------------------------------
function openMessagesHubModal() {
  const currentUser = getCurrentSessionUser();
  if (!currentUser || !currentUser.email) {
    showAppAlert('تسجيل الدخول مطلوب', 'يرجى تسجيل الدخول أولاً للوصول إلى محادثاتك الخاصة.', 'warning');
    return;
  }

  switchMessagesHubTab('active');
  const modal = document.getElementById('modalMessagesHub');
  if (modal) modal.classList.remove('hidden');
}

function closeMessagesHubModal() {
  const modal = document.getElementById('modalMessagesHub');
  if (modal) modal.classList.add('hidden');
}

function switchMessagesHubTab(tabName) {
  const btnActive = document.getElementById('tabBtnActiveChats');
  const btnBlocked = document.getElementById('tabBtnBlockedUsers');
  const viewActive = document.getElementById('viewActiveChatsList');
  const viewBlocked = document.getElementById('viewBlockedUsersList');

  if (tabName === 'active') {
    if (btnActive) {
      btnActive.className = "pb-2.5 border-b-2 border-bh-yellow text-white font-bold transition flex items-center gap-1.5 cursor-pointer";
    }
    if (btnBlocked) {
      btnBlocked.className = "pb-2.5 border-b-2 border-transparent text-slate-400 hover:text-white font-semibold transition flex items-center gap-1.5 cursor-pointer";
    }
    if (viewActive) viewActive.classList.remove('hidden');
    if (viewBlocked) viewBlocked.classList.add('hidden');
    renderMessagesHubActiveChats();
  } else {
    if (btnBlocked) {
      btnBlocked.className = "pb-2.5 border-b-2 border-rose-500 text-white font-bold transition flex items-center gap-1.5 cursor-pointer";
    }
    if (btnActive) {
      btnActive.className = "pb-2.5 border-b-2 border-transparent text-slate-400 hover:text-white font-semibold transition flex items-center gap-1.5 cursor-pointer";
    }
    if (viewBlocked) viewBlocked.classList.remove('hidden');
    if (viewActive) viewActive.classList.add('hidden');
    renderMessagesHubBlockedUsers();
  }
}

function renderMessagesHubActiveChats() {
  const container = document.getElementById('viewActiveChatsList');
  const countBadge = document.getElementById('activeChatsCountBadge');
  if (!container) return;

  const currentUser = getCurrentSessionUser();
  if (!currentUser) return;
  const userEmail = currentUser.email.toLowerCase();

  // Scan localStorage for all conversations involving current user
  const convs = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('bth_chat_') && key.includes(userEmail)) {
      try {
        const msgs = JSON.parse(localStorage.getItem(key));
        if (Array.isArray(msgs) && msgs.length > 0) {
          const lastMsg = msgs[msgs.length - 1];
          const partnerEmail = lastMsg.senderEmail.toLowerCase() === userEmail ? lastMsg.recipientEmail : lastMsg.senderEmail;
          const partnerName = lastMsg.senderEmail.toLowerCase() === userEmail ? (partnerEmail) : lastMsg.senderName;
          const partnerAvatar = lastMsg.senderEmail.toLowerCase() === userEmail ? 'assets/batihub_logo.png' : lastMsg.senderAvatar;

          convs.push({
            partnerEmail: partnerEmail,
            partnerName: partnerName,
            partnerAvatar: partnerAvatar,
            lastMsg: lastMsg,
            lastTime: lastMsg.timestamp || 0
          });
        }
      } catch (e) {}
    }
  }

  // Sort by most recent
  convs.sort((a, b) => b.lastTime - a.lastTime);

  if (countBadge) countBadge.innerText = convs.length;

  if (convs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 space-y-2 text-slate-400">
        <i class="fa-regular fa-comments text-3xl text-bh-yellow"></i>
        <p class="text-xs font-bold text-white">لا توجد محادثات نشطة بعد</p>
        <p class="text-[11px] text-slate-500">انقر على زر "محادثة خاصة" في أي منشور أو مكتب دراسات لبدء المراسلة والتواصل المباشر.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = convs.map(conv => {
    let preview = conv.lastMsg.text || 'مرفق وسائط';
    if (conv.lastMsg.audioUrl) preview = '🎙️ رسالة صوتية (فوكال)';
    if (conv.lastMsg.imageUrl) preview = '📷 صورة مرفقة';
    if (conv.lastMsg.videoUrl) preview = '🎬 مقطع فيديو';

    return `
      <div onclick="openPrivateChat('${escapeHtml(conv.partnerEmail)}', '${escapeHtml(conv.partnerName)}', '${escapeHtml(conv.partnerAvatar)}')" class="flex items-center justify-between p-3 rounded-xl bg-bh-bg hover:bg-bh-cardhover border border-bh-border hover:border-bh-yellow/40 transition cursor-pointer">
        <div class="flex items-center gap-3 min-w-0">
          <img src="${conv.partnerAvatar || 'assets/batihub_logo.png'}" alt="Avatar" class="w-10 h-10 rounded-full object-cover border border-bh-border shrink-0">
          <div class="min-w-0">
            <h5 class="font-bold text-xs sm:text-sm text-white truncate">${escapeHtml(conv.partnerName)}</h5>
            <p class="text-[11px] text-slate-400 truncate mt-0.5">${escapeHtml(preview)}</p>
          </div>
        </div>

        <div class="text-left shrink-0 font-mono text-[10px] text-slate-500">
          <span>${formatPostTime(conv.lastTime)}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderMessagesHubBlockedUsers() {
  const container = document.getElementById('viewBlockedUsersList');
  const countBadge = document.getElementById('blockedUsersCountBadge');
  if (!container) return;

  const currentUser = getCurrentSessionUser();
  if (!currentUser) return;
  const userEmail = currentUser.email.toLowerCase();

  const allBlocked = getBlockedUsersList().filter(b => b.blockerEmail.toLowerCase() === userEmail);
  if (countBadge) countBadge.innerText = allBlocked.length;

  if (allBlocked.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 space-y-2 text-slate-400">
        <i class="fa-solid fa-user-check text-3xl text-emerald-400"></i>
        <p class="text-xs font-bold text-white">قائمة المحظورين فارغة</p>
        <p class="text-[11px] text-slate-500">لم تقم بحظر أي مستخدم.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = allBlocked.map(b => `
    <div class="flex items-center justify-between p-3 rounded-xl bg-bh-bg border border-bh-border">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center text-sm">
          <i class="fa-solid fa-ban"></i>
        </div>
        <div>
          <h5 class="font-bold text-xs text-white">${escapeHtml(b.blockedName || b.blockedEmail)}</h5>
          <p class="text-[10px] text-slate-500 font-mono">${escapeHtml(b.blockedEmail)}</p>
        </div>
      </div>

      <button type="button" onclick="handleUnblockFromHub('${escapeHtml(b.blockedEmail)}')" class="px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition cursor-pointer">
        إلغاء الحظر
      </button>
    </div>
  `).join('');
}

function handleUnblockFromHub(email) {
  unblockUser(email);
  showAppToast('تم إلغاء الحظر بنجاح.', 'success');
  renderMessagesHubBlockedUsers();
}

function markConversationAsRead(myEmail, partnerEmail) {
  // Can be extended with local read-state map
}

function updateUnreadMessagesCount() {
  const badge = document.getElementById('unreadMessagesBadge');
  const mBadge = document.getElementById('mUnreadBadge');
  if (mBadge) mBadge.classList.remove('hidden');
  if (badge) {
    badge.innerText = '1';
    badge.classList.remove('hidden');
  }
}

// -------------------------------------------------------------
// Auto-initialization on Window Load
// -------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  initWorkerRealtimeSync();
  renderStudyOfficesFeed();
});
setTimeout(() => {
  initWorkerRealtimeSync();
  renderStudyOfficesFeed();
}, 600);
