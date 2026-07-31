import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO: gerçek key art/marka görseliyle değiştirilecek — bu sadece placeholder OG görseli
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1530 50%, #0a0a0f 100%)",
          color: "#ffffff",
          fontSize: 80,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        {SITE_NAME}
      </div>
    ),
    { ...size }
  );
}
