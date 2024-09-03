const mercados = require('../models/mercado');

exports.getAll = (req, res) => {
    res.json(mercados);
};

exports.create = (req, res) => {
    const {nome, endereco} = req.body;
    const id = mercados.length + 1;
    const novoMercado = {id, nome, endereco};
    mercados.push(novoMercado);
    res.status(201).json(novoMercado);
};

exports.getById = (req, res) => {
    const mercado = mercados.find(m => m.id === parseInt(req.params.id));
    if(!mercado) return res.status(404).json({error: 'Mercado não encontrado. '});
    res.json(mercado);
};

exports.update = (req, res) => {
    const mercado = mercados.find(m => m.id === parseInt(req.params.id));
    if(!mercado) return res.status(404).json({error: 'Mercado não encontrado. '});

    const {nome, endereco} = req.body;
    if(nome) mercado.nome = nome;
    if (endereco) mercado.endereco = endereco;

    res.json(mercado);
};

exports.delete = (req, res) => {
    const index = mercados.findIndex(m => m.id === parseInt(req.params.id));
    if(index === -1) return res.status(404).json({error: 'Mercado não encontrado. '});

    mercados.splice(index, 1);
    res.status(204).send();
};