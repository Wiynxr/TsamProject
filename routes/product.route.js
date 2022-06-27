const { Router } = require('express')
const { controllerProduct } = require('../controllers/product.controller')

const router = Router()

router.post('/admin/product', controllerProduct.productPost)
router.patch('/admin/product/:productId', controllerProduct.productPatch)
router.get('/product', controllerProduct.productGet)
router.get('/product/category/:categoryId', controllerProduct.productCategoryGet)
router.get('/product/brand/:brandId', controllerProduct.productBrandGet)
router.delete('/admin/product/:productId', controllerProduct.productDelete)

module.exports = router
