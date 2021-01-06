const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database'); 

class parent extends Model {}
parent.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    aadhaarNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    phno: {
      type: DataTypes.TEXT,
    },
    relation: {
      type: DataTypes.TEXT
    },
}, {
  tableName: "parents",
  timestamps: false,
  sequelize,
});

parent.sync().then(()=>console.log("Table is created/updated"))

module.exports =  parent;