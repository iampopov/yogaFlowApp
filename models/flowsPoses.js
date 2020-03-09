module.exports = function (sequelize, DataTypes) {
    const FlowsPoses = sequelize.define("FlowsPoses", {
        flowPosition: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        poseTime:{
            type:DataTypes.INTEGER,
            allowNull:false
        }     
    });

    FlowsPoses.associate = function(models) {
        models.Poses.belongsToMany(models.Flows, {
            through:"FlowsPoses"
        });
        models.Flows.belongsToMany(models.Poses, {
            through:"FlowsPoses"
        });
        models.FlowsPoses.belongsTo(models.Poses);
        models.FlowsPoses.belongsTo(models.Flows);
    }
        
    
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