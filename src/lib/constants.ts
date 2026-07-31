export const SITE_NAME = "Egora Games";
// TODO: custom domain doğrulanınca (Faz 7) bu değeri kontrol et
export const SITE_URL = "https://egoragames.com";
export const SITE_DESCRIPTION =
  "Egora Games is an independent studio building premium, story-driven games across PC and console platforms.";

// TODO: gerçek sosyal medya linkleri belirlenince güncelle
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/egoragames",
  linkedin: "https://linkedin.com/company/egoragames",
  youtube: "https://youtube.com/@egoragames",
  discord: "https://discord.gg/egoragames",
} as const;

// TODO: Careers, News, Press Kit sayfaları eklenince buraya geri eklenecek
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// TODO: Privacy Policy, Terms of Service sayfaları eklenince buraya geri eklenecek
export const FOOTER_LINKS: readonly { label: string; href: string }[] = [];

// TODO: gerçek iletişim bilgileri belirlenince güncelle
export const CONTACT_INFO = {
  email: "hello@egoragames.com",
  address: "TODO: şirket adresi",
} as const;
