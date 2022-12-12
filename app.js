const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

mongoose.connect(process.env.DATABASE_URL, {})
.then((res)=>{
console.log("Connected to DB")
})
.catch((err)=>{
console.log(`Connection error: ${err}`)
})

const cors = require('cors')
const req = require('express/lib/request')
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,POST,PUT,DELETE,HEAD,OPTIONS'
}))

const places = require('./controllers/places')
app.use('/api/places', places)

app.use(bodyParser.json())

const port = process.env.PORT || 3000
app.listen(port)

module.exports = app