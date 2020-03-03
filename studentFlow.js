module.exports = function (sequelize, DataTypes) {

    const StudentFlow = sequelize.define('StudentFlow', {
        // studentId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'Students',
        //         key: 'id'
        //     }
        // },
        // flowId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'flows',
        //         key: 'id'
        //     }
        // }
    });

    // db.Flows.belongsToMany(db.Students, {
    //     foreignKey: "id",
    //     as: "student_id"
    // });

    // db.Students.hasMany(db.flows, {
    //     foreignKey: "id",
    //     as: "flow_id"
    // })
    // StudentFlow.associate = ((models) => {
    //     models.Flows.belongsToMany(models.Students, { through: "studentFlow", foreignKey: 'flow_id', targetKey: 'id' });
    //     models.Students.belongsToMany(models.Flows, { through: "studentFlow", foreignKey: 'student_id', targetKey: 'id'});
    // });

    return StudentFlow;
};
