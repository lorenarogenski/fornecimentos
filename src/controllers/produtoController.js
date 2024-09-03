const produtos = require('../models/produto');
const mercados = require('../models/mercado');
const fornecedores = require('../models/fornecedor');

exports.getAll = (req, res) => {
    res.json(produtos);
};

exports.create = (req, res) => {
    const {nome, quantidade, id_mercado, id_fornecedor} = req.body;

    if(!mercados.find(m => m.id === id_mercado)) {
        return res.status(400).json({error: 'Mercado inválido. '});
    }

    if(!fornecedores.find(f => f.id === id_fornecedor)) {
        return res.status(400).json({error: 'Fornecedor inválido. '});
    }

    const id = produtos.leght + 1;
    const novoProduto = {id, nome, quantidade, id_mercado, id_fornecedor};
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
};

exports.getById = (req, res) => {
    const produto = produtos.find(p => p.id === parseInt(req.params.id));
    if(!produto) return res.status(404).json({error: 'Produto não encontrado. '});
    res.json(produto);
};

exports.update = (req, res) => {
    const produto = produtos.find(p => p.id === parseInt(req.params.id)); 
    if(!produto) return res.status(404).json({error: 'Produto não encontrado. '});

    const {nome, quantidade, id_mercado, id_fornecedor} = req.body;
    if(nome) produto.nome = nome;
    if(quantidade) produto.quantidade = quantidade;
    if(id_mercado) produto.id_mercado = id_mercado;
    if(id_fornecedor) produto.id_fornecedor = id.fornecedor;

    res.json(produto);
};

exports.delete = (req, res) => {
    const index = produtos.findIndex(p => p.id === parseInt(req.params.id));
    if(index === -1) return res.status(404).json({error: 'Produto não encontrado. '});

    produtos.splice(index, 1);
    res.status(204).send();
};