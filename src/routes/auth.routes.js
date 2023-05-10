import {Router} from 'express'
const router = Router()
import * as authCtrl from '../controllers/auth.controller.js'


router.post('/signin', authCtrl.signin)
router.post('/signup', authCtrl.signup)

export default router