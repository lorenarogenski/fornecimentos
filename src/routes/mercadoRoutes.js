const express = require('express');
const router = express.Router();
const mercadoController = require('../controllers/mercadoController');
const convertToUppercase = require('../middlewares/convertToUppercase');
const getEnderecoFromCep = require('../middlewares/getEnderecoFromCep');

router.get('/', mercadoController.getAll);
router.post('/', convertToUppercase, getEnderecoFromCep, mercadoController.create);
router.get('/:id', mercadoController.getById);
router.put('/:id', convertToUppercase, getEnderecoFromCep, mercadoController.update);
router.delete('/:id', mercadoController.delete);

module.exports = router;