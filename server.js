import express from 'express'
import dotenv from 'dotenv'
import { ENV } from './src/lib/env.js'

dotenv.config()

const app = express()


app.get('/', (req , res) => {
    res.status(200).json({ message: 'success from api' })
})




app.listen(ENV.PORT, () => {
    console.log(`This server is running on port ${ENV.PORT}`)
})

