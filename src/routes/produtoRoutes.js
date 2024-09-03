const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const convertToUppercase = require('../middlewares/convertToUppercase');

router.get('/', produtoController.getAll);
router.post('/', convertToUppercase, produtoController.create);
router.get('/:id', produtoController.getById);
router.put('/:id', convertToUppercase, produtoController.update);
router.delete('/:id', produtoController.delete);

module.exports = router;