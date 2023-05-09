import express from 'express'
import morgan from 'morgan'

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

export default app