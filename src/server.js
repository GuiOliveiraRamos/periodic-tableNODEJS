import express from 'express';
import cors from 'cors';
import elementRoutes from './routes/elementRoutes.js';

const app = express();

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:5173', // URL do seu front-end Vite
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.json());
app.use('/', elementRoutes);

export default app;