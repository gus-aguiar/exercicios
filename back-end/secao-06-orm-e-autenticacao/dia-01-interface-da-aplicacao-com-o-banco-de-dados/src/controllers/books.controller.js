const BookService = require('../services/books.service')

const getAll = async (_req, res) => {
    try{
        const books = BookService.getAll();
        return res.status(200).json(books);
    }catch (e) {
        res.status(500).json({message : 'Ocorreu um erro'});
    }

}

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const booksById = BookService.getById(id);
        return res.status(200).json(booksById);
    }catch (e) {
        res.status(404).json({message : 'Book not found'}) ;
    }
} 

const create = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const newBook = BookService.create(title, author, pageQuantity);
    return res.status(200).json(newBook);
}

module.exports = {
    getAll,
    getById,
    create,
}