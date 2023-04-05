module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    },
  });

  return User;
};