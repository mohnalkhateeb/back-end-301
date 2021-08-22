'use strict'
const axios = require('axios')
module.exports = getAllData
function getAllData(req,res)
{
    axios 
    .get(`https://ltuc-asac-api.herokuapp.com/allColorData`)
    .then(allDataArr=>{
        const newAllData = allDataArr.data.map(colorItem => new ColorItem(colorItem))
        res.status(200).send(newAllData)
    })
    .catch(error=>{
        res.status(500).send(error)
    })
}

class ColorItem {
    constructor(colorItem)
    {
        this.title = colorItem.title,
    this.imageUrl = colorItem.imageUrl
}
    

}