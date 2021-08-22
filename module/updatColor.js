'use strict'
const userModel = require('./user')

module.exports = updateColor

function updateColor(req,res){
    let {email,title,imageUrl} = req.body
    let index = Number(req.params.colorId)
    userModel.findOne({email:email} , function (error,userColor){
        if(error){res.send('can not update')}
        else{
            userColor.color.splice(index,1,{
                title : title,
                imageUrl:imageUrl
            })
            userColor.save()
            res.send(userColor.color)
        }
    })


}