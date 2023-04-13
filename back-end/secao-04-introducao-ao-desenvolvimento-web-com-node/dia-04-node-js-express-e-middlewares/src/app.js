
const express = require('express');
const validateName = require('./middleware/nameValidation');
const validadeRate = require('./middleware/ratingValidation');
const validadecreatedAt = require('./middleware/createdAtValidation');
const validadeDescription = require('./middleware/descriptionValidation');
const validadeDificulty = require('./middleware/dificultyValidation');
const allValidation = [validateName, validadeRate, validadecreatedAt, validadeDescription, validadeDificulty];


const app = express();

app.use(express.json());

app.post('/activities',allValidation, (_req, res) => {
    return res.status(201).json({ message: 'Atividade registrada com sucesso!' });
})


module.exports = app;