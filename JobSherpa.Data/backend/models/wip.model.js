module.exports = (sequelize, Sequelize) => {
    const Wip = sequelize.define("wip", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Wip;
  };