const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categoryId: {
        ref: 'Category',
        type: mongoose.SchemaTypes.ObjectId,
    },
    brandId: {
        ref: 'Brand',
        type: mongoose.SchemaTypes.ObjectId,
    },
    prise: {
        type: Number,
        required: true
    },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product