const models = require("./index");

module.exports = function (sequelize, DataTypes) {
    const FlowsPoses = sequelize.define("FlowsPoses", {
        flowsId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        poseID: {
            type: DataTypes.UUID,
            allowNull: false
        }        
    }, {});
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