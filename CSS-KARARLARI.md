# CSS Kararları

## 1. Breakpoint Seçimi
Tasarımı yaparken "mobile-first" (önce mobil) mantığıyla ilerlediğim için en dar ekranı varsayılan kabul ettim. Sonrasında tabletler için 640px, masaüstü ekranlar için de 1024px kırılım noktalarını (breakpoint) belirledim. Ekran genişledikçe, dar ekranda alt alta duran içerikleri yan yana dizdim ve en son masaüstü görünümünde sayfanın çok yayılmaması için içeriği ortaladım.

## 2. Layout Tercihleri
Üst menüyü (header) tek bir satırda düzenli şekilde yan yana dizmek için en pratik çözüm olan Flexbox'ı kullandım. Proje kartlarında ise hem satır hem de sütun düzenini aynı anda kontrol etmem gerektiği için CSS Grid tercih ettim. Grid kısmında `auto-fit` kullandım, böylece ekran genişliğine göre kartlar boşluk bırakmadan otomatik olarak yan yana sığabildi.

## 3. Design Tokens
Proje boyunca aynı renk kodlarını veya boşluk değerlerini tekrar tekrar yazmamak için `tokens.css` dosyasında ana değişkenleri topladım. Renk paleti olarak göz yormayan, sade lacivert ve beyaz tonlarını seçtim. Yazı boyutlarını sabit pikseller yerine `clamp()` fonksiyonuyla verdim; bu sayede yazılar ekran büyüdükçe ekranla orantılı bir şekilde kendiliğinden büyüyebiliyor.

## 4. Responsive Stratejiler
Tüm CSS kodlarını önce telefon ekranına göre (mobile-first) yazdım. Daha sonra sadece `min-width` kullanarak, ekran büyüdükçe devreye girecek yeni kurallar ekledim. Örneğin mobilde alt alta duran "Hakkımda" kısmındaki fotoğraf ve yazılar, tablet boyutuna geçince yan yana geliyor. Ayrıca görsellerin ekranı taşıp tasarımı bozmaması için hepsine `max-width: 100%` kuralını uyguladım.