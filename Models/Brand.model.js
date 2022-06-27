const mongoose = require('mongoose');
const brandsSchema = mongoose.Schema({
    name : String
})

const Brand = mongoose.model("Brand", brandsSchema);


module.exports = Brand