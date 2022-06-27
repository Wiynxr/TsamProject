const Category = require('../Models/Category.model')
const Product = require('../Models/Product.model')

module.exports.controllerProduct = {
    productPost: (req, res) => {
        const { name, prise, categoryId, brandId } = req.body
        Product.create({
            name,
            prise,
            categoryId,
            brandId
        })
            .then(() => {
                res.json('created')
            })
    },
    productPatch: (req, res) => {
        const { name, prise, categoryId, brandId } = req.body
        Product.findByIdAndUpdate(req.params.productId,{
            name,
            prise,
            categoryId,
            brandId
        })
            .then(() => {
                res.json('updated')
            })
    },
    productGet: (req, res) => {
        Product.find()
        .then((product) => {
            res.json(product)
        })
    },
    productCategoryGet: (req, res) => {
        Product.find({categoryId: req.params.categoryId}).populate('categoryId')
        .then((product) => {
            res.json(product)
        })
    },
    productBrandGet: (req, res) => {
        Product.find({brandId: req.params.brandId}).populate('brandId')
        .then((product) => {
            res.json(product)
        })
        .catch((er) => {
            res.json(er)
        })
    },
    productDelete: (req, res) => {
        Product.findByIdAndRemove(req.params.productId)
        .then(() => {
            res.json(deleted)
        })
    }
}