import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'
export const signup = async (req, res)=>{
    const {username,email,password,roles} = req.body
   
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })
  const savedUser =  await newUser.save()
  const token = jwt.sign({id: savedUser._id},config.SECRET,{
    expiresIn: 86400 //24 horas
  })
  res.json({token})
}
export const signin = async (req,res)=>{
    res.json('signin')
}