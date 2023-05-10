import {Router} from 'express'

const router = Router()
import  * as productCtrl from '../controllers/products.controller.js'



router.post('/', productCtrl.createProduct)

router.get('/', productCtrl.getProducts)

router.get('/:productId', productCtrl.getProductById)

router.put('/:productId', productCtrl.updateProductById)

router.delete('/:productId', productCtrl.deleteProductById)

export default router