const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const livrosRoutes = require('./routes/livrosRoutes');

app.use('/livros',livrosRoutes)

module.exports = app;