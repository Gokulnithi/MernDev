const express = require('express')
const app = express()
const route = express.Router();
const userRoute = require('./Routing/user')
const userRoute2 = require('./Routing/newUser')
app.set('view engine','ejs')
app.get('/',function(req,res){
    res.render("index",{text:'poda antha aandavanae namma pakkam irukkan!'})
})

const users = [{name:'Gokul'},{name:'Guhan'},{name:'Ahil'}]
route.param('id',(req,res,next,id)=>{
    const parsed = parseInt(id,10);
    req.ele = users[parsed];
    next();
})
route.get('/array/:id',(req,res)=>{
    console.log(req.ele);
    res.send(req.ele) 
})

app.use('/user',userRoute)
app.use('/user',userRoute2)
app.use('/',route)
app.listen(3000)

