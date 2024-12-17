// server/index.js
const express = require('express');
const cors = require('cors');
const contactRoute = require('./routes/contact'); // Importowanie trasy kontaktowej

const app = express();

// Zmienna środowiskowa z URL-em frontendu
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://slodkachwila.netlify.app'; // Domyślnie Netlify

// Middleware do CORS
app.use(cors({
    origin: FRONTEND_URL, // Zezwala tylko na połączenia z frontendu
    methods: ["GET", "POST", "PUT", "DELETE"], // Dozwolone metody HTTP
    credentials: true // Jeśli korzysta się z ciasteczek lub sesji
}));

// Middleware do parsowania JSON
app.use(express.json()); 

//1) Testowy endpoint dla weryfikacji działania serwera
app.get('/', (req, res) => {
    res.send('Backend działa poprawnie!');
});

// Trasa do kontaktu
app.use('/contact', contactRoute);






// Endpoint do zwracania współrzędnych
app.get("/api/location", (req, res) => {
    const location = {
      latitude: 50.03656577942113, // szerokość geograficzna
      longitude: 21.99834561570134, // długość geograficzna
      name: "Cukiernia Słodka Chwila",
    };
    res.json(location);
});







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
