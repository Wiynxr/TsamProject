const Category = require("../Models/Category.model")

module.exports.categoryController = {


  getAllCategory: async (req, res) => {
    try {
      res.json(await Category.find())
    } catch (error) {
      res.json(error)
    }
  },

  addCategoryByAdmin: async (req, res) => {
    try {
      await Category.create({ name: req.body.name })
      res.json('админ добавил категорию')
    } catch (error) {
      res.json(error)
    }
  },

  deleteCategoryByAdmin: async (req, res) => {
    try {
      Category.findByIdAndRemove(req.params.id)
      res.json('категория удалена админом')
    } catch (error) {
      res.json(error)
    }
  },

  updateCategoryByAdmin: async (req, res) => {
    try {
      Category.findByIdAndUpdate(req.params.id)
      res.json('Администратор удалил категорию')
    } catch (error) {
      res.json(error)
    }
  },



}