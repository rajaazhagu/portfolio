const express =require('express')
const router=express.Router()
const Controller=require('../controllers/contactController.cjs')


router.post('/user',Controller.contact)

module.exports=router


