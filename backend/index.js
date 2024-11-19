// server/index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contact');  // Importowanie trasy kontaktowej

const app = express();

// Middleware
app.use(cors());  // Włączenie CORS (jeśli masz frontend na innym porcie)
app.use(bodyParser.json());  // Obsługuje dane JSON

// Trasa do kontaktu
app.use('/contact', contactRoute);

// Ustawienie portu
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
