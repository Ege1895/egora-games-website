import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import { ThemeProvider } from "@/lib/theme/ThemeContext";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

// Hydration öncesi senkron çalışır, tema flaşını önler — ThemeProvider'ın
// mount-sonrası localStorage okuması ile aynı anahtarı (egora-theme) paylaşır.
const themeInitScript = `try{var t=localStorage.getItem("egora-theme");if(t==="light")document.documentElement.dataset.theme="light";}catch(e){}`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

// Not: Analytics Cloudflare zone-level Web Analytics (RUM) ile toplanıyor —
// proxied domain için otomatik, ek script gerekmiyor.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeProvider>
          <LocaleProvider>
            <Navbar />
            {children}
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
