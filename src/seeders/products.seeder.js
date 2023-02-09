const Products = require('../models/products.models')

try {
    Products.bulkCreate([
        {
            title: 'xiaomi redmi 9a',
            price: 300,
            imageUrl: 'https://google.com/',
            categoryId: 1
        },
        {
            title: 'Lavadora LG',
            price: 500,
            imageUrl: 'https://google.com/',
            categoryId: 1
        },
        {
            title: 'casita para perros',
            price: 100,
            imageUrl: 'https://google.com/',
            categoryId: 9
        },
        {
            title: 'Serrucho',
            price: 30,
            imageUrl: 'https://google.com/',
            categoryId: 10
        },
        {
            title: 'Escritorio',
            price: 120,
            imageUrl: 'https://google.com/',
            categoryId: 7
        },
        {
            title: 'Control Play Station 5',
            price: 60,
            imageUrl: 'https://google.com/',
            categoryId: 2
        }
    ])
} catch (error) {
    console.log(error)
}






