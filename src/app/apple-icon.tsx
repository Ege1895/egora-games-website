import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// icon.tsx ile aynı "E" marka işareti, Apple touch icon boyutunda (iOS zaten
// köşeleri kendi squircle maskesiyle yuvarlıyor, bu yüzden borderRadius yok).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        }}
      >
        <svg width="108" height="108" viewBox="0 0 24 24">
          <path
            fill="#ffffff"
            d="M4 3h15v4H8.4v4.4H18v4H8.4V19H19v4H4Z"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
