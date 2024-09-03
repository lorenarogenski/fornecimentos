const axios = require('axios');

const getEnderecoFromCep = async (req, res, next) => {
    if(req.body.cep) {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${req.body.cep}/json`);
            if(response.data && !response.data.erro) {
                req.body.endereco = `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade}, ${response.data.uf}`;
            } else {
                return res.status(400).json({error: 'CEP inválido. '});
            }
        } catch (error) {
            return res.status(500).json({error: 'Erro ao consultar o CEP. '});
        }
    }
    next();
};

module.exports = getEnderecoFromCep;