import {Router} from 'express'

const router = Router()
import  * as productCtrl from '../controllers/products.controller.js'
import middlewares from '../middlewares/index.js'
import { verifyToken } from '../middlewares/authJwt.js'


router.post('/', middlewares.verifyToken, productCtrl.createProduct)

router.get('/', productCtrl.getProducts)

router.get('/:productId', productCtrl.getProductById)

router.put('/:productId', verifyToken, productCtrl.updateProductById)

router.delete('/:productId', verifyToken, productCtrl.deleteProductById)

export default router