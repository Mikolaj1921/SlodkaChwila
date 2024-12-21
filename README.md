# Słodka Chwila

Słodka Chwila to strona wizytówka cukierni, która zapewnia szybki dostęp do kluczowych informacji. Użytkownicy mogą przeglądać menu, aktualności, stronę główną oraz łatwo skontaktować się poprzez formularz wiadomości. Prosty i intuicyjny układ pozwala na wygodne korzystanie z serwisu.

---

## Funkcjonalności

### Strona Główna
- Powitanie oraz krótkie wprowadzenie do cukierni.
- Najnowsze informacje i promocje.

### Menu
- Pełna oferta produktów cukierni (ciasta, torty, ciasteczka).
- Informacje o cenach i składnikach produktów.

### Aktualności
- Najnowsze wydarzenia, nowe produkty, promocje i specjalne oferty.

### Kontakt
- Dane kontaktowe: numer telefonu, e-mail, adres fizyczny.
- Mapka i linki do mediów społecznościowych.

### Formularz Kontaktowy
- Pola: imię, e-mail oraz wiadomość.
- Szybkie przesyłanie zapytań lub opinii do cukierni.

---

## Technologie

### Front-end
- **React**: Tworzenie dynamicznego interfejsu użytkownika.
- **Tailwind CSS**: Responsywny design i minimalizacja własnego CSS.
- **React Hook Form**: Intuicyjna obsługa formularzy z walidacją.
- **React Router**: Routing dla różnych podstron.
- **AOS.js (Animate On Scroll)**: Animacje wyzwalane podczas przewijania strony.

### Back-end
- **Node.js z Express.js**: Obsługa zapytań i zarządzanie formularzami.
- **Nodemailer**: Wysyłanie e-maili z formularza kontaktowego.
- **CORS**: Komunikacja między front-endem i back-endem.

### Hosting
- **Netlify**: Hosting front-endu (React).
- **Render**: Hosting back-endu (Node.js).

---

## API

### Endpointy
#### Testowy Endpoint
- **Ścieżka**: `/`
- **Metoda**: GET
- **Opis**: Zwraca komunikat "Backend działa poprawnie!".
- **Przykład odpowiedzi**:
Backend działa poprawnie!

#### Galeria Zdjęć
- **Ścieżka**: `/photos`
- **Metoda**: GET
- **Opis**: Pobiera listę zdjęć z tabeli `photos`.

#### Formularz Kontaktowy
- **Ścieżka**: `/contact`
- **Metoda**: POST
- **Opis**: Przyjmuje dane JSON z formularza kontaktowego.
- **Przykładowe dane**:

```json
{
  "name": "Jan Kowalski",
  "email": "jan.kowalski@example.com",
  "message": "Chciałbym się dowiedzieć więcej o Waszych usługach."
}
```

---

## Google Maps API

- **Ścieżka:** `/api/location`
- **Metoda:** `GET`
- **Opis:** Pobiera współrzędne cukierni do wyświetlenia na mapie.
- **Biblioteka:** Leaflet z OpenStreetMap.

---

## Baza Danych

### Struktura

- **Tabela `photos` (Galeria zdjęć):**
  - `id` (INT, Primary Key) – ID zdjęcia.
  - `url` (VARCHAR) – Ścieżka do zdjęcia.
  - `description` (VARCHAR) – Opis zdjęcia.
  - `created_at` (TIMESTAMP) – Data dodania.

- **Tabela `messages` (Wiadomości od użytkowników):**
  - `id` (INT, Primary Key) – ID wiadomości.
  - `nameSurname` (VARCHAR) – Imię i nazwisko.
  - `email` (VARCHAR) – Adres e-mail.
  - `message` (TEXT) – Treść wiadomości.
  - `created_at` (TIMESTAMP) – Data wysłania.

---

## Instalacja

### Wymagania

- **Node.js:** Do obsługi backendu.
- **PostgreSQL:** Do zarządzania bazą danych.

### Uruchomienie

1. **Sklonuj repozytorium:**
    ```bash
    git clone https://github.com/uzytkownik/slodka-chwila.git
    ```

2. **Zainstaluj zależności:**
    - Przejdź do folderu `frontend`:
      ```bash
      cd frontend
      npm install
      ```
    - Przejdź do folderu `backend`:
      ```bash
      cd ../backend
      npm install
      ```

3. **Skonfiguruj zmienne środowiskowe w pliku `.env` w katalogu `backend`:**
    ```makefile
    DB_USER=twoja_nazwa_uzytkownika
    DB_PASSWORD=twoje_haslo
    DB_HOST=localhost
    DB_NAME=slodka_chwila
    DB_PORT=5432
    ```

4. **Uruchom aplikację:**
    - **Frontend:**
      ```bash
      cd frontend
      npm start
      ```
    - **Backend:**
      ```bash
      cd backend
      node index.js
      ```

---

## Rozbudowa

- Wdrożenie bazy danych sieciowej (np. AWS RDS lub Google Cloud SQL) i przechowywanie zdjęć w chmurze (np. AWS S3).
- Rozbudowa galerii zdjęć z możliwością dodawania nowych obrazów przez panel administracyjny.

---

## Autorzy

Mikołaj Melnyk
