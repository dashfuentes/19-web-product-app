import {Router} from 'express'

const router = Router()
import  * as productCtrl from '../controllers/products.controller.js'



router.post('/', productCtrl.createProduct)

router.get('/', productCtrl.getProduct)

router.get('/:productId', productCtrl.getProductById)

router.put('/', productCtrl.updateProductById)

router.delete('/', productCtrl.deleteProductById)

export default router