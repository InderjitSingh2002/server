const express = require('express')
const router = express.Router()
const Places = require('../models/places')

router.get('/', (req,res)=> {
    Places.find((err,place) => {
        if (err) {
            return res.json(err).status(404)
        }
        else {
            return res.json(place).status(200)
        }
    }
)})

module.exports = router