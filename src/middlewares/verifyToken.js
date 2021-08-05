const jwt = require('jsonwebtoken');
const config = require('../config');


module.exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if(!token) return res.status(403).json({message: "No token provided"})

        const decoded = jwt.verify(token,config.SECRET);
        req.name = decoded.name;

        next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'});
    }
}