export const SITE_NAME = "Egora Games";
// TODO: custom domain doğrulanınca (Faz 7) bu değeri kontrol et
export const SITE_URL = "https://egoragames.com";
// SEO meta verileri (title/description/OG) her zaman İngilizce kalır — site
// içeriği EN/TR arasında istemci tarafında değişse de arama motorlarının
// gördüğü statik HTML tek dilde üretiliyor.
export const SITE_DESCRIPTION =
  "Egora Games is an independent studio building premium, story-driven mobile games.";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/egora-games",
  youtube: "https://youtube.com/@egoragames",
  instagram: "https://www.instagram.com/egoragames/",
} as const;

// TODO: Privacy Policy, Terms of Service sayfaları eklenince buraya geri eklenecek
export const FOOTER_LINKS: readonly { label: string; href: string }[] = [];

// Adres artık lokalizasyon tablosunda (Dictionary.companyAddress) — EN/TR arasında değişir
export const CONTACT_INFO = {
  email: "egoragames@gmail.com",
} as const;

// Cloudflare Worker (workers/contact-form) → Brevo API üzerinden mail gönderir
export const CONTACT_API_ENDPOINT = "/api/contact";
// Aynı worker, Brevo Contacts API'siyle kişiyi bir listeye ekler (e-posta göndermez)
export const NEWSLETTER_API_ENDPOINT = "/api/newsletter";
