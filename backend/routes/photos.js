const express = require('express');
const router = express.Router();

// connect to bd
const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// get all images
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM photos ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error('Ошибка получения изображений:', err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// get images - po ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM photos WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Изображение не найдено' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Ошибка получения изображения:', err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

module.exports = router; 
