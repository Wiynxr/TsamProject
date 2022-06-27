const {Router} = require('express')
const router = Router()

const { brandsController } = require('../controllers/brand.controller')

router.post('/admin/brand', brandsController.brandAdminPost)
router.delete('/admin/brand/:id', brandsController.brandAdminDelete)
router.patch('/admin/brand/:id', brandsController.brendAdminPatch)



module.exports = router