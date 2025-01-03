const express = require('express')
const route = express.Router();
route.get('/deleteuser',(req,res)=>{
    res.send('User Deleted')
})
module.exports = route;