module.exports = (sequelize, Sequelize) => {
    const Job = sequelize.define("job", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true
      },
      jobtitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      salary: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
    });

    return Job;
  };