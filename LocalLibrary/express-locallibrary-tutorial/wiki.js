var express = require('express');
var router = express.Router();

//Home page router
router.get('/',(req,res)=>{
    res.send('Wiki home page');
})

router.get('/about',(req,res)=>{
    res.send('About this wiki');
})

module.exports = router;