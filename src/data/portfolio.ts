import type { PortfolioProject, PortfolioMedia } from "./types";

// Imagens locais (src/assets/roma). Para trocar, substitua o arquivo ou o import.
import roma199 from "@/assets/roma/Roma-199.jpg";
import roma836 from "@/assets/roma/Roma-836.jpg";
import roma837 from "@/assets/roma/Roma-837.jpg";
import roma809 from "@/assets/roma/Roma-809.jpg";
import roma438 from "@/assets/roma/Roma-438.jpg";
import roma224 from "@/assets/roma/Roma-224.jpg";
import roma195 from "@/assets/roma/Roma-195.jpg";
import roma153 from "@/assets/roma/Roma-153.jpg";
import roma53 from "@/assets/roma/Roma-53.jpg";

// Imagens locais (src/assets/granprix).
import gp1 from "@/assets/granprix/gp-1.jpg";
import gp2 from "@/assets/granprix/gp-2.jpg";
import gp3 from "@/assets/granprix/gp-3.jpg";
import gp4 from "@/assets/granprix/gp-4.jpg";
import gp5 from "@/assets/granprix/gp-5.jpg";
import gp6 from "@/assets/granprix/gp-6.jpg";
import gp7 from "@/assets/granprix/gp-7.jpg";
import gp8 from "@/assets/granprix/gp-8.jpg";
import gp9 from "@/assets/granprix/gp-9.jpg";
import gp10 from "@/assets/granprix/gp-10.jpg";

// Imagens locais (src/assets/acelerador).
import acelerador1 from "@/assets/acelerador/acelerador-1.jpg";
import acelerador2 from "@/assets/acelerador/acelerador-2.jpg";
import acelerador3 from "@/assets/acelerador/acelerador-3.jpg";
import acelerador4 from "@/assets/acelerador/acelerador-4.jpg";
import acelerador5 from "@/assets/acelerador/acelerador-5.jpg";

// Imagens locais (src/assets/adsummit).
import adsummit1 from "@/assets/adsummit/1.jpg";
import adsummit2 from "@/assets/adsummit/2.jpg";
import adsummit2_1 from "@/assets/adsummit/2-1.jpg";
import adsummit4_4 from "@/assets/adsummit/4.4.jpg";
import adsummit6 from "@/assets/adsummit/6.jpg";
import adsummit7 from "@/assets/adsummit/7.jpg";
import adsummit8 from "@/assets/adsummit/8.jpg";
import adsummit9 from "@/assets/adsummit/9.jpg";
import adsummit10 from "@/assets/adsummit/10.jpg";
import adsummit11 from "@/assets/adsummit/11.jpg";

// Imagens locais (src/assets/hardest).
import hardest8 from "@/assets/hardest/Hardest2025-8.jpg";
import hardest11 from "@/assets/hardest/Hardest2025-11.jpg";
import hardest14 from "@/assets/hardest/Hardest2025-14.jpg";
import hardest15 from "@/assets/hardest/Hardest2025-15.jpg";
import hardest28 from "@/assets/hardest/Hardest2025-28.jpg";

// Capas otimizadas para carregamento rápido dos cards (Home e Portfólio)
import roma199Cover from "@/assets/covers/roma-199-cover.webp";
import gp1Cover from "@/assets/covers/gp-1-cover.webp";
import aceleradorCover from "@/assets/covers/acelerador-2-cover.webp";
import adsummitCover from "@/assets/covers/adsummit-cover.webp";
import hardestCover from "@/assets/covers/hardest-cover.webp";
import droneCover from "@/assets/covers/drone-cover.webp";

import { aceleradorConfig } from "./aceleradorData";
import { adsummitConfig } from "./adsummitData";
import { hardestConfig } from "./hardestData";
import { droneConfig } from "./droneData";

const ROMA_ID = "roma-la-conquista";
const GP_ID = "gran-prix-ademicon";
const ACELERADOR_ID = "acelerador-de-vendas-sp";
const AD_SUMMIT_ID = "ad-summit-2026";
const HARDEST_ID = "hardest-run-2025";
const DRONE_ID = "historia-nos-ares";
const NOW = "2026-08-22T23:56:48.756Z";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: ROMA_ID,
    title: "Roma - La Conquista",
    slug: "roma-la-conquista",
    category: "VÍDEO E FOTOGRAFIA",
    description:
      'Registro fotográfico e em vídeo da campanha de incentivo "La Conquista", uma viagem realizada pela maior administradora de consórcios do Brasil, "Ademicon Consórcio e Investimento". A viagem, que teve como destino principal a capital da Itália, também passou por Firenze e pelo Vaticano.',
    year: 2026,
    preview_image_1: roma199Cover,
    preview_image_2: roma836,
    preview_image_3: roma438,
    preview_image_4: roma224,
    created_at: NOW,
    updated_at: NOW,
  },
  {
    id: GP_ID,
    title: "Gran Prix Ademicon",
    slug: "gran-prix-ademicon",
    category: "VÍDEO E FOTOGRAFIA",
    description:
      'A campanha de incentivo "Gran Prix Ademicon", levou os melhores vendedores para Montevidéu, Uruguai. Desde cenários urbanos impressionantes até momentos de grande emoção e velocidade com participação no evento de corrida da TCR South America. A essência da corrida juntamente aos representantes da marca é relembrada nas fotos e no registro em vídeo da viagem.',
    year: 2025,
    preview_image_1: gp1Cover,
    preview_image_2: gp3,
    preview_image_3: gp8,
    preview_image_4: gp10,
    created_at: NOW,
    updated_at: NOW,
  },
  {
    id: ACELERADOR_ID,
    title: aceleradorConfig.title,
    slug: "acelerador-de-vendas-sp",
    category: aceleradorConfig.category,
    description: aceleradorConfig.description,
    year: aceleradorConfig.year,
    preview_image_1: aceleradorCover,
    preview_image_2: acelerador1,
    preview_image_3: acelerador3,
    preview_image_4: acelerador5,
    cover_image: acelerador2,
    unified_gallery: true,
    created_at: NOW,
    updated_at: NOW,
  },
  {
    id: AD_SUMMIT_ID,
    title: adsummitConfig.title,
    slug: "ad-summit-2026",
    category: adsummitConfig.category,
    description: adsummitConfig.description,
    year: adsummitConfig.year,
    preview_image_1: adsummitCover,
    preview_image_2: adsummit1,
    preview_image_3: adsummit4_4,
    preview_image_4: adsummit11,
    cover_image: adsummit4_4,
    unified_gallery: true,
    created_at: NOW,
    updated_at: NOW,
  },
  {
    id: HARDEST_ID,
    title: hardestConfig.title,
    slug: "hardest-run-2025",
    category: hardestConfig.category,
    description: hardestConfig.description,
    year: hardestConfig.year,
    preview_image_1: hardestCover,
    preview_image_2: hardest8,
    preview_image_3: hardest11,
    preview_image_4: hardest14,
    cover_image: hardest11,
    unified_gallery: true,
    created_at: NOW,
    updated_at: NOW,
  },
  {
    id: DRONE_ID,
    title: droneConfig.title,
    slug: "historia-nos-ares",
    category: droneConfig.category,
    description: droneConfig.description,
    year: droneConfig.year,
    preview_image_1: droneCover,
    preview_image_2: null,
    preview_image_3: null,
    preview_image_4: null,
    cover_image: droneCover,
    unified_gallery: true,
    created_at: NOW,
    updated_at: NOW,
  },
];

const makeMedia = (project_id: string) => (
  id: string,
  media_type: PortfolioMedia["media_type"],
  url: string,
  sort_order: number,
  title: string | null,
  caption: string | null,
): PortfolioMedia => ({
  id,
  project_id,
  media_type,
  url,
  poster_url: null,
  title,
  caption,
  sort_order,
  created_at: NOW,
  updated_at: NOW,
});

const media = makeMedia(ROMA_ID);
const gpMedia = makeMedia(GP_ID);
const aceleradorMedia = makeMedia(ACELERADOR_ID);
const adsummitMedia = makeMedia(AD_SUMMIT_ID);
const hardestMedia = makeMedia(HARDEST_ID);
const droneMedia = makeMedia(DRONE_ID);

export const portfolioMedia: PortfolioMedia[] = [
  // AD Summit 2026 (Fotos em ordem crescente de nome: 1, 2, 2-1, 4.4, 6, 7, 8, 9, 10, 11)
  adsummitMedia("adsummit-1", "image", adsummit1, 1, adsummitConfig.photos[0].title, adsummitConfig.photos[0].caption),
  adsummitMedia("adsummit-2", "image", adsummit2, 2, adsummitConfig.photos[1].title, adsummitConfig.photos[1].caption),
  adsummitMedia("adsummit-2-1", "image", adsummit2_1, 3, adsummitConfig.photos[2].title, adsummitConfig.photos[2].caption),
  adsummitMedia("adsummit-4-4", "image", adsummit4_4, 4, adsummitConfig.photos[3].title, adsummitConfig.photos[3].caption),
  adsummitMedia("adsummit-6", "image", adsummit6, 5, adsummitConfig.photos[4].title, adsummitConfig.photos[4].caption),
  adsummitMedia("adsummit-7", "image", adsummit7, 6, adsummitConfig.photos[5].title, adsummitConfig.photos[5].caption),
  adsummitMedia("adsummit-8", "image", adsummit8, 7, adsummitConfig.photos[6].title, adsummitConfig.photos[6].caption),
  adsummitMedia("adsummit-9", "image", adsummit9, 8, adsummitConfig.photos[7].title, adsummitConfig.photos[7].caption),
  adsummitMedia("adsummit-10", "image", adsummit10, 9, adsummitConfig.photos[8].title, adsummitConfig.photos[8].caption),
  adsummitMedia("adsummit-11", "image", adsummit11, 10, adsummitConfig.photos[9].title, adsummitConfig.photos[9].caption),

  // Acelerador de Vendas SP (Vídeo antes das fotos, fotos ordenadas de 1 a 5)
  aceleradorMedia(
    "acelerador-video-1",
    "youtube",
    aceleradorConfig.videoUrl,
    1,
    aceleradorConfig.video.title,
    aceleradorConfig.video.caption,
  ),
  aceleradorMedia(
    "acelerador-1",
    "image",
    acelerador1,
    2,
    aceleradorConfig.photos[0].title,
    aceleradorConfig.photos[0].caption,
  ),
  aceleradorMedia(
    "acelerador-2",
    "image",
    acelerador2,
    3,
    aceleradorConfig.photos[1].title,
    aceleradorConfig.photos[1].caption,
  ),
  aceleradorMedia(
    "acelerador-3",
    "image",
    acelerador3,
    4,
    aceleradorConfig.photos[2].title,
    aceleradorConfig.photos[2].caption,
  ),
  aceleradorMedia(
    "acelerador-4",
    "image",
    acelerador4,
    5,
    aceleradorConfig.photos[3].title,
    aceleradorConfig.photos[3].caption,
  ),
  aceleradorMedia(
    "acelerador-5",
    "image",
    acelerador5,
    6,
    aceleradorConfig.photos[4].title,
    aceleradorConfig.photos[4].caption,
  ),

  media("roma-1", "image", roma199, 1, null, "A cúpula da Basílica de São Pedro iluminada pelo pôr do sol"),
  media("roma-2", "image", roma836, 2, null, "Audiência com o Papa Leão XIV"),
  media("roma-3", "image", roma837, 3, null, "Benção do Papa à Hadassa, filha de um casal participante da viagem"),
  media("roma-4", "image", roma809, 4, null, "As estátuas dos santos que coroam a fachada da basílica"),
  media("roma-5", "image", roma438, 5, null, "Retrato em frente ao Coliseu, símbolo eterno de Roma"),
  media("roma-6", "image", roma224, 6, null, "O grupo da campanha La Conquista reunido diante do Coliseu"),
  media("roma-7", "image", roma195, 7, null, "Vista panorâmica de Roma com o Vaticano ao entardecer"),
  media("roma-8", "image", roma153, 8, null, "Contemplando o fim de tarde sobre os telhados da cidade"),
  media("roma-9", "image", roma53, 9, null, "Ruas estreitas e bandeiras: o cotidiano italiano"),
  media(
    "roma-video-1",
    "youtube",
    "https://www.youtube.com/watch?v=9iGeZ5ksCIk",
    10,
    "Roma - La Conquista (Filme Oficial)",
    "Documentário completo da campanha La Conquista, registrando os momentos mais marcantes da viagem pela Itália.",
  ),
  media(
    "roma-video-2",
    "youtube",
    "https://www.youtube.com/watch?v=4z_ke3tCy20",
    11,
    "Destaques da Viagem (Teaser)",
    "Os melhores momentos da viagem em um vídeo dinâmico com os destaques da experiência.",
  ),

  gpMedia("gp-1", "image", gp1, 1, null, "Montevidéu ao amanhecer: a rambla emergindo da névoa sobre o Rio da Prata"),
  gpMedia("gp-2", "image", gp2, 2, null, "Concentração nos boxes antes da largada"),
  gpMedia("gp-3", "image", gp3, 3, null, "O grupo Ademicon reunido na pista, com as bandeiras das marcas parceiras"),
  gpMedia("gp-4", "image", gp4, 4, null, "Entrevista à beira da pista durante o fim de semana de corrida"),
  gpMedia("gp-5", "image", gp5, 5, null, "Preparação para a largada"),
  gpMedia("gp-6", "image", gp6, 6, null, "Disputa acirrada entre os carros do TCR South America"),
  gpMedia("gp-7", "image", gp7, 7, null, "A bandeira do Brasil no retrovisor, orgulho da equipe em solo uruguaio"),
  gpMedia("gp-8", "image", gp8, 8, null, "A celebração do pódio com a bandeira brasileira erguida"),
  gpMedia("gp-9", "image", gp9, 9, null, "As ruas históricas de Montevidéu"),
  gpMedia("gp-10", "image", gp10, 10, null, "O sol nascendo sobre a cidade coberta pela neblina"),
  gpMedia(
    "gp-video-1",
    "youtube",
    "https://www.youtube.com/watch?v=ee6tLrVsUC0",
    11,
    "Gran Prix Ademicon (Filme Oficial)",
    "Experiência completa da campanha Gran Prix Ademicon com a TCR South America.",
  ),
  gpMedia(
    "gp-video-2",
    "youtube",
    "https://www.youtube.com/shorts/xe-5BJlNVnI",
    12,
    "Gran Prix (Cortes Verticais / Redes Sociais)",
    "Registro dinâmico em formato vertical planejado para reels e engajamento em redes sociais.",
  ),

  // Hardest Run 2025 (Vídeo antes das fotos, fotos ordenadas)
  hardestMedia(
    "hardest-video-1",
    "youtube",
    hardestConfig.videoUrl,
    1,
    hardestConfig.video.title,
    hardestConfig.video.caption,
  ),
  hardestMedia(
    "hardest-8",
    "image",
    hardest8,
    2,
    hardestConfig.photos[0].title,
    hardestConfig.photos[0].caption,
  ),
  hardestMedia(
    "hardest-11",
    "image",
    hardest11,
    3,
    hardestConfig.photos[1].title,
    hardestConfig.photos[1].caption,
  ),
  hardestMedia(
    "hardest-14",
    "image",
    hardest14,
    4,
    hardestConfig.photos[2].title,
    hardestConfig.photos[2].caption,
  ),
  hardestMedia(
    "hardest-15",
    "image",
    hardest15,
    5,
    hardestConfig.photos[3].title,
    hardestConfig.photos[3].caption,
  ),
  hardestMedia(
    "hardest-28",
    "image",
    hardest28,
    6,
    hardestConfig.photos[4].title,
    hardestConfig.photos[4].caption,
  ),

  // História nos Ares (Drone)
  droneMedia(
    "drone-video-1",
    "youtube",
    droneConfig.videoUrl,
    1,
    droneConfig.video.title,
    droneConfig.video.caption,
  ),
];

