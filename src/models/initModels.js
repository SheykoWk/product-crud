//? En este archivo vamos a importar todos los models
//? Aqui vamos a generar las relaciones entre ellos

const Categories = require('./categories.models')
const Products = require('./products.models')

const initModels = () => {

    Products.belongsTo(Categories)
    Categories.hasMany(Products)

}

module.exports = initModels
