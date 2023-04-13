const validateDificulty = (req, res, next) => {
    const {description} = req.body;
    const {difficulty} = description;
    if (dificulty !== 'fácil' && dificulty !== 'médio' && dificulty !== 'difícil'){
        return res.status(400).json({message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\''})
    } 
}

module.exports = validateDificulty;