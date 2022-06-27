const mongoose = require('mongoose');
const reviewsSchema = mongoose.Schema({
    text : String,
    userId : {
        ref : "User",
        type : mongoose.SchemaTypes.ObjectId
    },
    productId : {
        ref : "Product",
        type : mongoose.SchemaTypes.ObjectId
    }
})

const Review = mongoose.model('Review', reviewsSchema)


module.exports = Review