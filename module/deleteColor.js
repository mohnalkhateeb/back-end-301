'use strict'
const userModel = require('./user')
 module.exports = deleteColor

 function deleteColor(req,res)
 {
     let index = Number(req.params.colorId)
     let email= req.query.email
     userModel.find({email:email},function (error,userColor){
         if(error){res.send('can not delete')}
         else{
             let newColor = userColor[0].color.filter((item,idx)=>{
                if(index !=idx) return item
             })
             userColor[0].color = newColor
             userColor[0].save()
             res.send(userColor[0].color)
         }
     })
 }
