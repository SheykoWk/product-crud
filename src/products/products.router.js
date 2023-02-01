const productServices = require('./products.services')

const router = require('express').Router()

router.get('/products', productServices.getAllProducts)

router.post('/products', productServices.postNewProduct)

router.get('/products/:id', productServices.getProductById)

module.exports = router

