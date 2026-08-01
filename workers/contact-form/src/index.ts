export interface Env {
  BREVO_API_KEY: string;
}

const RECIPIENT_EMAIL = "egoragames@gmail.com";
const SENDER_EMAIL = "egoragames@gmail.com";
const SENDER_NAME = "Egora Games Website";
const ALLOWED_ORIGIN = "https://egoragames.com";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function corsHeaders(): HeadersInit {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders() },
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(fields: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  const name = escapeHtml(fields.name);
  const email = escapeHtml(fields.email);
  const subject = escapeHtml(fields.subject || "(Konu belirtilmedi)");
  const message = escapeHtml(fields.message).replace(/\n/g, "<br>");
  const initial = fields.name.trim().charAt(0).toUpperCase() || "E";
  const date = new Date().toLocaleString("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `<!DOCTYPE html>
<html lang="tr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:0; background-color:#0a0a0f; font-family:'Segoe UI', Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0f; padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#12121a; border-radius:14px; overflow:hidden; box-shadow:0 8px 30px rgba(0,0,0,0.4);">
        <tr><td style="background:linear-gradient(135deg,#0076b2 0%,#00a9ff 100%); padding:34px 40px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            <td>
              <div style="font-size:12px; letter-spacing:3px; color:#ffd8cc; font-weight:700; text-transform:uppercase;">EGORAGAMES.COM &middot; İletişim Formu</div>
              <div style="font-size:26px; color:#ffffff; font-weight:800; margin-top:6px;">Yeni Bir Mesajın Var 🎮</div>
            </td>
            <td align="right" valign="top"><div style="display:inline-block; border:2px solid #ff6b4a; color:#ffffff; font-weight:800; font-size:16px; padding:10px 14px; border-radius:10px;">EGORA</div></td>
          </tr></table>
        </td></tr>
        <tr><td style="background-color:#1a1a24; padding:16px 40px; border-bottom:1px solid #24242e;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="width:46px; height:46px; background:linear-gradient(135deg,#ff6b4a,#ff8567); border-radius:50%; text-align:center; vertical-align:middle; color:#ffffff; font-size:20px; font-weight:800;">${initial}</td>
            <td style="padding-left:14px;">
              <div style="font-size:16px; font-weight:700; color:#f5f5f7;">${name}</div>
              <div style="font-size:13px; color:#a1a1aa;">${date}</div>
            </td>
          </tr></table>
        </td></tr>
        <tr><td style="padding:32px 40px;">
          <div style="font-size:11px; letter-spacing:1.5px; color:#71717a; font-weight:700; text-transform:uppercase; margin-bottom:10px;">Gönderen Bilgileri</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:26px;">
            <tr><td style="padding:12px 16px; background-color:#1a1a24; border-radius:10px 10px 0 0; border-bottom:1px solid #24242e;">
              <span style="font-size:13px; color:#71717a;">İsim</span>
              <div style="font-size:15px; color:#f5f5f7; font-weight:600; margin-top:2px;">${name}</div>
            </td></tr>
            <tr><td style="padding:12px 16px; background-color:#1a1a24; border-radius:0; border-bottom:1px solid #24242e;">
              <span style="font-size:13px; color:#71717a;">E-posta</span>
              <div style="font-size:15px; margin-top:2px;"><a href="mailto:${email}" style="color:#00a9ff; font-weight:600; text-decoration:none;">${email}</a></div>
            </td></tr>
            <tr><td style="padding:12px 16px; background-color:#1a1a24; border-radius:0 0 10px 10px;">
              <span style="font-size:13px; color:#71717a;">Konu</span>
              <div style="font-size:15px; color:#f5f5f7; font-weight:600; margin-top:2px;">${subject}</div>
            </td></tr>
          </table>
          <div style="font-size:11px; letter-spacing:1.5px; color:#71717a; font-weight:700; text-transform:uppercase; margin-bottom:10px;">Mesaj İçeriği</div>
          <div style="background-color:#1a1a24; border:1px solid #24242e; border-left:4px solid #ff6b4a; border-radius:10px; padding:20px 22px; font-size:15px; line-height:1.7; color:#f5f5f7;">${message}</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;"><tr><td align="center">
            <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(fields.subject || "Mesajınız")}" style="display:inline-block; background:linear-gradient(135deg,#0076b2,#00a9ff); color:#ffffff; font-weight:800; font-size:15px; text-decoration:none; padding:14px 38px; border-radius:50px;">↩ Hemen Yanıtla</a>
          </td></tr></table>
        </td></tr>
        <tr><td style="background-color:#0a0a0f; padding:22px 40px; text-align:center;">
          <div style="font-size:13px; color:#71717a;">Bu mesaj <a href="https://egoragames.com" style="color:#ff6b4a; text-decoration:none;">egoragames.com</a> iletişim formundan gönderildi.</div>
          <div style="font-size:11px; color:#52525b; margin-top:6px;">Yanıtla'ya bastığında doğrudan gönderene cevap verirsin.</div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405);
    }

    let data: Record<string, string>;
    try {
      const contentType = request.headers.get("Content-Type") || "";
      if (contentType.includes("application/json")) {
        data = await request.json();
      } else {
        const formData = await request.formData();
        data = Object.fromEntries(
          Array.from(formData.entries()).map(([k, v]) => [k, String(v)])
        );
      }
    } catch {
      return jsonResponse({ error: "Geçersiz istek gövdesi." }, 400);
    }

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const subject = (data.subject || "").trim();
    const message = (data.message || "").trim();

    if (!name || !message || !EMAIL_PATTERN.test(email)) {
      return jsonResponse(
        { error: "Lütfen tüm alanları doğru şekilde doldurun." },
        400
      );
    }

    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: SENDER_NAME, email: SENDER_EMAIL },
        to: [{ email: RECIPIENT_EMAIL }],
        replyTo: { email, name },
        subject: `🎮 egoragames.com — Yeni mesaj: ${name}${
          subject ? " — " + subject : ""
        }`,
        htmlContent: buildEmailHtml({ name, email, subject, message }),
      }),
    });

    if (!brevoResponse.ok) {
      const errorBody = await brevoResponse.text();
      console.error("Brevo error:", brevoResponse.status, errorBody);
      return jsonResponse(
        { error: "Mesaj gönderilemedi, lütfen daha sonra tekrar deneyin." },
        502
      );
    }

    return jsonResponse({ success: true });
  },
};
