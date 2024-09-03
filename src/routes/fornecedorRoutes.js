const express = require('express');
const router = express.Router();
const fornecedorController = require('../controllers/fornecedorController');
const convertToUppercase = require('../middlewares/convertToUppercase');

router.get('/', fornecedorController.getAll);
router.post('/', convertToUppercase, fornecedorController.create);
router.get('/:id', fornecedorController.getById);
router.put('/:id', convertToUppercase, fornecedorController.update);
router.delete('/:id', fornecedorController.delete);

module.exports = router;