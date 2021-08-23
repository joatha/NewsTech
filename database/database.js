const Sequelize = require('sequelize')

const conexaoComBanco = new Sequelize('newstech', 'root','joatha', {
    host: 'localhost',
    dialect:'mysql'
})

module.exports = conexaoComBanco