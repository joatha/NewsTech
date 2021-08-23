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

app.get("/", (req, res)=>{
    res.render("index")
})

app.listen(2000, ()=>{
    console.log("Servidor rodando com sucesso!")
})