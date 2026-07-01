/** Fábrica de páginas locais — georeferenciação por concelho */

export interface GeoCity {
  name: string;
  slug: string;
  district: "Braga" | "Porto" | "Viana do Castelo";
  lat: number;
  lng: number;
  nearby: string[];
}

export const geoCoverage = {
  radiusKm: 65,
  radiusMeters: 65000,
  description: "Cobertura de serralharia desde Guimarães e Vila Nova de Sande até Porto, Maia e Viana do Castelo",
};

export const geoDistricts = [
  {
    id: "braga",
    name: "Distrito de Braga",
    tagline: "Minho interior — Guimarães, Braga, Famalicão, Fafe",
    cities: [
      "Guimarães",
      "Braga",
      "Vila Nova de Famalicão",
      "Fafe",
      "Vizela",
      "Felgueiras",
      "Barcelos",
      "Vila Verde",
      "Amares",
      "Póvoa de Lanhoso",
      "Vieira do Minho",
      "Terras de Bouro",
      "Vila Nova de Sande",
    ],
  },
  {
    id: "porto",
    name: "Distrito do Porto",
    tagline: "Área metropolitana do Porto — deslocação e montagem",
    cities: ["Porto", "Maia", "Gondomar", "Valongo", "Santo Tirso", "Trofa", "Paredes", "Penafiel"],
  },
  {
    id: "viana",
    name: "Distrito de Viana do Castelo",
    tagline: "Litoral norte — Esposende e Viana",
    cities: ["Viana do Castelo", "Esposende", "Caminha", "Vila Nova de Cerveira"],
  },
] as const;

/** Concelhos com coordenadas GPS para schema.org e georeferenciação */
export const geoCities: GeoCity[] = [
  { name: "Guimarães", slug: "guimaraes", district: "Braga", lat: 41.4445, lng: -8.2962, nearby: ["Vila Nova de Sande", "Creixomil", "Serzedo", "Vizela", "Felgueiras"] },
  { name: "Braga", slug: "braga", district: "Braga", lat: 41.5454, lng: -8.4265, nearby: ["Famalicão", "Vila Verde", "Amares", "Esposende", "Guimarães"] },
  { name: "Vila Nova de Famalicão", slug: "famalicao", district: "Braga", lat: 41.4078, lng: -8.5197, nearby: ["Braga", "Barcelos", "Vila Nova de Sande", "Trofa", "Santo Tirso"] },
  { name: "Fafe", slug: "fafe", district: "Braga", lat: 41.4542, lng: -8.1681, nearby: ["Guimarães", "Felgueiras", "Cabeceiras de Basto", "Vizela"] },
  { name: "Vizela", slug: "vizela", district: "Braga", lat: 41.3794, lng: -8.3089, nearby: ["Guimarães", "Fafe", "Felgueiras", "Santo Tirso"] },
  { name: "Felgueiras", slug: "felgueiras", district: "Braga", lat: 41.3691, lng: -8.194, nearby: ["Guimarães", "Fafe", "Vizela", "Lousada"] },
  { name: "Barcelos", slug: "barcelos", district: "Braga", lat: 41.5318, lng: -8.615, nearby: ["Braga", "Famalicão", "Esposende", "Viana do Castelo"] },
  { name: "Vila Verde", slug: "vila-verde", district: "Braga", lat: 41.6483, lng: -8.4365, nearby: ["Braga", "Amares", "Póvoa de Lanhoso", "Terras de Bouro"] },
  { name: "Póvoa de Lanhoso", slug: "povo-de-lanhoso", district: "Braga", lat: 41.5781, lng: -8.2819, nearby: ["Braga", "Vila Verde", "Fafe", "Guimarães"] },
  { name: "Vieira do Minho", slug: "vieira-do-minho", district: "Braga", lat: 41.6317, lng: -8.1278, nearby: ["Terras de Bouro", "Amares", "Fafe"] },
  { name: "Amares", slug: "amares", district: "Braga", lat: 41.6331, lng: -8.3492, nearby: ["Braga", "Vila Verde", "Terras de Bouro"] },
  { name: "Terras de Bouro", slug: "terras-de-bouro", district: "Braga", lat: 41.7167, lng: -8.2833, nearby: ["Amares", "Vieira do Minho", "Vila Verde"] },
  { name: "Esposende", slug: "esposende", district: "Braga", lat: 41.5361, lng: -8.782, nearby: ["Barcelos", "Braga", "Viana do Castelo", "Póvoa de Varzim"] },
  { name: "Porto", slug: "porto", district: "Porto", lat: 41.1579, lng: -8.6291, nearby: ["Maia", "Gondomar", "Valongo", "Matosinhos", "Vila Nova de Gaia"] },
  { name: "Maia", slug: "maia", district: "Porto", lat: 41.2354, lng: -8.6199, nearby: ["Porto", "Valongo", "Gondomar", "Trofa", "Santo Tirso"] },
  { name: "Gondomar", slug: "gondomar", district: "Porto", lat: 41.1446, lng: -8.5322, nearby: ["Porto", "Valongo", "Maia", "Vila Nova de Gaia"] },
  { name: "Valongo", slug: "valongo", district: "Porto", lat: 41.1945, lng: -8.4961, nearby: ["Porto", "Gondomar", "Maia", "Paredes"] },
  { name: "Santo Tirso", slug: "santo-tirso", district: "Porto", lat: 41.3431, lng: -8.4768, nearby: ["Trofa", "Famalicão", "Vizela", "Maia"] },
  { name: "Trofa", slug: "trofa", district: "Porto", lat: 41.3384, lng: -8.5603, nearby: ["Santo Tirso", "Maia", "Famalicão", "Vizela"] },
  { name: "Viana do Castelo", slug: "viana-do-castelo", district: "Viana do Castelo", lat: 41.6938, lng: -8.8349, nearby: ["Esposende", "Barcelos", "Caminha", "Ponte de Lima"] },
];

export interface LocationPageConfig {
  slug: string;
  path: string;
  city: string;
  district: string;
  lat: number;
  lng: number;
  service?: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  intro: string;
  servicesHighlight: string[];
  nearbyAreas: string[];
}

function cityPage(c: GeoCity): LocationPageConfig {
  const dist =
    c.district === "Porto"
      ? "área metropolitana do Porto"
      : c.district === "Viana do Castelo"
        ? "litoral norte e Minho"
        : "distrito de Braga e Minho";

  return {
    slug: `serralharia-${c.slug}`,
    path: `/serralharia-${c.slug}`,
    city: c.name,
    district: c.district,
    lat: c.lat,
    lng: c.lng,
    title: `Serralharia em ${c.name} | Inox, Ferro e Vidro — Orçamento Grátis`,
    metaDescription: `Serralharia em ${c.name}: corrimãos inox, portões ferro, grades, escadarias e estruturas metálicas por medida. Deslocação e montagem no ${dist}. Orçamento grátis — 913 255 102.`,
    h1: `Serralharia em ${c.name}`,
    subtitle: `Aço inox, ferro e vidro — fabrico por medida em ${c.name} e arredores`,
    intro: `À procura de serralharia em ${c.name}? A Serralharia Rinos, com oficina em Vila Nova de Sande (Guimarães), serve ${c.name} e todo o ${dist} com fabrico próprio de corrimãos inox, portões em ferro, grades, escadarias, varandins e estruturas metálicas. Deslocamo-nos para medição, orçamento gratuito e montagem chave-na-mão — particulares, obras, hotéis e indústria.`,
    servicesHighlight: [
      `Corrimãos e guardas inox em ${c.name}`,
      `Portões ferro e portões inox`,
      `Escadarias em ferro e aço inox`,
      `Grades, marquises e varandins`,
      `Estruturas metálicas e fachadas inox`,
      `Mobiliário inox para hotelaria e restauração`,
    ],
    nearbyAreas: c.nearby,
  };
}

function serviceCityPage(
  service: string,
  serviceSlug: string,
  c: GeoCity,
  highlights: string[],
): LocationPageConfig {
  const base = cityPage(c);
  return {
    ...base,
    slug: `${serviceSlug}-${c.slug}`,
    path: `/${serviceSlug}-${c.slug}`,
    service,
    title: `${service} em ${c.name} | Fabrico por Medida — Orçamento Grátis`,
    metaDescription: `${service} em ${c.name}: fabrico e montagem por medida pela Serralharia Rinos. Orçamento grátis, resposta em 24h. Tel: 913 255 102.`,
    h1: `${service} em ${c.name}`,
    subtitle: `Fabrico próprio, medição no local e montagem em ${c.name}`,
    intro: `Precisa de ${service.toLowerCase()} em ${c.name}? A Serralharia Rinos fabrica por medida com oficina em Guimarães e deslocação a ${c.name} e concelhos vizinhos (${c.nearby.slice(0, 3).join(", ")}). Orçamento gratuito e montagem pela nossa equipa.`,
    servicesHighlight: highlights.map((h) => h.replace("{city}", c.name)),
    nearbyAreas: [c.name, ...c.nearby],
  };
}

const corrimaosHighlights = [
  "Corrimãos inox interiores e exteriores em {city}",
  "Guardas inox e vidro temperado",
  "Varandins e corrimãos para escadas",
  "Acabamentos polido, escovado ou acetinado",
  "Corrimãos para acessibilidade",
  "Montagem profissional em {city}",
];

const portoesHighlights = [
  "Portões de garagem ferro e inox em {city}",
  "Portões de correr e batente",
  "Portões industriais e logísticos",
  "Tratamento anticorrosivo",
  "Automatismos e reparação",
  "Montagem em {city} e arredores",
];

const inoxHighlights = [
  "Serralharia inox por medida em {city}",
  "Corrimãos, guardas e varandins inox",
  "Fachadas e revestimentos inox",
  "Mobiliário inox hotelaria",
  "Estruturas inox e vidro",
  "Reparação de serralharia inox",
];

const guimaraes = geoCities.find((c) => c.slug === "guimaraes")!;
const braga = geoCities.find((c) => c.slug === "braga")!;
const porto = geoCities.find((c) => c.slug === "porto")!;
const famalicao = geoCities.find((c) => c.slug === "famalicao")!;

export const locationPages: LocationPageConfig[] = [
  ...geoCities.map(cityPage),
  serviceCityPage("Corrimãos Inox", "corrimaos-inox", guimaraes, corrimaosHighlights),
  serviceCityPage("Corrimãos Inox", "corrimaos-inox", braga, corrimaosHighlights),
  serviceCityPage("Corrimãos Inox", "corrimaos-inox", porto, corrimaosHighlights),
  serviceCityPage("Portões em Ferro e Inox", "portoes-ferro", braga, portoesHighlights),
  serviceCityPage("Portões em Ferro e Inox", "portoes-ferro", porto, portoesHighlights),
  serviceCityPage("Serralharia Inox", "serralharia-inox", guimaraes, inoxHighlights),
  serviceCityPage("Serralharia Inox", "serralharia-inox", braga, inoxHighlights),
  serviceCityPage("Serralharia Inox", "serralharia-inox", porto, inoxHighlights),
  serviceCityPage("Serralharia Inox", "serralharia-inox", famalicao, inoxHighlights),
];

export const allServiceAreaNames = [
  ...geoCities.map((c) => c.name),
  "Vila Nova de Sande",
  "Paredes",
  "Penafiel",
  "Caminha",
  "Vila Nova de Cerveira",
  "Matosinhos",
  "Vila Nova de Gaia",
];
