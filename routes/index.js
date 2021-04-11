
const express = require('express');
const router = express.Router()

// landing page

router.get('/', (req,res) => {
    res.render("index");

})


router.get('/admin', (req,res) => {
    res.send("Admins only");
})


router.get('/login', (req,res) => {
    res.render("login");
})


module.exports = router;
