const { DataTypes} = require('sequelize')

const db = require('../utils/database')
const Categories = require('./categories.models')

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
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categories,
            key: 'id'
        }
    }
})

//! HasOne
//! HasMany
//! BelongsTo
//! BelongsToMany

module.exports = Products
