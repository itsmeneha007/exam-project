const book = require('../models/Book');



const addBook = async(req, res) =>{
    const {title, author, genre, availableCopies} = req.body;
    try{
        const newBook = new Book ({title, author, genre, availableCopies});
        await newBook.save();
        res.status(201).json(newBool);
    }catch(error){
        res.status(500).json({message: 'Error adding book', error})
    }
};


const getBooks = async(req, res) =>{
    try{
        const books = await Book.find();
        res.json(books);
    }catch(error){
        res.status(500),json({message: 'Error feching books', error});
    }
};



module.exports = {addBook, getBooks}