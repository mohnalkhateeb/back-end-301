'use strict'
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const server = express();
server.use(cors());
server.use(express.json())
require('dotenv').config();
const PORT = process.env.PORT;
const userModel = require('./module/user')
const getAllData = require('./module/allData')
const addColor =require('./module/addColor')
const deleteColor =require('./module/deleteColor')
const updateColor =require('./module/updatColor')
mongoose.connect('mongodb://localhost:27017/colors', { useNewUrlParser: true, useUnifiedTopology: true });
server.get('/', handelOK)
server.get('/color',getFavColor)
server.get('/allcolors',getAllData)
server.post('/addColor',addColor)
server.delete('/deleteColor/:colorId',deleteColor)
server.put('/updateColor/:colorId',updateColor)
function seedUserCollection() {
    const Razan = new userModel({
        email: 'mhmmd.alkateeb@gmail.com', color: [{
            title: 'Black',
            imageUrl: "http://www.colourlovers.com/img/000000/100/100/Black.png",
        },
        {
            title: 'dutch teal',
                imageUrl: "http://www.colourlovers.com/img/1693A5/100/100/dutch_teal.png",
            }
    ]
    })
    const Mohammad = new userModel({
        email: 'mhmmd.alkateeb@gmail.com', color: [{
            title: 'Black',
            imageUrl: "http://www.colourlovers.com/img/000000/100/100/Black.png",
        },
        {
            title: 'dutch teal',
                imageUrl: "http://www.colourlovers.com/img/1693A5/100/100/dutch_teal.png",
            }
    ]
    })
    Razan.save()
    Mohammad.save()
}
// seedUserCollection()
function handelOK(req, res) {
    res.send('Ok')
}
function getFavColor(req,res)
{
    let email = req.query.email
    console.log(userModel)
    userModel.find({email:email} , function (error, colorData)
    {
        console.log(colorData[0])
        if (error) { res.send(error,'error')}
        else { res.send(colorData[0].color)}
    })
}
server.listen(PORT, () => {
    console.log(`running on PORT ${PORT}`);
})