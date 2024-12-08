const Author = require('../models/Author');


const createAuthor = async(req, res) =>{
    const{name, bio}= req.body;
    try{
        const newAuthor = new Author({name, bio});
        await newAuthor.save();
        res.status(201).json(newAuthor);
    }catch(error){
        res.status(500).json({message:'Errorcreating author', error});
    }
};



const getAuthors = async(req, res) =>{
    try{
        const authors = await Author.find();
        res.json(authors);
    }catch(error){
        res.status(500).json({message: 'Error feching authors', error});
    }
};

module.exports = {createAuthor , getAuthors}