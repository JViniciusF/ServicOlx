const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    img: String
})

const Category = mongoose.model('Category', CategorySchema)

module.exports = { Category, CategorySchema }