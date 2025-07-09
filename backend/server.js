const express = require('express');
const path = require('path'); // path modülünü ekleyin

const app = express();
const port = process.env.PORT || 3000; // Render'ın dinamik portunu kullanın, yoksa 3000

// Statik dosyaların (HTML, CSS, JS, görseller vb.) bulunduğu dizini belirtin
// Bu satır, public veya proje kök klasörünüzdeki dosyaları sunar.
// Eğer index.html ve style.css ana klasördeyse, '.' kullanın.
// Eğer statik dosyalarınız 'public' adında bir klasördeyse, 'public' kullanın.
app.use(express.static(path.join(__dirname, '.'))); // Ana klasörü statik olarak sunar

// Herhangi bir route'a gelen istekler için (örneğin ana sayfa için '/')
// index.html dosyasını gönder.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor!`);
  console.log(`Web siteniz yayında: http://localhost:${port}`); // Sadece yerel test için
});