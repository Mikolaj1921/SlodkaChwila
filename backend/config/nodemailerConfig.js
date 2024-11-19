require('dotenv').config(); // Załaduj zmienne środowiskowe z pliku .env
const nodemailer = require('nodemailer');

// Tworzymy transporter do wysyłania e-maili
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // Gmail SMTP
  port: 587,               // Port do SMTP (dla TLS)
  secure: false,           // Używamy TLS (false, bo port 587)
  auth: {
    user: process.env.EMAIL_USER,  // Używamy zmiennej środowiskowej z pliku .env
    pass: process.env.EMAIL_PASS,  // Używamy zmiennej środowiskowej z pliku .env
  },
});

module.exports = transporter;