const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 10000; // Render'ın dinamik portunu kullanın, yoksa 10000

// Statik dosyaların (HTML, CSS, JS, görseller vb.) bulunduğu dizini belirtin
// Bu satır, server.js'in bulunduğu dizinden BİR ÜST DİZİNİ statik olarak sunar.
app.use(express.static(path.join(__dirname, '..'))); // '..' bir üst dizini temsil eder

// Herhangi bir route'a gelen istekler için (örneğin ana sayfa için '/')
// index.html dosyasını gönder.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html')); // '..' ile bir üst dizindeki index.html'i bul
});

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor!`);
  console.log(`Web siteniz yayında: http://localhost:${port}`); // Sadece yerel test için
});
