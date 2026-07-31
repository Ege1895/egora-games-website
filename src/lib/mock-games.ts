import { Game } from "@/types";

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
    // App Store: production/yayında. Google Play: inceleme sürecinde (url yok -> Coming Soon).
    storeLinks: [
      { label: "App Store", url: "https://apps.apple.com/app/id6779168759" },
      { label: "Google Play" },
    ],
  },
  {
    slug: "the-process",
    title: "The Process",
    tagline: "Bağla, büyüt, reboot et.",
    description:
      "The Process, steampunk bir fabrika panosunda üretim istasyonlarını boru hatlarıyla birbirine bağlayıp üretim zincirleri kurduğun bir idle simülasyon. Üretimini büyüt, istasyonlarını yükselt, yeni istasyon tiplerinin kilidini aç — ve belirli bir eşiğe ulaştığında 'reboot' yaparak kalıcı bir çarpan kazan, bir sonraki turda çok daha hızlı büyü. Oyun bilinçli olarak %60 idle / %40 aktif dengesinde tasarlandı: ekrana kilitlenmene gerek yok, ama dokunuşların da boşa gitmiyor. Sabırlı büyümeyi ödüllendiren, dokunman gerektiğinde orada olan ama gerekmediğinde seni rahat bırakan bir oyun.",
    // TODO: gerçek ekran görüntüleri/key art eklenince değiştirilecek — kullanıcıdan hangi görsellerin kullanılabileceği soruldu
    coverImage: "/images/games/the-process/cover.webp",
    bannerImage: "/images/games/the-process/banner.webp",
    screenshots: [],
    genre: "Idle Simulation",
    platforms: ["Mobile"],
    releaseDate: "Yakında",
    features: [
      "İki katmanlı prestij: Reboot ile büyü, ileri seviyede Ascension ile kalıcı 'Aether' kaynağı ve özel Aether Conduit node'unun kilidini aç",
      "Blueprint Perk Ağacı — reboot'larda kazanılan puanlarla doldurulan 3 dal, 4 kademelik kalıcı yetenek ağacı",
      "Günlük Kontrat Panosu ve haftalık Foreman's Trial ile kısa vadeli hedefler ve ek ödüller",
      "Vardiya Defteri ile günlük giriş serisi, Achievement ve Node Mastery ile uzun vadeli ilerleme",
      "Liderlik tablosunda diğer oyuncularla üretimini karşılaştır",
      "Kazanılabilir boru renk paletleri ve node skinleri — satılmaz, yalnızca oyun içi başarımla açılır",
      "Fabrika Defteri'nde detaylı üretim istatistikleri",
      "Saygılı gelir modeli: rewarded reklamlar tamamen isteğe bağlı, ilerleme satın alma paketi yok, günde en fazla 2 bildirim",
    ],
    // Her iki mağazada da test sürecinde (url yok -> Coming Soon).
    storeLinks: [{ label: "App Store" }, { label: "Google Play" }],
  },
];

export function getGameBySlug(slug: string) {
  return GAMES.find((game) => game.slug === slug);
}
