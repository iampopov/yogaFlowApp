module.exports = (sequelize, DataTypes) => {
    const TeacherTeacher = sequelize.define('TeacherTeacher', {
    }, {
      freezeTableName: true
    });
  
    TeacherTeacher.associate = function(models) {
        models.TeacherTeacher.belongsTo(models.Teachers, { as: 'Parent', onDelete: 'CASCADE'});
        models.TeacherTeacher.belongsTo(models.Teachers, { as: 'Children', onDelete: 'CASCADE' });
    };
  
    return TeacherTeacher;
  };