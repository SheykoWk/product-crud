//? Dependencies
const express = require('express')
const productRouter = require('./products/products.router')

//? Initial configs 
const app = express()

app.use(express.json())

require('dotenv').config()

//! const dotenv = require('dotenv')
//! dotenv.config()

//* como nosotros podemos recibir info o data del cliente

app.get('/', (req, res) => {
    res.json({
        message: 'Server Ok!',
        routes: {
            products: 'http://localhost:9000/api/v1/products'
        }
    })
})
//? rutas de productos
app.use('/api/v1', productRouter)



app.listen(9000, () => {
    console.log('Server started at port 9000')
})