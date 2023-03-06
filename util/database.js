const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'Keertan@2000', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize