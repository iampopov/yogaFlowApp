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
                len: [1]
            }
        },
        rating: {
            type: DataTypes.DECIMAL,
            validate: {
                max: 6
            }
        },
        instructor: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
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
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        sequence: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        cover: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        healing: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    })
   
    
    Flows.associate = ((models) => {
        models.Flows.belongsToMany(models.Students, { through: "StudentFlow", foreignKey: 'flow_id', targetKey: 'id' });
        models.Flows.belongsTo(models.Teachers)
    });

    return Flows
}