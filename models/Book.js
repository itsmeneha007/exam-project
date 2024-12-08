const mongoose = require ('mongoose');


const BookSchema = new mongoose.Schema({
    title:{ type:String, required:true},
    author:{type:mongoose.Schema.Types.ObjectId, ref:'Author', required:true},
    genre:{type:string},
    availableCopies: {type:Number, default:0},
});



module.exports = mongoose.model('Book', BookSchema);