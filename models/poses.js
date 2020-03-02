module.exports = function (sequelize, DataTypes) {
<<<<<<< Updated upstream:models/flows.js
    const Flows = sequelize.define("Flows", {
        flow_name: {
=======
    const Poses = sequelize.define("Poses", {
        pose_name: {
>>>>>>> Stashed changes:models/poses.js
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
<<<<<<< Updated upstream:models/flows.js
        sound: {
=======
        instructions: {
>>>>>>> Stashed changes:models/poses.js
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
<<<<<<< Updated upstream:models/flows.js
        rating: {
            type: DataTypes.DECIMAL,
            validate: {
                max: 6
            }
        },
        instructor: {
=======
        picture: {
>>>>>>> Stashed changes:models/poses.js
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
<<<<<<< Updated upstream:models/flows.js
        difficulty: {
            type: DataTypes.DECIMAL,
            validate: {
                max: 10
            }
        },
        time: {
            type: DataTypes.INT,
=======
        time: {
            type: DataTypes.INTEGER,
>>>>>>> Stashed changes:models/poses.js
            allowNull: false,
            validate: {
                len: [1]
            }
<<<<<<< Updated upstream:models/flows.js
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
=======
>>>>>>> Stashed changes:models/poses.js
        }
        
    })
<<<<<<< Updated upstream:models/flows.js
    return Flows
=======
    return Poses
>>>>>>> Stashed changes:models/poses.js
}