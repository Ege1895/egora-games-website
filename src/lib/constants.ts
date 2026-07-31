export const SITE_NAME = "Egora Games";

// TODO: gerçek sosyal medya linkleri belirlenince güncelle
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/egoragames",
  linkedin: "https://linkedin.com/company/egoragames",
  youtube: "https://youtube.com/@egoragames",
  discord: "https://discord.gg/egoragames",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
  { label: "Press Kit", href: "/press-kit" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
] as const;

// TODO: gerçek iletişim bilgileri belirlenince güncelle
export const CONTACT_INFO = {
  email: "hello@egoragames.com",
  address: "TODO: şirket adresi",
} as const;
