const Categories = require('../models/categories.models')


try {
    Categories.bulkCreate([
        {
            name: 'Electrodomesticos'
        },
        {
           name: 'Video Juegos' 
        },
        {
            name: 'Ropa'
        },
        {
            name: 'Herramientas'
        },
        {
            name: 'Juguetes'
        },
        {
            name: 'Accesorios'
        },
        {
            name: 'Papeleria'
        },
        {
            name: 'Aseo'
        },
        {
            name: 'Mascotas'
        },
        {
            name: 'Carpinteria'
        }
    ])
    console.log('Categorias creadas exitosamente')
} catch (error) {
    console.log({message: 'Error en categories seeders', error})
}



