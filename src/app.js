import express from 'express'
import morgan from 'morgan'

import productsRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())


app.get('/', (req,res)=>{
    res.json({
        name: "Web product app",
        author: "Ana Vera",
        description: "rest API",
        version: "1.0.0"
    })
} )


app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)
export default app