const convertToUppercase = (req, res, next) => {
    if(req.body.nome) {
        req.body.nome = req.body.nome.toUpperCase();
    }
    next();
}

module.exports = convertToUppercase;