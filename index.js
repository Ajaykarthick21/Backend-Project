const express = require('express')
const app = express()
const PORT = 4000;
require('dotenv').config


app.get('/',(req,res)=>{
    res.send("Hello world")
    

})

app.get('/twitter',(req,res)=>{
    res.send("<h1>Kya rey setting ah</h1>")
})
app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is running in ${PORT}`)
})