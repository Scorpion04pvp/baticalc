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

function getStoredAccounts() {
  try {
    const raw = localStorage.getItem('batihub_registered_accounts');
    if (!raw) return {};
    return decryptVaultData(raw);
  } catch (e) {
    return {};
  }
}

function saveStoredAccounts(accounts) {
  try {
    const raw = JSON.stringify(accounts);
    const encrypted = encryptVaultData(raw);
    localStorage.setItem('batihub_registered_accounts', encrypted);
  } catch (e) {
    console.error('Storage error:', e);
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

// Send Email via Electron IPC
async function sendVerificationEmail(toEmail, code, type) {
  const isAr = state.lang === 'ar';
  const isEn = state.lang === 'en';
  const subject = type === 'register' 
    ? (isAr ? 'رمز تأكيد وتفعيل حسابك في BatiHub DZ' : (isEn ? 'BatiHub DZ • Account Verification Code' : 'Votre code de vérification BatiHub DZ'))
    : (isAr ? 'رمز إعادة تعيين كلمة المرور في BatiHub DZ' : (isEn ? 'BatiHub DZ • Password Reset Code' : 'Code de réinitialisation de mot de passe BatiHub DZ'));

  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #07090f; color: #ffffff; padding: 25px; border-radius: 12px; max-width: 520px; margin: 0 auto; border: 1px solid #1c2638; direction: ${isAr ? 'rtl' : 'ltr'};">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #ffa000; margin: 0; font-size: 24px;">BatiHub DZ</h2>
        <p style="color: #94a3b8; font-size: 12px; margin-top: 4px;">BUILD • CONNECT • CREATE</p>
      </div>
      <div style="background-color: #0f1520; padding: 20px; border-radius: 8px; border: 1px solid #223048; text-align: center;">
        <p style="font-size: 14px; color: #e2e8f0; margin-bottom: 12px;">
          ${type === 'register' 
            ? (isAr ? 'مرحباً بك في منصة BatiHub DZ! رمز تأكيد حسابك هو:' : 'Bienvenue sur la plateforme BatiHub DZ ! Votre code de vérification est :') 
            : (isAr ? 'تلقينا طلباً لإعادة تعيين كلمة المرور الخاصة بحسابك في BatiHub DZ:' : 'Demande de réinitialisation de mot de passe BatiHub DZ :')}
        </p>
        <div style="display: inline-block; background: #07090e; color: #ffa000; font-size: 32px; font-weight: bold; letter-spacing: 8px; padding: 12px 24px; border-radius: 8px; border: 2px dashed #ffa000; font-family: monospace;">
          ${code}
        </div>
        <p style="font-size: 11px; color: #94a3b8; margin-top: 15px;">
          ${isAr 
            ? 'هذا الرمز صالح لمدة 15 دقيقة. يرجى عدم مشاركته مع أي شخص للحفاظ على أمان حسابك.' 
            : 'Ce code est valide pendant 15 minutes. Ne le partagez avec personne pour protéger votre compte.'}
        </p>
      </div>
      <p style="text-align: center; font-size: 10px; color: #64748b; margin-top: 20px;">
        BatiHub DZ Official Support • Developed by Mouhaned Guellif
      </p>
    </div>
  `;

  if (window.electronMailAPI && typeof window.electronMailAPI.sendMail === 'function') {
    try {
      const res = await window.electronMailAPI.sendMail({
        to: toEmail,
        subject: subject,
        text: `Votre code BatiHub DZ: ${code}`,
        html: html
      });
      return res;
    } catch (err) {
      console.error('Native mail error:', err);
      return { success: false, error: err.message };
    }
  }

  return { success: false, error: 'خدمة البريد الإلكتروني غير متاحة في بيئة الويب' };
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
function handleVerifyOtp(e) {
  if (e && e.preventDefault) e.preventDefault();
  const inputCode = (document.getElementById('inputOtpCode')?.value || '').trim();
  const isAr = state.lang === 'ar';

  if (!pendingRegistration) {
    alert(isAr ? 'انتهت صلاحية الجلسة، يرجى التسجيل مرة أخرى' : 'Session expirée. Veuillez recommencer l\'inscription.');
    switchAuthView('register');
    return;
  }

  if (Date.now() > pendingRegistration.expiresAt) {
    alert(isAr ? 'انتهت صلاحية هذا الرمز (15 دقيقة). يرجى طلب رمز جديد.' : 'Ce code a expiré. Veuillez en demander un nouveau.');
    return;
  }

  if (inputCode !== pendingRegistration.otpCode) {
    alert(isAr ? 'رمز التحقق غير صحيح، يرجى التأكد من الرمز المدخل وإعادة المحاولة' : 'Code de vérification incorrect. Veuillez vérifier.');
    return;
  }

  // Account confirmed & verified!
  const accounts = getStoredAccounts();
  const initial = (pendingRegistration.firstName.charAt(0) || 'B').toUpperCase();
  const avatarSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="%23ffa000"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="%2306080c" font-family="sans-serif" font-size="28" font-weight="bold">${initial}</text></svg>`;

  const userRecord = {
    id: 'usr_' + Date.now(),
    firstName: pendingRegistration.firstName,
    lastName: pendingRegistration.lastName,
    fullName: pendingRegistration.fullName,
    dob: pendingRegistration.dob,
    email: pendingRegistration.email,
    passwordHash: pendingRegistration.passwordHash,
    salt: pendingRegistration.salt,
    isVerified: true,
    avatar: avatarSvg,
    createdAt: new Date().toISOString()
  };

  accounts[pendingRegistration.email] = userRecord;
  saveStoredAccounts(accounts);

  // Set active session
  const activeSession = {
    name: userRecord.fullName || userRecord.email,
    email: userRecord.email,
    avatar: avatarSvg,
    token: 'bth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8),
    signedAt: new Date().toISOString()
  };
  localStorage.setItem('batihub_user', JSON.stringify(activeSession));

  // Update Header UI
  const nameDisplay = document.getElementById('userNameDisplay');
  const avatarImg = document.getElementById('userAvatarImg');
  if (nameDisplay) nameDisplay.innerText = activeSession.name;
  if (avatarImg) avatarImg.src = avatarSvg;

  // Confetti celebration
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ffa000', '#ff6d00', '#ffc107', '#ffffff']
    });
  }

  // Dismiss auth gate
  const authGate = document.getElementById('authGateScreen');
  if (authGate) {
    authGate.classList.add('auth-hide');
    setTimeout(() => {
      authGate.style.display = 'none';
    }, 500);
  }

  pendingRegistration = null;
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
    alert(isAr ? 'كلمة المرور غير صحيحة. يرجى المحاولة مجدداً أو النقر على "نسيت كلمة المرور؟"' : 'Mot de passe incorrect. Veuillez réessayer ou cliquer sur "Mot de passe oublié ?".');
    return;
  }

  // Login successful
  const initial = ((user.firstName || user.fullName || 'B').charAt(0)).toUpperCase();
  const avatarSvg = user.avatar || `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="%23ffa000"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="%2306080c" font-family="sans-serif" font-size="28" font-weight="bold">${initial}</text></svg>`;

  const activeSession = {
    name: user.fullName || user.firstName || user.email,
    email: user.email,
    avatar: avatarSvg,
    token: 'bth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8),
    signedAt: new Date().toISOString()
  };
  localStorage.setItem('batihub_user', JSON.stringify(activeSession));

  // Update Header UI
  const nameDisplay = document.getElementById('userNameDisplay');
  const avatarImg = document.getElementById('userAvatarImg');
  if (nameDisplay) nameDisplay.innerText = activeSession.name;
  if (avatarImg) avatarImg.src = avatarSvg;

  // Dismiss auth gate
  const authGate = document.getElementById('authGateScreen');
  if (authGate) {
    authGate.classList.add('auth-hide');
    setTimeout(() => {
      authGate.style.display = 'none';
    }, 500);
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
  const nameDisplay = document.getElementById('userNameDisplay');
  const avatarImg = document.getElementById('userAvatarImg');

  if (saved) {
    try {
      const user = JSON.parse(saved);
      if (nameDisplay) nameDisplay.innerText = user.name || 'Utilisateur';
      if (avatarImg && user.avatar) avatarImg.src = user.avatar;
      if (authGate) {
        authGate.classList.add('auth-hide');
        authGate.style.display = 'none';
      }
      return true;
    } catch (e) {
      console.error('Error parsing stored user:', e);
    }
  }

  // Not logged in -> Show auth gate
  if (authGate) {
    authGate.style.display = 'flex';
    setTimeout(() => {
      authGate.classList.remove('auth-hide');
      switchAuthView('login');
    }, 50);
  }
  return false;
}

function handleSignOut() {
  const isAr = state.lang === 'ar';
  const confirmMsg = isAr 
    ? 'هل أنت متأكد من رغبتك في تسجيل الخروج؟' 
    : (state.lang === 'en' ? 'Are you sure you want to sign out?' : 'Voulez-vous vraiment vous déconnecter de votre compte ?');

  if (confirm(confirmMsg)) {
    localStorage.removeItem('batihub_user');
    const nameDisplay = document.getElementById('userNameDisplay');
    const avatarImg = document.getElementById('userAvatarImg');
    if (nameDisplay) nameDisplay.innerText = isAr ? 'مستخدم' : (state.lang === 'en' ? 'User' : 'Utilisateur');
    if (avatarImg) avatarImg.src = 'assets/batihub_logo.png';

    const authGate = document.getElementById('authGateScreen');
    if (authGate) {
      authGate.style.display = 'flex';
      setTimeout(() => {
        authGate.classList.remove('auth-hide');
        switchAuthView('login');
      }, 50);
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
    window.scrollTo({ top: 350, behavior: 'smooth' });
  }
}

// =========================================================================
// 10. EVENT BINDINGS & APP BOOTSTRAP
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {

  // Start yellow splash screen loader
  initSplashScreen();

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
