const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let relayState = "OFF";

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><meta charset='utf-8'><title>Render IoT - أبو فهد</title></head>
      <body style='text-align:center; font-family:Tahoma; margin-top:50px;'>
        <h2>منصة تحكم ESP32 السحابية</h2>
        <p>حالة الريلاي الحالية: <b>${relayState}</b></p>
        <br>
        <a href='/on'><button style='padding:15px 30px; background:green; color:white; font-size:18px;'>تشغيل (ON)</button></a>
        <a href='/off'><button style='padding:15px 30px; background:red; color:white; font-size:18px;'>إطفاء (OFF)</button></a>
      </body>
    </html>
  `);
});

app.get('/on', (req, res) => {
  relayState = "ON";
  res.redirect('/');
});

app.get('/off', (req, res) => {
  relayState = "OFF";
  res.redirect('/');
});

app.get('/status', (req, res) => {
  res.json({ state: relayState });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
