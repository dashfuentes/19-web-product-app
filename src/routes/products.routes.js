import { Router } from "express";
import * as productsCtrl from '../controllers/products.controller.js'
import {authJwt} from '../middlewares/index.js'

const router = Router()

router.post('/',[authJwt.verifyToken,authJwt.isModerator],productsCtrl.createProduct)

router.get('/',productsCtrl.getProducts)

router.get('/:productId',[authJwt.verifyToken,authJwt.isModerator],productsCtrl.getProductById)

router.put('/:productId',[authJwt.verifyToken,authJwt.isModerator,authJwt.isAdmin],productsCtrl.updateProductById)

router.delete('/:productId',[authJwt.verifyToken,authJwt.isModerator,authJwt.isAdmin],productsCtrl.deleteProductById)

export default router;