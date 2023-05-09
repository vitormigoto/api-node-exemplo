const express = require('express');
const router = express.Router();

const livrosController = require('../controllers/LivrosController');

router.get('/', livrosController.listLivros);
router.get('/:livroId', livrosController.listOneLivros);
router.post('/', livrosController.createLivros);

module.exports = router;

