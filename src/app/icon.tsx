import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// "Egora Games" markasının "E"si — egekaya.com gibi sitelerdeki geometrik
// tek-harf favicon markalarına benzer, düz metin yerine vektör path'i
// kullanan bir logo işareti (Cobalt Pulse mavi zemin üzerinde beyaz E).
export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
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
