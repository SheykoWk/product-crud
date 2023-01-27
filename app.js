//? Dependencies
const express = require('express')

//? Initial configs 
const app = express()

app.use(express.json())

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

//* como nosotros podemos recibir info o data del cliente

app.get('/', (req, res) => {
    res.json({
        message: 'Server Ok!'
    })
})

//TODO Crear una ruta que muestre todos los productos

app.get('/products', (req, res) => {
    res.json(productDB)
})

//TODO Crear una ruta que muestre un producto dependiendo el ID

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)

    const data = productDB.find((item) => id === item.id)
    
    if(data){
        res.json(data)
    } else {
        res.status(404).json({
            message: 'Invalid ID'
        })
    }
})

//TODO Crear una ruta que agregue un producto nuevo

app.post('/products', (req, res) => {
    const data = req.body

    const newProduct = {
        id: ++baseId,
        title: data.title,
        price: data.price,
        img_url: data.image_url
    }

    productDB.push(newProduct)
    res.json(newProduct)
})


app.listen(9000, () => {
    console.log('Server started at port 9000')
})