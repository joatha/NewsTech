const express = require("express")
const app = express()
const conexaoComBanco = require('./database/database')
app.set('view engine', 'ejs')

const categoriasControle = require("./categories/CategoriesController")
const artigosContrle = require("./articles/ArticlesController")


const Article = require("./articles/Article")
const Category = require("./categories/Category")
//Arquivos estáticos

app.use(express.static('public'))


//Trabalhando com furmularios
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//Database

conexaoComBanco.authenticate().then(()=>{
    console.log("Conexão realizada com sucesso")  
}).catch((err)=>{
    console.log("erro ao se conectar com o banco de dados", err)
})


app.use("/", categoriasControle)

app.use("/", artigosContrle)

app.get("/", (req, res) =>{

    Article.findAll({
        order:[
            ['id', 'DESC']
        ]
    }).then(articles =>{

        Category.findAll().then(categories =>{
            res.render("index", {articles: articles, categories: categories})
        })

    })
})

app.get("/:slug", (req,res)=>{
    var slug = req.params.slug

    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article =>{
        if(article != undefined){
            res.render("article", {article: article})
        }else{
            res.redirect("/")
        }
    }).catch(err=>{
        res.redirect("/")
    })
})

app.listen(2000, ()=>{
    console.log("Servidor rodando com sucesso!")
})