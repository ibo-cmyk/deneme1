const express = require('express');
const app = express();

console.log('server.js dosyası başladı');

app.get('/', (req, res) => {
  res.send('Sunucu çalışıyor!');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Sunucu 3000 portunda çalışıyor');
});