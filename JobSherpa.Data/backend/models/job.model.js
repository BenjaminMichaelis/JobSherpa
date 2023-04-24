module.exports = (sequelize, Sequelize) => {
  const Skill = require("./skill.model.js")(sequelize, Sequelize);

  const Job = sequelize.define("job", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.STRING,
      references: {
        model: "users", // This should be the table name for the User model
        key: "username",
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    desc: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    events: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    activities: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    position: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    salary: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    jobDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  });

  return Job;
};
