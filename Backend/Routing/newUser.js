const express = require('express')
const router = express.Router();

router.get('/newuser',(req,res)=>{
    res.send('User Created')
})
module.exports = router;