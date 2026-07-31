import { NewsItem } from "@/types";

// TODO: gerçek haber/blog içerikleriyle değiştirilecek — ileride CMS entegrasyonuna açık (bkz. Faz 7 notları)
export const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "egora-games-kurulus-hikayesi",
    title: "Egora Games'in kuruluş hikayesi",
    excerpt: "Stüdyomuzun vizyonu ve ilk günlerine dair kısa bir bakış.",
    content: "TODO: gerçek içerik eklenecek.",
    coverImage: "/images/news/founding-story.webp",
    publishedAt: "TODO",
    author: "Egora Games Ekibi",
    tags: ["Şirket"],
  },
  {
    slug: "nebula-drift-gelistirme-guncellemesi",
    title: "Nebula Drift geliştirme güncellemesi",
    excerpt: "Yaklaşan yarış oyunumuzdan son görüntüler ve notlar.",
    content: "TODO: gerçek içerik eklenecek.",
    coverImage: "/images/news/nebula-drift-update.webp",
    publishedAt: "TODO",
    author: "Egora Games Ekibi",
    tags: ["Oyun Güncellemesi"],
  },
  {
    slug: "ekibimize-yeni-katilimlar",
    title: "Ekibimize yeni katılımlar",
    excerpt: "Büyüyen stüdyomuza katılan yeni yeteneklerle tanışın.",
    content: "TODO: gerçek içerik eklenecek.",
    coverImage: "/images/news/team-growth.webp",
    publishedAt: "TODO",
    author: "Egora Games Ekibi",
    tags: ["Şirket", "Kariyer"],
  },
];

export function getNewsBySlug(slug: string) {
  return NEWS_ITEMS.find((item) => item.slug === slug);
}
