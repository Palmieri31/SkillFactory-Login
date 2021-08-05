const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const user = require('../files/user.json');

 const comparePassword = async (password, receivedPassword) => {
     try{
        return await bcrypt.compare(password, receivedPassword);// devuelve true or false si son iguales o no 
     } catch(error) {
         res.status(500).json({message: `${error.message}`})
     }
    
}

module.exports.login = async (req, res) => {
    
    if(user.email !== req.body.email) res.status(400).json({message: "Invalid email"})

    const matchPassword = await comparePassword(req.body.password, user.password);

    if(!matchPassword) return res.status(401).json({message: 'Invalid password'})

    const token = jwt.sign({name: user.name}, config.SECRET, {
        expiresIn: 86400
    })

    res.json({token});
    
};
