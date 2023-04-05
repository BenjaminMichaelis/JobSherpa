module.exports = (sequelize, Sequelize) => {
    const Skill = sequelize.define("skill", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    return Skill;
  };