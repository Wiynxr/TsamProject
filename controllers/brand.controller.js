const Brand = require("../Models/Brand.model")

module.exports.brandsController = {
    brandAdminPost : (req, res) => {
     Brand.create({
        name : req.body.name
     }).then(() => {
        res.json('Администратор добавил бренд')
     })
   },
   brandAdminDelete : (req, res) => {
    Brand.findByIdAndRemove(req.params.id)
    .then(() => {
        res.json('Администратор удалил бренд')
    })
   },
   brendAdminPatch : (req, res) => {
    Brand.findByIdAndUpdate(req.params.id, {
        name : req.body.name
    }).then(() => {
        res.json('Администратор изменил')
    })
   }
}


