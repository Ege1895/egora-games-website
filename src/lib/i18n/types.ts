export type Locale = "en" | "tr";

export type LocalizedText = {
  en: string;
  tr: string;
};

export type Dictionary = {
  companyAddress: string;
  nav: {
    home: string;
    games: string;
    about: string;
    contact: string;
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
  };
  footer: {
    newsletterTitle: string;
    newsletterDescription: string;
    emailSrLabel: string;
    emailPlaceholder: string;
    subscribe: string;
    subscribing: string;
    subscribeSuccess: string;
    subscribeGenericError: string;
    tagline: string;
    navigationHeading: string;
    contactHeading: string;
    socialHeading: string;
    rightsReserved: string; // contains {year} placeholder
  };
  hero: {
    badge: string;
    headline: string;
    description: string;
    exploreGames: string;
    aboutStudio: string;
    statGamesLabel: string;
    statPlatformsLabel: string;
    statFoundedLabel: string;
    keyArtPlaceholder: string;
  };
  featuredGames: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
  };
  gamesPage: {
    eyebrow: string;
    title: string;
    description: string;
  };
  gameShowcase: {
    readMore: string;
    comingSoon: string;
    ratingSrLabel: string;
    storeSublabelAppStore: string;
    storeSublabelGooglePlay: string;
    storeSublabelGeneric: string;
  };
  whyEgora: {
    eyebrow: string;
    title: string;
    description: string;
    reasons: { title: string; description: string }[];
  };
  gameDetail: {
    aboutGame: string;
    features: string;
    trailer: string;
    screenshots: string;
  };
  aboutHero: {
    badge: string;
    headline: string;
    description: string;
  };
  missionVision: {
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
  };
  companyValues: {
    eyebrow: string;
    title: string;
    description: string;
    values: { title: string; description: string }[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    items: { year: string; title: string; description: string }[];
  };
  technology: {
    badge: string;
    title: string;
    description: string;
  };
  team: {
    eyebrow: string;
    title: string;
    description: string;
    members: { name: string; role: string }[];
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    followUs: string;
    formNameLabel: string;
    formNamePlaceholder: string;
    formEmailLabel: string;
    formEmailPlaceholder: string;
    formSubjectLabel: string;
    formSubjectPlaceholder: string;
    formMessageLabel: string;
    formMessagePlaceholder: string;
    sendMessage: string;
    sending: string;
    successTitle: string;
    successDescription: string;
    sendAnother: string;
    genericError: string;
  };
  platform: {
    PC: string;
    PlayStation: string;
    Xbox: string;
    "Nintendo Switch": string;
    Mobile: string;
  };
};
