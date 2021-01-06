const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database'); 
const exam_center = require('./examCentre');
const kea_board = require('./keaBoard');

class invigilator extends Model {}
invigilator.init({
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    phno: {
      type: DataTypes.STRING,
    },
    centerId: {
      type: DataTypes.UUID,
    },
}, {
  tableName: "invigilators",
  timestamps: false,
  sequelize,
});

invigilator.belongsTo(exam_center, {
  sourceKey: "id",
  foreignKey: 'centerId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

exam_center.hasMany(invigilator, {
  sourceKey: "id",
  foreignKey: 'centerId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

invigilator.belongsTo(kea_board, {
  sourceKey: "id",
  foreignKey: 'boardId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

kea_board.hasMany(invigilator, {
  sourceKey: "id",
  foreignKey: 'boardId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

invigilator.sync().then(()=>console.log("Table is created/updated"))

module.exports =  invigilator;