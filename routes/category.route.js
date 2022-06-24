const { Router } = require('express');
const router = Router();
const {categoryController} = require('../controllers/category.controllelr');

router.get('/users', categoryController.getAllCategory);
router.post('/admin/category', categoryController.addCategoryByAdmin);
router.delete('/admin/category/:id', categoryController.deleteCategoryByAdmin);
router.patch('/admin/category/:id', categoryController.updateCategoryByAdmin)


module.exports = router;