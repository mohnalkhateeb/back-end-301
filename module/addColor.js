'use strict'
const userModel = require('./user')
const axios =require('axios')
module.exports=addColor
function addColor(req,res){
    let {email,id,title,imageUrl}=req.body
    userModel.find({email:email},function(error,userColor){
        if(error){res.send(error,'you can not add ')}
        else{
            userColor[0].color.push({
                id:id,
                title : title,
                imageUrl : imageUrl
            })
            userColor[0].save()
            res.send(userColor[0].color)
        }
    })

}