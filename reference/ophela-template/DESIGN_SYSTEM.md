# Ophela Template — Tasarım Sistemi Referansı

Kaynak: https://pixner.net/ophela/demo/index-two.html (ve index.html)
Not: Bu template'te MYKD'nin aksine CSS custom property (`--var`) kullanılmamış — SASS'tan derlenmiş düz CSS, renkler her yerde doğrudan hex olarak yazılmış. Bu yüzden tema rengini değiştirmek MYKD'dekinden daha fazla arama/değiştirme gerektirecek.

## Renk Paleti (main.css içindeki en sık kullanılan hex kodları, kullanım sıklığına göre)

### Ana Nötr
- `#ffffff` (64 kullanım) → beyaz, metin/ikon
- `#000033` (10 kullanım) → body arkaplan, koyu lacivert/mor-siyah

### Marka Vurgu Renkleri (mor-pembe-altın gradient teması — DEĞİŞECEK)
- `#c165dd` (24) → açık mor
- `#5c27fe` (24) → mor-mavi
- `#cf15f8` (22) → magenta/mor
- `#5f16a9` (22) → koyu mor
- `#e83a99` (17) → pembe
- `#e2906e` (17) → somon/turuncumsu (muhtemelen görsel/degrade parçası)
- `#ec038b` (9) → parlak pembe/magenta
- `#fbb936` (6) → altın/sarı
- `#fb6468` (6) → mercan/kırmızımsı
- `#f91e68` (5) → pembe-kırmızı
- `#30a8db` (5) → camgöbeği mavi
- `#ffa200` (4) → turuncu
- `#160351`, `#311a83` → koyu mor arkaplan tonları

Genel izlenim: site **mor→pembe→altın gradient** temalı (CTA butonları, başlık vurguları, ikon arkaplanları muhtemelen bu degradeyi kullanıyor). Tek bir ana renk değil, çok renkli bir gradient sistemi — Egora Games'e uyarlarken gradient durak renklerinin (gradient stop) tamamını değiştirmemiz gerekecek.

### Link Hover
- `#ff0000` → kırmızı (a:hover)

## Tipografi
- Body font: **Josefin Sans** (Google Fonts, ağırlıklar 400/600/700)
- İkon fontları: Font Awesome 5 (`assets/webfonts/`) + Line Awesome (`assets/fonts/la-*`)

## Sayfa İçeriği / Yapısı Hakkında Not
Bu template görünürde bir "gaming studio" değil, **çekiliş / lottery / bilet sistemi temalı bir oyun sitesi** — CSS içindeki bölüm başlıkları şunları gösteriyor: "next-draw-section", "how to play", "contest", "contest slider", "winner / winner-details / latest-winner", "buy ticket", "affiliate", "top affiliate". Bu, Egora Games'in ihtiyacına göre (çekiliş/ödül mekaniği olacaksa) çok uygun olabilir; değilse bazı bölümler (winner, ticket, affiliate) kullanılmayabilir.

## Notlar
- Oyun/karakter/illüstrasyon görselleri indirilmedi (Egora Games'e özgü görsellerle değiştirilecek).
- `assets/images/bg/video.jpg` (video arka plan posteri) ve `assets/images/elements/header-el.png` (header dekoratif eleman) indirildi — bunlar UI yapısının parçası.
- CSS'te renk değişkeni olmadığı için, tema rengini değiştirmek MYKD template'ine göre daha fazla bulma/değiştirme (find & replace) gerektirecek. İstenirse main.css üzerinde bu hex kodlarını CSS custom property'lere dönüştürüp merkezi bir tema sistemi kurabiliriz.
