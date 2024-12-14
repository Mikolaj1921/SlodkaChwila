// server/index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contact'); // Importowanie trasy kontaktowej

const app = express();

// Middleware
app.use(cors({
    origin: 'https://slodkachwila.netlify.app/', // Ograniczenie do Netlify lub localhost
    methods: ["GET", "POST", "PUT", "DELETE"], // Dozwolone metody HTTP
    credentials: true // Jeśli korzystasz z ciasteczek lub sesji
}));
app.use(bodyParser.json()); // Obsługuje dane JSON

// Testowy endpoint dla weryfikacji działania serwera
app.get('/', (req, res) => {
    res.send('Backend działa poprawnie!');
});

// Trasa do kontaktu
app.use('/contact', contactRoute);

// Ustawienie portu
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
