const productControllers = require('./products.controllers')

const getAllProducts = (req, res) => {
    productControllers.findAllProducts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getProductById = (req, res) => {

    const id = Number(req.params.id)

    productControllers.findProductById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Product not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const postNewProduct = (req, res) => {
    const productObj = req.body 
    productControllers.createNewProduct(productObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {
    getAllProducts,
    getProductById,
    postNewProduct
}
