const jwt = require('jsonwebtoken');


const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) {
        return res.status(403).json({message:'Access denied'});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch (error){
        res.status(400).json({message:'Invelid token',error})
    }
};


module.exports = {authenticate};