const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Course extends Model {

    static async findCourse(courseid) {
        try {
            const course = await Course.findByPk(courseid)
            return course ? course : null;
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

Course.init({
    courseid: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    coursename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    semester: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coursedesc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    enrollnum: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Course'
});

module.exports = Course