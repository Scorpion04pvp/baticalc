/**
 * =========================================================================
 * BatiHub DZ - Build • Connect • Create
 * Plateforme Intégrée BTP Algérie
 * Developed by Mouhaned Guellif
 * =========================================================================
 */

// =========================================================================
// 1. TRILINGUAL DICTIONARY (FRANÇAIS, ARABIC, ENGLISH)
// =========================================================================
const TRANSLATIONS = {
  fr: {
    preset_btn: "Modèles Types",
    preset_heading: "Modèles de Maisons en Algérie",
    preset_1_title: "1. Villa Plain-pied (120 m² - RDC)",
    preset_1_sub: "Terrain 160m², Bâti 120m², 1 Niveau",
    preset_2_title: "2. Maison Familiale R+1 (240 m²)",
    preset_2_sub: "Terrain 180m², Bâti 120m², 2 Niveaux (RDC + R+1)",
    preset_3_title: "3. Villa Moderne avec Décor R+2 (360 m²)",
    preset_3_sub: "Terrain 250m², Bâti 120m², Finitions Haut Standing, 3 Niveaux",
    preset_4_title: "4. Petit Immeuble Résidentiel R+3 (600 m²)",
    preset_4_sub: "Terrain 200m², Bâti 150m², 4 Niveaux",
    export_pdf_btn: "Imprimer Devis (PDF)",
    nav_calculator: "Calculateur de Coûts & Matériaux",
    nav_boq: "Bordereau Détaillé (BOQ)",
    nav_services: "Services Professionnels",
    nav_marketplace: "Marketplace BTP",
    nav_jobs: "Offres & Emplois",
    nav_3d: "Modélisation 3D",
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
    hint_land_area: "Surface totale de la parcelle cadastrale (مساحة الأرض الإجمالية)",
    lbl_footprint_area: "Emprise au Sol du Bâtiment",
    hint_footprint_area: "Surface couverte au rez-de-chaussée (مساحة المبنى في الأرضية)",
    lbl_yard_area: "Cour & Espaces Libres:",
    hint_yard_area: "Jardin, cour intérieure et allée (مساحة الفراغات)",
    lbl_floors_count: "Nombre d'Étages (عدد الطوابق)",
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
    sec5_subtitle: "Coûts échelonnés selon les étapes de construction",
    btn_expand_details: "Développer les Détails",
    sec6_title: "Répartition Financière du Projet",
    sec6_subtitle: "Visualisation graphique des dépenses",
    chart_btn_phase: "Par Phase",
    chart_btn_mat: "Par Catégorie",
    chart_lbl_struct: "Gros Œuvre & Structure:",
    chart_lbl_finishes: "Finitions & Décoration:",
    chart_lbl_labor: "Main d'œuvre Qualifiée:",
    disclaimer_market: "Calibré selon les barèmes moyens du bâtiment en Algérie (DTR B.C. 2.2). Vous pouvez personnaliser les prix unitaires à gauche.",
    boq_title: "Bordereau des Prix & Détail Estimatif (BOQ)",
    boq_subtitle: "Calculs techniques métrés détaillés conformes aux normes DTR",
    filter_all: "Tous les Postes",
    filter_structure: "Gros Œuvre",
    filter_masonry: "Maçonnerie",
    filter_finishes: "Finitions",
    filter_mep: "Plomberie & Électricité",
    filter_labor: "Main d'œuvre",
    th_category: "Corps d'État",
    th_description: "Désignation & Spécifications",
    th_quantity: "Quantité",
    th_unit: "Unité",
    th_unit_price: "Prix Unitaire",
    th_total: "Montant Total",
    boq_grand_total_lbl: "Total Général Estimé du Projet:",
    boq_note: "* Normes et règles de calcul technique DTR B.C. 2.2 / Eurocodes.",
    copy_boq: "Copier le Récapitulatif",
    report_page_title: "Devis Estimatif Préliminaire Officiel A4",
    report_page_sub: "Document formaté prêt pour l'impression A4, la signature ou l'exportation PDF.",
    print_sheet_btn: "Imprimer / Exporter en PDF"
  },
  ar: {
    preset_btn: "نماذج جاهزة",
    preset_heading: "نماذج منازل شائعة في الجزائر",
    preset_1_title: "1. فيلا طابق أرضي (120 م² - RDC)",
    preset_1_sub: "أرض 160م²، مبنى 120م²، طابق واحد",
    preset_2_title: "2. منزل عائلي طابقين R+1 (240 م²)",
    preset_2_sub: "أرض 180م²، مبنى 120م²، طابق أرضي + أول",
    preset_3_title: "3. فيلا عصرية مزخرفة R+2 (360 م²)",
    preset_3_sub: "أرض 250م²، مبنى 120م²، ديكور راقي، 3 طوابق",
    preset_4_title: "4. عمارة سكنية صغيرة R+3 (600 م²)",
    preset_4_sub: "أرض 200م²، مبنى 150م²، 4 طوابق",
    export_pdf_btn: "طباعة كشف الحساب (PDF)",
    nav_calculator: "حاسبة التكاليف وكميات المواد",
    nav_boq: "جدول الكميات والأسعار (BOQ)",
    nav_services: "دليل المهنيين والخدمات",
    nav_marketplace: "متجر ومعدات البناء",
    nav_jobs: "عروض العمل والمشاريع",
    nav_3d: "التصميم والنمذجة 3D",
    nav_report: "كشف التقدير الرسمي A4",
    hero_total_cost: "التكلفة الإجمالية التقديرية",
    cost_per_m2: "تكلفة المتر المربع مبني:",
    hero_built_area: "إجمالي المساحة المبنية",
    hero_footprint: "مساحة المبنى في الأرضية:",
    hero_yard_area: "مساحة الفناء والفراغات",
    hero_ces_ratio: "نسبة استغلال الأرضية (CES):",
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
    lbl_floors_count: "عدد الطوابق (RDC, R+1...)",
    opt_basement: "إضافة طابق تحت أرضي",
    opt_basement_sub: "قبو / Sous-sol (+1 طابق)",
    opt_overhang: "شرفات وبروز معمارية",
    opt_overhang_sub: "+10% مساحة الطوابق العليا",
    sec2_title: "2. جودة التشطيب والديكور المعماري",
    sec2_subtitle: "اختر ما إذا كان منزلاً عادياً أو يحتاج زخرفة وديكور",
    tier_standard_title: "منزل سكني عادي",
    tier_standard_desc: "بناء وتشطيب كلاسيكي متين: سيراميك عادي، لياسة جبس عادية، نوافذ ألمنيوم قياسية، وتجهيزات صحية عادية.",
    tier_standard_badge: "اقتصادي ومناسب",
    tier_decorated_title: "منزل مزخرف وعصري (ديكور وفخامة)",
    tier_decorated_desc: "تشطيبات فاخرة: أسقف معلقة BA13 بإضاءة مخفية LED، بورسلان رفيع، دهانات ديكورية فاخرة (ستوكو/كارينيا)، وألمنيوم عازل حراري.",
    tier_decorated_badge: "ديكور ولمسات عصرية",
    tier_shell_title: "هيكل خرساني فقط (Carcasse)",
    tier_shell_desc: "أساسات، أعمدة خرسانية، أسقف وهوردي، وجدران آجر مع عزل السطح فقط (بدون تشطيبات داخلية).",
    tier_shell_badge: "هيكل وبناء فقط",
    lbl_foundation_type: "نوع الأساسات:",
    opt_isolated: "أساسات منفصلة وشريطية (Semelles)",
    opt_raft: "حصيرة خرسانية عامة (Radier +20%)",
    lbl_contingency: "هامش الطوارئ والتقلبات:",
    sec3_title: "3. تحديد أسعار مواد البناء مباشرة",
    sec3_subtitle: "حدد أسعار الإسمنت والرمل والحديد لحساب فوري دقيق",
    btn_reset_prices: "استعادة الأسعار الافتراضية",
    price_cement_name: "كيس إسمنت 50 كغ (CPJ 42.5)",
    price_steel_name: "قنطار حديد التسليح (100 كغ)",
    price_sand_name: "متر مكعب رمل البناء واللياسة",
    price_gravel_name: "متر مكعب حصى خرسانة مسلحة",
    price_brick12_name: "سعر حبة آجر 12 فتحة (للخارج)",
    price_brick8_name: "سعر حبة آجر 8 فتحات (للداخل)",
    price_stones_name: "متر مكعب حجارة الأساسات (الدبش)",
    price_labor_name: "أجرة اليد العاملة للبناء (لكل م²)",
    mat_detail_title: "كميات مواد البناء المطلوبة وتكلفتها التقديرية",
    mat_detail_subtitle: "شحال لازمك بالضبط إسمنت، حديد، آجر، رمل، وحجارة للبناء",
    card_cement_title: "الإسمنت البورتلاندي (Ciment)",
    calc_cement_bags: "عدد الأكياس (50 كغ):",
    calc_unit_price: "سعر الكيس الواحد:",
    calc_total_cost: "التكلفة التقديرية للإسمنت:",
    card_steel_title: "حديد التسليح (Rond à Béton)",
    calc_steel_quintals: "الكمية بالقنطار (100 كغ):",
    card_bricks_title: "الآجر الأحمر (Briques)",
    calc_brick12: "آجر 12 فتحة (جدران مزدوجة):",
    calc_brick8: "آجر 8 فتحات (قواطع داخلية):",
    card_sand_title: "رمل البناء واللياسة (Sable)",
    calc_sand_trucks: "عدد الشاحنات التقريبي (~16م³):",
    card_gravel_title: "حصى الخرسانة المسلحة (Gravier)",
    calc_gravel_trucks: "عدد الشاحنات التقريبي (~16م³):",
    card_hourdis_title: "الهوردي وحجارة الأساسات",
    calc_foundation_rocks: "حجارة الأساسات والدبش:",
    calc_waterproofing: "عزل الأسطح (Étanchéité):",
    sec5_title: "تفصيل تكاليف البناء حسب مراحل الإنجاز",
    sec5_subtitle: "كشف مرحلي منظم لجميع مراحل الهندسة المعمارية والمدنية",
    btn_expand_details: "عرض التفاصيل",
    sec6_title: "التحليل المالي وتوزيع النفقات",
    sec6_subtitle: "رسم بياني يوضح نسبة كل عنصر في الميزانية",
    chart_btn_phase: "حسب المراحل",
    chart_btn_mat: "حسب التصنيف",
    chart_lbl_struct: "الأشغال الكبرى والهيكل الخرساني:",
    chart_lbl_finishes: "التشطيبات والدهان والديكور:",
    chart_lbl_labor: "حصة اليد العاملة (أجرة البنائين):",
    disclaimer_market: "الأسعار معايرة وفق السوق الجزائري (DTR B.C. 2.2). يمكنك تعديل أي سعر مباشرة في لوحة التحكم.",
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
    boq_grand_total_lbl: "المجموع الكلي التقديري لتكلفة البناء:",
    boq_note: "* الحسابات مطابقة لقواعد الحساب التقنية الجزائرية DTR B.C. 2.2 والكود الأوروبي.",
    copy_boq: "نسخ ملخص الحساب",
    report_page_title: "كشف التقدير المالي الرسمي للبناء",
    report_page_sub: "معد وجاهز للطباعة بحجم A4 وتصديره بصيغة PDF لتقديمه للجهات المعنية أو الزبائن.",
    print_sheet_btn: "طباعة كشف الحساب A4"
  },
  en: {
    preset_btn: "House Presets",
    preset_heading: "Algerian Construction Models",
    preset_1_title: "1. Single-Storey Villa (120 m² - Ground)",
    preset_1_sub: "Plot 160m², Footprint 120m², Single Floor",
    preset_2_title: "2. Family House R+1 (240 m²)",
    preset_2_sub: "Plot 180m², Footprint 120m², 2 Floors (RDC + R+1)",
    preset_3_title: "3. Modern Villa with Decor R+2 (360 m²)",
    preset_3_sub: "Plot 250m², Footprint 120m², High Finishing, 3 Floors",
    preset_4_title: "4. Residential Building R+3 (600 m²)",
    preset_4_sub: "Plot 200m², Footprint 150m², 4 Floors",
    export_pdf_btn: "Print Official Quote (PDF)",
    nav_calculator: "Cost & Materials Calculator",
    nav_boq: "Bill of Quantities (BOQ)",
    nav_services: "Professional Services",
    nav_marketplace: "BTP Marketplace",
    nav_jobs: "Jobs & Tenders",
    nav_3d: "3D Modeling",
    nav_report: "Official Quote A4",
    hero_total_cost: "Total Estimated Cost",
    cost_per_m2: "Cost per built m²:",
    hero_built_area: "Total Built Area (GFA)",
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
    hint_land_area: "Total property parcel area (مساحة الأرض الإجمالية)",
    lbl_footprint_area: "Ground Footprint Area",
    hint_footprint_area: "Ground floor covered building footprint (مساحة البناء في الأرضية)",
    lbl_yard_area: "Open Yard & Setbacks:",
    hint_yard_area: "Courtyard, garden & vehicle driveway (مساحة الفراغات)",
    lbl_floors_count: "Number of Floors (عدد الطوابق)",
    opt_basement: "Include Basement",
    opt_basement_sub: "Sous-sol (+1 level)",
    opt_overhang: "Balcony / Corbel",
    opt_overhang_sub: "+10% area upper",
    sec2_title: "2. Finishing Quality & Style",
    sec2_subtitle: "Select standard house, decorated, or shell only",
    tier_standard_title: "Standard Residential House",
    tier_standard_desc: "Standard durable finishes: Ceramic tiles, standard gypsum plaster, aluminum windows, classic sanitary ware.",
    tier_standard_badge: "Cost-optimized",
    tier_decorated_title: "Architectural Decorated House",
    tier_decorated_desc: "Luxury finishes: BA13 false ceilings with indirect LED spots, rectified porcelain stoneware, decorative stucco paint, thermal break aluminum.",
    tier_decorated_badge: "Modern Luxury",
    tier_shell_title: "Structural Grey Shell Only",
    tier_shell_desc: "Foundations, reinforced concrete columns, beams, floor slabs, red clay brick walls & roof waterproofing only.",
    tier_shell_badge: "Structure Only",
    lbl_foundation_type: "Foundation Type:",
    opt_isolated: "Pad Footings (Semelles isolées)",
    opt_raft: "Raft Foundation (Radier +20%)",
    lbl_contingency: "Contingency Margin:",
    sec3_title: "3. Direct Material Unit Prices",
    sec3_subtitle: "Set your exact local suppliers' unit prices below",
    btn_reset_prices: "Reset Defaults",
    price_cement_name: "Cement 50kg Bag (كيس إسمنت)",
    price_steel_name: "Steel Rebar / Quintal (قنطار حديد)",
    price_sand_name: "Sand per m³ (متر مكعب رمل)",
    price_gravel_name: "Gravel per m³ (متر مكعب حصى)",
    price_brick12_name: "Red Brick 12 Holes (حبة آجر 12)",
    price_brick8_name: "Red Brick 8 Holes (حبة آجر 8)",
    price_stones_name: "Foundation Rocks per m³ (حجارة الأساسات)",
    price_labor_name: "Civil Labor per m² (أجرة البناء للهيكل)",
    mat_detail_title: "Required Materials Quantities & Costs",
    mat_detail_subtitle: "Exact amounts of cement, steel, bricks, sand, and stones needed",
    card_cement_title: "Portland Cement (الإسمنت)",
    calc_cement_bags: "Total 50kg Bags:",
    calc_unit_price: "Unit Price:",
    calc_total_cost: "Estimated Cost:",
    card_steel_title: "Steel Rebar (حديد التسليح)",
    calc_steel_quintals: "Total Quintals (قنطار):",
    card_bricks_title: "Red Clay Bricks (الآجر الأحمر)",
    calc_brick12: "12-Hole (Exterior):",
    calc_brick8: "8-Hole (Interior):",
    card_sand_title: "River Sand (رمل البناء)",
    calc_sand_trucks: "Truck Loads (~16m³):",
    card_gravel_title: "Crushed Gravel (حصى الخرسانة)",
    calc_gravel_trucks: "Truck Loads (~16m³):",
    card_hourdis_title: "Hourdis & Stones (الهوردي والدبش)",
    calc_foundation_rocks: "Foundation Rocks:",
    calc_waterproofing: "Terrace Waterproofing:",
    sec5_title: "Estimated Cost Breakdown by Phase",
    sec5_subtitle: "Comprehensive civil & architectural stage costs",
    btn_expand_details: "Expand Details",
    sec6_title: "Cost Distribution & Material Share",
    sec6_subtitle: "Visual breakdown of construction expenses",
    chart_btn_phase: "By Phase",
    chart_btn_mat: "By Category",
    chart_lbl_struct: "Structural Works (Gros Œuvre):",
    chart_lbl_finishes: "Finishes & Decoration:",
    chart_lbl_labor: "Labor Share (Main d'œuvre):",
    disclaimer_market: "Calibrated for the Algerian building market (DTR B.C. 2.2). You can customize unit prices on the left panel.",
    boq_title: "Detailed Bill of Quantities (Bordereau des Prix & Quantités)",
    boq_subtitle: "Technical itemized quantities & costs calculated according to engineering norms",
    filter_all: "All Items",
    filter_structure: "Structure",
    filter_masonry: "Masonry",
    filter_finishes: "Finishes",
    filter_mep: "Plumbing & Electric",
    filter_labor: "Labor",
    th_category: "Category",
    th_description: "Description & Specification",
    th_quantity: "Qty",
    th_unit: "Unit",
    th_unit_price: "Unit Price",
    th_total: "Total Amount",
    boq_grand_total_lbl: "Grand Total (Estimated Construction Budget):",
    boq_note: "* Technical calculations comply with Algerian DTR rules and European Eurocodes.",
    copy_boq: "Copy Summary",
    report_page_title: "Formal Academic & Engineering Quotation Sheet",
    report_page_sub: "Formatted for client presentation, academic validation, and PDF export.",
    print_sheet_btn: "Print / Export A4 PDF"
  }
};

// =========================================================================
// 2. DEFAULT MARKET PRICES (DZD)
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
  currency: 'DZD',
  exchangeRate: 135,
  activeBoqFilter: 'all',
  prices: JSON.parse(JSON.stringify(DEFAULT_PRICES_DZD)),
  chartView: 'phase'
};

let breakdownChart = null;

// =========================================================================
// 4. YELLOW SPLASH LOADING SCREEN SEQUENCE ("لودينق صفيرة شوي")
// =========================================================================
function initSplashScreen() {
  const splash = document.getElementById('splashScreen');
  const bar = document.getElementById('splashProgressBar');
  const text = document.getElementById('splashStatusText');
  const percentText = document.getElementById('splashPercentText');

  if (!splash) return;

  const steps = [
    { pct: 15, msg: "Initialisation du noyau BatiHub DZ..." },
    { pct: 40, msg: "Chargement des modules BTP & Architecture..." },
    { pct: 70, msg: "Chargement de la base des prix DTR Algérie 2026..." },
    { pct: 90, msg: "Configuration des paramètres de calcul..." },
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
      setTimeout(runStep, 350);
    } else {
      setTimeout(() => {
        dismissSplash();
      }, 400);
    }
  }

  setTimeout(runStep, 200);
}

function dismissSplash() {
  const splash = document.getElementById('splashScreen');
  if (splash) {
    splash.classList.add('splash-hide');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 650);
  }
}

// =========================================================================
// 5. LANGUAGE SWITCHER LOGIC
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
// 6. CORE CIVIL ENGINEERING CALCULATION ENGINE
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

  // Urban metrics
  const cesRatio = (footprintArea / landArea) * 100;
  const cosRatio = totalBuiltArea / landArea;

  // 1. Excavation & Earthwork
  let excavationVol = footprintArea * 1.2;
  if (state.hasBasement) excavationVol += footprintArea * 3.0;
  const foundationStonesVol = state.foundationType === 'isolated' ? footprintArea * 0.20 : 0;

  // 2. Concrete & Structural Rebar
  const foundationFactor = state.foundationType === 'raft' ? 0.32 : 0.16;
  const concreteVol = (footprintArea * foundationFactor) + (totalBuiltArea * 0.22);
  
  // Steel Rebar (FeE500): 95 kg per m³ of concrete
  const steelKg = concreteVol * 95;
  const steelQuintals = steelKg / 100;
  const steelTonnes = steelKg / 1000;

  // Cement CPJ 42.5: 350 kg/m³ concrete + 60 kg/m² for masonry & mortars
  const cementKgForConcrete = concreteVol * 350;
  const cementKgForMortars = totalBuiltArea * 60;
  const totalCementKg = cementKgForConcrete + cementKgForMortars;
  const cementBags = Math.ceil(totalCementKg / 50);
  const cementTonnes = totalCementKg / 1000;

  // Aggregates
  const sandVol = (concreteVol * 0.45) + (totalBuiltArea * 0.08);
  const gravelVol = concreteVol * 0.85;
  const sandTrucks = Math.max(1, Math.round(sandVol / 16));
  const gravelTrucks = Math.max(1, Math.round(gravelVol / 16));

  // 3. Masonry: Clay Bricks & Floor Hourdis
  const bricks12Count = Math.round(totalBuiltArea * 20);
  const bricks8Count = Math.round(totalBuiltArea * 22);
  const totalBricks = bricks12Count + bricks8Count;
  const suspendedFloorArea = totalBuiltArea - footprintArea + footprintArea;
  const hourdisCount = Math.round(suspendedFloorArea * 7.5);

  // 4. Roof Waterproofing
  const waterproofingArea = footprintArea * 1.15;

  // 5. Finishes
  const isShell = state.finishQuality === 'shell';
  const isDecorated = state.finishQuality === 'decorated';

  const plasterBags = isShell ? 0 : Math.round(totalBuiltArea * 0.35);
  const ba13Sheets = isDecorated ? Math.round((totalBuiltArea * 0.85) / 3.0) : 0;
  const floorTilesArea = isShell ? 0 : Math.round(totalBuiltArea * 1.10);
  const wallTilesArea = isShell ? 0 : Math.round(totalBuiltArea * 0.30);
  const tileAdhesiveBags = isShell ? 0 : Math.round(((floorTilesArea + wallTilesArea) * 4.5) / 25);
  const primerKg = isShell ? 0 : Math.round(totalBuiltArea * 0.20);
  const paintLiters = isShell ? 0 : Math.round(totalBuiltArea * 0.35);
  const decorPaintLiters = isDecorated ? Math.round(totalBuiltArea * 0.15) : 0;

  // Openings
  const interiorDoorsCount = isShell ? 0 : Math.max(3, Math.round(totalBuiltArea / 24));
  const windowsCount = isShell ? 0 : Math.max(4, Math.round(totalBuiltArea / 18));
  const exteriorDoorsCount = isShell ? 0 : Math.max(1, floors);

  // Labor surfaces
  const laborShellM2 = totalBuiltArea;
  const laborPlasterM2 = isShell ? 0 : (isDecorated ? totalBuiltArea * 0.5 : totalBuiltArea * 2.2);
  const laborDrywallM2 = isDecorated ? totalBuiltArea * 0.85 : 0;
  const laborTilingM2 = isShell ? 0 : (floorTilesArea + wallTilesArea);
  const laborPaintM2 = isShell ? 0 : totalBuiltArea * 2.2;

  // BOQ Generation
  const p = state.prices;
  const items = [];
  const lang = state.lang;

  function phName(fr, ar, en) {
    if (lang === 'ar') return ar;
    if (lang === 'en') return en;
    return fr;
  }

  // Phase 1: Earthwork & Foundations
  items.push({
    id: 'excavation',
    phase: phName('Phase 1: Terrassement & Fondations', 'المرحلة 1: الحفر والتسوية والأساسات', 'Phase 1: Earthwork & Foundations'),
    category: 'structure',
    desc: phName('Fouilles en pleine masse, tranchées pour semelles & remblai compacté', 'حفر وتسوية وردم ميكانيكي للأساسات', 'Excavation, trenching & backfill compaction'),
    qty: Math.round(excavationVol),
    unit: p.excavation_m3.unit,
    unitPrice: p.excavation_m3.price,
    total: Math.round(excavationVol) * p.excavation_m3.price
  });

  if (foundationStonesVol > 0) {
    items.push({
      id: 'foundation_stones',
      phase: phName('Phase 1: Terrassement & Fondations', 'المرحلة 1: الحفر والتسوية والأساسات', 'Phase 1: Earthwork & Foundations'),
      category: 'structure',
      desc: phName('Moellons de calage pour hérissonage sous dallage', 'حجارة الدبش لفرشة الأساسات (Hérisson)', 'Foundation packing rocks / Moellons hérissonage'),
      qty: Math.round(foundationStonesVol),
      unit: p.foundation_stones_m3.unit,
      unitPrice: p.foundation_stones_m3.price,
      total: Math.round(foundationStonesVol) * p.foundation_stones_m3.price
    });
  }

  // Phase 2: Reinforced Concrete Structure
  items.push({
    id: 'cement',
    phase: phName('Phase 2: Structure Béton Armé', 'المرحلة 2: الهيكل الخرساني المسلح', 'Phase 2: Reinforced Concrete Structure'),
    category: 'structure',
    desc: phName(`Ciment CPJ-CEM II 42.5 (${cementTonnes.toFixed(1)} Tonnes totales béton + mortiers)`, `إسمنت بورتلاندي CPJ 42.5 (${cementTonnes.toFixed(1)} طن إجمالي)`, `Portland Cement CPJ 42.5 (${cementTonnes.toFixed(1)} Tonnes)`),
    qty: cementBags,
    unit: p.cement_bag.unit,
    unitPrice: p.cement_bag.price,
    total: cementBags * p.cement_bag.price
  });

  items.push({
    id: 'steel',
    phase: phName('Phase 2: Structure Béton Armé', 'المرحلة 2: الهيكل الخرساني المسلح', 'Phase 2: Reinforced Concrete Structure'),
    category: 'structure',
    desc: phName(`Acier FeE500 haute adhérence (${steelTonnes.toFixed(2)} Tonnes pour poteaux, poutres & dalles)`, `حديد التسليح FeE500 (${steelTonnes.toFixed(2)} طن)`, `High-Bond Rebar FeE500 (${steelTonnes.toFixed(2)} Tonnes)`),
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
    total: Math.round(sandVol) * p.sand_m3.price
  });

  items.push({
    id: 'gravel',
    phase: phName('Phase 2: Structure Béton Armé', 'المرحلة 2: الهيكل الخرساني المسلح', 'Phase 2: Reinforced Concrete Structure'),
    category: 'structure',
    desc: phName('Gravier concassé pour béton armé (8/15 & 15/25)', 'حصى مكسر للخرسانة المسلحة', 'Crushed concrete gravel (8/15 & 15/25)'),
    qty: Math.round(gravelVol),
    unit: p.gravel_m3.unit,
    unitPrice: p.gravel_m3.price,
    total: Math.round(gravelVol) * p.gravel_m3.price
  });

  items.push({
    id: 'waterproofing',
    phase: phName('Phase 2: Structure Béton Armé', 'المرحلة 2: الهيكل الخرساني المسلح', 'Phase 2: Reinforced Concrete Structure'),
    category: 'structure',
    desc: phName('Étanchéité multicouche toiture terrasse Paxalu 4mm', 'عزل مائي للأسطح بالحرارة Paxalu 4mm', 'Roof terrace waterproofing membrane Paxalu 4mm'),
    qty: Math.round(waterproofingArea),
    unit: p.waterproofing_m2.unit,
    unitPrice: p.waterproofing_m2.price,
    total: Math.round(waterproofingArea) * p.waterproofing_m2.price
  });

  // Phase 3: Masonry
  items.push({
    id: 'bricks_12',
    phase: phName('Phase 3: Maçonnerie & Enveloppe', 'المرحلة 3: البناء والآجر والأسقف', 'Phase 3: Masonry & Partitions'),
    category: 'masonry',
    desc: phName('Briques 12 trous pour murs extérieurs doubles', 'آجر أحمر 12 فتحة للجدران المزدوجة', '12-Hole red clay bricks for exterior walls'),
    qty: bricks12Count,
    unit: p.brick_12.unit,
    unitPrice: p.brick_12.price,
    total: bricks12Count * p.brick_12.price
  });

  items.push({
    id: 'bricks_8',
    phase: phName('Phase 3: Maçonnerie & Enveloppe', 'المرحلة 3: البناء والآجر والأسقف', 'Phase 3: Masonry & Partitions'),
    category: 'masonry',
    desc: phName('Briques 8 trous pour cloisons de distribution intérieure', 'آجر أحمر 8 فتحات للقواطع الداخلية', '8-Hole red clay bricks for interior walls'),
    qty: bricks8Count,
    unit: p.brick_8.unit,
    unitPrice: p.brick_8.price,
    total: bricks8Count * p.brick_8.price
  });

  items.push({
    id: 'hourdis',
    phase: phName('Phase 3: Maçonnerie & Enveloppe', 'المرحلة 3: البناء والآجر والأسقف', 'Phase 3: Masonry & Partitions'),
    category: 'masonry',
    desc: phName('Corps creux pour planchers nervurés (Hourdis 16+4)', 'هوردي الأسقف والأرضيات المعلقة 16+4', 'Hollow ceiling floor blocks (Hourdis 16+4)'),
    qty: hourdisCount,
    unit: p.hourdis_piece.unit,
    unitPrice: p.hourdis_piece.price,
    total: hourdisCount * p.hourdis_piece.price
  });

  // Finishes
  if (!isShell) {
    items.push({
      id: 'plaster',
      phase: phName('Phase 4: Plâtrerie & Faux Plafonds', 'المرحلة 4: اللياسة والأسقف والجبس', 'Phase 4: Plaster & Ceilings'),
      category: 'finishes',
      desc: phName('Plâtre de construction pour enduits murs et plafonds', 'أكياس الجبس واللياسة للجدران والأسقف', 'Construction gypsum plaster for wall coats'),
      qty: plasterBags,
      unit: p.plaster_bag.unit,
      unitPrice: p.plaster_bag.price,
      total: plasterBags * p.plaster_bag.price
    });

    if (isDecorated && ba13Sheets > 0) {
      items.push({
        id: 'ba13',
        phase: phName('Phase 4: Plâtrerie & Faux Plafonds', 'المرحلة 4: اللياسة والأسقف والجبس', 'Phase 4: Plaster & Ceilings'),
        category: 'finishes',
        desc: phName('Plaques BA13 avec ossature métallique & gorges LED', 'أسقف معلقة BA13 مع الهياكل المعدنية وإنارة مخفية', 'BA13 plasterboard sheets with LED channel profiles'),
        qty: ba13Sheets,
        unit: p.ba13_sheet.unit,
        unitPrice: p.ba13_sheet.price,
        total: ba13Sheets * p.ba13_sheet.price
      });
    }

    const floorPrice = isDecorated ? p.tile_floor_luxury.price : p.tile_floor_std.price;
    items.push({
      id: 'floor_tiles',
      phase: phName('Phase 5: Revêtements Sols & Murs', 'المرحلة 5: تبليط الأرضيات والحوائط', 'Phase 5: Flooring & Wall Tiles'),
      category: 'finishes',
      desc: isDecorated ? phName('Grès cérame poli rectifié 60x60 haut standing', 'بورسلان راقي 60x60 معالج فخم', 'High-end rectified porcelain stoneware 60x60') : phName('Carrelage monocuisson standard durable', 'سيراميك أرضيات عادي متين', 'Standard ceramic floor tiles'),
      qty: floorTilesArea,
      unit: 'm²',
      unitPrice: floorPrice,
      total: floorTilesArea * floorPrice
    });

    const wallPrice = isDecorated ? p.tile_wall_luxury.price : p.tile_wall_std.price;
    items.push({
      id: 'wall_tiles',
      phase: phName('Phase 5: Revêtements Sols & Murs', 'المرحلة 5: تبليط الأرضيات والحوائط', 'Phase 5: Flooring & Wall Tiles'),
      category: 'finishes',
      desc: phName('Faïence murale émaillée pour cuisine & salles de bain', 'سيراميك حوائط للحمامات والمطبخ', 'Glazed wall ceramics for kitchen & baths'),
      qty: wallTilesArea,
      unit: 'm²',
      unitPrice: wallPrice,
      total: wallTilesArea * wallPrice
    });

    items.push({
      id: 'tile_adhesive',
      phase: phName('Phase 5: Revêtements Sols & Murs', 'المرحلة 5: تبليط الأرضيات والحوائط', 'Phase 5: Flooring & Wall Tiles'),
      category: 'finishes',
      desc: phName('Mortier colle carrelage C2 & ciment à joints hydrofuge', 'غراء سيراميك ومادة فواصل مائية', 'Tile adhesive mortar bags & waterproof grout'),
      qty: tileAdhesiveBags,
      unit: p.tile_adhesive_bag.unit,
      unitPrice: p.tile_adhesive_bag.price,
      total: tileAdhesiveBags * p.tile_adhesive_bag.price
    });

    items.push({
      id: 'paint_primer',
      phase: phName('Phase 6: Peintures & Décoration', 'المرحلة 6: الدهان والتشطيبات', 'Phase 6: Paint & Surface Finishes'),
      category: 'finishes',
      desc: phName('Primaire fixateur d\'accrochage et enduit de lissage', 'طبقة الأساس والتهيئة للطلاء', 'Sealing primer & smoothing undercoat'),
      qty: primerKg,
      unit: p.paint_primer_kg.unit,
      unitPrice: p.paint_primer_kg.price,
      total: primerKg * p.paint_primer_kg.price
    });

    items.push({
      id: 'paint_std',
      phase: phName('Phase 6: Peintures & Décoration', 'المرحلة 6: الدهان والتشطيبات', 'Phase 6: Paint & Surface Finishes'),
      category: 'finishes',
      desc: phName('Peinture acrylique blanche satinée lavable', 'دهان مائي أكريليكي قابل للغسل', 'Washable interior vinyl & acrylic paint'),
      qty: paintLiters,
      unit: p.paint_wall_std_L.unit,
      unitPrice: p.paint_wall_std_L.price,
      total: paintLiters * p.paint_wall_std_L.price
    });

    if (isDecorated && decorPaintLiters > 0) {
      items.push({
        id: 'paint_decor',
        phase: phName('Phase 6: Peintures & Décoration', 'المرحلة 6: الدهان والتشطيبات', 'Phase 6: Paint & Surface Finishes'),
        category: 'finishes',
        desc: phName('Peinture décorative sablée / Stucco pour salon principal', 'دهانات ديكورية فخمة (ستوكو / كارينيا)', 'Decorative stucco & textured velvet paint'),
        qty: decorPaintLiters,
        unit: p.paint_wall_decor_L.unit,
        unitPrice: p.paint_wall_decor_L.price,
        total: decorPaintLiters * p.paint_wall_decor_L.price
      });
    }

    const doorPrice = isDecorated ? p.door_interior_luxury.price : p.door_interior_std.price;
    items.push({
      id: 'interior_doors',
      phase: phName('Phase 7: Menuiserie & Ouvertures', 'المرحلة 7: الأبواب والنوافذ', 'Phase 7: Doors & Windows'),
      category: 'finishes',
      desc: isDecorated ? phName('Portes intérieures architecturales pleines design', 'أبواب خشبية راقية ذات جودة عالية', 'Architectural solid-core interior doors') : phName('Portes intérieures isoplanes classiques', 'أبواب خشبية داخلية عادية', 'Standard interior wooden doors'),
      qty: interiorDoorsCount,
      unit: 'Unité',
      unitPrice: doorPrice,
      total: interiorDoorsCount * doorPrice
    });

    const windowPrice = isDecorated ? p.window_alu_thermal.price : p.window_alu_std.price;
    items.push({
      id: 'windows',
      phase: phName('Phase 7: Menuiserie & Ouvertures', 'المرحلة 7: الأبواب والنوافذ', 'Phase 7: Doors & Windows'),
      category: 'finishes',
      desc: isDecorated ? phName('Menuiserie alu avec rupture pont thermique & double vitrage', 'نوافذ ألمنيوم عازل حراري وزجاج مزدوج', 'Thermal-break double-glazed aluminum windows') : phName('Fenêtres aluminium standard vitrage simple', 'نوافذ ألمنيوم بيضاء عادية', 'Standard white aluminum glazed windows'),
      qty: windowsCount,
      unit: 'Unité',
      unitPrice: windowPrice,
      total: windowsCount * windowPrice
    });

    items.push({
      id: 'exterior_doors',
      phase: phName('Phase 7: Menuiserie & Ouvertures', 'المرحلة 7: الأبواب والنوافذ', 'Phase 7: Doors & Windows'),
      category: 'finishes',
      desc: phName('Porte d\'entrée principale blindée multipoints', 'باب خارجي رئيسي مصفح للأمان', 'Armored security exterior entrance door'),
      qty: exteriorDoorsCount,
      unit: 'Unité',
      unitPrice: p.door_exterior_armored.price,
      total: exteriorDoorsCount * p.door_exterior_armored.price
    });

    const plumbRate = isDecorated ? p.plumbing_m2_luxury.price : p.plumbing_m2_std.price;
    items.push({
      id: 'plumbing',
      phase: phName('Phase 8: Plomberie & Électricité (MEP)', 'المرحلة 8: الكهرباء والسباكة', 'Phase 8: Mechanical & Plumbing (MEP)'),
      category: 'mep',
      desc: isDecorated ? phName('Réseau multicouche encastré & sanitaires suspendus haut standing', 'شبكة سباكة متطورة وصحي معلق فاخر', 'Concealed multicouche plumbing & luxury sanitary') : phName('Plomberie cuivre/PPR standard & sanitaires classiques', 'شبكة سباكة وتجهيزات صحية عادية', 'Standard water pipes & classic sanitary ware'),
      qty: Math.round(totalBuiltArea),
      unit: 'm²',
      unitPrice: plumbRate,
      total: Math.round(totalBuiltArea) * plumbRate
    });

    const elecRate = isDecorated ? p.electrical_m2_luxury.price : p.electrical_m2_std.price;
    items.push({
      id: 'electrical',
      phase: phName('Phase 8: Plomberie & Électricité (MEP)', 'المرحلة 8: الكهرباء والسباكة', 'Phase 8: Mechanical & Plumbing (MEP)'),
      category: 'mep',
      desc: isDecorated ? phName('Installation électrique complète, spots LED & domotique', 'شبكة كهربائية معمارية، إضاءة مخفية وقواطع ذكية', 'Architectural electrical, LED coves & smart panels') : phName('Installation électrique classique selon normes', 'شبكة كهربائية قياسية وتمديدات إنارة عادية', 'Standard electrical conduits, wiring & breaker panel'),
      qty: Math.round(totalBuiltArea),
      unit: 'm²',
      unitPrice: elecRate,
      total: Math.round(totalBuiltArea) * elecRate
    });
  }

  // Labor
  items.push({
    id: 'labor_shell',
    phase: phName('Phase 9: Main d\'œuvre Qualifiée', 'المرحلة 9: أجرة اليد العاملة', 'Phase 9: Skilled Construction Labor'),
    category: 'labor',
    desc: phName('Main d\'œuvre maçonnerie, coffrage, ferraillage & coulage dalle', 'أجرة البنائين للهيكل الخرساني والنجارة والحديد والصب', 'Civil masonry, formwork, steel bending & concrete labor'),
    qty: Math.round(laborShellM2),
    unit: p.labor_shell_m2.unit,
    unitPrice: p.labor_shell_m2.price,
    total: Math.round(laborShellM2) * p.labor_shell_m2.price
  });

  if (!isShell) {
    if (isDecorated && laborDrywallM2 > 0) {
      items.push({
        id: 'labor_drywall',
        phase: phName('Phase 9: Main d\'œuvre Qualifiée', 'المرحلة 9: أجرة اليد العاملة', 'Phase 9: Skilled Construction Labor'),
        category: 'labor',
        desc: phName('Poseur faux plafonds placo BA13 & staff décoratif', 'أجرة تركيب أسقف الجبس والديكور BA13', 'Specialized BA13 ceiling installation & cove labor'),
        qty: Math.round(laborDrywallM2),
        unit: p.labor_drywall_ba13_m2.unit,
        unitPrice: p.labor_drywall_ba13_m2.price,
        total: Math.round(laborDrywallM2) * p.labor_drywall_ba13_m2.price
      });
    }

    items.push({
      id: 'labor_plaster',
      phase: phName('Phase 9: Main d\'œuvre Qualifiée', 'المرحلة 9: أجرة اليد العاملة', 'Phase 9: Skilled Construction Labor'),
      category: 'labor',
      desc: phName('Plâtrier pour enduits intérieurs et finitions', 'أجرة اللياسة والجبس للجدران', 'Wall plastering & rendering labor'),
      qty: Math.round(laborPlasterM2),
      unit: p.labor_plaster_std_m2.unit,
      unitPrice: p.labor_plaster_std_m2.price,
      total: Math.round(laborPlasterM2) * p.labor_plaster_std_m2.price
    });

    items.push({
      id: 'labor_tiling',
      phase: phName('Phase 9: Main d\'œuvre Qualifiée', 'المرحلة 9: أجرة اليد العاملة', 'Phase 9: Skilled Construction Labor'),
      category: 'labor',
      desc: phName('Carreleur pour pose carrelage et faïence', 'أجرة تبليط الأرضيات والحوائط', 'Floor and wall ceramic tiling labor'),
      qty: Math.round(laborTilingM2),
      unit: p.labor_tiling_m2.unit,
      unitPrice: p.labor_tiling_m2.price,
      total: Math.round(laborTilingM2) * p.labor_tiling_m2.price
    });

    const paintLaborPrice = isDecorated ? p.labor_painting_decor_m2.price : p.labor_painting_std_m2.price;
    items.push({
      id: 'labor_painting',
      phase: phName('Phase 9: Main d\'œuvre Qualifiée', 'المرحلة 9: أجرة اليد العاملة', 'Phase 9: Skilled Construction Labor'),
      category: 'labor',
      desc: isDecorated ? phName('Peintre décorateur pour effets sablés et stucco', 'أجرة الدهان المعماري والديكوري الراقي', 'Master painter decorative coating & stucco labor') : phName('Peintre en bâtiment pour couches de finition', 'أجرة الدهان الداخلي العادي', 'Standard interior wall painting labor'),
      qty: Math.round(laborPaintM2),
      unit: 'm²',
      unitPrice: paintLaborPrice,
      total: Math.round(laborPaintM2) * paintLaborPrice
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
// 7. CURRENCY UTILITIES
// =========================================================================
function formatCurrency(amountDZD) {
  if (state.currency === 'USD') {
    const usd = amountDZD / state.exchangeRate;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(usd);
  } else {
    const isAr = state.lang === 'ar';
    const num = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(amountDZD);
    return isAr ? `${num} د.ج` : `${num} DZD`;
  }
}

function getConvertedUnitPrice(priceDZD) {
  if (state.currency === 'USD') {
    const usd = priceDZD / state.exchangeRate;
    return '$' + (usd < 10 ? usd.toFixed(2) : Math.round(usd).toLocaleString('en-US'));
  }
  const isAr = state.lang === 'ar';
  return isAr ? `${Number(priceDZD).toLocaleString('fr-FR')} د.ج` : `${Number(priceDZD).toLocaleString('fr-FR')} DZD`;
}

// =========================================================================
// 8. APPLICATION RENDERER
// =========================================================================
function renderApp() {
  const data = calculateProjectEstimates();
  const isAr = state.lang === 'ar';

  // 1. Hero Updates
  document.getElementById('heroTotalCost').innerHTML = `${formatCurrency(data.totalCost)}`;
  document.getElementById('heroCostPerM2').innerText = `${formatCurrency(data.costPerM2)} / m²`;
  document.getElementById('heroTotalArea').innerHTML = `${Math.round(data.totalBuiltArea)} <span class="text-sm font-normal text-slate-400">m²</span>`;
  document.getElementById('heroFootprintArea').innerText = `${data.footprintArea} m²`;
  document.getElementById('heroUnbuiltArea').innerHTML = `${data.yardArea} <span class="text-sm font-normal text-slate-400">m²</span>`;
  document.getElementById('heroCESRatio').innerText = `${data.cesRatio.toFixed(1)}%`;
  
  // Quick Material Summary in Hero
  document.getElementById('heroCementTons').innerText = `${data.cementTonnes.toFixed(1)} T (${data.cementBags} ${isAr ? 'كيس' : 'sacs'})`;
  document.getElementById('heroSteelTons').innerText = `${data.steelTonnes.toFixed(2)} T (${Math.round(data.steelQuintals)} Qx)`;
  document.getElementById('heroBricksCount').innerText = `${data.totalBricks.toLocaleString()} ${isAr ? 'حبة' : 'pcs'}`;
  document.getElementById('heroAggregates').innerText = `${Math.round(data.sandVol + data.gravelVol)} m³`;

  // 2. Section 1 Inputs sync
  document.getElementById('labelLandAreaVal').innerText = `${state.landArea} m²`;
  document.getElementById('labelFootprintVal').innerText = `${state.footprintArea} m²`;
  document.getElementById('calcYardAreaVal').innerText = `${data.yardArea} m²`;
  document.getElementById('calcYardPercentVal').innerText = `(${((data.yardArea / state.landArea) * 100).toFixed(0)}% ${isAr ? 'فراغ' : 'libre'})`;
  
  const floorLabels = isAr ? {
    1: 'طابق أرضي فقط (RDC)',
    2: 'طابق أرضي + 1 (R+1)',
    3: 'طابق أرضي + 2 (R+2)',
    4: 'طابق أرضي + 3 (R+3)',
    5: 'طابق أرضي + 4 (R+4)'
  } : {
    1: 'Rez-de-chaussée seul (RDC)',
    2: 'RDC + 1 Étage (R+1)',
    3: 'RDC + 2 Étages (R+2)',
    4: 'RDC + 3 Étages (R+3)',
    5: 'RDC + 4 Étages (R+4)'
  };
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

  // 4. Section 4 Detailed Material Cards Sync (USER REQUEST)
  document.getElementById('calcCementTonnes').innerText = `${data.cementTonnes.toFixed(1)} ${isAr ? 'طن' : 'Tonnes'}`;
  document.getElementById('calcCementBags').innerText = `${data.cementBags.toLocaleString()} ${isAr ? 'كيس' : 'Sacs'}`;
  document.getElementById('calcCementUnitPrice').innerText = getConvertedUnitPrice(state.prices.cement_bag.price);
  document.getElementById('calcCementTotalCost').innerText = formatCurrency(data.cementCost);

  document.getElementById('calcSteelTonnes').innerText = `${data.steelTonnes.toFixed(2)} ${isAr ? 'طن' : 'Tonnes'}`;
  document.getElementById('calcSteelQuintals').innerText = `${Math.round(data.steelQuintals).toLocaleString()} ${isAr ? 'قنطار' : 'Qx'}`;
  document.getElementById('calcSteelUnitPrice').innerText = getConvertedUnitPrice(state.prices.steel_quintal.price);
  document.getElementById('calcSteelTotalCost').innerText = formatCurrency(data.steelCost);

  document.getElementById('calcTotalBricks').innerText = `${data.totalBricks.toLocaleString()} ${isAr ? 'حبة' : 'Pièces'}`;
  document.getElementById('calcBricks12Count').innerText = `${data.bricks12Count.toLocaleString()} ${isAr ? 'حبة' : 'pcs'}`;
  document.getElementById('calcBricks8Count').innerText = `${data.bricks8Count.toLocaleString()} ${isAr ? 'حبة' : 'pcs'}`;
  document.getElementById('calcBricksTotalCost').innerText = formatCurrency(data.bricksCost);

  document.getElementById('calcSandVol').innerText = `${Math.round(data.sandVol)} m³`;
  document.getElementById('calcSandTrucks').innerText = `~${data.sandTrucks} ${isAr ? 'شاحنات' : 'Camions'}`;
  document.getElementById('calcSandUnitPrice').innerText = getConvertedUnitPrice(state.prices.sand_m3.price);
  document.getElementById('calcSandTotalCost').innerText = formatCurrency(data.sandCost);

  document.getElementById('calcGravelVol').innerText = `${Math.round(data.gravelVol)} m³`;
  document.getElementById('calcGravelTrucks').innerText = `~${data.gravelTrucks} ${isAr ? 'شاحنات' : 'Camions'}`;
  document.getElementById('calcGravelUnitPrice').innerText = getConvertedUnitPrice(state.prices.gravel_m3.price);
  document.getElementById('calcGravelTotalCost').innerText = formatCurrency(data.gravelCost);

  document.getElementById('calcHourdisCount').innerText = `${data.hourdisCount.toLocaleString()} ${isAr ? 'حبة هوردي' : 'Pièces'}`;
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

  // 8. Update Formal Printable Report (Tab 7)
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
              <span class="text-[11px] text-slate-400 block">${phase.items.length} ${isAr ? 'عناصر متضمنة' : 'postes métrés inclus'}</span>
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
              <span class="text-[11px] text-slate-400 font-mono mr-4">${it.qty} ${it.unit}</span>
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
    const categoryBadge = {
      structure: '<span class="bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded text-[10px] font-bold">Structure</span>',
      masonry: '<span class="bg-bh-orange/20 text-bh-orange px-2 py-0.5 rounded text-[10px] font-bold">Maçonnerie</span>',
      finishes: '<span class="bg-bh-yellow/20 text-bh-yellow px-2 py-0.5 rounded text-[10px] font-bold">Finitions</span>',
      mep: '<span class="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-[10px] font-bold">MEP</span>',
      labor: '<span class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">Main d\'œuvre</span>'
    }[item.category] || '';

    return `
      <tr class="hover:bg-bh-border/40 transition">
        <td class="py-2.5 px-3.5 text-slate-500 font-mono">${index + 1}</td>
        <td class="py-2.5 px-3.5">${categoryBadge}</td>
        <td class="py-2.5 px-3.5 text-slate-200 font-medium">
          <div>${item.desc}</div>
          <span class="text-[10px] text-slate-500">${item.phase}</span>
        </td>
        <td class="py-2.5 px-3.5 text-right font-mono font-bold text-white">${item.qty.toLocaleString()}</td>
        <td class="py-2.5 px-3.5 text-center text-slate-400 text-[11px]">${item.unit}</td>
        <td class="py-2.5 px-3.5 text-right font-mono text-slate-300">${getConvertedUnitPrice(item.unitPrice)}</td>
        <td class="py-2.5 px-3.5 text-right font-mono font-bold text-bh-yellow">${formatCurrency(item.total)}</td>
      </tr>
    `;
  }).join('');

  document.getElementById('boqGrandTotal').innerText = formatCurrency(data.totalCost);
}

// Render Formal Printable Report (Tab 7)
function renderFormalReport(data) {
  const isAr = state.lang === 'ar';
  const dateStr = new Date().toLocaleDateString(isAr ? 'ar-DZ' : (state.lang === 'en' ? 'en-US' : 'fr-FR'), {
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
    standard: isAr ? 'منزل سكني عادي (Standard Résidentiel)' : 'Standard Résidentiel',
    decorated: isAr ? 'منزل مزخرف وعصري (Haut Standing Décoré)' : 'Haut Standing Moderne Décoré',
    shell: isAr ? 'هيكل خرساني فقط (Carcasse Seule)' : 'Gros Œuvre / Carcasse Seule'
  };
  document.getElementById('repFinishTier').innerText = finishNames[state.finishQuality];
  document.getElementById('repFoundation').innerText = state.foundationType === 'isolated' ? (isAr ? 'أساسات منفصلة وشريطية' : 'Semelles Isolées & Filantes') : (isAr ? 'حصيرة خرسانية عامة' : 'Radier Général');
  document.getElementById('repCurrency').innerText = state.currency === 'USD' ? 'Dollar Américain (USD)' : 'Dinar Algérien (DZD)';
  document.getElementById('repDuration').innerText = `${data.estimatedDurationMonths} - ${data.estimatedDurationMonths + 2} ${isAr ? 'أشهر' : 'Mois'}`;

  // Key Materials Schedule in Report
  document.getElementById('repCementDetail').innerText = `${data.cementBags.toLocaleString()} Sacs (${data.cementTonnes.toFixed(1)} T)`;
  document.getElementById('repSteelDetail').innerText = `${Math.round(data.steelQuintals).toLocaleString()} Qx (${data.steelTonnes.toFixed(2)} T)`;
  document.getElementById('repBricksDetail').innerText = `${data.totalBricks.toLocaleString()} Briques`;
  document.getElementById('repSandDetail').innerText = `${Math.round(data.sandVol).toLocaleString()} m³`;
  document.getElementById('repGravelDetail').innerText = `${Math.round(data.gravelVol).toLocaleString()} m³`;
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
      : ['Gros Œuvre & Fondations', 'Maçonnerie & Planchers', 'Finitions & Peinture', 'Électricité & Plomberie', 'Main d\'œuvre'];
    values = [
      data.categories.structure,
      data.categories.masonry,
      data.categories.finishes,
      data.categories.mep,
      data.categories.labor
    ].map(v => state.currency === 'USD' ? Math.round(v / state.exchangeRate) : v);
    bgColors = ['#ffa000', '#ff6d00', '#ffc107', '#0284c7', '#10b981'];
  }

  if (breakdownChart) {
    breakdownChart.destroy();
  }

  breakdownChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: bgColors,
        borderColor: '#0b0e14',
        borderWidth: 2,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              const val = context.raw;
              const formatted = state.currency === 'USD' ? '$' + val.toLocaleString() : val.toLocaleString() + ' DZD';
              return ` ${context.label}: ${formatted}`;
            }
          }
        }
      },
      cutout: '65%'
    }
  });
}

// =========================================================================
// 9. TAB SWITCHER HELPER
// =========================================================================
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

  sliderLand.addEventListener('input', (e) => syncLand(e.target.value));
  inputLand.addEventListener('change', (e) => syncLand(e.target.value));
  sliderFootprint.addEventListener('input', (e) => syncFootprint(e.target.value));
  inputFootprint.addEventListener('change', (e) => syncFootprint(e.target.value));

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

  // Direct Inline Material Price Inputs (Section 3)
  const quickPrices = [
    { id: 'quickPriceCement', key: 'cement_bag' },
    { id: 'quickPriceSteel', key: 'steel_quintal' },
    { id: 'quickPriceSand', key: 'sand_m3' },
    { id: 'quickPriceGravel', key: 'gravel_m3' },
    { id: 'quickPriceBrick12', key: 'brick_12' },
    { id: 'quickPriceBrick8', key: 'brick_8' },
    { id: 'quickPriceStones', key: 'foundation_stones_m3' },
    { id: 'quickPriceLabor', key: 'labor_shell_m2' }
  ];

  quickPrices.forEach(({ id, key }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value) || 0;
        state.prices[key].price = val;
        renderApp();
      });
    }
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
  document.getElementById('selectContingency')?.addEventListener('change', (e) => {
    state.contingencyRate = parseFloat(e.target.value);
    renderApp();
  });

  // Currency Buttons
  const btnDZD = document.getElementById('currDZD');
  const btnUSD = document.getElementById('currUSD');

  btnDZD?.addEventListener('click', () => {
    btnDZD.classList.add('active-currency');
    btnUSD.classList.remove('active-currency');
    state.currency = 'DZD';
    renderApp();
  });

  btnUSD?.addEventListener('click', () => {
    btnUSD.classList.add('active-currency');
    btnDZD.classList.remove('active-currency');
    state.currency = 'USD';
    renderApp();
  });

  // Tabs navigation
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // BOQ filter buttons
  const boqFilters = document.querySelectorAll('.boq-filter-btn');
  boqFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      boqFilters.forEach(b => {
        b.classList.remove('active-filter');
        b.classList.add('bg-bh-bg', 'text-slate-400');
      });
      btn.classList.add('active-filter');
      btn.classList.remove('bg-bh-bg', 'text-slate-400');
      state.activeBoqFilter = btn.getAttribute('data-filter');
      renderApp();
    });
  });

  // Chart toggles
  document.getElementById('chartViewDonut')?.addEventListener('click', () => {
    document.getElementById('chartViewDonut').classList.add('active-chart-toggle');
    document.getElementById('chartViewBar')?.classList.remove('active-chart-toggle');
    state.chartView = 'phase';
    renderApp();
  });

  document.getElementById('chartViewBar')?.addEventListener('click', () => {
    document.getElementById('chartViewBar').classList.add('active-chart-toggle');
    document.getElementById('chartViewDonut')?.classList.remove('active-chart-toggle');
    state.chartView = 'material';
    renderApp();
  });

  // Presets menu
  const presetBtn = document.getElementById('presetBtn');
  const presetMenu = document.getElementById('presetMenu');

  presetBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    presetMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    presetMenu?.classList.add('hidden');
  });

  document.querySelectorAll('.preset-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const pKey = opt.getAttribute('data-preset');
      applyPreset(pKey);
      presetMenu.classList.add('hidden');
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.2 },
          colors: ['#ffa000', '#ff6d00', '#ffc107', '#10b981', '#0284c7']
        });
      }
    });
  });

  // Export PDF / Print
  document.getElementById('printReportBtn')?.addEventListener('click', () => {
    switchTab('tab-report');
    setTimeout(() => {
      window.print();
    }, 450);
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
