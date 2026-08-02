import { Game } from "@/types";

export const GAMES: Game[] = [
  {
    slug: "nublox",
    title: "Nublox",
    tagline: {
      en: "The moment to blast is in your hands",
      tr: "Patlaman gereken an, senin elinde",
    },
    description: {
      en: "Nublox adds a fresh twist to the classic block-blast formula: when a row or column fills up, the blocks don't clear themselves. Once Blast Mode kicks in, you have to manually clear the filled blocks within a short time limit — equal parts strategy and reflex. Some blocks become 'hardened' and need to be cleared twice, and the grid grows from 4x4 to 8x8 as you progress. Free to download.",
      tr: "Nublox, klasik blok bulmaca (block blast) formülüne özgün bir mekanik ekliyor: satır ya da sütun dolduğunda bloklar kendiliğinden patlamıyor. Blast Mode devreye girdiğinde, kısa bir süre içinde dolu blokları elinle patlatman gerekiyor — hem strateji hem refleks bir arada. Bazı bloklar iki kez patlatılması gereken 'katılaşmış' bloklara dönüşüyor, ızgara da ilerledikçe 4x4'ten 8x8'e büyüyor. Ücretsiz indirilebilir.",
    },
    // TODO: gerçek ekran görüntüleri/key art eklenince değiştirilecek
    coverImage: "/images/games/nublox/cover.webp",
    bannerImage: "/images/games/nublox/banner.webp",
    screenshots: [
      "/images/games/nublox/screenshot-1.webp",
      "/images/games/nublox/screenshot-2.webp",
      "/images/games/nublox/screenshot-3.webp",
    ],
    genre: { en: "Block Puzzle", tr: "Blok Bulmaca" },
    platforms: ["Mobile"],
    features: [
      {
        en: "SURGE 🔥 — Chain-clear blocks by dragging your finger across them during Blast Mode",
        tr: "SURGE 🔥 — Blast Mode'da parmağını bloklar üzerinde gezdirerek zincirleme patlatma yap",
      },
      {
        en: "FREEZE ❄️ — Pause the Blast timer for a few seconds to catch your breath",
        tr: "FREEZE ❄️ — Blast süresini birkaç saniye durdurup nefes alacak zaman kazan",
      },
      {
        en: "NOVA ✨ — The most powerful move: clear the entire board with a single tap",
        tr: "NOVA ✨ — Tek dokunuşla tüm tahtayı temizleyen en güçlü hamle",
      },
      {
        en: "7-day reward streak — protect your streak with an ad or a power if you miss a day",
        tr: "7 günlük ödül serisi — kaçırırsan reklam ya da güçle serini koru",
      },
      {
        en: "Daily Challenge — everyone solves the same puzzle on the same day",
        tr: "Günlük Meydan Okuma — herkes aynı gün aynı bulmacayı çözüyor",
      },
      {
        en: "5-league weekly ranking system, from Bronze to Diamond",
        tr: "Bronz'dan Elmas'a 5 ligli haftalık sıralama sistemi",
      },
      {
        en: "Global, daily, weekly, and league leaderboards — progress syncs across devices",
        tr: "Global, günlük, haftalık ve lig bazlı liderlik tabloları — ilerleme cihazlar arası senkronize",
      },
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
    tagline: {
      en: "Connect, grow, reboot.",
      tr: "Bağla, büyüt, reboot et.",
    },
    description: {
      en: "The Process is an idle simulation where you connect production stations with pipes on a steampunk factory board to build production chains. Grow your output, upgrade your stations, unlock new station types — and once you hit a certain threshold, 'reboot' to earn a permanent multiplier and grow even faster next run. The game is deliberately balanced at 60% idle / 40% active: you don't have to stay glued to the screen, but your taps aren't wasted either. A game that's there when you need to tap, and leaves you alone when you don't.",
      tr: "The Process, steampunk bir fabrika panosunda üretim istasyonlarını boru hatlarıyla birbirine bağlayıp üretim zincirleri kurduğun bir idle simülasyon. Üretimini büyüt, istasyonlarını yükselt, yeni istasyon tiplerinin kilidini aç — ve belirli bir eşiğe ulaştığında 'reboot' yaparak kalıcı bir çarpan kazan, bir sonraki turda çok daha hızlı büyü. Oyun bilinçli olarak %60 idle / %40 aktif dengesinde tasarlandı: ekrana kilitlenmene gerek yok, ama dokunuşların da boşa gitmiyor. Sabırlı büyümeyi ödüllendiren, dokunman gerektiğinde orada olan ama gerekmediğinde seni rahat bırakan bir oyun.",
    },
    // TODO: gerçek ekran görüntüleri/key art eklenince değiştirilecek — kullanıcıdan hangi görsellerin kullanılabileceği soruldu
    coverImage: "/images/games/the-process/cover.webp",
    bannerImage: "/images/games/the-process/banner.webp",
    screenshots: [],
    genre: { en: "Idle Simulation", tr: "Idle Simülasyon" },
    platforms: ["Mobile"],
    features: [
      {
        en: "Two-tier prestige: grow with Reboot, then unlock permanent 'Aether' currency and the exclusive Aether Conduit node through Ascension at the endgame",
        tr: "İki katmanlı prestij: Reboot ile büyü, ileri seviyede Ascension ile kalıcı 'Aether' kaynağı ve özel Aether Conduit node'unun kilidini aç",
      },
      {
        en: "Blueprint Perk Tree — a permanent skill tree with 3 branches and 4 tiers, filled in with points earned from reboots",
        tr: "Blueprint Perk Ağacı — reboot'larda kazanılan puanlarla doldurulan 3 dal, 4 kademelik kalıcı yetenek ağacı",
      },
      {
        en: "Daily Contract Board and the weekly Foreman's Trial for short-term goals and bonus rewards",
        tr: "Günlük Kontrat Panosu ve haftalık Foreman's Trial ile kısa vadeli hedefler ve ek ödüller",
      },
      {
        en: "Shift Log tracks your daily login streak; Achievements and Node Mastery drive long-term progression",
        tr: "Vardiya Defteri ile günlük giriş serisi, Achievement ve Node Mastery ile uzun vadeli ilerleme",
      },
      {
        en: "Compare your output with other players on the leaderboard",
        tr: "Liderlik tablosunda diğer oyuncularla üretimini karşılaştır",
      },
      {
        en: "Earnable pipe color palettes and node skins — never sold, only unlocked through in-game achievements",
        tr: "Kazanılabilir boru renk paletleri ve node skinleri — satılmaz, yalnızca oyun içi başarımla açılır",
      },
      {
        en: "Factory Ledger gives you detailed production statistics",
        tr: "Fabrika Defteri'nde detaylı üretim istatistikleri",
      },
      {
        en: "A respectful monetization model: rewarded ads are entirely optional, there's no progress-purchase pack, and notifications are capped at 2 per day",
        tr: "Saygılı gelir modeli: rewarded reklamlar tamamen isteğe bağlı, ilerleme satın alma paketi yok, günde en fazla 2 bildirim",
      },
    ],
    // Her iki mağazada da test sürecinde (url yok -> Coming Soon).
    storeLinks: [{ label: "App Store" }, { label: "Google Play" }],
  },
];

export function getGameBySlug(slug: string) {
  return GAMES.find((game) => game.slug === slug);
}

export function getGameStatus(game: Game): "live" | "comingSoon" {
  return game.storeLinks.some((link) => link.url) ? "live" : "comingSoon";
}
