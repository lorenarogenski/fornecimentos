const fornecedores = require('../models/fornecedor');

exports.getAll = (req, res) => {
    res.json(fornecedores);
};

exports.create = (req, res) => {
    const {nome} = req.body;
    const id = fornecedores.length + 1;
    const novoFornecedor = {id, nome};
    fornecedores.push(novoFornecedor);
    res.status(201).json(novoFornecedor);
};

exports.getById = (req, res) => {
    const fornecedor = fornecedores.find(f => f.id === parseInt(req.params.id));
    if(!fornecedor) return res.status(404).json({error: 'Fornecedor não encontrado. '});
    res.json(fornecedor);
};

exports.update = (req, res) => {
    const fornecedor = fornecedores.find(f => f.id === parseInt(req.params.id));
    if(!fornecedor) return res.status(404).json({error: 'Fornecedor não encontrado. '});

    const {nome} = req.body;
    if(nome) fornecedor.nome = nome;

    res.json(fornecedor)
};

exports.delete = (req, res) => {
    const index = fornecedores.findIndex(f => f.id === parseInt(req.params.id));
    if(index === -1) return res.status(404).json({error: 'Fornecedor não encontrado. '});

    fornecedores.splice(index, 1);
    res.status(404).send();
};