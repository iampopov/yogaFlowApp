module.exports = function(sequelize, DataTypes) {
    const Poses = sequelize.define("Poses", {
        pose_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        instructions: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        picture: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
        
    })

    Poses.associate = (models)=>{
        models.Poses.belongsTo(models.Teachers)
    }
    return Poses;
}