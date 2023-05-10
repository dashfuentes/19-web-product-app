import {Router} from 'express'

const router = Router()
import  * as productCtrl from '../controllers/products.controller.js'
import {middlewares} from '../middlewares'


router.post('/', verifyToken, productCtrl.createProduct)

router.get('/', productCtrl.getProducts)

router.get('/:productId', productCtrl.getProductById)

router.put('/:productId', productCtrl.updateProductById)

router.delete('/:productId', productCtrl.deleteProductById)

export default router