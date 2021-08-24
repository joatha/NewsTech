const express = require('express')
const router = express.Router()

router.get("/articles", (req, res)=>{
    res.send("Testando de artigo")
})


router.get("/admin/articles/new", (req, res)=>{
    res.render("admin/articles/new")
})

module.exports = router