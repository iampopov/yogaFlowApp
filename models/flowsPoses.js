module.exports = function (sequelize, DataTypes) {
    const FlowsPoses = sequelize.define("FlowsPoses", {
        flowsId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        posesID: {
            type: DataTypes.UUID,
            allowNull: false
        }        
    }, {});
    // FlowsPoses.associate = function(models) {
    //     Poses.belongsToMany(models.Flows, {
    //         through: 'FlowsPoses',
    //         foreignKey: 'posesId',
    //         otherKey: 'flowsId'
    //     })
        
    // }
    return FlowsPoses
}

// module.exports = (sequelize, DataTypes) => {
//     const ProductOrder = sequelize.define('ProductOrder', {
//       id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: DataTypes.UUIDV4,
//         allowNull: false,
//       },
//       qty: {
//         type: DataTypes.DECIMAL,
//         allowNull: false,
//       },
//       productId: {
//         type: DataTypes.UUID,
//         allowNull: false,
//       },
//       orderId: {
//         type: DataTypes.UUID,
//         allowNull: false,
//       },
//     }, {});
//     ProductOrder.associate = function(models) {
//       // associations can be defined here
//     };
//     return ProductOrder;
//   };