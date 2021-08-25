const Sequelize = require('sequelize')

const conexaoComBanco = new Sequelize('newstech', 'root','joatha', {
    host: 'localhost',
    dialect:'mysql',
    timezone:"-03:00"
})

module.exports = conexaoComBanco