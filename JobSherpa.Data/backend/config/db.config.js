  // Sample:
  //   HOST: "localhost",
  //   USER: "root",
  //   PASSWORD: "123456",
  //   DB: "testdb",
  //   dialect: "mysql",
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000
  //   }

module.exports = {
    // https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database
    HOST: process.env.DBHOST,
    USER: process.env.DBUSER,
    PASSWORD: process.env.DBPASSWORD,
    DB: process.env.DBNAME,
    dialect: "mysql",
    // https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-constructor-constructor
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };