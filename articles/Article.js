const Sequelize = require('sequelize')
const conexao = require("../database/database")
const Category = require("../categories/Category")

const Article = conexao.define('articles',{
    title:{
        type:Sequelize.STRING,
        allowNUll: false
    },
    slug:{
        type:Sequelize.STRING,
        allowNUll: false
    },
    body:{
        type:Sequelize.TEXT,
        allowNUll: false
    }
})

Category.hasMany(Article) // Uma categoria tem muitos artigos

Article.belongsTo(Category) //Um artigo pertence a uma categoria 1 para 1 



module.exports = Article