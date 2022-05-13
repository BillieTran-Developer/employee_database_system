require('dotenv').config();

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: `${process.env.MYSQL_PASSWORD}`,
    DATABASE: `${process.env.DATABASE_NAME}`,
  };