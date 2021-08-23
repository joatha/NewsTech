const express = require('express')
const router = express.Router()

router.get("/categorias", (req, res)=>{
    res.send("Testando Aqui se roda!")
})


module.exports = router