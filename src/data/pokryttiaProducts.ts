// =====================================================================
// POKRYTTIA (SURGICAL DRAPES) — Data Model & Grouping
// =====================================================================

// ======================== TYPES ========================

export interface PokryttiaVariant {
  sku: string;
  fullName: string;
  size: string;
  material: string;
  sterile: boolean;
  hasAdhesive: boolean;
  hasBag: boolean;
  hasFilm: boolean;
}

export interface PokryttiaGroup {
  id: string;
  name: string;
  description: string;
  specialty: string;
  variants: PokryttiaVariant[];
  availableSizes: string[];
  availableMaterials: string[];
}

// ======================== RAW SKU DATA ========================

const rawProducts: Array<{ sku: string; name: string; specialty: string }> = [
  // ---- Покриття для офтальмології ----
  { sku: "1210711", name: "Покриття операційне для офтальмології №11 «Славна®» (покриття операційне 60см х 40см з адгезивним операційним отвором діаметром 6 см та мішком приймальним (спанбонд - 30 г/м2)) стерильне", specialty: "ophthalmology" },
  { sku: "1210724", name: "Покриття операційне для офтальмології №24 «Славна®» (покриття операційне 100см х 80см з адгезивним операційним отвором діаметром 8 см (з операційною плівкою) та мішком приймальним (СМС - 35 г/м2)) стерильне", specialty: "ophthalmology" },
  { sku: "1210729", name: "Покриття операційне для офтальмології №29 «Славна®» (покриття операційне 120см х 80см з адгезивним операційним отвором діаметром 7 см (з операційною плівкою) та мішком приймальним (ламінований спанбонд - 45 г/м2)) стерильне", specialty: "ophthalmology" },
  { sku: "1210701", name: "Покриття операційне для офтальмології №1 «Славна®» (покриття операційне 60см х 40см з адгезивним операційним отвором діаметром 6 см (СМС - 35 г/м2)) стерильне", specialty: "ophthalmology" },

  // ---- Покриття для стоматології ----
  { sku: "1410001", name: "Покриття операційне для стоматології №1 «Славна®» (покриття операційне 240см х 160см з адгезивним операційним полем 15см х 10см та поглинаючою зоною (СМС - 35 г/м2)) стерильне", specialty: "stomatology" },
  { sku: "1410003", name: "Покриття операційне для стоматології №2 «Славна®» (покриття операційне 120см х 80см з адгезивним трикутним операційним полем 15см х 15см х 15см (СМС - 35 г/м2)) стерильне", specialty: "stomatology" },

  // ---- Покриття для абдомінальної хірургії ----
  { sku: "1210203", name: "Покриття операційне для лапароскопії №1 «Славна®» (покриття операційне 300см х 160см - на дугу, з адгезивним операційним полем 30см х 25см (СМС - 35 г/м2)) стерильне", specialty: "abdominal" },
  { sku: "1210204", name: "Покриття операційне для лапароскопії №2 «Славна®» (покриття операційне 260см х 160см - на дугу, із захисним покриттям для ніг, адгезивними операційними полями: абдомінальним 30см х 25см і перінеальним 20см х 15см (зі шторкою), поглинаючою зоною та двома кишенями бічними 40см х 30см (СМС - 35 г/м2)) стерильне", specialty: "abdominal" },
  { sku: "1210202", name: "Покриття операційне для лапаротомії №2 «Славна®» (покриття операційне 200см х 160см - на дугу, з регулюючим адгезивним операційним полем 30см х 20см та поглинаючими зонами (СМС - 35 г/м2)) стерильне", specialty: "abdominal" },

  // ---- Покриття для гінекологічних операцій ----
  { sku: "1130202", name: "Покриття операційне для гінекологічних операцій (гістероскопія) №2 «Славна®» (покриття операційне 270см х 160см - на дугу, із захисним покриттям для ніг, адгезивним операційним полем 15см х 15см та фартухом з мішком збиральним 50см х 40см (конусної форми з фільтром) (СМС - 35 г/м2)) стерильне", specialty: "gynecology" },

  // ---- Покриття для ортопедії та травматології ----
  { sku: "1210503", name: "Покриття операційне для ортопедії (стегнове) №3 «Славна®» (покриття операційне 260см х 160см з U-подібним адгезивним операційним полем 100см х 20см та поглинаючою зоною (по короткій стороні) (СМС - 35 г/м2)) стерильне", specialty: "orthopedics" },
  { sku: "1210505", name: "Покриття операційне для артроскопії №2 «Славна®» (покриття операційне 300см х 160см з гумовою еластичною манжетою (з отвором діаметром 10 см) та поглинаючою зоною (СМС - 35 г/м2)) стерильне", specialty: "orthopedics" },

  // ---- Покриття для урології ----
  { sku: "1210802", name: "Покриття операційне для урології №2 «Славна®» (покриття операційне 260см х 160см - на дугу, із захисним покриттям для ніг, адгезивним абдомінальним операційним полем діаметром 7,5 см, двома перінеальними полями діаметром 5 см, пальцевим чохлом та мішком збиральним 50см х 40см (конусної форми з фільтром) (СМС - 35 г/м2)) стерильне", specialty: "urology" },
  { sku: "1210809", name: "Покриття операційне для урології (перкутанна нефролітотрипсія) №6 «Славна®» (покриття операційне 260см х 240см з адгезивним операційним полем 20см х 15см (з антимікробною операційною плівкою) та мішком збиральним конусної форми 60см х 50см (з відвідною трубою довжиною 130 см) (ламінований спанбонд - 45 г/м2)) стерильне", specialty: "urology" },

  // ---- Покриття для проктології ----
  { sku: "1210901", name: "Покриття операційне для проктології №1 «Славна®» (покриття операційне 300см х 160см - на дугу, із захисним покриттям для ніг, адгезивним ректальним операційним полем 15см х 12см, поглинаючою зоною та додатковим кріпленням (СМС - 35 г/м2)) стерильне", specialty: "proctology" },

  // ---- Загальні покриття (Славна) ----
  { sku: "1211146", name: "Покриття операційне 50см х 50см з адгезивним краєм «Славна®» (ламінований спанбонд - 45 г/м2) стерильне", specialty: "general" },
  { sku: "1210146", name: "Покриття операційне 60см х 50см «Славна®» (СМС - 35 г/м2) стерильне", specialty: "general" },
  { sku: "1210145", name: "Покриття операційне 60см х 50см «Славна®» (спанбонд - 30 г/м2) стерильне", specialty: "general" },
  { sku: "1210141", name: "Покриття операційне 80см х 60см «Славна®» (спанбонд - 30 г/м2) стерильне", specialty: "general" },
  { sku: "1210138", name: "Покриття операційне 80см х 70см «Славна®» (СМС - 35 г/м2) стерильне", specialty: "general" },
  { sku: "1210140", name: "Покриття операційне 80см х 70см «Славна®» (ламінований спанбонд - 45 г/м2) стерильне", specialty: "general" },
  { sku: "1210183", name: "Покриття операційне 100см х 80см «Славна®» (спанбонд - 30 г/м2) стерильне", specialty: "general" },
  { sku: "1210164", name: "Покриття операційне 120см х 80см «Славна®» (ПВХ - 180 г/м2) стерильне", specialty: "general" },
  { sku: "1210131", name: "Покриття операційне 120см х 80см «Славна®» (спанбонд - 30 г/м2) стерильне", specialty: "general" },
  { sku: "1210132", name: "Покриття операційне 120см х 80см «Славна®» (СМС - 35 г/м2) стерильне", specialty: "general" },
  { sku: "1210130", name: "Покриття операційне 140см х 80см «Славна®» (ламінований спанбонд - 45 г/м2) стерильне", specialty: "general" },
  { sku: "1211638", name: "Покриття операційне 140см х 80см «Славна®» (СММС - 35 г/м2) стерильне", specialty: "general" },
  { sku: "1210129", name: "Покриття операційне 140см х 80см «Славна®» (СМС - 35 г/м2) стерильне", specialty: "general" },
  { sku: "1210120", name: "Покриття операційне 200см х 160см «Славна®» (СМС - 35 г/м2) стерильне", specialty: "general" },
  { sku: "1211116", name: "Покриття операційне 200см х 150см з адгезивним краєм (по довгій стороні) «Славна®» (СММС - 35 г/м2) стерильне", specialty: "general" },
  { sku: "1210119", name: "Покриття операційне 200см х 160см «Славна®» (спанбонд - 30 г/м2) стерильне", specialty: "general" },
  { sku: "1210116", name: "Покриття операційне 210см х 120см «Славна®» (спанбонд - 30 г/м2) стерильне", specialty: "general" },
  { sku: "1210118", name: "Покриття операційне 210см х 120см «Славна®» (ламінований спанбонд - 45 г/м2) стерильне", specialty: "general" },
  { sku: "1210117", name: "Покриття операційне 210см х 120см «Славна®» (СМС - 35 г/м2) стерильне", specialty: "general" },
  { sku: "1210111", name: "Покриття операційне 210см х 160см «Славна®» (СМС - 35 г/м2) стерильне", specialty: "general" },
  { sku: "1210112", name: "Покриття операційне 210см х 160см «Славна®» (ламінований спанбонд - 45 г/м2) стерильне", specialty: "general" },
  { sku: "1210110", name: "Покриття операційне 210см х 160см «Славна®» (спанбонд - 30 г/м2) стерильне", specialty: "general" },
  { sku: "1211910", name: "Покриття операційне 210см х 160см «Славна®» (СМС - 45 г/м2) стерильне", specialty: "general" },
  { sku: "1210177", name: "Покриття операційне 210см х 160см «Славна®» (СМС - 30 г/м2) стерильне", specialty: "general" },
  { sku: "1210108", name: "Покриття операційне 240см х 160см «Славна®» (СМС - 35 г/м2) стерильне", specialty: "general" },
  { sku: "1210105", name: "Покриття операційне 260см х 160см «Славна®» (СМС - 35 г/м2) стерильне", specialty: "general" },

  // ---- Загальні покриття (Meditec) ----
  { sku: "007-46-4-1", name: "Покриття операційне. Стерильне. Розмір 210 см х 160 см, матеріал СММС 35 г/м²  Meditec", specialty: "general-meditec" },
  { sku: "007-36-7-1", name: "Покриття операційне. Стерильне. Розмір 100 см х 80 см з адгезивним краєм (по довгій стороні), матеріал СММС 35 г/м²  Meditec", specialty: "general-meditec" },
  { sku: "007-36-6-1", name: "Покриття операційне. Стерильне. Розмір 160 см х 160 см з адгезивним краєм, матеріал СММС 35 г/м²  Meditec", specialty: "general-meditec" },
  { sku: "007-36-5-1", name: "Покриття операційне. Стерильне. Розмір 180 см х 160 см з адгезивним краєм (по довгій стороні), матеріал СММС 35 г/м²  Meditec", specialty: "general-meditec" },
  { sku: "007-36-4-1", name: "Покриття операційне. Стерильне. Розмір 240 см х 160 см з адгезивним краєм (по довгій стороні), матеріал СММС 35 г/м²  Meditec", specialty: "general-meditec" },
  { sku: "007-36-16-1", name: "Стрічка адгезивна. Стерильна. Розмір 50 см х 5 см, матеріал СММС 35 г/м²  Meditec", specialty: "general-meditec" },
];

// ======================== PARSER ========================

interface ParsedPokryttia {
  sku: string;
  fullName: string;
  size: string;
  material: string;
  sterile: boolean;
  hasAdhesive: boolean;
  hasBag: boolean;
  hasFilm: boolean;
  specialty: string;
}

function parseMaterial(name: string): string {
  // Match patterns like (СМС - 35 г/м2), (спанбонд - 30 г/м2), etc.
  const m = name.match(/\(?((?:ламінований\s+)?(?:спанбонд|СМС|СММС|CММС|CМС|ПВХ))\s*-?\s*(\d+)\s*г\/м[²2]\)?/i);
  if (m) return `${m[1]} ${m[2]} г/м²`;
  // Meditec format
  const m2 = name.match(/матеріал\s+(СММС|СМС|спанбонд)\s+(\d+)\s*г\/м[²2*]/i);
  if (m2) return `${m2[1]} ${m2[2]} г/м²`;
  return '';
}

function parseSize(name: string): string {
  // "Розмір 210 см х 160 см" or "60см х 40см" or "260см х 160см"
  const m = name.match(/(\d+)\s*см\s*[хx]\s*(\d+)\s*см/);
  if (m) return `${m[1]}×${m[2]} см`;
  return '';
}

function parsePokryttia(raw: { sku: string; name: string; specialty: string }): ParsedPokryttia {
  const { sku, name, specialty } = raw;

  const hasAdhesive = /адгезивн/i.test(name);
  const hasBag = /мішк/i.test(name);
  const hasFilm = /плівк/i.test(name);
  const sterile = /стерильн/i.test(name);

  return {
    sku,
    fullName: name,
    size: parseSize(name),
    material: parseMaterial(name),
    sterile,
    hasAdhesive,
    hasBag,
    hasFilm,
    specialty,
  };
}

// ======================== SPECIALTY CONFIG ========================

const specialtyConfig: Record<string, { name: string; description: string; order: number }> = {
  ophthalmology: {
    name: 'Покриття для офтальмології',
    description: 'Операційні покриття для офтальмологічних процедур з адгезивними отворами та приймальними мішками',
    order: 1,
  },
  stomatology: {
    name: 'Покриття для стоматології',
    description: 'Операційні покриття для стоматологічних операцій з адгезивними полями та поглинаючими зонами',
    order: 2,
  },
  abdominal: {
    name: 'Покриття для абдомінальної хірургії',
    description: 'Покриття для лапароскопії та лапаротомії з адгезивними полями, поглинаючими зонами та захисним покриттям',
    order: 3,
  },
  gynecology: {
    name: 'Покриття для гінекологічних операцій',
    description: 'Покриття для гістероскопії та інших гінекологічних процедур із збиральними мішками та фільтрами',
    order: 4,
  },
  orthopedics: {
    name: 'Покриття для ортопедії та травматології',
    description: 'Покриття для ортопедичних та артроскопічних операцій з U-подібними полями та еластичними манжетами',
    order: 5,
  },
  urology: {
    name: 'Покриття для урології',
    description: 'Покриття для урологічних процедур з множинними операційними полями та збиральними мішками',
    order: 6,
  },
  proctology: {
    name: 'Покриття для проктології',
    description: 'Операційні покриття для проктологічних процедур із захисним покриттям та додатковим кріпленням',
    order: 7,
  },
  general: {
    name: 'Загальні покриття «Славна®»',
    description: 'Універсальні операційні покриття різних розмірів із різних матеріалів — спанбонд, СМС, ламінований спанбонд',
    order: 8,
  },
  'general-meditec': {
    name: 'Загальні покриття Meditec',
    description: 'Операційні покриття та адгезивні стрічки Meditec з матеріалу СММС',
    order: 9,
  },
};

// ======================== GROUPING ========================

function sortSizes(sizes: string[]): string[] {
  return [...sizes].sort((a, b) => {
    const parseVal = (s: string) => parseFloat(s.replace(',', '.').replace(/[^\d.]/g, '')) || 0;
    const aParts = a.split('×').map(parseVal);
    const bParts = b.split('×').map(parseVal);
    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const diff = (aParts[i] || 0) - (bParts[i] || 0);
      if (diff !== 0) return diff;
    }
    return 0;
  });
}

function buildPokryttiaGroups(raws: Array<{ sku: string; name: string; specialty: string }>): PokryttiaGroup[] {
  const parsed = raws.map(parsePokryttia);

  // Deduplicate by SKU
  const seen = new Set<string>();
  const unique = parsed.filter(p => {
    if (seen.has(p.sku)) return false;
    seen.add(p.sku);
    return true;
  });

  // Group by specialty
  const groupMap = new Map<string, ParsedPokryttia[]>();
  for (const p of unique) {
    if (!groupMap.has(p.specialty)) groupMap.set(p.specialty, []);
    groupMap.get(p.specialty)!.push(p);
  }

  const groups: PokryttiaGroup[] = [];
  Array.from(groupMap.entries()).forEach(([specialty, items]) => {
    const config = specialtyConfig[specialty];
    if (!config) return;

    const variants: PokryttiaVariant[] = items.map(p => ({
      sku: p.sku,
      fullName: p.fullName,
      size: p.size,
      material: p.material,
      sterile: p.sterile,
      hasAdhesive: p.hasAdhesive,
      hasBag: p.hasBag,
      hasFilm: p.hasFilm,
    }));

    const sizes = sortSizes(Array.from(new Set(items.map(p => p.size).filter(Boolean))));
    const materials = Array.from(new Set(items.map(p => p.material).filter(Boolean))).sort();

    groups.push({
      id: specialty,
      name: config.name,
      description: config.description,
      specialty,
      variants,
      availableSizes: sizes,
      availableMaterials: materials,
    });
  });

  groups.sort((a, b) => {
    const aOrder = specialtyConfig[a.specialty]?.order ?? 99;
    const bOrder = specialtyConfig[b.specialty]?.order ?? 99;
    return aOrder - bOrder;
  });

  return groups;
}

// ======================== EXPORT ========================

export const pokryttiaGroups = buildPokryttiaGroups(rawProducts);
