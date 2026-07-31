import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types";
import { Card } from "@/components/ui/Card";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col gap-4 overflow-hidden p-0">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-background">
          <Image
            src={item.coverImage}
            alt={item.title}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-6 pt-0">
          <span className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
            {item.publishedAt}
          </span>
          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
          <p className="text-sm text-foreground-muted">{item.excerpt}</p>
        </div>
      </Card>
    </Link>
  );
}
