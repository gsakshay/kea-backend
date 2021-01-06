const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database'); 

class kea_board extends Model {}
kea_board.init({
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true
    },
    phno: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
  tableName: "kea_boards",
  timestamps: false,
  sequelize,
});

kea_board.sync().then(()=>console.log("Table is created/updated"))

module.exports =  kea_board;