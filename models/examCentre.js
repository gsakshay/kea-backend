const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');
const keaBoard = require('./keaBoard') 

class exam_center extends Model {}
exam_center.init({
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
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    numberOfRooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    phno: {
      type: DataTypes.TEXT,
    },
    boardId: {
      type: DataTypes.UUID,
    },
}, {
  tableName: "exam_centers",
  timestamps: false,
  sequelize,
});



exam_center.belongsTo(keaBoard, {
  sourceKey: "id",
  foreignKey: 'boardId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

keaBoard.hasMany(exam_center, {
  sourceKey: "id",
  foreignKey: 'boardId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})


exam_center.sync().then(()=>console.log("Table is created/updated"))

module.exports =  exam_center;