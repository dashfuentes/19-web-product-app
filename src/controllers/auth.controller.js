import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'

export const signup = async (req, res) => {
    const {username,email,password, roles} = req.body;

    const newUser = new User({
        username:username,
        email:email,
        password: await User.encryptPassword(password)
    })
    console.log("usuario a guardar "+newUser);

    try {
        const savedUser = await newUser.save()
    
        const token = jwt.sign({id: savedUser._id},config.SECRET,{
            expiresIn:1800
        })

        res.status(200).json({token})
    } catch (error) {
        res.status(500).json(error.message)
        console.log(error);
        return
    }
}

export const signin = async (req, res) => {
    res.json('signin')
}