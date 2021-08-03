'use strict'
const mongoose = require('mongoose')

const colorSchema = new mongoose.Schema({
    title: String,
    imageUrl :String
})
const userSchema = new mongoose.Schema({
    email:String,
    color : [colorSchema]
})

const userModel = new mongoose.model('user',userSchema)

module.exports = userModel