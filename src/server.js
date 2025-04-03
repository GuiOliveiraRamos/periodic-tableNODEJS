const express = require('express');
const elementRoutes = require('./routes/elementRoutes');

const app = express();

app.use(express.json());
app.use('/', elementRoutes);

module.exports = app;
