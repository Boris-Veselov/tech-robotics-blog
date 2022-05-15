const Sequelize = require('sequelize');

// connection to my database
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

// const PORT = process.env.PORT || 3001;


module.exports = sequelize;