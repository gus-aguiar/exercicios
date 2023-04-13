
const validadeDescription = (req, res, next) => {
    const { description } = req.body;
    const {rating, difficulty,createdAT} = description
    if(!description) return res.status(400).json({ message: 'O campo description é obrigatório' });
    if(!rating) return res.status(400).json({ message: 'O campo rating é obrigatório' });
    if(!difficulty) return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
    if(!createdAT) return res.status(400).json({ message: 'O campo createdAT é obrigatório' });

    next();
}

module.exports = validadeDescription;