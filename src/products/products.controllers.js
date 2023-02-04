const Products = require('../models/products.models')

const findAllProducts = async () => {
    //! return await productDB
    const data = await Products.findAll()
    return data
}

const findProductById = async (id) => {
    //! const data = await productDB.find(product => product.id === id)
    //! return data

    const data = await Products.findOne({
        where: {
            id : id
        }
    })
    return data
}

// const findProductByIdWithPromises = (id) => {
//     return new Promise((resolve, reject) => {
//         const data = productDB.find(product => product.id === id)
//         if(data){
//             resolve(data)
//         } else {
//             reject('Invalid ID')
//         }
//     })
// }

const createNewProduct = async (prodObj) => {
    //! const newProduct = {
    //!     id: baseId++,
    //!     title: prodObj.title,
    //!     price: prodObj.price,
    //!     img_url: prodObj.image_url
    //! }
    //! await productDB.push(newProduct)
    //! return newProduct

    const newProduct = {
        title: prodObj.title,
        price: prodObj.price,
        imageUrl : prodObj.imageUrl
    }

    const data = await Products.create(newProduct)
    return data
}

const updateProduct = async (id, productObj) => {
    const data = await Products.update(productObj, {
        where: {
            id : id
        }
    })
    return data[0] //? Accedemos a la posicion 0 para retornar directamente la confirmacion (0 o 1)
    //? [1] -> La cantidad de productos que se modificaron
    //? [0] -> Error en caso de que el where no haya encontrado coincidencias -> el id no existe
}

const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id: id
        }
    })
    return data
    //? 1 -> confirmacion de que el producto se elimino correctamente
    //? 0 -> El id que le mandamos no existe
}


module.exports = {
    findAllProducts,
    findProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
}
