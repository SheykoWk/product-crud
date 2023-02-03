const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false, //? not null
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
})



module.exports = Products
