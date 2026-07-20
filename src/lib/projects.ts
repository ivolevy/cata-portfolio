import sorsoLogo from "@/assets/sorso/sorso logo.png";
import sorsoPreview from "@/assets/sorso/sorso-preview.png";
import sorsoImg1 from "@/assets/sorso/WhatsApp Image 2026-07-19 at 23.43.55.jpeg";
import sorsoImg2 from "@/assets/sorso/WhatsApp Image 2026-07-19 at 23.43.55 (1).jpeg";
import sorsoImg3 from "@/assets/sorso/WhatsApp Image 2026-07-19 at 23.43.56.jpeg";
import sorsoImg4 from "@/assets/sorso/WhatsApp Image 2026-07-19 at 23.43.56 (1).jpeg";
import onImg from "@/assets/project-on.jpg";
import bodasImg from "@/assets/project-bodas.jpg";

export type Project = {
  slug: string;
  index: string;
  name: string;
  category: string;
  year: string;
  cover: string;
  short: string;
  description: string;
  role: string[];
  tools: string[];
  objectives: string[];
  results: string[];
  process: { title: string; body: string }[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "sorso",
    index: "01",
    name: "Sorso",
    category: "Cata de vinos · Organización integral",
    year: "2026",
    cover: sorsoPreview,
    short:
      "Una noche íntima de vinos para más de veinte personas, pensada como una experiencia sensorial de principio a fin.",
    description:
      "Sorso nació de la idea de que una cata puede ser mucho más que probar vinos: puede ser una ceremonia. Trabajé la ambientación, el guion de la noche, los tiempos entre copas y la puesta en escena para que cada asistente se sintiera parte de algo cuidado.",
    role: [
      "Organización integral del evento",
      "Diseño de ambientación y puesta en escena",
      "Coordinación con proveedores",
      "Guion de la experiencia y timing de la noche",
    ],
    tools: ["Canva", "Notion", "MichelAngelo", "Vinos Castore"],
    objectives: [
      "Crear una experiencia íntima para más de 20 asistentes",
      "Elevar la cata a un momento memorable, no solo técnico",
      "Cuidar cada detalle sensorial del recorrido",
    ],
    results: [
      "Aforo completo con lista de espera",
      "Feedback unánime destacando la ambientación",
      "Invitación para replicar el formato en una segunda edición",
    ],
    process: [
      {
        title: "Concepto",
        body: "Definí un mood cálido, con luz baja, madera y textiles neutros. La idea era que la copa fuera la protagonista, no el ruido.",
      },
      {
        title: "Producción",
        body: "Coordiné con MichelAngelo y Vinos Castore la selección y logística. Armé un cronograma minuto a minuto para que la noche fluyera sin cortes.",
      },
      {
        title: "Puesta en escena",
        body: "Trabajé la mesa, la vajilla, la música y la iluminación como capas que se sumaban sin competir entre sí.",
      },
    ],
    gallery: [sorsoImg1, sorsoImg2, sorsoImg3, sorsoImg4],
  },
  {
    slug: "on",
    index: "02",
    name: "ON",
    category: "Campaña digital · Estrategia de marca",
    year: "2026",
    cover: onImg,
    short:
      "Análisis integral de un emprendimiento con propuesta de ecommerce y campañas publicitarias trabajadas en equipo.",
    description:
      "En ON hicimos un diagnóstico del emprendimiento y propusimos una nueva forma de mostrarlo en digital: una tienda simple, campañas con foco en el producto y un tono de comunicación consistente en todos los canales.",
    role: [
      "Análisis del emprendimiento y su público",
      "Propuesta de ecommerce y arquitectura de contenido",
      "Diseño de campañas publicitarias",
      "Coordinación del equipo de trabajo",
    ],
    tools: ["Canva", "Google Workspace", "Meta Ads", "Notion"],
    objectives: [
      "Ordenar la comunicación del emprendimiento",
      "Proponer una versión ecommerce clara y navegable",
      "Diseñar campañas coherentes con la marca",
    ],
    results: [
      "Documento estratégico entregado y aprobado",
      "Prototipo de ecommerce validado por la marca",
      "Piezas de campaña listas para publicar",
    ],
    process: [
      {
        title: "Diagnóstico",
        body: "Analizamos cómo se estaba comunicando la marca, qué le funcionaba y dónde perdía consistencia.",
      },
      {
        title: "Propuesta",
        body: "Diseñamos una estructura de ecommerce simple y una serie de campañas alineadas al tono del negocio.",
      },
      {
        title: "Equipo",
        body: "Coordiné al equipo, tiempos y entregables para que todo llegara en fecha y sin fricción.",
      },
    ],
    gallery: [onImg, onImg, onImg],
  },
  {
    slug: "organizadora-bodas",
    index: "03",
    name: "Campaña · Organizadora de Bodas",
    category: "Marca personal · Comunicación emocional",
    year: "2026",
    cover: bodasImg,
    short:
      "Concepto creativo y comunicación emocional para posicionar a una organizadora de bodas con una identidad clara y cercana.",
    description:
      "Trabajamos la marca personal de una organizadora de bodas: un tono cálido, honesto, sin clichés. La campaña se construyó alrededor de la experiencia del cliente y de lo que se siente cuando alguien realmente te escucha.",
    role: [
      "Definición del concepto creativo",
      "Comunicación emocional y storytelling",
      "Construcción de marca personal",
      "Mapeo de la experiencia del cliente",
    ],
    tools: ["Canva", "Instagram", "IA (asistencia creativa)", "Notion"],
    objectives: [
      "Diferenciar la marca en un mercado saturado",
      "Conectar desde la emoción, no desde la venta directa",
      "Cuidar la experiencia completa del cliente",
    ],
    results: [
      "Identidad narrativa consolidada",
      "Guía de tono y contenidos entregada",
      "Aumento del engagement en canales propios",
    ],
    process: [
      {
        title: "Escuchar",
        body: "Entendí a fondo cómo trabaja, qué le importa y qué tipo de novia acompaña.",
      },
      {
        title: "Concepto",
        body: "Definimos un concepto emocional y un tono cercano, sin fórmulas de wedding industry.",
      },
      {
        title: "Bajada",
        body: "Aterrizamos ese concepto en piezas, guías de contenido y momentos clave de la experiencia.",
      },
    ],
    gallery: [bodasImg, bodasImg, bodasImg],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
