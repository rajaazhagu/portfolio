const express =require('express')
const app =express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
const routeURL=require('./routes/routes.cjs')
 dotenv.config()

 app.use(cors())
 app.use(express.json())
 
 mongoose.connect('mongodb+srv://azhaguazhagu30:wGNLRYzYE7vZWWHR@cluster0.ipwnl5f.mongodb.net/data?retryWrites=true&w=majority',console.log('mongodb is connected'))

 app.use('/app',routeURL)

 app.listen(process.env.PORT||3001,console.log('server is up'))