import {Router} from 'express'
const router = Router()
import * as authCtrl from '../controllers/auth.controller.js'
import { verifySignup } from '../middlewares/index.js'


router.post('/signin', authCtrl.signin)
router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],authCtrl.signup)

export default router