// routes/contact.js

const express = require('express');
const { Pool } = require('pg');  // Dodanie biblioteki do obsługi PostgreSQL
const router = express.Router();
const nodemailer = require('nodemailer');
const transporter = require('../config/nodemailerConfig'); // Importowanie konfiguracji Nodemailer

// Konfiguracja połączenia z bazą danych PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Obsługuje POST dla /contact
router.post('/', async (req, res) => {
  const { namesurname, email, message } = req.body;

  // Sprawdzenie, czy wszystkie dane zostały przesłane
  if (!namesurname || !email || !message) {
    return res.status(400).json({ error: 'Wszystkie pola są wymagane!' });
  }

  // Tworzenie obiektu do wysyłania e-maila
  const mailOptions = {
    from: email,  // Kto wysłał e-mail
    to: 'kolankolanic764@gmail.com',  // Twój e-mail, na który mają przychodzić wiadomości
    subject: `Nowa wiadomość od ${namesurname}`,  // Temat e-maila
    text: `Masz nową wiadomość:\n\nImię i nazwisko: ${namesurname}\nEmail: ${email}\n\nWiadomość: \n${message}`,  // Treść e-maila
  };

  try {
    // Wysłanie e-maila
    await transporter.sendMail(mailOptions);

    // Zapisywanie wiadomości do bazy danych PostgreSQL
    const query = 'INSERT INTO messages(namesurname, email, message) VALUES($1, $2, $3) RETURNING id';
    const values = [namesurname, email, message];
    const result = await pool.query(query, values);  // Wykonanie zapytania w bazie
    
    const messageId = result.rows[0].id; // ID zapisanej wiadomości w bazie danych
    
    console.log(`Wiadomość zapisana w bazie danych z ID: ${messageId}`);
    
    // Wysłanie odpowiedzi do klienta
    res.status(200).json({
      message: 'Wiadomość została wysłana i zapisana w bazie danych!',
      messageId,  // Zwrócenie ID zapisanej wiadomości
    });
  } catch (error) {
    console.error('Błąd przy wysyłaniu wiadomości lub zapisie do bazy:', error);
    res.status(500).send('Wystąpił błąd. Spróbuj ponownie.');
  }
});



module.exports = router;
