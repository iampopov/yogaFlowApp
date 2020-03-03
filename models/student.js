const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    const Students = sequelize.define("Students", {
        student_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is:["^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$"],
                len: [8]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true
            }
        },
        favorites: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        }
    })

    Students.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    };

    // Students.associate = (models) => {
    //     Students.hasToMany(models.Groups, {
    //       through: 'GroupUsers',
    //       as: 'groups',
    //       foreignKey: 'userId'
    //     });
    //   };

    function encryptPasswordIfChanged(user) {
        if (user.changed('password')) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
        }
    }

    Students.beforeCreate(encryptPasswordIfChanged);
    Students.beforeUpdate(encryptPasswordIfChanged);

    Students.associate = ((models) => {
        models.Students.belongsToMany(models.Flows, { through: "studentFlow", foreignKey: 'student_id', targetKey: 'id'});
        models.Students.belongsToMany(models.Teachers, { through: "TeacherStudent", foreignKey: "student_id", targetKey: 'id'});
    });
    return Students
}