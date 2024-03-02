const User=require('../model/model.cjs')


const contact=(async(req,res)=>{
  const {name,number,gmail}=req.body
  const data={
    name:name,
    number:number,
    gmail:gmail
  }
  await User.insertMany([data])
  res.json('posted')
})

module.exports={contact}