import { JWT_SECRET } from "./config";
import jwt from 'jsonwebtoken'

const authMiddleWare = (req, res, next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer '))
        return res.status(400).json({})

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        req.userID = decoded.userID;
        next()
    }catch(err){
        return res.status(403).json({})
    }
}

export {authMiddleWare}