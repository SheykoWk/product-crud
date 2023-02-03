const Products = require('../models/products.models')

const productDB = [
    {
        id: 1,
        title: 'Xbox serie X',
        price: '600 USD',
        image_url: 'https://cdn.gameplanet.com/wp-content/uploads/2022/09/03134301/series_x_2_2.jpg'
    },
    {
        id: 2,
        title: 'Play Station 5',
        price: '600 USD',
        image_url: 'https://cdn.gameplanet.com/wp-content/uploads/2022/09/03134301/series_x_2_2.jpg'
    }
]

let baseId = 3

const findAllProducts = async () => {
    //! return await productDB

    const data = await Products.findAll()
    return data
}

const findProductById = async (id) => {
    const data = await productDB.find(product => product.id === id)
    return data
}

const findProductByIdWithPromises = (id) => {
    return new Promise((resolve, reject) => {
        const data = productDB.find(product => product.id === id)
        if(data){
            resolve(data)
        } else {
            reject('Invalid ID')
        }
    })
}

const createNewProduct = async (prodObj) => {
    const newProduct = {
        id: baseId++,
        title: prodObj.title,
        price: prodObj.price,
        img_url: prodObj.image_url
    }
    await productDB.push(newProduct)
    return newProduct
}

module.exports = {
    findAllProducts,
    findProductById,
    createNewProduct
}