const User = require ('../models/User');


const getAllUsers = async (req, res) =>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(error){
        res.status(500).json({message:'Error fechingusers', error});
    }
};

module.exports = {getAllUsers};