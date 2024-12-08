const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async(req, res) =>{
    const{username, email, password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message:'User registered successfully'});
    }catch(error){
        res.status(500).json({message:'Error registering user', error});
    }
};


const login = async(req, res) =>{
    const{email, psaaword} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: 'User not found'});
        }
        const match = await bcrypt.compare(psaaword, user.password);
        if(!match) {
            return res.status(400).json({message: 'Invaled credentials'});
        }
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{expiresIn: '1h'});
        res.json({token});
    }catch(error){
        res.status(500).json({message:'Error logging in', error})
    }
};


module.exports = {register, login};