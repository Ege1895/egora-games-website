import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Egora Games for press, partnerships, or general inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ])} />
      <ContactSection />
    </main>
  );
}
