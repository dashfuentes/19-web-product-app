import express from 'express'
import morgan from 'morgan'

import productsRoutes from './routes/products.routes.js'

const app = express()

app.use(morgan('dev'))

app.get('/', (req,res)=>{
    res.json({
        name: "Web product app",
        author: "Ana Vera",
        description: "rest API",
        version: "1.0.0"
    })
} )


app.use('/products', productsRoutes)

export default app