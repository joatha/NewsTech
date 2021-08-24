const express = require('express')
const router = express.Router()
const Category = require("./Category")
const slugify = require("slugify")



router.get("/admin/categories/new", (req, res)=>{
    res.render("admin/categories/new")
})

router.post("/categories/save", (req, res)=>{
    var title = req.body.title

    if(title != undefined){

        Category.create({
            title: title,
            slug:slugify(title)
        }).then(()=>{
            res.redirect("/admin/categories")

        }).catch((err)=>{
            console.log("Erro ao cadastrar no banco", err)
        })

    }else{
        res.redirect("/admin/categories/new")
    }

})

router.get("/admin/categories", (req, res)=>{

    Category.findAll().then(categories =>{

        res.render("admin/categories/index", {categories:categories})
    })

})


router.post("/categories/delete", (req, res)=>{
    var id = req.body.id

    if(id != undefined){
        if(!isNaN(id)){

            Category.destroy({
                where: {
                    id: id
                }
            }).then(()=>{
                res.redirect("/admin/categories")
            })

        }else{
            res.redirect("/admin/categories")
        }
    }else{
            res.redirect("/admin/categories")
    }
})

router.get("/admin/categories/edit/:id", (req,res)=>{
    var id = req.params.id

    if(isNaN(id)){
        res.redirect("/admin/categories")

    }
    Category.findByPk(id).then((categories)=>{

        if(categories != undefined){
                res.render("admin/categories/edit", {categories: categories})

        }else{
            res.redirect("/admin/categories")
        }

    }).catch(err =>{
        res.redirect("/admin/categories")
    })
})

router.post("/categories/update", (req, res)=>{
    var id= req.body.id
    var title = req.body.title

    Category.update({title: title, slug: slugify(title)}, {
        where:{
            id: id
        }
    }).then(()=>{
        res.redirect("/admin/categories")
    })

})

module.exports = router