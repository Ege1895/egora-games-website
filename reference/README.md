# Referans Şablonlar

Bu klasördeki dosyalar **build'e dahil değildir** — sadece görsel/yapısal referans
amaçlıdır. Gerçek uygulama kodu `src/` altında Next.js + TypeScript + Tailwind CSS
ile sıfırdan yazılır.

## ophela-template/

Ana referans kaynağı. "Ophela — Gaming Studio HTML Template" (Bootstrap 4 + jQuery
tabanlı, ThemeForest tipi bir şablon). Kaynak: https://pixner.net/ophela/demo/

Kullanılacak olan: hero section düzeni, kart (card) grid yapıları,
navigasyon/footer iskeleti, genel spacing/typography hissi.

**Kullanılmayacak olan:** İçerik olarak çekiliş/bilet/lottery temalı bölümler
("buy ticket", "winner", "affiliate", "contest" vb.) — bunlar Egora Games'e uygun
değil. Detaylar için `ophela-template/DESIGN_SYSTEM.md` dosyasına bakın.

Renk paleti (mor-pembe-altın gradient) tamamen değiştirilecek; Egora Games'in
kendi marka renkleri Tailwind config'te CSS custom property tabanlı tema
değişkeni olarak tanımlanacak.

## mykd-template/

İkincil referans (esports/tournament temalı bir şablon). TASK.md'de zorunlu
tutulmuyor — yalnızca ek görsel/yapısal fikir gerektiğinde göz atılabilir,
zorunlu bir kaynak değildir.

## Genel kural

CSS class isimlerini/yapısını birebir taşımayın — Tailwind utility class'larına
çevirin. Hardcoded hex renk kullanmayın, her zaman tema değişkeni üzerinden gidin.
