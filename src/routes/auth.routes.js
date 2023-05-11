import { Router } from "express";
import * as check from "../middlewares/verifySignup.js";
const router = Router()

import * as autController from '../controllers/auth.controller.js'

router.post('/signin',autController.signin)
router.post('/signup',check.checkExistingUser, autController.signup)
export default router;