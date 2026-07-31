# Deployment — Cloudflare + GitHub Pages Kurulumu

Bu dosya kod değildir — deploy tamamlandıktan sonra kullanıcının (manuel olarak)
Cloudflare tarafında yapması gereken adımları anlatır. GitHub Pages tarafı zaten
`.github/workflows/deploy.yml` ile otomatik: her `main` push'unda build alınıp
yayınlanıyor.

## Ön koşul

- Domain: `egoragames.com` (bkz. `public/CNAME`)
- Repo: [egora-games-website](https://github.com/Ege1895/egora-games-website)
- GitHub Pages Source: **GitHub Actions** olarak ayarlandı (Faz 6'da yapıldı)

---

## 1. Domain'i Cloudflare'e ekle

1. [Cloudflare dashboard](https://dash.cloudflare.com)'a giriş yap.
2. "Add a Site" ile `egoragames.com` domain'ini ekle.
3. Cloudflare'in verdiği nameserver'ları (örn. `xxx.ns.cloudflare.com`,
   `yyy.ns.cloudflare.com`) not al.
4. Domain'in kayıtlı olduğu registrar'a (GoDaddy, Namecheap, vb.) git ve
   domain'in nameserver ayarlarını Cloudflare'in verdiği nameserver'larla
   değiştir.
5. Nameserver değişikliğinin yayılması birkaç dakikadan 24 saate kadar
   sürebilir — Cloudflare dashboard'da "Active" durumunu bekle.

## 2. DNS kayıtlarını ekle

GitHub Pages'in kök domain için kullandığı 4 sabit A kaydı IP'si:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Cloudflare DNS sekmesinde:

| Type  | Name | Content              | Proxy status   |
| ----- | ---- | --------------------- | -------------- |
| A     | @    | 185.199.108.153        | Proxied (turuncu bulut) |
| A     | @    | 185.199.109.153        | Proxied |
| A     | @    | 185.199.110.153        | Proxied |
| A     | @    | 185.199.111.153        | Proxied |
| CNAME | www  | ege1895.github.io      | Proxied |

> Not: GitHub kullanıcı adı `Ege1895` — `www` CNAME kaydı
> `ege1895.github.io` (küçük harf) şeklinde olmalı.

## 3. SSL/TLS modunu ayarla

Cloudflare dashboard → **SSL/TLS** → **Overview**:

- Mod: **Full** seç (Flexible DEĞİL).
- Flexible modu GitHub Pages ile birlikte kullanılırsa yönlendirme
  döngüsüne (redirect loop) sebep olabilir çünkü GitHub Pages zaten kendi
  HTTPS sertifikasını sunuyor.

## 4. GitHub repo tarafında custom domain doğrulaması

1. GitHub repo → **Settings** → **Pages**.
2. "Custom domain" alanına `egoragames.com` yaz ve kaydet (bu adım
   `public/CNAME` dosyası zaten repoda olduğu için otomatik doldurulmuş
   olabilir).
3. GitHub, domain'in doğru DNS'e işaret ettiğini algılayınca yeşil tik ile
   "DNS check successful" gösterir. Bu birkaç dakika sürebilir.
4. Doğrulama tamamlandıktan sonra **"Enforce HTTPS"** kutucuğunu işaretle.
   Bu kutucuk, DNS/SSL sertifikası hazır olmadan görünmeyebilir — hazır
   olunca tekrar kontrol et.

## 5. Doğrulama

- `https://egoragames.com` adresine giderek sitenin yüklendiğini kontrol et.
- `https://www.egoragames.com` adresinin de çalıştığını (veya
  `egoragames.com`'a yönlendiğini) kontrol et.
- Tarayıcıda kilit ikonunu kontrol ederek SSL sertifikasının geçerli
  olduğundan emin ol.

---

## Sorun giderme

- **"Too many redirects" hatası:** SSL/TLS modu muhtemelen "Flexible" —
  "Full" olarak değiştir (Adım 3).
- **DNS check başarısız:** A kayıtlarının doğru 4 IP'yi içerdiğinden ve
  `public/CNAME` dosyasının `egoragames.com` içerdiğinden emin ol.
- **Site eski haliyle görünüyor:** Cloudflare cache'i temizle (Caching →
  Configuration → Purge Everything) veya birkaç dakika bekle.
