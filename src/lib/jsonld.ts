import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Game } from "@/types";

// Yapılandırılmış veri her zaman İngilizce üretiliyor — site EN/TR arasında
// yalnızca istemci tarafında (client-side) geçiş yapıyor, arama motorlarının
// gördüğü statik HTML her zaman İngilizce (bkz. buildMetadata ve
// SITE_DESCRIPTION üzerindeki not).

export function organizationJsonLd(sameAs: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/icon.png`,
    sameAs,
  };
}

// Not: kasıtlı olarak SearchAction (sitelinks search box) eklenmedi — sitede
// gerçek bir arama özelliği yok, olmayan bir işlevi şemada iddia etmek Google
// Search Console'da "unverifiable" uyarısına yol açar.
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

function gameOperatingSystems(game: Game): string {
  const systems: string[] = [];
  if (game.storeLinks.some((link) => link.label === "App Store")) systems.push("iOS");
  if (game.storeLinks.some((link) => link.label === "Google Play")) systems.push("Android");
  return systems.length > 0 ? systems.join(", ") : "iOS, Android";
}

export function videoGameJsonLd(game: Game) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.description.en,
    genre: game.genre.en,
    url: `${SITE_URL}/games/${game.slug}`,
    image: `${SITE_URL}${game.coverImage}`,
    gamePlatform: game.platforms,
  };
}

// Not: aggregateRating/review kasıtlı olarak eklenmedi — sitedeki 5 yıldız
// gösterimi gerçek kullanıcı puanlarına dayanmıyor (sabit/dekoratif). Sahte ya
// da doğrulanamayan puan verisi Google'ın yapılandırılmış veri kurallarını
// ihlal eder ve rich result cezasına yol açabilir.
export function softwareApplicationJsonLd(game: Game) {
  const liveStoreLink = game.storeLinks.find((link) => link.url);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: game.title,
    applicationCategory: "GameApplication",
    operatingSystem: gameOperatingSystems(game),
    url: liveStoreLink?.url ?? `${SITE_URL}/games/${game.slug}`,
    image: `${SITE_URL}${game.coverImage}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: liveStoreLink
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
    },
  };
}

export function personJsonLd(member: { name: string; role: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
