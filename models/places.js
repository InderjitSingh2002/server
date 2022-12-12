const mongoose = require('mongoose')

var PlacesSchema = new mongoose.Schema({
    name: String,
    location: String
})

module.exports = mongoose.model('Places', PlacesSchema)