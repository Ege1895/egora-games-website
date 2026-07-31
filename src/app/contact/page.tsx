import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

// TODO: Faz 4'te gerçek metadata (description, OG, Twitter Card) ile genişletilecek
export const metadata: Metadata = {
  title: "Contact — Egora Games",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ContactSection />
    </main>
  );
}
