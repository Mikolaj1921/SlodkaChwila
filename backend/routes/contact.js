const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Konfiguracja nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password",
    },
});

router.post("/", async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        await transporter.sendMail({
            from: email,
            to: "your-email@gmail.com",
            subject: `Zapytanie od ${name}`,
            text: `Wiadomość: ${message}\nNumer telefonu: ${phone}`,
        });
        res.status(200).send("Wiadomość wysłana!");
    } catch (error) {
        res.status(500).send("Błąd podczas wysyłania wiadomości.");
    }
});

module.exports = router;
