const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database'); 

class payment extends Model {}
payment.init({
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
}, {
  tableName: "payments",
  timestamps: false,
  sequelize,
});

payment.sync().then(()=>console.log("Table is created/updated"))

module.exports =  payment;