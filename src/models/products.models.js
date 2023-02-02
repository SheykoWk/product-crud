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
        defaultValue: 'Desconocido',
        unique: true
    }
})

