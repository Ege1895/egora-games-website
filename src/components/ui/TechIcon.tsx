// Basitleştirilmiş, tanınabilir marka ikonları (pixel-perfect logo yeniden
// üretimi değil, "built with" rozetleri için elle çizilmiş vektör yaklaşımları).
// Her ikon kendi marka rengini taşıyor; currentColor kullanılmıyor çünkü
// tanınırlık renkten geliyor (Flutter mavisi, Firebase turuncusu vb.).

export type TechName =
  | "Flutter"
  | "Unity"
  | "Firebase"
  | "AdMob"
  | "iOS"
  | "Android";

function FlutterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="#42A5F5" d="M14.4 2 5 11.4 8.4 14.8 21.2 2Z" />
      <path fill="#0D47A1" d="M14.4 22 21.2 22 12.4 13.2 8.9 16.7Z" />
      <path fill="#42A5F5" d="M8.9 16.7 12.4 13.2 8.9 9.7 5.4 13.2Z" opacity="0.85" />
    </svg>
  );
}

function UnityIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="currentColor"
        d="M12 1.6 20.4 6.4V17.6L12 22.4 3.6 17.6V6.4L12 1.6ZM12 4.1 6.1 7.5 12 10.9 17.9 7.5 12 4.1ZM6 9.4V16.2L11 13.4V6.6L6 9.4ZM13 6.6V13.4L18 16.2V9.4L13 6.6ZM12 15.1 6.6 18.1 12 19.9 17.4 18.1 12 15.1Z"
      />
    </svg>
  );
}

function FirebaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="#FFA000" d="M4.5 19 7 3.2c.1-.6.9-.7 1.2-.2l2.3 4.4-6 11.6Z" />
      <path fill="#FFCA28" d="M4.5 19 8.9 11.4 12 15.5Z" />
      <path fill="#FFA000" d="M15.2 8.2 12 15.5 8.9 11.4 13.9 2.5c.2-.5.9-.5 1.1 0Z" />
      <path fill="#F57C00" d="M19.5 17.8 15.2 8.2 4.5 19 11.5 22.6c.3.2.7.2 1 0Z" />
    </svg>
  );
}

function AdMobIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#EA4335" />
      <path fill="#fff" d="M9 7 17 12 9 17Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="currentColor"
        d="M16.5 1.8c.1 1.1-.3 2.2-1 3-.7.9-1.9 1.5-3 1.4-.1-1 .4-2.2 1-2.9.8-.9 2-1.5 3-1.5ZM19.8 17.2c-.4 1-.9 1.9-1.6 2.8-.9 1.2-1.9 2.7-3.2 2.7-1.2 0-1.5-.8-3.1-.8-1.6 0-1.9.8-3.1.8-1.3 0-2.2-1.3-3.2-2.6C3.9 18.2 2.9 14.7 4.3 12c.7-1.4 2-2.3 3.4-2.3 1.2 0 2 .8 3 .8 1 0 1.6-.8 3.1-.8 1.1 0 2.3.6 3.1 1.6-2.8 1.5-2.3 5.5.9 5.9Z"
      />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="#3DDC84"
        d="M6.5 9.5v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0ZM15.5 9.5v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0ZM8.2 9h7.6v7.2a1 1 0 0 1-1 1h-.4v2.1a1 1 0 0 1-2 0v-2.1h-.8v2.1a1 1 0 0 1-2 0v-2.1h-.4a1 1 0 0 1-1-1V9ZM8.6 5.8 7.4 3.9a.4.4 0 1 1 .7-.4l1.2 2a5.9 5.9 0 0 1 4.9 0l1.3-2a.4.4 0 1 1 .7.4l-1.2 1.9a5 5 0 0 1 2.5 4H6.1a5 5 0 0 1 2.5-4ZM9.7 6.9a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM14.5 6.9a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2Z"
      />
    </svg>
  );
}

export const TECH_ICONS: Record<TechName, React.ReactNode> = {
  Flutter: <FlutterIcon />,
  Unity: <UnityIcon />,
  Firebase: <FirebaseIcon />,
  AdMob: <AdMobIcon />,
  iOS: <AppleIcon />,
  Android: <AndroidIcon />,
};
