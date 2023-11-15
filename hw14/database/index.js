const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: 'user',
    host: 'localhost',
    port: 5432,
    database: 'HW14'
});

module.exports = sequelize