import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'
import Role from '../models/Role.js'
import { token } from 'morgan'

export const signup = async (req, res) => {
    const {username,email,password, roles} = req.body;

    const newUser = new User({
        username:username,
        email:email,
        password: await User.encryptPassword(password)
    })

    if (roles) {
        const foundRoles = await Role.find({name: {in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    }else{
        const role = await Role.findOne({name: "user"})
        newUser.roles = [role._id];
    }

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

    const {email,password} = req.body;
    const userFound = await User.findOne({email:email}).populate("roles")
    console.log(userFound);

    if (!userFound) return res.status(400).json({message:`user ${email} not found`})

    const matchPassword = await User.comparePassword(password,userFound.password)

    if (!matchPassword) {
        return res.status(400).json({token: null, message:'invalid password'})
    }

    const token = jwt.sign({id: userFound._id}, config.SECRET,{
        expiresIn:1800
    })

    res.status(200).json({token: token})
}