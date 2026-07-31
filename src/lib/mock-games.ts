import { Game } from "@/types";

// TODO: kalan mock oyun verileriyle değiştirilecek — görseller public/images/games/ altına eklenecek
export const GAMES: Game[] = [
  {
    slug: "nublox",
    title: "Nublox",
    tagline: "Patlaman gereken an, senin elinde",
    description:
      "Nublox, klasik blok bulmaca (block blast) formülüne özgün bir mekanik ekliyor: satır ya da sütun dolduğunda bloklar kendiliğinden patlamıyor. Blast Mode devreye girdiğinde, kısa bir süre içinde dolu blokları elinle patlatman gerekiyor — hem strateji hem refleks bir arada. Bazı bloklar iki kez patlatılması gereken 'katılaşmış' bloklara dönüşüyor, ızgara da ilerledikçe 4x4'ten 8x8'e büyüyor. Ücretsiz indirilebilir.",
    // TODO: gerçek ekran görüntüleri/key art eklenince değiştirilecek
    coverImage: "/images/games/nublox/cover.webp",
    bannerImage: "/images/games/nublox/banner.webp",
    screenshots: [
      "/images/games/nublox/screenshot-1.webp",
      "/images/games/nublox/screenshot-2.webp",
      "/images/games/nublox/screenshot-3.webp",
    ],
    genre: "Block Puzzle",
    platforms: ["Mobile"],
    releaseDate: "Yayında",
    features: [
      "SURGE 🔥 — Blast Mode'da parmağını bloklar üzerinde gezdirerek zincirleme patlatma yap",
      "FREEZE ❄️ — Blast süresini birkaç saniye durdurup nefes alacak zaman kazan",
      "NOVA ✨ — Tek dokunuşla tüm tahtayı temizleyen en güçlü hamle",
      "7 günlük ödül serisi — kaçırırsan reklam ya da güçle serini koru",
      "Günlük Meydan Okuma — herkes aynı gün aynı bulmacayı çözüyor",
      "Bronz'dan Elmas'a 5 ligli haftalık sıralama sistemi",
      "Global, günlük, haftalık ve lig bazlı liderlik tabloları — ilerleme cihazlar arası senkronize",
    ],
    // TODO: Google Play mağaza linki eklenecek (paket adı: com.egoragames.nublox)
    storeLinks: [
      { label: "App Store", url: "https://apps.apple.com/app/id6779168759" },
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
