import Image from "next/image";

// Gerçek marka logoları (Wikimedia Commons'daki resmi dosyalardan sadece
// simge/ikon kısmı kırpılıp optimize edildi — bkz. public/images/tech).
export type TechName =
  | "Flutter"
  | "Unity"
  | "Firebase"
  | "AdMob"
  | "iOS"
  | "Android";

const TECH_ICON_SRC: Record<TechName, string> = {
  Flutter: "/images/tech/flutter.png",
  Unity: "/images/tech/unity.png",
  Firebase: "/images/tech/firebase.png",
  AdMob: "/images/tech/admob.png",
  iOS: "/images/tech/ios.png",
  Android: "/images/tech/android.png",
};

// Apple ve Unity logoları siyah/gri — koyu temadaki chip zemininde kaybolur.
// Her ikon, temadan bağımsız her zaman okunur kalması için küçük bir beyaz
// daire üzerine oturtuluyor.
export function TechIcon({ name }: { name: TechName }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white p-1">
      <Image
        src={TECH_ICON_SRC[name]}
        alt=""
        aria-hidden
        width={96}
        height={96}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
