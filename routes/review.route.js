const {Router} = require('express')
const router = Router()

const { reviewController }  = require('../controllers/review.controller')


router.delete('/admin/review/:id', reviewController.reviewAdminDelete)
router.post('/user/review', reviewController.reviewUserPost)



module.exports = router