import { Router } from "express";
const router = Router()

import * as autController from '../controllers/auth.controller.js'

router.post('/signin',autController.signin)
router.post('/signup',autController.signup)
export default router;