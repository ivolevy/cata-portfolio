import homeMmPreview from "@/assets/home-mm/home-mm-preview.jpg";
import homeMmFeed from "@/assets/home-mm/home-mm-feed.jpg";
import homeMmDetail from "@/assets/home-mm/home-mm-detail.jpg";
import homeMmTable from "@/assets/home-mm/home-mm-table.jpg";
import sorsoPreview from "@/assets/sorso/sorso-preview.png";
import sorsoImg1 from "@/assets/sorso/WhatsApp Image 2026-07-19 at 23.43.55.jpeg";
import sorsoImg2 from "@/assets/sorso/WhatsApp Image 2026-07-19 at 23.43.55 (1).jpeg";
import sorsoImg3 from "@/assets/sorso/WhatsApp Image 2026-07-19 at 23.43.56.jpeg";
import sorsoImg4 from "@/assets/sorso/WhatsApp Image 2026-07-19 at 23.43.56 (1).jpeg";
import onPreview from "@/assets/on/on-preview.png";
import onImg1 from "@/assets/on/ChatGPT Image 22 jun 2026, 10_23_47 p.m..png";
import onImg2 from "@/assets/on/ChatGPT Image 22 jun 2026, 10_25_54 p.m..png";
import onImg3 from "@/assets/on/ChatGPT Image 22 jun 2026, 10_28_22 p.m..png";
import bodasPreview from "@/assets/bodas/bodas-preview.png";
import bodasImg1 from "@/assets/bodas/ChatGPT Image 18 jun 2026, 11_55_06 a.m..png";
import bodasImg2 from "@/assets/bodas/ChatGPT Image 18 jun 2026, 12_00_13 p.m..png";
import bodasImg3 from "@/assets/bodas/Screen Shot 2026-06-18 at 13.53.13.png";
import bodasImg4 from "@/assets/bodas/Screen Shot 2026-06-18 at 14.06.00.png";
import bodasImg5 from "@/assets/bodas/panel2_19x25cm.jpg";

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
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "home-mm",
    index: "01",
    name: "Home MM",
    category: "Community Manager · Redes Sociales",
    year: "2025",
    cover: homeMmPreview,
    short:
      "Gestión integral de Instagram durante un año para un emprendimiento de artículos para el hogar: calendario, diseño, Reels y comunidad.",
    description:
      "Durante todo 2025 estuve a cargo de la comunicación digital de Home MM, un emprendimiento de artículos para el hogar y decoración. Organicé el calendario editorial semanal, diseñé las piezas visuales del feed y las historias, edité Reels orientados a exhibición de productos y llevé la atención diaria de consultas comerciales.",
    role: [
      "Planificación de calendario editorial y grilla de feed",
      "Diseño de piezas gráficas e historias en Canva",
      "Guionado y edición de Reels en CapCut",
      "Copywriting comercial y atención a clientes por DM",
    ],
    tools: ["Instagram", "Canva", "CapCut", "Meta Business Suite", "IA (ChatGPT / Gemini)"],
    objectives: [
      "Construir una identidad visual cálida y coherente en el feed",
      "Mostrar productos, usos y promociones de forma clara y atractiva",
      "Sostener frecuencia semanal y respuesta ágil a potenciales clientes",
    ],
    results: [
      "12 meses de gestión continua de la cuenta",
      "Identidad estética unificada entre feed, historias y Reels",
      "Sistema ordenado de campañas promocionales y lanzamientos",
    ],
    process: [
      {
        title: "Planificación",
        body: "Armado de calendarios mensuales con pilares de producto, inspiración de espacios, novedades y promos estacionales.",
      },
      {
        title: "Producción",
        body: "Diseño de placas y carruseles en Canva, edición ágil de Reels en CapCut y redacción de copies pensados para generar consultas.",
      },
      {
        title: "Comunidad y métricas",
        body: "Seguimiento diario de mensajes directos y comentarios, y revisión de Insights en Meta Business Suite para ajustar horarios y formatos.",
      },
    ],
    gallery: [homeMmFeed, homeMmDetail, homeMmTable],
  },
  {
    slug: "on",
    index: "02",
    name: "ON",
    category: "Estrategia Digital · Social Media & Campañas",
    year: "2026",
    cover: onPreview,
    short:
      "Auditoría de presencia digital y propuesta de campañas y e-commerce para una marca de joyería de autor trabajada en equipo.",
    description:
      "En ON realizamos un diagnóstico integral del emprendimiento y diseñamos una estrategia para ordenar su comunicación en redes: definición de tono de voz, bajada de campañas publicitarias en Meta Ads y propuesta de tienda online alineada a su identidad artesanal.",
    role: [
      "Auditoría de presencia digital y competencia",
      "Definición de tono de voz y pilares de contenido",
      "Diseño de piezas publicitarias para Meta Ads",
      "Propuesta de e-commerce y coordinación del equipo",
    ],
    tools: ["Canva", "Meta Ads", "Google Workspace", "Notion", "IA (asistencia creativa)"],
    objectives: [
      "Ordenar la comunicación de la marca en canales digitales",
      "Proponer una estructura de e-commerce clara y navegable",
      "Diseñar creatividades coherentes con el posicionamiento artesanal",
    ],
    results: [
      "Diagnóstico estratégico y plan de acción aprobado",
      "Arquitectura de e-commerce validada por el equipo",
      "Set de piezas de campaña listas para pauta y feed",
    ],
    process: [
      {
        title: "Diagnóstico",
        body: "Analizamos cómo se estaba comunicando la marca en redes, qué formatos funcionaban y dónde perdía consistencia visual.",
      },
      {
        title: "Propuesta",
        body: "Diseñamos piezas de campaña enfocadas en producto y una estructura de tienda simple alineada al tono del negocio.",
      },
      {
        title: "Equipo",
        body: "Coordiné entregables, tiempos y presentaciones junto a un equipo de seis estudiantes.",
      },
    ],
    gallery: [onImg1, onImg2, onImg3],
  },
  {
    slug: "organizadora-bodas",
    index: "03",
    name: "Campaña · Organizadora de Bodas",
    category: "Marca Personal · Contenido & Reels",
    year: "2026",
    cover: bodasPreview,
    short:
      "Estrategia de marca personal, storytelling y producción de contenido emocional para posicionar un perfil en Instagram.",
    description:
      "Desarrollamos la estrategia de comunicación digital para posicionar la marca personal de una organizadora de bodas: definición de pilares de contenido, tono cercano y producción de piezas orientadas a conectar desde la emoción en Instagram y formato Reel.",
    role: [
      "Estrategia de marca personal en redes",
      "Definición de pilares de contenido y storytelling",
      "Guionado y producción de formato Reel",
      "Guía visual y de tono de comunicación",
    ],
    tools: ["Instagram", "CapCut", "Canva", "IA (ChatGPT / Gemini)", "Notion"],
    objectives: [
      "Diferenciar la cuenta en un nicho altamente visual y competitivo",
      "Conectar desde el storytelling en lugar de la venta directa",
      "Unificar estética, mensajes clave y ritmo de publicación",
    ],
    results: [
      "Guía de tono, pilares y calendario base entregados",
      "Concepto creativo bajado a piezas reales y Reel publicado",
      "Identidad narrativa consistente en todo el perfil",
    ],
    process: [
      {
        title: "Investigación",
        body: "Relevamiento del estilo de servicio, el perfil de audiencia y los códigos visuales del rubro sin caer en clichés.",
      },
      {
        title: "Concepto",
        body: "Definimos un relato cercano y emocional para construir autoridad y cercanía en redes sociales.",
      },
      {
        title: "Bajada a contenido",
        body: "Aterrizamos la estrategia en piezas gráficas, copies y un Reel de presentación.",
      },
    ],
    gallery: [bodasImg1, bodasImg2, bodasImg3, bodasImg4, bodasImg5],
    videoUrl: "https://www.instagram.com/p/DZvjmo4vKe2/",
  },
  {
    slug: "sorso",
    index: "04",
    name: "Sorso",
    category: "Comunicación & Producción de Experiencia",
    year: "2026",
    cover: sorsoPreview,
    short:
      "Planificación, identidad visual y producción integral de una cata de vinos para más de veinte asistentes en cava MichelAngelo.",
    description:
      "Sorso combinó organización de eventos con mirada estética y de marca: trabajé la ambientación, la coordinación con proveedores, el timing de la noche y el registro visual de la experiencia junto a Vinos Castore.",
    role: [
      "Planificación y producción integral del evento",
      "Dirección estética y ambientación del espacio",
      "Coordinación con proveedores y cronograma",
      "Cuidado de identidad visual y registro de contenido",
    ],
    tools: ["Canva", "Notion", "MichelAngelo", "Vinos Castore"],
    objectives: [
      "Crear una experiencia íntima y memorable para más de 20 asistentes",
      "Cuidar la coherencia estética en cada punto de contacto",
      "Generar material visual atractivo y documentar la experiencia",
    ],
    results: [
      "Aforo completo y experiencia ejecutada sin desvíos",
      "Feedback positivo destacando la ambientación y organización",
      "Registro fotográfico listo para difusión en redes",
    ],
    process: [
      {
        title: "Concepto",
        body: "Definí un mood cálido con luz baja, madera y textiles neutros para que la experiencia tuviera una estética editorial consistente.",
      },
      {
        title: "Producción",
        body: "Coordiné con MichelAngelo y Vinos Castore la logística y un cronograma minuto a minuto.",
      },
      {
        title: "Puesta en escena",
        body: "Trabajé la mesa, la vajilla, la música y la iluminación como una experiencia pensada también para ser fotografiada y compartida.",
      },
    ],
    gallery: [sorsoImg1, sorsoImg2, sorsoImg3, sorsoImg4],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
