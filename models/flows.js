module.exports = function (sequelize, DataTypes) {
    const Flows = sequelize.define("Flows", {
        flow_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        sound: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            }
        },
        rating: {
            type: DataTypes.DECIMAL,
            validate: {
                max: 6
            }
        },
        difficulty: {
            type: DataTypes.DECIMAL,
            validate: {
                max: 10
            }
        },
        time: {
            type: DataTypes.INTEGER,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            validate: {
                len: [1]
            }
        },
        cover: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            }
        },
        type: { 
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        healing: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },teacher_id:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
    })


    Flows.associate = ((models) => {
        models.Flows.belongsToMany(models.Students, { through: "StudentFlow", foreignKey: 'flow_id', targetKey: 'id' });
        models.Flows.belongsTo(models.Teachers, { foreignKey: "teacher_id",targetKey:'id' , constraints: true })
    });

    return Flows
}