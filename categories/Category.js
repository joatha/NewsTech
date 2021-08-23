const Sequelize = require('sequelize')
const conexao = require("../database/database")

const Category = conexao.define('categories',{
    title:{
        type:Sequelize.STRING,
        allowNUll: false
    },
    slug:{
        type:Sequelize.STRING,
        allowNUll: false
    }
})




module.exports = Category