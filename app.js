/**
 * BatiCalc Pro - Construction Cost & Materials Estimator
 * Developed by Scientific Club Archi Art
 * University of Larbi Ben M'hidi - Oum El Bouaghi
 */

// =========================================================================
// 1. I18N BILINGUAL TRANSLATION DICTIONARY (ENGLISH & ARABIC)
// =========================================================================
const TRANSLATIONS = {
  en: {
    univ_title: "University of Larbi Ben M'hidi - Oum El Bouaghi",
    univ_ar: "جامعة العربي بن مهيدي - أم البواقي",
    faculty_name: "Faculty of Exact Sciences & Architecture",
    tagline_club: "Scientific Club Archi Art",
    subtagline_club: "Architecture & Civil Engineering Lab",
    app_desc: "Construction Cost & Bill of Quantities Estimator",
    preset_btn: "Presets",
    preset_heading: "Standard Algerian Models",
    preset_1_title: "1. Economic Villa (120 m² - Ground)",
    preset_1_sub: "Plot 160m², Footprint 120m², Single Floor",
    preset_2_title: "2. Family House R+1 (240 m²)",
    preset_2_sub: "Plot 180m², Footprint 120m², 2 Floors (RDC + R+1)",
    preset_3_title: "3. Modern Villa R+2 (360 m²)",
    preset_3_sub: "Plot 250m², Footprint 120m², Decorated, 3 Floors",
    preset_4_title: "4. Residential Building R+3 (600 m²)",
    preset_4_sub: "Plot 200m², Footprint 150m², 4 Floors",
    export_pdf_btn: "Official PDF",
    nav_calculator: "Calculator & Materials",
    nav_boq: "Bill of Quantities (BOQ)",
    nav_prices: "Material Price Manager",
    nav_report: "Official Estimate Sheet",
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
    sec1_title: "Land & Building Dimensions",
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
    sec2_title: "Finishing Quality & Style",
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
    sec3_title: "Direct Material Unit Prices",
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
    disclaimer_market: "Calibrated for the Algerian building market (Oum El Bouaghi & Eastern Algeria). Every price can be customized above.",
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
    tab_prices_title: "Comprehensive Material Price Catalog",
    tab_prices_sub: "Customize prices of all materials, tiles, paints, and skilled labor",
    btn_restore_all: "Reset to Defaults",
    btn_save_browser: "Save to Browser",
    rate_setup_title: "Currency Exchange Rate Configuration",
    rate_setup_sub: "Define the conversion rate between Algerian Dinar and US Dollar",
    report_page_title: "Formal Academic & Engineering Quotation Sheet",
    report_page_sub: "Formatted for client presentation, academic validation, and PDF export.",
    print_sheet_btn: "Print / Export A4 PDF",
    footer_prep: "Prepared by Scientific Club Archi Art",
    footer_univ: "University of Larbi Ben M'hidi - Oum El Bouaghi (جامعة العربي بن مهيدي أم البواقي)",
    footer_sub: "Algerian DTR standards & Eurocodes • Developed for academic & field civil calculations."
  },
  ar: {
    univ_title: "جامعة العربي بن مهيدي - أم البواقي",
    univ_ar: "كلية العلوم الدقيقة وقسم الهندسة المعمارية",
    faculty_name: "معهد الهندسة المعمارية والهندسة المدنية",
    tagline_club: "النادي العلمي آرتشي آرت",
    subtagline_club: "حساب الكميات وتقدير تكاليف البناء",
    app_desc: "حاسبة تكاليف البناء وتقدير كميات مواد البناء واليد العاملة",
    preset_btn: "نماذج جاهزة",
    preset_heading: "نماذج منازل جزائرية شائعة",
    preset_1_title: "1. فيلا اقتصادية طابق أرضي (120 م²)",
    preset_1_sub: "أرض 160م²، مبنى 120م²، طابق أرضي فقط",
    preset_2_title: "2. منزل عائلي طابقين R+1 (240 م²)",
    preset_2_sub: "أرض 180م²، مبنى 120م²، طابق أرضي + أول",
    preset_3_title: "3. فيلا عصرية مزخرفة R+2 (360 م²)",
    preset_3_sub: "أرض 250م²، مبنى 120م²، ديكور راقي، 3 طوابق",
    preset_4_title: "4. عمارة سكنية صغيرة R+3 (600 م²)",
    preset_4_sub: "أرض 200م²، مبنى 150م²، 4 طوابق",
    export_pdf_btn: "طباعة التقرير الرسمي",
    nav_calculator: "الحاسبة وكميات المواد",
    nav_boq: "جدول الكميات والأسعار (BOQ)",
    nav_prices: "إدارة أسعار المواد",
    nav_report: "كشف التقدير الرسمي",
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
    mat_aggregates_short: "الرمل والحصى:",
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
    disclaimer_market: "الأسعار معايرة وفق السوق الجزائري (أم البواقي والشرق الجزائري). يمكنك تعديل أي سعر مباشرة في الأعلى.",
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
    tab_prices_title: "دليل الأسعار التفصيلي لكافة المواد",
    tab_prices_sub: "تخصيص أسعار جميع المواد، البلاط، الدهانات وأجرة الحرفيين",
    btn_restore_all: "استعادة الأسعار الافتراضية",
    btn_save_browser: "حفظ في المتصفح",
    rate_setup_title: "ضبط سعر صرف العملة",
    rate_setup_sub: "تحديد سعر تحويل الدينار الجزائري مقابل الدولار الأمريكي",
    report_page_title: "كشف التقدير المالي الرسمي للبناء",
    report_page_sub: "معد وجاهز للطباعة بحجم A4 وتصديره بصيغة PDF لتقديمه للجهات المعنية أو الزبائن.",
    print_sheet_btn: "طباعة كشف الحساب A4",
    footer_prep: "إعداد النادي العلمي آرتشي آرت",
    footer_univ: "جامعة العربي بن مهيدي - أم البواقي (University of Larbi Ben M'hidi - Oum El Bouaghi)",
    footer_sub: "معاير وفق المعايير الرسمية الجزائرية DTR • مخصص للأبحاث والمشاريع الميدانية."
  }
};

// =========================================================================
// 2. DEFAULT MARKET PRICES IN DZD
// =========================================================================
const DEFAULT_PRICES_DZD = {
  cement_bag: { name: 'Portland Cement CPJ-CEM II 42.5 (50kg Bag)', unit: 'Bag (50kg)', price: 680, category: 'structure' },
  steel_quintal: { name: 'High-Bond Rebar Steel FeE500 (Quintal = 100kg)', unit: 'Quintal (100kg)', price: 12800, category: 'structure' },
  sand_m3: { name: 'Washed River / Quarry Sand', unit: 'm³', price: 2800, category: 'structure' },
  gravel_m3: { name: 'Crushed Concrete Gravel (8/15 & 15/25)', unit: 'm³', price: 2300, category: 'structure' },
  foundation_stones_m3: { name: 'Foundation Packing Moellon Stones', unit: 'm³', price: 1900, category: 'structure' },
  excavation_m3: { name: 'Machine Earthwork Excavation & Backfill', unit: 'm³', price: 650, category: 'structure' },
  brick_12: { name: 'Red Hollow Clay Brick 12-Holes (Exterior Wall)', unit: 'Piece', price: 40, category: 'masonry' },
  brick_8: { name: 'Red Hollow Clay Brick 8-Holes (Interior Wall)', unit: 'Piece', price: 34, category: 'masonry' },
  hourdis_piece: { name: 'Floor Hollow Blocks (Hourdis 16+4)', unit: 'Piece', price: 48, category: 'masonry' },
  plaster_bag: { name: 'Construction Gypsum Plaster (40kg Bag)', unit: 'Bag (40kg)', price: 480, category: 'finishes' },
  ba13_sheet: { name: 'Gypsum Plasterboard BA13 (2.5m x 1.2m)', unit: 'Sheet', price: 1350, category: 'finishes' },
  tile_floor_std: { name: 'Standard Ceramic Floor Tile', unit: 'm²', price: 1950, category: 'finishes' },
  tile_floor_luxury: { name: 'High-End Porcelain Tile (Grès Cérame 60x60)', unit: 'm²', price: 4200, category: 'finishes' },
  tile_wall_std: { name: 'Standard Bathroom/Kitchen Wall Ceramic', unit: 'm²', price: 1800, category: 'finishes' },
  tile_wall_luxury: { name: 'Premium Rectified Wall Ceramics', unit: 'm²', price: 3600, category: 'finishes' },
  tile_adhesive_bag: { name: 'Ceramic Tile Adhesive Mortar (25kg Bag)', unit: 'Bag (25kg)', price: 620, category: 'finishes' },
  paint_primer_kg: { name: 'Sealing Primer & Undercoat (Fixateur)', unit: 'kg', price: 450, category: 'finishes' },
  paint_wall_std_L: { name: 'Washable Acrylic Wall Paint', unit: 'Liter', price: 500, category: 'finishes' },
  paint_wall_decor_L: { name: 'Decorative Stucco / Velvet Texture Paint', unit: 'Liter', price: 1650, category: 'finishes' },
  waterproofing_m2: { name: 'Roof Bitumen Waterproofing Membrane (Paxalu 4mm)', unit: 'm²', price: 2100, category: 'structure' },
  door_interior_std: { name: 'Standard Flush Wooden Interior Door', unit: 'Unit', price: 14000, category: 'finishes' },
  door_interior_luxury: { name: 'Premium Solid Core Architectural Door', unit: 'Unit', price: 28000, category: 'finishes' },
  door_exterior_armored: { name: 'High-Security Armored Exterior Entrance Door', unit: 'Unit', price: 65000, category: 'finishes' },
  window_alu_std: { name: 'Standard White Aluminum Window Unit', unit: 'Unit', price: 16000, category: 'finishes' },
  window_alu_thermal: { name: 'Thermal-Break Double-Glazed Aluminum Window', unit: 'Unit', price: 32000, category: 'finishes' },
  plumbing_m2_std: { name: 'Standard Plumbing & Sanitary Fixtures (per m²)', unit: 'm²', price: 2800, category: 'mep' },
  plumbing_m2_luxury: { name: 'Concealed Premium Plumbing & Luxury Sanitary (per m²)', unit: 'm²', price: 5500, category: 'mep' },
  electrical_m2_std: { name: 'Standard Electrical Installation & Panel (per m²)', unit: 'm²', price: 2400, category: 'mep' },
  electrical_m2_luxury: { name: 'Architectural Electrical, LED Coves & Smart Lighting (per m²)', unit: 'm²', price: 5200, category: 'mep' },
  labor_shell_m2: { name: 'Civil Structural Labor (Foundations, Columns, Slabs)', unit: 'm²', price: 9500, category: 'labor' },
  labor_plaster_std_m2: { name: 'Plastering & Rendering Labor', unit: 'm²', price: 450, category: 'labor' },
  labor_drywall_ba13_m2: { name: 'BA13 False Ceiling & Molding Installation Labor', unit: 'm²', price: 1200, category: 'labor' },
  labor_tiling_m2: { name: 'Floor & Wall Tile Laying Labor', unit: 'm²', price: 850, category: 'labor' },
  labor_painting_std_m2: { name: 'Standard Painting Labor', unit: 'm²', price: 550, category: 'labor' },
  labor_painting_decor_m2: { name: 'Decorative Stucco & Venetian Plaster Labor', unit: 'm²', price: 1100, category: 'labor' }
};

// =========================================================================
// 3. APPLICATION STATE
// =========================================================================
let state = {
  lang: 'en', // 'en' or 'ar'
  landArea: 160,
  footprintArea: 120,
  floorsCount: 1,
  hasBasement: false,
  hasOverhang: true,
  finishQuality: 'standard', // 'standard', 'decorated', 'shell'
  foundationType: 'isolated', // 'isolated', 'raft'
  contingencyRate: 0.10,
  currency: 'DZD', // 'DZD' or 'USD'
  exchangeRate: 135,
  activeBoqFilter: 'all',
  prices: JSON.parse(JSON.stringify(DEFAULT_PRICES_DZD)),
  chartView: 'phase'
};

// Load saved custom prices if available
try {
  const saved = localStorage.getItem('baticalc_custom_prices');
  if (saved) {
    state.prices = { ...DEFAULT_PRICES_DZD, ...JSON.parse(saved) };
  }
} catch (e) {
  console.warn('LocalStorage error', e);
}

let breakdownChart = null;

// =========================================================================
// 4. LANGUAGE HANDLING & I18N
// =========================================================================
function setLanguage(lang) {
  state.lang = lang;
  const htmlRoot = document.getElementById('htmlRoot');
  
  if (lang === 'ar') {
    htmlRoot.setAttribute('dir', 'rtl');
    htmlRoot.setAttribute('lang', 'ar');
    document.getElementById('langAR').classList.add('active-lang');
    document.getElementById('langEN').classList.remove('active-lang');
  } else {
    htmlRoot.setAttribute('dir', 'ltr');
    htmlRoot.setAttribute('lang', 'en');
    document.getElementById('langEN').classList.add('active-lang');
    document.getElementById('langAR').classList.remove('active-lang');
  }

  // Update all data-i18n elements
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerText = t[key];
    }
  });

  renderApp();
}

// =========================================================================
// 5. CALCULATION CORE (Civil Engineering & DTR Standards)
// =========================================================================
function calculateProjectEstimates() {
  const landArea = state.landArea;
  const footprintArea = Math.min(state.footprintArea, landArea);
  const yardArea = Math.max(0, landArea - footprintArea);
  const floors = state.floorsCount;
  const overhangMultiplier = state.hasOverhang ? 1.10 : 1.0;

  // Total Gross Floor Area (GFA)
  let totalBuiltArea = footprintArea;
  if (floors > 1) {
    totalBuiltArea += (floors - 1) * (footprintArea * overhangMultiplier);
  }
  if (state.hasBasement) {
    totalBuiltArea += footprintArea;
  }

  // Ratios
  const cesRatio = (footprintArea / landArea) * 100;
  const cosRatio = totalBuiltArea / landArea;

  // 1. Excavation & Earthwork
  let excavationVol = footprintArea * 1.2;
  if (state.hasBasement) excavationVol += footprintArea * 3.0;
  const foundationStonesVol = state.foundationType === 'isolated' ? footprintArea * 0.20 : 0;

  // 2. Structural Concrete & Steel
  const foundationFactor = state.foundationType === 'raft' ? 0.32 : 0.16;
  const concreteVol = (footprintArea * foundationFactor) + (totalBuiltArea * 0.22);
  
  // Steel Rebar FeE500: ~95 kg/m³ of concrete
  const steelKg = concreteVol * 95;
  const steelQuintals = steelKg / 100;
  const steelTonnes = steelKg / 1000;

  // Cement: 350 kg/m³ concrete + 60 kg/m² for masonry & mortars
  const cementKgForConcrete = concreteVol * 350;
  const cementKgForMortars = totalBuiltArea * 60;
  const totalCementKg = cementKgForConcrete + cementKgForMortars;
  const cementBags = Math.ceil(totalCementKg / 50);
  const cementTonnes = totalCementKg / 1000;

  // Aggregates:
  const sandVol = (concreteVol * 0.45) + (totalBuiltArea * 0.08);
  const gravelVol = concreteVol * 0.85;
  const sandTrucks = Math.max(1, Math.round(sandVol / 16));
  const gravelTrucks = Math.max(1, Math.round(gravelVol / 16));

  // 3. Masonry: Bricks & Hourdis
  const bricks12Count = Math.round(totalBuiltArea * 20); // Exterior envelope
  const bricks8Count = Math.round(totalBuiltArea * 22);  // Interior partitions
  const totalBricks = bricks12Count + bricks8Count;
  const suspendedFloorArea = totalBuiltArea - footprintArea + footprintArea;
  const hourdisCount = Math.round(suspendedFloorArea * 7.5);

  // 4. Roof Waterproofing
  const waterproofingArea = footprintArea * 1.15;

  // 5. Finishing parameters
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
  const isAr = state.lang === 'ar';

  // Earthwork
  items.push({
    id: 'excavation',
    phase: isAr ? 'المرحلة 1: أشغال الحفر والتسوية والأساسات' : 'Phase 1: Earthwork & Foundations',
    category: 'structure',
    desc: isAr ? 'حفر وتسوية بالأداة الميكانيكية وردم للأساسات' : 'Machine excavation, trenching & backfill compaction',
    qty: Math.round(excavationVol),
    unit: p.excavation_m3.unit,
    unitPrice: p.excavation_m3.price,
    total: Math.round(excavationVol) * p.excavation_m3.price
  });

  if (foundationStonesVol > 0) {
    items.push({
      id: 'foundation_stones',
      phase: isAr ? 'المرحلة 1: أشغال الحفر والتسوية والأساسات' : 'Phase 1: Earthwork & Foundations',
      category: 'structure',
      desc: isAr ? 'حجارة الدبش لفرشة الأساسات (Hérisson moellons)' : 'Foundation packing rocks / Moellons hérissonage',
      qty: Math.round(foundationStonesVol),
      unit: p.foundation_stones_m3.unit,
      unitPrice: p.foundation_stones_m3.price,
      total: Math.round(foundationStonesVol) * p.foundation_stones_m3.price
    });
  }

  // Reinforced Concrete
  items.push({
    id: 'cement',
    phase: isAr ? 'المرحلة 2: الهيكل الخرساني المسلح' : 'Phase 2: Reinforced Concrete Structure',
    category: 'structure',
    desc: isAr ? `إسمنت بورتلاندي CPJ 42.5 (إجمالي ${cementTonnes.toFixed(1)} طن للخرسانة والمونة)` : `Portland Cement CPJ 42.5 (${cementTonnes.toFixed(1)} Tonnes total)`,
    qty: cementBags,
    unit: p.cement_bag.unit,
    unitPrice: p.cement_bag.price,
    total: cementBags * p.cement_bag.price
  });

  items.push({
    id: 'steel',
    phase: isAr ? 'المرحلة 2: الهيكل الخرساني المسلح' : 'Phase 2: Reinforced Concrete Structure',
    category: 'structure',
    desc: isAr ? `حديد التسليح FeE500 (إجمالي ${steelTonnes.toFixed(2)} طن للأعمدة والأسقف)` : `High-Bond Rebar FeE500 (${steelTonnes.toFixed(2)} Tonnes)`,
    qty: Math.round(steelQuintals * 10) / 10,
    unit: p.steel_quintal.unit,
    unitPrice: p.steel_quintal.price,
    total: Math.round(steelQuintals * p.steel_quintal.price)
  });

  items.push({
    id: 'sand',
    phase: isAr ? 'المرحلة 2: الهيكل الخرساني المسلح' : 'Phase 2: Reinforced Concrete Structure',
    category: 'structure',
    desc: isAr ? 'رمل مغسول للبناء واللياسة والخرسانة' : 'Washed concrete & mortar river sand',
    qty: Math.round(sandVol),
    unit: p.sand_m3.unit,
    unitPrice: p.sand_m3.price,
    total: Math.round(sandVol) * p.sand_m3.price
  });

  items.push({
    id: 'gravel',
    phase: isAr ? 'المرحلة 2: الهيكل الخرساني المسلح' : 'Phase 2: Reinforced Concrete Structure',
    category: 'structure',
    desc: isAr ? 'حصى مكسر للخرسانة المسلحة (8/15 و 15/25)' : 'Crushed structural aggregates 8/15 & 15/25',
    qty: Math.round(gravelVol),
    unit: p.gravel_m3.unit,
    unitPrice: p.gravel_m3.price,
    total: Math.round(gravelVol) * p.gravel_m3.price
  });

  items.push({
    id: 'waterproofing',
    phase: isAr ? 'المرحلة 2: الهيكل الخرساني المسلح' : 'Phase 2: Reinforced Concrete Structure',
    category: 'structure',
    desc: isAr ? 'طبقات العزل المائي للأسطح بالحرارة Paxalu 4mm' : 'Roof terrace waterproofing membrane Paxalu 4mm',
    qty: Math.round(waterproofingArea),
    unit: p.waterproofing_m2.unit,
    unitPrice: p.waterproofing_m2.price,
    total: Math.round(waterproofingArea) * p.waterproofing_m2.price
  });

  // Masonry
  items.push({
    id: 'bricks_12',
    phase: isAr ? 'المرحلة 3: البناء والقواطع' : 'Phase 3: Masonry & Partitions',
    category: 'masonry',
    desc: isAr ? 'آجر أحمر 12 فتحة للجدران الخارجية المزدوجة' : '12-Hole red clay hollow bricks for exterior double walls',
    qty: bricks12Count,
    unit: p.brick_12.unit,
    unitPrice: p.brick_12.price,
    total: bricks12Count * p.brick_12.price
  });

  items.push({
    id: 'bricks_8',
    phase: isAr ? 'المرحلة 3: البناء والقواطع' : 'Phase 3: Masonry & Partitions',
    category: 'masonry',
    desc: isAr ? 'آجر أحمر 8 فتحات للقواطع الداخلية' : '8-Hole red clay hollow bricks for interior dividers',
    qty: bricks8Count,
    unit: p.brick_8.unit,
    unitPrice: p.brick_8.price,
    total: bricks8Count * p.brick_8.price
  });

  items.push({
    id: 'hourdis',
    phase: isAr ? 'المرحلة 3: البناء والقواطع' : 'Phase 3: Masonry & Partitions',
    category: 'masonry',
    desc: isAr ? 'هوردي الأسقف والأرضيات المعلقة 16+4' : 'Floor hollow ceiling blocks / Hourdis 16+4',
    qty: hourdisCount,
    unit: p.hourdis_piece.unit,
    unitPrice: p.hourdis_piece.price,
    total: hourdisCount * p.hourdis_piece.price
  });

  // Finishes
  if (!isShell) {
    items.push({
      id: 'plaster',
      phase: isAr ? 'المرحلة 4: اللياسة والأسقف' : 'Phase 4: Wall Plastering & Ceilings',
      category: 'finishes',
      desc: isAr ? 'أكياس الجبس واللياسة للجدران والأسقف' : 'Construction gypsum plaster for wall base coats',
      qty: plasterBags,
      unit: p.plaster_bag.unit,
      unitPrice: p.plaster_bag.price,
      total: plasterBags * p.plaster_bag.price
    });

    if (isDecorated && ba13Sheets > 0) {
      items.push({
        id: 'ba13',
        phase: isAr ? 'المرحلة 4: اللياسة والأسقف' : 'Phase 4: Wall Plastering & Ceilings',
        category: 'finishes',
        desc: isAr ? 'صفائح أسقف جبسية معلقة BA13 مع الهياكل المعدنية' : 'BA13 plasterboard sheets with metallic studs & LED accessories',
        qty: ba13Sheets,
        unit: p.ba13_sheet.unit,
        unitPrice: p.ba13_sheet.price,
        total: ba13Sheets * p.ba13_sheet.price
      });
    }

    // Flooring
    const floorPrice = isDecorated ? p.tile_floor_luxury.price : p.tile_floor_std.price;
    items.push({
      id: 'floor_tiles',
      phase: isAr ? 'المرحلة 5: تبليط الأرضيات والحوائط' : 'Phase 5: Flooring & Wall Tiles',
      category: 'finishes',
      desc: isDecorated
        ? (isAr ? 'بلاط بورسلان راقي 60x60 أو 120x60 معالج' : 'High-end rectified porcelain stoneware 60x60')
        : (isAr ? 'بلاط سيراميك أرضيات عادي ومتين' : 'Standard durable ceramic floor tiles'),
      qty: floorTilesArea,
      unit: 'm²',
      unitPrice: floorPrice,
      total: floorTilesArea * floorPrice
    });

    const wallPrice = isDecorated ? p.tile_wall_luxury.price : p.tile_wall_std.price;
    items.push({
      id: 'wall_tiles',
      phase: isAr ? 'المرحلة 5: تبليط الأرضيات والحوائط' : 'Phase 5: Flooring & Wall Tiles',
      category: 'finishes',
      desc: isAr ? 'سيراميك حوائط للحمامات والمطبخ' : 'Glazed wall ceramic faïence for kitchen & baths',
      qty: wallTilesArea,
      unit: 'm²',
      unitPrice: wallPrice,
      total: wallTilesArea * wallPrice
    });

    items.push({
      id: 'tile_adhesive',
      phase: isAr ? 'المرحلة 5: تبليط الأرضيات والحوائط' : 'Phase 5: Flooring & Wall Tiles',
      category: 'finishes',
      desc: isAr ? 'أكياس غراء السيراميك ومادة المفاصل' : 'Tile adhesive mortar bags & waterproof joint grout',
      qty: tileAdhesiveBags,
      unit: p.tile_adhesive_bag.unit,
      unitPrice: p.tile_adhesive_bag.price,
      total: tileAdhesiveBags * p.tile_adhesive_bag.price
    });

    // Painting
    items.push({
      id: 'paint_primer',
      phase: isAr ? 'المرحلة 6: الدهان والتشطيب' : 'Phase 6: Paint & Surface Finishes',
      category: 'finishes',
      desc: isAr ? 'طبقة الأساس والتهيئة للطلاء' : 'Surface sealing primer & undercoat (Fixateur)',
      qty: primerKg,
      unit: p.paint_primer_kg.unit,
      unitPrice: p.paint_primer_kg.price,
      total: primerKg * p.paint_primer_kg.price
    });

    items.push({
      id: 'paint_std',
      phase: isAr ? 'المرحلة 6: الدهان والتشطيب' : 'Phase 6: Paint & Surface Finishes',
      category: 'finishes',
      desc: isAr ? 'دهان مائي أكريليكي قابل للغسل' : 'Washable interior vinyl & acrylic paint',
      qty: paintLiters,
      unit: p.paint_wall_std_L.unit,
      unitPrice: p.paint_wall_std_L.price,
      total: paintLiters * p.paint_wall_std_L.price
    });

    if (isDecorated && decorPaintLiters > 0) {
      items.push({
        id: 'paint_decor',
        phase: isAr ? 'المرحلة 6: الدهان والتشطيب' : 'Phase 6: Paint & Surface Finishes',
        category: 'finishes',
        desc: isAr ? 'دهانات ديكورية فخمة (ستوكو / كارينيا / سابلي)' : 'Decorative stucco / Sablé / Carénia texture paint',
        qty: decorPaintLiters,
        unit: p.paint_wall_decor_L.unit,
        unitPrice: p.paint_wall_decor_L.price,
        total: decorPaintLiters * p.paint_wall_decor_L.price
      });
    }

    // Carpentry
    const doorPrice = isDecorated ? p.door_interior_luxury.price : p.door_interior_std.price;
    items.push({
      id: 'interior_doors',
      phase: isAr ? 'المرحلة 7: الأبواب والنوافذ' : 'Phase 7: Doors & Windows (Menuiserie)',
      category: 'finishes',
      desc: isDecorated ? (isAr ? 'أبواب خشبية راقية ذات جودة عالية' : 'Architectural solid-core interior doors') : (isAr ? 'أبواب خشبية داخلية عادية' : 'Standard flush interior wooden doors'),
      qty: interiorDoorsCount,
      unit: 'Unit',
      unitPrice: doorPrice,
      total: interiorDoorsCount * doorPrice
    });

    const windowPrice = isDecorated ? p.window_alu_thermal.price : p.window_alu_std.price;
    items.push({
      id: 'windows',
      phase: isAr ? 'المرحلة 7: الأبواب والنوافذ' : 'Phase 7: Doors & Windows (Menuiserie)',
      category: 'finishes',
      desc: isDecorated ? (isAr ? 'نوافذ ألمنيوم عازل حراري وزجاج مزدوج' : 'Thermal-break double-glazed aluminum windows') : (isAr ? 'نوافذ ألمنيوم بيضاء عادية' : 'Standard white aluminum glazed windows'),
      qty: windowsCount,
      unit: 'Unit',
      unitPrice: windowPrice,
      total: windowsCount * windowPrice
    });

    items.push({
      id: 'exterior_doors',
      phase: isAr ? 'المرحلة 7: الأبواب والنوافذ' : 'Phase 7: Doors & Windows (Menuiserie)',
      category: 'finishes',
      desc: isAr ? 'باب خارجي رئيسي مصفح للأمان' : 'Heavy armored security exterior entrance door',
      qty: exteriorDoorsCount,
      unit: 'Unit',
      unitPrice: p.door_exterior_armored.price,
      total: exteriorDoorsCount * p.door_exterior_armored.price
    });

    // MEP
    const plumbRate = isDecorated ? p.plumbing_m2_luxury.price : p.plumbing_m2_std.price;
    items.push({
      id: 'plumbing',
      phase: isAr ? 'المرحلة 8: الكهرباء والسباكة' : 'Phase 8: Mechanical & Plumbing (MEP)',
      category: 'mep',
      desc: isDecorated ? (isAr ? 'شبكة سباكة متطورة متعددة الطبقات وتجهيزات صحية فاخرة' : 'Concealed multicouche plumbing & luxury sanitary') : (isAr ? 'شبكة سباكة وتجهيزات صحية قياسية' : 'Standard water pipes & classic sanitary ware'),
      qty: Math.round(totalBuiltArea),
      unit: 'm²',
      unitPrice: plumbRate,
      total: Math.round(totalBuiltArea) * plumbRate
    });

    const elecRate = isDecorated ? p.electrical_m2_luxury.price : p.electrical_m2_std.price;
    items.push({
      id: 'electrical',
      phase: isAr ? 'المرحلة 8: الكهرباء والسباكة' : 'Phase 8: Mechanical & Plumbing (MEP)',
      category: 'mep',
      desc: isDecorated ? (isAr ? 'شبكة كهربائية معمارية، إضاءة مخفية وقواطع ذكية' : 'Architectural electrical, LED coves & modular panels') : (isAr ? 'شبكة كهربائية قياسية وتمديدات إنارة عادية' : 'Standard electrical conduits, wiring & breaker panel'),
      qty: Math.round(totalBuiltArea),
      unit: 'm²',
      unitPrice: elecRate,
      total: Math.round(totalBuiltArea) * elecRate
    });
  }

  // Labor
  items.push({
    id: 'labor_shell',
    phase: isAr ? 'المرحلة 9: أجرة اليد العاملة' : 'Phase 9: Skilled Construction Labor',
    category: 'labor',
    desc: isAr ? 'أجرة البنائين للهيكل الخرساني والنجارة والحديد والصب' : 'Civil masonry, formwork, steel bending & concrete labor',
    qty: Math.round(laborShellM2),
    unit: p.labor_shell_m2.unit,
    unitPrice: p.labor_shell_m2.price,
    total: Math.round(laborShellM2) * p.labor_shell_m2.price
  });

  if (!isShell) {
    if (isDecorated && laborDrywallM2 > 0) {
      items.push({
        id: 'labor_drywall',
        phase: isAr ? 'المرحلة 9: أجرة اليد العاملة' : 'Phase 9: Skilled Construction Labor',
        category: 'labor',
        desc: isAr ? 'أجرة تركيب أسقف الجبس والديكور BA13' : 'Specialized BA13 ceiling installation & cove labor',
        qty: Math.round(laborDrywallM2),
        unit: p.labor_drywall_ba13_m2.unit,
        unitPrice: p.labor_drywall_ba13_m2.price,
        total: Math.round(laborDrywallM2) * p.labor_drywall_ba13_m2.price
      });
    }

    items.push({
      id: 'labor_plaster',
      phase: isAr ? 'المرحلة 9: أجرة اليد العاملة' : 'Phase 9: Skilled Construction Labor',
      category: 'labor',
      desc: isAr ? 'أجرة اللياسة والجبس للجدران' : 'Wall plastering & rendering labor',
      qty: Math.round(laborPlasterM2),
      unit: p.labor_plaster_std_m2.unit,
      unitPrice: p.labor_plaster_std_m2.price,
      total: Math.round(laborPlasterM2) * p.labor_plaster_std_m2.price
    });

    items.push({
      id: 'labor_tiling',
      phase: isAr ? 'المرحلة 9: أجرة اليد العاملة' : 'Phase 9: Skilled Construction Labor',
      category: 'labor',
      desc: isAr ? 'أجرة تبليط الأرضيات والحوائط' : 'Floor and wall ceramic tiling labor',
      qty: Math.round(laborTilingM2),
      unit: p.labor_tiling_m2.unit,
      unitPrice: p.labor_tiling_m2.price,
      total: Math.round(laborTilingM2) * p.labor_tiling_m2.price
    });

    const paintLaborPrice = isDecorated ? p.labor_painting_decor_m2.price : p.labor_painting_std_m2.price;
    items.push({
      id: 'labor_painting',
      phase: isAr ? 'المرحلة 9: أجرة اليد العاملة' : 'Phase 9: Skilled Construction Labor',
      category: 'labor',
      desc: isDecorated ? (isAr ? 'أجرة الدهان المعماري والديكوري الراقي' : 'Master painter decorative coating & stucco labor') : (isAr ? 'أجرة الدهان الداخلي العادي' : 'Standard interior wall painting labor'),
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

  // Specific Material Total Costs
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
// 6. CURRENCY FORMATTING
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
// 7. APPLICATION RENDERER
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
  
  // Hero summary
  document.getElementById('heroCementTons').innerText = `${data.cementTonnes.toFixed(1)} T (${data.cementBags} ${isAr ? 'كيس' : 'bags'})`;
  document.getElementById('heroSteelTons').innerText = `${data.steelTonnes.toFixed(2)} T (${Math.round(data.steelQuintals)} Qx)`;
  document.getElementById('heroBricksCount').innerText = `${data.totalBricks.toLocaleString()} ${isAr ? 'حبة' : 'pcs'}`;
  document.getElementById('heroAggregates').innerText = `${Math.round(data.sandVol + data.gravelVol)} m³`;

  // 2. Section 1 Inputs sync
  document.getElementById('labelLandAreaVal').innerText = `${state.landArea} m²`;
  document.getElementById('labelFootprintVal').innerText = `${state.footprintArea} m²`;
  document.getElementById('calcYardAreaVal').innerText = `${data.yardArea} m²`;
  document.getElementById('calcYardPercentVal').innerText = `(${((data.yardArea / state.landArea) * 100).toFixed(0)}% ${isAr ? 'فراغ' : 'open'})`;
  
  const floorLabels = isAr ? {
    1: 'طابق أرضي فقط (RDC)',
    2: 'طابق أرضي + 1 (R+1)',
    3: 'طابق أرضي + 2 (R+2)',
    4: 'طابق أرضي + 3 (R+3)',
    5: 'طابق أرضي + 4 (R+4)'
  } : {
    1: 'Ground Only (RDC)',
    2: 'RDC + 1 Floor (R+1)',
    3: 'RDC + 2 Floors (R+2)',
    4: 'RDC + 3 Floors (R+3)',
    5: 'RDC + 4 Floors (R+4)'
  };
  document.getElementById('labelFloorsVal').innerText = floorLabels[state.floorsCount] || `${state.floorsCount} Floors`;

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
  document.getElementById('calcCementBags').innerText = `${data.cementBags.toLocaleString()} ${isAr ? 'كيس' : 'Bags'}`;
  document.getElementById('calcCementUnitPrice').innerText = getConvertedUnitPrice(state.prices.cement_bag.price);
  document.getElementById('calcCementTotalCost').innerText = formatCurrency(data.cementCost);

  document.getElementById('calcSteelTonnes').innerText = `${data.steelTonnes.toFixed(2)} ${isAr ? 'طن' : 'Tonnes'}`;
  document.getElementById('calcSteelQuintals').innerText = `${Math.round(data.steelQuintals).toLocaleString()} ${isAr ? 'قنطار' : 'Qx'}`;
  document.getElementById('calcSteelUnitPrice').innerText = getConvertedUnitPrice(state.prices.steel_quintal.price);
  document.getElementById('calcSteelTotalCost').innerText = formatCurrency(data.steelCost);

  document.getElementById('calcTotalBricks').innerText = `${data.totalBricks.toLocaleString()} ${isAr ? 'حبة' : 'Pieces'}`;
  document.getElementById('calcBricks12Count').innerText = `${data.bricks12Count.toLocaleString()} ${isAr ? 'حبة' : 'pcs'}`;
  document.getElementById('calcBricks8Count').innerText = `${data.bricks8Count.toLocaleString()} ${isAr ? 'حبة' : 'pcs'}`;
  document.getElementById('calcBricksTotalCost').innerText = formatCurrency(data.bricksCost);

  document.getElementById('calcSandVol').innerText = `${Math.round(data.sandVol)} m³`;
  document.getElementById('calcSandTrucks').innerText = `~${data.sandTrucks} ${isAr ? 'شاحنات' : 'Trucks'}`;
  document.getElementById('calcSandUnitPrice').innerText = getConvertedUnitPrice(state.prices.sand_m3.price);
  document.getElementById('calcSandTotalCost').innerText = formatCurrency(data.sandCost);

  document.getElementById('calcGravelVol').innerText = `${Math.round(data.gravelVol)} m³`;
  document.getElementById('calcGravelTrucks').innerText = `~${data.gravelTrucks} ${isAr ? 'شاحنات' : 'Trucks'}`;
  document.getElementById('calcGravelUnitPrice').innerText = getConvertedUnitPrice(state.prices.gravel_m3.price);
  document.getElementById('calcGravelTotalCost').innerText = formatCurrency(data.gravelCost);

  document.getElementById('calcHourdisCount').innerText = `${data.hourdisCount.toLocaleString()} ${isAr ? 'حبة هوردي' : 'Pieces'}`;
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

  // 8. Update Price Manager Catalog (Tab 3)
  renderPricesGrid();

  // 9. Update Formal Printable Report (Tab 4)
  renderFormalReport(data);

  // 10. Update Chart.js
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
      <div class="bg-archi-navy border border-archi-border rounded-xl p-3.5 hover:border-archi-orange transition">
        <div class="flex items-center justify-between cursor-pointer" onclick="togglePhaseDetails('phase-sub-${idx}')">
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-md bg-archi-orange/20 text-archi-orange font-mono text-xs font-bold flex items-center justify-center">
              ${idx + 1}
            </span>
            <div>
              <span class="font-bold text-sm text-white">${phase.name}</span>
              <span class="text-[11px] text-slate-400 block">${phase.items.length} ${isAr ? 'عناصر وبنود متضمنة' : 'materials & items included'}</span>
            </div>
          </div>
          <div class="text-right">
            <span class="font-heading font-black text-sm text-archi-orange font-mono block">${formatCurrency(phase.total)}</span>
            <span class="text-[10px] text-slate-500">${percent}%</span>
          </div>
        </div>

        <div id="phase-sub-${idx}" class="hidden mt-3 pt-3 border-t border-archi-border text-xs space-y-1.5">
          ${phase.items.map(it => `
            <div class="flex items-center justify-between text-slate-300 py-1 px-2 rounded hover:bg-archi-card">
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
      structure: '<span class="bg-archi-blue/20 text-archi-blue px-2 py-0.5 rounded text-[10px] font-bold">Structure</span>',
      masonry: '<span class="bg-archi-orange/20 text-archi-orange px-2 py-0.5 rounded text-[10px] font-bold">Masonry</span>',
      finishes: '<span class="bg-archi-pink/20 text-archi-pink px-2 py-0.5 rounded text-[10px] font-bold">Finishes</span>',
      mep: '<span class="bg-archi-yellow/20 text-archi-yellow px-2 py-0.5 rounded text-[10px] font-bold">MEP</span>',
      labor: '<span class="bg-archi-green/20 text-archi-green px-2 py-0.5 rounded text-[10px] font-bold">Labor</span>'
    }[item.category] || '';

    return `
      <tr class="hover:bg-archi-border/40 transition">
        <td class="py-2.5 px-3.5 text-slate-500 font-mono">${index + 1}</td>
        <td class="py-2.5 px-3.5">${categoryBadge}</td>
        <td class="py-2.5 px-3.5 text-slate-200 font-medium">
          <div>${item.desc}</div>
          <span class="text-[10px] text-slate-500">${item.phase}</span>
        </td>
        <td class="py-2.5 px-3.5 text-right font-mono font-bold text-white">${item.qty.toLocaleString()}</td>
        <td class="py-2.5 px-3.5 text-center text-slate-400 text-[11px]">${item.unit}</td>
        <td class="py-2.5 px-3.5 text-right font-mono text-slate-300">${getConvertedUnitPrice(item.unitPrice)}</td>
        <td class="py-2.5 px-3.5 text-right font-mono font-bold text-archi-orange">${formatCurrency(item.total)}</td>
      </tr>
    `;
  }).join('');

  document.getElementById('boqGrandTotal').innerText = formatCurrency(data.totalCost);
}

// Render Price Reference Grid (Tab 3)
function renderPricesGrid() {
  const container = document.getElementById('pricesGrid');
  if (!container) return;

  container.innerHTML = Object.entries(state.prices).map(([key, item]) => {
    return `
      <div class="bg-archi-navy border border-archi-border rounded-xl p-3.5 hover:border-archi-orange transition">
        <div class="flex items-start justify-between mb-2">
          <span class="font-bold text-xs text-white leading-tight">${item.name}</span>
          <span class="text-[10px] text-slate-400 uppercase bg-archi-card border border-archi-border px-1.5 py-0.5 rounded">${item.unit}</span>
        </div>
        <div class="flex items-center gap-2 mt-2">
          <div class="flex-1 relative">
            <input type="number" 
                   data-catalog-key="${key}"
                   value="${item.price}" 
                   class="catalog-price-input w-full bg-archi-card border border-archi-border rounded-lg py-1.5 px-3 text-xs font-mono font-bold text-archi-yellow focus:outline-none focus:border-archi-orange">
            <span class="absolute right-2.5 top-2 text-[10px] text-slate-500 font-bold">DZD</span>
          </div>
          <button onclick="restoreSinglePrice('${key}')" title="Reset this item" class="p-2 text-slate-500 hover:text-archi-orange transition">
            <i class="fa-solid fa-arrow-rotate-left text-xs"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.catalog-price-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const key = e.target.getAttribute('data-catalog-key');
      const val = parseFloat(e.target.value) || 0;
      if (state.prices[key]) {
        state.prices[key].price = val;
        renderApp();
      }
    });
  });
}

function restoreSinglePrice(key) {
  if (DEFAULT_PRICES_DZD[key]) {
    state.prices[key].price = DEFAULT_PRICES_DZD[key].price;
    renderApp();
  }
}

function restoreAllDefaultPrices() {
  if (confirm(state.lang === 'ar' ? 'هل تريد استعادة جميع أسعار السوق المرجعية الأصلية؟' : 'Reset all material prices to default Algerian market rates?')) {
    state.prices = JSON.parse(JSON.stringify(DEFAULT_PRICES_DZD));
    localStorage.removeItem('baticalc_custom_prices');
    renderApp();
  }
}

// Render Formal Printable Report (Tab 4)
function renderFormalReport(data) {
  const isAr = state.lang === 'ar';
  const dateStr = new Date().toLocaleDateString(isAr ? 'ar-DZ' : 'en-US', {
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
    standard: isAr ? 'منزل سكني عادي (Standard Residential)' : 'Standard Residential House',
    decorated: isAr ? 'منزل مزخرف وعصري (Architectural Luxury)' : 'Architectural Decorated House',
    shell: isAr ? 'هيكل خرساني فقط (Grey Shell Only)' : 'Grey Structural Shell Only'
  };
  document.getElementById('repFinishTier').innerText = finishNames[state.finishQuality];
  document.getElementById('repFoundation').innerText = state.foundationType === 'isolated' ? (isAr ? 'أساسات منفصلة وشريطية' : 'Isolated Footings') : (isAr ? 'حصيرة عامة (Radier)' : 'Raft Slab');
  document.getElementById('repCurrency').innerText = state.currency === 'USD' ? 'United States Dollar (USD)' : 'Algerian Dinar (DZD)';
  document.getElementById('repDuration').innerText = `${data.estimatedDurationMonths} - ${data.estimatedDurationMonths + 2} ${isAr ? 'أشهر' : 'Months'}`;

  // Key materials schedule
  document.getElementById('repCementDetail').innerText = `${data.cementBags.toLocaleString()} Bags (${data.cementTonnes.toFixed(1)} T)`;
  document.getElementById('repSteelDetail').innerText = `${Math.round(data.steelQuintals).toLocaleString()} Qx (${data.steelTonnes.toFixed(2)} T)`;
  document.getElementById('repBricksDetail').innerText = `${data.totalBricks.toLocaleString()} Bricks`;
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
      '#0284c7', '#38bdf8', '#f97316', '#e11d48', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6'
    ];
  } else {
    labels = isAr 
      ? ['الهيكل الخرساني والأساسات', 'البناء والآجر والأسقف', 'التشطيبات والدهان', 'الكهرباء والسباكة', 'أجرة اليد العاملة']
      : ['Structural Concrete', 'Masonry & Envelopes', 'Interior Finishes', 'MEP (Plumbing/Elec)', 'Skilled Labor'];
    values = [
      data.categories.structure,
      data.categories.masonry,
      data.categories.finishes,
      data.categories.mep,
      data.categories.labor
    ].map(v => state.currency === 'USD' ? Math.round(v / state.exchangeRate) : v);
    bgColors = ['#0284c7', '#f97316', '#e11d48', '#f59e0b', '#10b981'];
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
        borderColor: '#0b132b',
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
// 8. EVENT BINDINGS & INTERACTIONS
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {

  // A. Language Switcher
  document.getElementById('langEN')?.addEventListener('click', () => setLanguage('en'));
  document.getElementById('langAR')?.addEventListener('click', () => setLanguage('ar'));

  // B. Sliders & Dimension inputs
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

  // C. Floor Buttons
  const floorButtons = document.querySelectorAll('.floor-btn');
  floorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      floorButtons.forEach(b => {
        b.classList.remove('active-floor-btn');
        b.classList.add('bg-archi-navy', 'text-slate-400');
      });
      btn.classList.add('active-floor-btn');
      btn.classList.remove('bg-archi-navy', 'text-slate-400');
      state.floorsCount = parseInt(btn.getAttribute('data-floors'));
      renderApp();
    });
  });

  // D. Finish Tier Cards
  const finishCards = document.querySelectorAll('.finish-card');
  finishCards.forEach(card => {
    card.addEventListener('click', () => {
      finishCards.forEach(c => {
        c.classList.remove('active-finish-card', 'border-archi-orange');
        c.classList.add('border-archi-border');
        c.querySelector('input[type="radio"]').checked = false;
      });
      card.classList.add('active-finish-card', 'border-archi-orange');
      card.classList.remove('border-archi-border');
      card.querySelector('input[type="radio"]').checked = true;
      state.finishQuality = card.getAttribute('data-tier');
      renderApp();
    });
  });

  // E. Direct Inline Material Price Inputs (Section 3)
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

  // F. Checkboxes & Selects
  document.getElementById('checkBasement').addEventListener('change', (e) => {
    state.hasBasement = e.target.checked;
    renderApp();
  });
  document.getElementById('checkOverhang').addEventListener('change', (e) => {
    state.hasOverhang = e.target.checked;
    renderApp();
  });
  document.getElementById('selectFoundationType').addEventListener('change', (e) => {
    state.foundationType = e.target.value;
    renderApp();
  });
  document.getElementById('selectContingency').addEventListener('change', (e) => {
    state.contingencyRate = parseFloat(e.target.value);
    renderApp();
  });

  // G. Currency Buttons
  const btnDZD = document.getElementById('currDZD');
  const btnUSD = document.getElementById('currUSD');

  btnDZD.addEventListener('click', () => {
    btnDZD.classList.add('active-currency');
    btnUSD.classList.remove('active-currency');
    state.currency = 'DZD';
    renderApp();
  });

  btnUSD.addEventListener('click', () => {
    btnUSD.classList.add('active-currency');
    btnDZD.classList.remove('active-currency');
    state.currency = 'USD';
    renderApp();
  });

  // H. Exchange rate input
  document.getElementById('inputExchangeRate')?.addEventListener('change', (e) => {
    state.exchangeRate = Math.max(10, parseFloat(e.target.value) || 135);
    renderApp();
  });

  // I. Tabs navigation
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      navTabs.forEach(t => t.classList.remove('active-tab'));
      tab.classList.add('active-tab');

      const targetTab = tab.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      document.getElementById(targetTab)?.classList.remove('hidden');
    });
  });

  // J. BOQ filter buttons
  const boqFilters = document.querySelectorAll('.boq-filter-btn');
  boqFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      boqFilters.forEach(b => {
        b.classList.remove('active-filter');
        b.classList.add('bg-archi-navy', 'text-slate-400');
      });
      btn.classList.add('active-filter');
      btn.classList.remove('bg-archi-navy', 'text-slate-400');
      state.activeBoqFilter = btn.getAttribute('data-filter');
      renderApp();
    });
  });

  // K. Chart toggles
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

  // L. Presets menu
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
          colors: ['#e11d48', '#f97316', '#f59e0b', '#10b981', '#0284c7']
        });
      }
    });
  });

  // M. Export PDF / Print
  document.getElementById('printReportBtn')?.addEventListener('click', () => {
    navTabs.forEach(t => {
      if (t.getAttribute('data-tab') === 'tab-report') {
        t.click();
      }
    });
    setTimeout(() => {
      window.print();
    }, 400);
  });

  // N. Save to LocalStorage
  document.getElementById('savePricesBtn')?.addEventListener('click', () => {
    try {
      localStorage.setItem('baticalc_custom_prices', JSON.stringify(state.prices));
      alert(state.lang === 'ar' ? 'تم حفظ الأسعار المخصصة بنجاح في متصفحك!' : 'Custom prices successfully saved to browser!');
    } catch (e) {
      console.error(e);
    }
  });

  // O. Copy BOQ
  document.getElementById('copyBoqBtn')?.addEventListener('click', () => {
    const data = calculateProjectEstimates();
    const isAr = state.lang === 'ar';
    let text = isAr ? `حاسبة تكاليف البناء BatiCalc Pro\n` : `BatiCalc Pro - Construction Estimate Summary\n`;
    text += `University of Larbi Ben M'hidi - Oum El Bouaghi | Club Archi Art\n\n`;
    text += `${isAr ? 'المساحة المبنية' : 'Built Area'}: ${Math.round(data.totalBuiltArea)} m² | ${isAr ? 'الميزانية الإجمالية' : 'Total Budget'}: ${formatCurrency(data.totalCost)}\n\n`;
    text += `- ${isAr ? 'الإسمنت' : 'Cement'}: ${data.cementBags} bags (${data.cementTonnes.toFixed(1)} T) = ${formatCurrency(data.cementCost)}\n`;
    text += `- ${isAr ? 'حديد التسليح' : 'Rebar Steel'}: ${Math.round(data.steelQuintals)} Qx (${data.steelTonnes.toFixed(2)} T) = ${formatCurrency(data.steelCost)}\n`;
    text += `- ${isAr ? 'الآجر الأحمر' : 'Clay Bricks'}: ${data.totalBricks} pcs = ${formatCurrency(data.bricksCost)}\n`;
    text += `- ${isAr ? 'الرمل' : 'Sand'}: ${Math.round(data.sandVol)} m³ = ${formatCurrency(data.sandCost)}\n`;
    text += `- ${isAr ? 'الحصى' : 'Gravel'}: ${Math.round(data.gravelVol)} m³ = ${formatCurrency(data.gravelCost)}\n`;

    navigator.clipboard.writeText(text).then(() => {
      alert(isAr ? 'تم نسخ ملخص الكميات والتكاليف إلى الحافظة بنجاح!' : 'Summary copied to clipboard!');
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
      ? (isAr ? 'طي التفاصيل' : 'Collapse Details') 
      : (isAr ? 'عرض التفاصيل' : 'Expand Details');
  });

  // Boot app
  renderApp();
});

// Helper: Currency preset
function setExchangeRate(val) {
  state.exchangeRate = val;
  const input = document.getElementById('inputExchangeRate');
  if (input) input.value = val;
  renderApp();
}

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
      card.classList.add('active-finish-card', 'border-archi-orange');
      card.querySelector('input[type="radio"]').checked = true;
    } else {
      card.classList.remove('active-finish-card', 'border-archi-orange');
      card.querySelector('input[type="radio"]').checked = false;
    }
  });

  renderApp();
}
