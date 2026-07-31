import { Game } from "@/types";

// TODO: gerçek oyun verileriyle değiştirilecek — görseller public/images/games/ altına eklenecek
export const GAMES: Game[] = [
  {
    slug: "nebula-drift",
    title: "Nebula Drift",
    tagline: "Bir galaksi arası yarış deneyimi",
    description:
      "Nebula Drift, oyuncuları yıldızlararası pistlerde hız sınırlarını zorlamaya davet eden bir arcade yarış oyunudur. TODO: gerçek oyun açıklaması eklenecek.",
    coverImage: "/images/games/nebula-drift/cover.webp",
    bannerImage: "/images/games/nebula-drift/banner.webp",
    screenshots: [
      "/images/games/nebula-drift/screenshot-1.webp",
      "/images/games/nebula-drift/screenshot-2.webp",
      "/images/games/nebula-drift/screenshot-3.webp",
    ],
    genre: "Racing",
    platforms: ["PC", "PlayStation", "Xbox"],
    releaseDate: "TODO",
    features: [
      "Prosedürel olarak üretilen galaksi pistleri",
      "Çevrimiçi 12 kişilik yarışlar",
      "Gemi özelleştirme sistemi",
    ],
    storeLinks: [
      { label: "Steam", url: "#" },
      { label: "Epic Games Store", url: "#" },
    ],
  },
  {
    slug: "ironforge-legacy",
    title: "Ironforge Legacy",
    tagline: "Taktiksel fantastik strateji",
    description:
      "Ironforge Legacy, oyuncuları krallıklar kurmaya ve ordular yönetmeye çağıran derin bir strateji oyunudur. TODO: gerçek oyun açıklaması eklenecek.",
    coverImage: "/images/games/ironforge-legacy/cover.webp",
    bannerImage: "/images/games/ironforge-legacy/banner.webp",
    screenshots: [
      "/images/games/ironforge-legacy/screenshot-1.webp",
      "/images/games/ironforge-legacy/screenshot-2.webp",
    ],
    genre: "Strategy",
    platforms: ["PC"],
    releaseDate: "TODO",
    features: [
      "Dinamik diplomasi sistemi",
      "Sezonluk çok oyunculu turnuvalar",
      "Elle çizilmiş fantastik dünya haritası",
    ],
    storeLinks: [{ label: "Steam", url: "#" }],
  },
  {
    slug: "echo-protocol",
    title: "Echo Protocol",
    tagline: "Siber-punk gizlilik aksiyonu",
    description:
      "Echo Protocol, distopik bir mega şehirde geçen taktiksel bir gizlilik-aksiyon oyunudur. TODO: gerçek oyun açıklaması eklenecek.",
    coverImage: "/images/games/echo-protocol/cover.webp",
    bannerImage: "/images/games/echo-protocol/banner.webp",
    screenshots: [
      "/images/games/echo-protocol/screenshot-1.webp",
      "/images/games/echo-protocol/screenshot-2.webp",
    ],
    genre: "Action",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    releaseDate: "TODO",
    features: [
      "Zaman manipülasyonu mekanikleri",
      "Dallanan hikaye anlatımı",
      "Tam vücut motion-capture animasyon",
    ],
    storeLinks: [
      { label: "Steam", url: "#" },
      { label: "PlayStation Store", url: "#" },
    ],
  },
];

export function getGameBySlug(slug: string) {
  return GAMES.find((game) => game.slug === slug);
}
