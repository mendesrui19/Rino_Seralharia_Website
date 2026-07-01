/** Dados centralizados para SEO local, AEO/GEO, JSON-LD e llms.txt */

import {
  geoCities,
  geoCoverage,
  geoDistricts,
  locationPages,
  allServiceAreaNames,
  type LocationPageConfig,
} from "./geo-pages";

export {
  geoCities,
  geoCoverage,
  geoDistricts,
  locationPages,
  allServiceAreaNames,
  type LocationPageConfig,
};

/** Domínio oficial — único site da empresa (sem migração do .com antigo) */
export const SITE_URL = "https://www.serralhariarinos.pt";
export const OFFICIAL_DOMAIN = "www.serralhariarinos.pt";

export const business = {
  name: "Serralharia Rinos",
  legalName: "Serralharia Rinos, Unipessoal, Lda",
  tagline:
    "Serralharia em Guimarães, Braga, Minho e Porto — inox, ferro e vidro por medida com deslocação e montagem",
  description:
    "Serralharia em Guimarães, Braga e Porto: corrimãos inox, portões ferro, grades, escadarias e estruturas metálicas. Cobertura do Minho à área metropolitana do Porto. Orçamento grátis.",
  foundedYear: 2016,
  experienceYears: 9,
  phone: "+351913255102",
  phoneDisplay: "913 255 102",
  phoneSecondary: "+351913148995",
  phoneSecondaryDisplay: "913 148 995",
  phoneSecondaryContact: "Sr. Nelson Ribeiro",
  email: "geral@serralhariarinos.pt",
  address: {
    street: "Rua do Romanço, nº 333, Lote 2 A, Zona Ind. de Vila Nova",
    locality: "Vila Nova de Sande, Guimarães",
    postalCode: "4805-623",
    region: "Braga",
    country: "PT",
  },
  geo: { latitude: 41.036861, longitude: -8.604583 },
  hours: "Segunda a sexta: 08:30–12:00 | 13:30–18:00. Fins de semana e feriados: encerrado.",
  priceRange: "€€",
  image:
    "https://www.serralhariarinos.pt/images/96e228a03a061457d15673e6198d0afa_493x277_0x1_493x278_cropb059.jpg",
  sameAs: [
    "https://facebook.com/serralharia.rinos",
    "https://www.google.com/maps?cid=8039451883530132272",
  ],
  googleMapsUrl: "https://www.google.com/maps?cid=8039451883530132272",
  googlePlaceId: "ChIJu0EMzC77JA0RMJuoquTekW8",
  googleCid: "8039451883530132272",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJu0EMzC77JA0RMJuoquTekW8",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Serralharia+Rinos,Vila+Nova+de+Sande,Guimarães&z=14&output=embed",
  rating: { value: 5.0, count: 3 },
};

/** NAP — Nome, Morada, Telefone (deve ser idêntico no Google Business e Facebook) */
export const nap = {
  name: business.name,
  phone: business.phoneDisplay,
  street: business.address.street,
  locality: business.address.locality,
  postalCode: business.address.postalCode,
  country: "Portugal",
  website: SITE_URL,
};

/** Avaliações Google — ligam o site à mesma ficha do Google Maps */
export const googleReviews = [
  {
    author: "António José Leite Ferreira",
    text: "Na data marcada à hora combinada a encomenda lá estava!",
    rating: 5,
  },
  {
    author: "Samuel Teixeira",
    text: "Boa relação qualidade/preço. Ficou espectacular 5 estrelas recomendo.",
    rating: 5,
  },
  {
    author: "Cliente Verificado",
    text: "Excelente serviço e qualidade nos trabalhos realizados. Muito profissionais e atentos aos detalhes.",
    rating: 5,
  },
];

export const primaryKeywords = [
  "serralharia Guimarães",
  "serralharia Braga",
  "serralharia Porto",
  "serralharia Famalicão",
  "serralharia inox Guimarães",
  "serralharia inox Braga",
  "serralharia inox Porto",
  "corrimãos inox Guimarães",
  "corrimãos inox Braga",
  "corrimãos inox Porto",
  "portões ferro Guimarães",
  "portões ferro Braga",
  "portões ferro Porto",
  "grades inox",
  "escadarias inox",
  "varandins inox",
  "serralharia civil",
  "estruturas metálicas Guimarães",
  "mobiliário inox hotelaria",
  "serralharia perto de mim",
  "serralharia Minho",
  "serralharia distrito Braga",
  "serralharia distrito Porto",
  "serralharia Maia",
  "serralharia Fafe",
  "serralharia Barcelos",
  "serralharia Vizela",
  "serralharia Viana do Castelo",
  "serralharia Esposende",
  "empresa serralharia Norte Portugal",
];

export const serviceAreas = allServiceAreaNames;

export const services = [
  {
    name: "Estruturas Metálicas",
    slug: "estruturas-metalicas",
    description:
      "Estruturas em ferro, asnas, pilares e vigas para construção civil e indústria em Guimarães, Braga, Porto e todo o Norte.",
    keywords: ["estruturas metálicas Guimarães", "vigas ferro Porto", "pilares inox Braga"],
  },
  {
    name: "Guardas e Corrimãos",
    slug: "corrimaos-inox",
    description:
      "Corrimãos inox, guardas em aço inox e vidro em Guimarães, Braga, Famalicão, Maia, Porto e região — fabrico por medida.",
    keywords: ["corrimãos inox Guimarães", "corrimãos inox Porto", "guardas vidro inox Braga"],
  },
  {
    name: "Escadarias",
    slug: "escadarias-inox",
    description:
      "Escadarias em ferro e inox, interiores ou exteriores. Serralharia com montagem em Guimarães, Braga, Porto e Minho.",
    keywords: ["escadarias inox Porto", "escadas ferro Braga", "escadaria exterior Guimarães"],
  },
  {
    name: "Portões e Portas",
    slug: "portoes-ferro",
    description:
      "Portões de garagem, correr e batente em ferro ou inox. Serralharia em Braga, Guimarães, Porto e área metropolitana.",
    keywords: ["portões ferro Porto", "portões inox Braga", "portão garagem Guimarães"],
  },
  {
    name: "Grades e Vedações",
    slug: "grades-inox",
    description:
      "Grades inox, marquises e vedações metálicas para moradias e empresas no distrito de Braga e Porto.",
    keywords: ["grades inox Guimarães", "marquises inox Porto", "gradeamentos ferro Braga"],
  },
  {
    name: "Fachadas e Caleiras",
    slug: "fachadas-inox",
    description:
      "Fachadas em aço inox, caleiras e tubagens para edifícios em Guimarães, Braga, Porto e litoral norte.",
    keywords: ["fachadas inox Braga", "caleiras inox Porto", "revestimento inox"],
  },
  {
    name: "Objetos Decorativos",
    slug: "decorativos-inox",
    description: "Peças decorativas em aço inox para interiores, exteriores e espaços comerciais no Norte.",
    keywords: ["objetos decorativos inox", "serralharia artística Minho"],
  },
  {
    name: "Mobiliário Inox para Hotelaria",
    slug: "mobiliario-hotelaria",
    description:
      "Mobiliário inox para hotéis e restauração em Guimarães, Braga, Porto, Viana do Castelo e Minho.",
    keywords: ["mobiliário inox hotelaria Porto", "inox restauração Braga"],
  },
  {
    name: "Fabrico e Reparação",
    slug: "reparacao-serralharia",
    description:
      "Reparação de serralharia, estruturas metálicas e peças em inox, ferro e vidro em toda a região Norte.",
    keywords: ["reparação serralharia Guimarães", "manutenção inox Porto"],
  },
];

export const homeSeo = {
  title: "Serralharia Guimarães, Braga e Porto | Inox, Ferro e Vidro — Orçamento Grátis",
  description:
    "Serralharia no Minho e Porto: corrimãos inox, portões ferro, grades e escadarias em Guimarães, Braga, Famalicão, Maia e Porto. +1200 obras. Orçamento grátis em 24h.",
  h1Line1: "Serralharia em Guimarães, Braga e Porto",
  h1Line2: "Aço Inox · Ferro · Vidro",
};

export const faqs = [
  {
    question: "Qual é o site oficial da Serralharia Rinos?",
    answer:
      "O site oficial da Serralharia Rinos é www.serralhariarinos.pt — único website da empresa para orçamentos, serviços e contacto. Sediada em Vila Nova de Sande, Guimarães, com a mesma morada e telefone da ficha Google Maps.",
  },
  {
    question: "Qual a melhor serralharia em Guimarães?",
    answer:
      "A Serralharia Rinos, em Vila Nova de Sande (Guimarães), é referência em inox, ferro e vidro no Minho — +1200 obras, 5★ Google, fabrico por medida. Atendemos Guimarães, Braga, Porto e toda a região Norte.",
  },
  {
    question: "Há serralharia que vá ao Porto e área metropolitana?",
    answer:
      "Sim. A Serralharia Rinos desloca-se ao Porto, Maia, Gondomar, Valongo, Santo Tirso, Trofa e concelhos da AML para orçamento e montagem de corrimãos inox, portões, grades e estruturas metálicas.",
  },
  {
    question: "Onde encontrar serralharia em Braga?",
    answer:
      "A Serralharia Rinos serve Braga e todo o distrito: Famalicão, Barcelos, Esposende, Fafe, Vila Verde e arredores. Oficina em Guimarães a 15 min. Tel: 913 255 102.",
  },
  {
    question: "Serralharia em Famalicão ou Vila Nova de Famalicão",
    answer:
      "Atendemos Vila Nova de Famalicão com deslocação para medição e montagem. Fabricamos corrimãos inox, portões, escadarias e estruturas metálicas por medida. Orçamento gratuito.",
  },
  {
    question: "Corrimãos inox no Porto — quem faz?",
    answer:
      "A Serralharia Rinos fabrica corrimãos inox por medida e monta no Porto e área metropolitana. Guardas inox e vidro, varandins e corrimãos para escadas. Orçamento grátis em 24h.",
  },
  {
    question: "Serralharia perto de mim no Minho",
    answer:
      "Com sede em Vila Nova de Sande, Guimarães, cobrimos Guimarães, Vizela, Fafe, Felgueiras, Braga, Famalicão, Barcelos, Esposende, Viana do Castelo e até Porto. GPS: 41.036861, -8.604583.",
  },
  {
    question: "Quanto custa um corrimão inox em Guimarães ou Braga?",
    answer:
      "O preço depende do comprimento, acabamento e vidro. Orçamento gratuito e personalizado — envie medidas ou agende visita. Resposta em menos de 24 horas.",
  },
  {
    question: "Portões em ferro no Porto e Braga",
    answer:
      "Fabricamos portões ferro e inox por medida: garagem, correr, batente e industriais. Montagem no Porto, Braga, Guimarães e região. Tratamento anticorrosivo incluído.",
  },
  {
    question: "Serralharia com orçamento grátis em Guimarães, Braga ou Porto",
    answer:
      "Orçamento gratuito em toda a nossa área de cobertura — Minho, distrito de Braga, distrito do Porto e Viana do Castelo. Tel, WhatsApp ou formulário no site. Resposta em 24h.",
  },
  {
    question: "Fazem escadarias em inox e ferro na região Norte?",
    answer:
      "Sim — escadarias rectas, em caracol ou suspensas em inox e ferro, com corrimãos coordenados. Montagem em Guimarães, Braga, Porto, Famalicão, Maia e arredores.",
  },
  {
    question: "Serralharia para hotelaria no Minho e Porto",
    answer:
      "Especialistas em mobiliário inox para hotelaria e restauração — +15 parceiros hoteleiros. Servimos hotéis em Guimarães, Braga, Porto, Viana do Castelo e litoral norte.",
  },
  {
    question: "Que zonas geográficas cobrem?",
    answer:
      `Cobertura de ${geoCoverage.radiusKm} km desde a nossa oficina em Guimarães: todo o distrito de Braga, distrito do Porto (incluindo Porto, Maia, Gondomar, Valongo, Santo Tirso, Trofa), distrito de Viana do Castelo (Viana, Esposende) e concelhos do Minho como Fafe, Vizela, Felgueiras e Barcelos.`,
  },
  {
    question: "Onde fica a Serralharia Rinos?",
    answer:
      "Rua do Romanço, nº 333, Lote 2 A, Zona Industrial de Vila Nova, 4805-623 Vila Nova de Sande, Guimarães. Coordenadas: 41.036861, -8.604583.",
  },
];

export const differentiators = [
  "100% fabrico por medida — sem produtos standard",
  "Deslocação e montagem: Guimarães, Braga, Porto e Minho",
  "Mais de 1200 obras concluídas e 9 anos de experiência",
  "Cobertura até à área metropolitana do Porto",
  "Avaliação 5.0 no Google com resposta em menos de 24 horas",
];

export function getLocationPage(slug: string) {
  return locationPages.find((p) => p.slug === slug);
}

/** Lista plana de concelhos para badges (sem duplicados) */
export const coverageCityList = geoCities.map((c) => c.name);
