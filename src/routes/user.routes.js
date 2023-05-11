import { Router } from "express";
import * as userCtrl from '../controllers/user.controller.js'
import {authJwt} from '../middlewares/index.js'
import * as check from "../middlewares/verifySignup.js";



const router = Router()

//Create
router.post('/',[authJwt.verifyToken,
                 //authJwt.isModerator,
                 check.checkExistingUser],userCtrl.createUser)

//Read
router.get('/',[authJwt.verifyToken],userCtrl.getUsers)

//readById
router.get('/:userId',[authJwt.verifyToken]//,authJwt.isModerator]
          ,userCtrl.getUserById)

//Update
router.put('/:userId',//[authJwt.verifyToken,authJwt.isModerator,authJwt.isAdmin],
userCtrl.updateUserById)

//Delete
router.delete('/:userId',[authJwt.verifyToken,authJwt.isModerator,authJwt.isAdmin],userCtrl.deleteUserById)

export default router;