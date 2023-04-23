module.exports = (sequelize, Sequelize) => {
  const JobEvent = sequelize.define("jobevent", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  return JobEvent;
};
