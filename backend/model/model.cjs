const mongoose=require('mongoose')

const user=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    gmail:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('contact',user)