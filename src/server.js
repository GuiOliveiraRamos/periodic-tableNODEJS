const express = require('express');
const cors = require('cors');
const elementRoutes = require('./routes/elementRoutes');

const app = express();

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:5173', // URL do seu front-end Vite
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.json());
app.use('/', elementRoutes);

module.exports = app;