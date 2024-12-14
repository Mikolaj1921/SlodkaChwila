// server/index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contact'); // Importowanie trasy kontaktowej

const app = express();

// Zmienna środowiskowa z URL-em frontendu
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://slodkachwila.netlify.app'; // Domyślnie Netlify

// Middleware do CORS
app.use(cors({
    origin: FRONTEND_URL, // Zezwala tylko na połączenia z frontendu
    methods: ["GET", "POST", "PUT", "DELETE"], // Dozwolone metody HTTP
    credentials: true // Jeśli korzystasz z ciasteczek lub sesji
}));

// Middleware do parsowania JSON
app.use(express.json()); // Używamy wbudowanego express.json() zamiast body-parser

// Testowy endpoint dla weryfikacji działania serwera
app.get('/', (req, res) => {
    res.send('Backend działa poprawnie!');
});

// Trasa do kontaktu
app.use('/contact', contactRoute);

// Logowanie żądań (opcjonalne, ale przydatne do debugowania)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Ustawienie portu
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
