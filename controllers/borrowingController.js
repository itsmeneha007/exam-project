const BorrowingTransaction  = require('../models/BorrowingTransaction');
const Book = require('../models/Book');



const borrowBook = async(req, res) =>{
    const{userId, bookId} = req.body;
    try{
        const book = await Book.findById(bookId);
        if(book.availableCpoies <=0 ){
            return res,status(400).json({message:'No copies available'});
        }
        const newTransaction = new BorrowingTransaction({userId, bookId, dateBorrowed:Date.now()});
        await newTransaction.save();
        book.availableCpoies -= 1;
        await book.save();
        res.status(201).json(newTransaction);
    }catch(error){
        res.status(500).json({message:'Error borrowing book', error});
    }
};



module.exports = {borrowBook};