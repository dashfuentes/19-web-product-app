import jwt from 'jsonwebtoken'
import config from '../config.js'
import User from '../models/User.js'


export const verifyToken = async (req,res,next) => {
    const token = req.headers["x-access-token"]

   console.log(token)
   if (!token) return res.status(403).json({message: "No token provided"}) 
   const decoded = json.verify(token, config.SECRET)
   req.userId = decoded.id
   
   const user = await User.findById(req.userId, {password: 0})

   if(!user) return res.status(404).json({message: 'no user found'})

   

   next()
}
 