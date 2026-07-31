# MYKD Template — Tasarım Sistemi Referansı

Kaynak: https://html.themegenix.com/mykd/
CSS değişkenleri `assets/css/main.css` içindeki `:root` bloğundan alınmıştır.

## Renk Paleti (CSS custom properties)

### Marka Renkleri (DEĞİŞECEK)
- `--tg-theme-primary: #45f882` → **ana yeşil vurgu rengi. Egora Games için değiştirilecek.**
- `--tg-theme-secondary: #ffbe18` → sarı/altın ikincil vurgu rengi (bid/fiyat rozetleri, yıldızlar vb.)

### Nötr / Arkaplan Tonları (muhtemelen korunacak)
- `--tg-common-color-white: #fff`
- `--tg-common-color-black: #0f161b` → body arkaplan
- `--tg-common-color-black-2: #201f2a`
- `--tg-common-color-black-3: #0b0e13`
- `--tg-common-color-black-4: #10181f`
- `--tg-common-color-black-5: #090d10`
- `--tg-common-color-black-6: #050506`
- `--tg-common-color-black-7: #040608`
- `--tg-common-color-black-8: #0d141b`
- `--tg-common-color-black-9: #111922`
- `--tg-common-color-gray: #182029`
- `--tg-body-color: #adb0bc` → gövde metin rengi
- `--tg-heading-color: #fff` → başlık metin rengi

### Kenarlıklar (border)
- `--tg-border-1: #19222b`
- `--tg-border-2: #22292f`
- `--tg-border-3: #2c3137`
- `--tg-border-4: #333333`
- `--tg-border-5: #1b242e`

### Bootstrap-türevi Yardımcı Renkler (nadiren kullanılan durum renkleri)
- blue: `#0d6efd`, indigo: `#6610f2`, purple: `#6f42c1`, pink: `#d63384`
- red: `#dc3545`, orange: `#fd7e14`, yellow: `#ffc107`
- green: `#198754`, teal: `#68fb9a`, cyan: `#0dcaf0`
- rating (yıldız): `#faa706`

## Tipografi
- Body font: **Poppins** (Google Fonts, ağırlıklar 400/500/600/700 + italik)
- Heading font: **Barlow** (Google Fonts, ağırlıklar 300–900 + italik)
- Özel/logo font: **berlin_sans_fb_demibold** (`assets/fonts/berlin_sans_fb_demi_bold-webfont.woff2/.woff`)
- İkon fontları: Font Awesome 5 (brands/regular/solid) + özel `flaticon` ikon seti (`assets/fonts/flaticon.*`)
- Body font-size: 16px, line-height: 1.75
- Font-weight değişkenleri: extra-bold 800, bold 700, semi-bold 600, medium 500, regular 400, light 300

## Notlar
- Yeşili (`--tg-theme-primary`) tek bir CSS değişkeninden değiştirmek, teoride site genelinde tutarlı biçimde renk değişikliği sağlamalı — ancak bazı bileşenlerde renk doğrudan hardcoded (`#45f882`) kullanılmış olabilir, bunlar CSS taramasında ayrıca tespit edilip düzeltilmeli.
- Oyun karakteri görselleri (NFT kartlarındaki Pokémon tarzı görseller vb.) bilinçli olarak indirilmedi — bunlar Egora Games'e özgü görsellerle değiştirilecek.
- Dekoratif arkaplan/mask/shape görselleri (`assets/img/bg/`, `assets/img/slider/`) UI yapısının parçası olduğu için indirildi.
