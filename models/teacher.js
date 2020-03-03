module.exports = function (sequelize, DataTypes) {
    const Teachers = sequelize.define("Teachers", {
        teacher_name: {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        favorites: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                is: ["^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$"],
                len: [1]
            }
        },
        followers: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    })

    Teachers.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    };
    function encryptPasswordIfChanged(user) {
        if (user.changed('password')) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
        }
    }
    Teachers.beforeCreate(encryptPasswordIfChanged);
    Teachers.beforeUpdate(encryptPasswordIfChanged);

    Teachers.Associate = (models) => {
        // models.Teachers.hasMany(models.Flows, { as: "flowsgroup", foreignKey : 'id' })
        // models.Flows.belongsToMany(models.Students, { through: "StudentFlow", foreignKey: 'flow_id', targetKey: 'id' });
        models.Teachers.belongToMany(models.Teachers, {through: "TeacherTeachers", as: 'Parent', foreignKey: 'parentId'});
        models.Teachers.belongToMany(models.Teachers, {through: "TeacherTeachers", as: 'Children', foreignKey: 'childId'});
    }


    // Users.belongsToMany(models.Users, { through: models.UserUsers, as: 'Parents', foreignKey: 'parentId' });
    // Users.belongsToMany(models.Users, { through: models.UserUsers, as: 'Siblings', foreignKey: 'siblingId' });
  
    return Teachers
}

