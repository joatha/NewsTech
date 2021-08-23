const express = require('express')
const router = express.Router()

router.get("/articles", (req, res)=>{
    res.send("Testando de artigo")
})


module.exports = router