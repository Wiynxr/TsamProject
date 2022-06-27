const Review = require("../Models/Review.model")

module.exports.reviewController = {
  reviewAdminDelete : (req, res) => {
    Review.findByIdAndRemove(req.params.id)
    .then(() => {
        res.json('Администратор удалил отзыв')
    })
  },
  reviewUserPost: (req, res) => {
    const {text, userId, productId} = req.body
    Review.create({
       text,
       userId,
       productId
    }).then(() => {
      res.json('Пользоваетль оставил свой отзыв')
    })
  }
}



// пользователь может оставлять свой отзыв;