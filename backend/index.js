require('dotenv').config(); // Wczytanie zmiennych środowiskowych z pliku .env

const express = require('express');
const cors = require('cors');
const photoRoute = require('./routes/photos');
const contactRoute = require('./routes/contact'); // Importowanie trasy kontaktowej
const app = express();

// Lista dozwolonych originów (lokalny i produkcyjny frontend)
const allowedOrigins = [
    'http://localhost:3000',
    'https://slodkachwila.netlify.app'
];

// Middleware do CORS
app.use(cors({
    origin: (origin, callback) => {
        // Zezwól na żądania z dozwolonych originów lub bez origin (Postman itp.)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Nieautoryzowany origin: ' + origin));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"], // Dozwolone metody HTTP
    credentials: true // Umożliwia przesyłanie ciasteczek lub nagłówków autoryzacyjnych
}));

// Middleware do parsowania JSON
app.use(express.json());

// Logowanie żądań (przydatne do debugowania)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});


// Endpointy

// Testowy endpoint dla weryfikacji działania serwera
app.get('/', (req, res) => {
    res.send('Backend działa poprawnie!');
});

// Trasa do kontaktu, zdjęć
app.use('/contact', contactRoute); // <-- Upewnij się, że ta trasa jest poprawna
app.use('/photos', photoRoute);


// Endpoint do zwracania współrzędnych
app.get("/api/location", (req, res) => {
    const location = {
        latitude: 50.03656577942113, // szerokość geograficzna
        longitude: 21.99834561570134, // długość geograficzna
        name: "Cukiernia Słodka Chwila",
    };
    res.json(location);
});




// Obsługa błędów dla nieznanych tras (404)
app.use((req, res) => {
    res.status(404).json({ error: "Nie znaleziono zasobu" });
});

// Logowanie błędów serwera (500)
app.use((err, req, res, next) => {
    console.error("Błąd serwera:", err.stack);
    res.status(500).json({ error: "Wewnętrzny błąd serwera" });
});

// Ustawienie portu
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
    console.log(`Akceptuje żądania z: ${allowedOrigins.join(', ')}`);
});
