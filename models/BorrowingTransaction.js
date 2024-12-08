const mongoose = require ('mongoose');


const BorrowingTransactionSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    bookId:{type:mongoose.Schema.Types.ObjectId, ref:'Book', required: true},
    dateBorrowed :{type:Date, default:Date.now},
    dateReturned:{type:Date},
});

module.exports = mongoose.model('BorrowingTransaction', BorrowingTransactionSchema);