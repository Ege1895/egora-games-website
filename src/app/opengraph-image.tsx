import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link paylaşımlarında (WhatsApp, Twitter/X, Discord vb.) görünen kart artık
// düz metin yerine gerçek "egora GAMES" logosunu kullanıyor. ImageResponse
// build-time'da çalıştığı için görseli data URI olarak gömüyoruz.
export default async function OpengraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/brand/logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={720} height={366} />
      </div>
    ),
    { ...size }
  );
}
