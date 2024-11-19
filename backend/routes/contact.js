// server/routes/contact.js

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const transporter = require('../config/nodemailerConfig'); // Importowanie konfiguracji Nodemailer

// Obsługuje POST dla /contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,           // Kto wysłał e-mail
    to: 'kolankolanic764@gmail.com',  // Twój e-mail, na który mają przychodzić wiadomości
    subject: `Nowa wiadomość od ${name}`,  // Temat e-maila
    text: `Masz nową wiadomość:\n\nImię: ${name}\nEmail: ${email}\n\nWiadomość: \n${message}`,  // Treść e-maila
  };

  try {
    await transporter.sendMail(mailOptions);  // Wysłanie e-maila
    res.status(200).send('Wiadomość została wysłana!');
  } catch (error) {
    console.error('Błąd przy wysyłaniu wiadomości:', error);
    res.status(500).send('Wystąpił błąd. Spróbuj ponownie.');
  }
});

module.exports = router;
