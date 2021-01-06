const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database'); 

class hall_ticket extends Model {}
hall_ticket.init({
    ticket_number: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true
    },
    examDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    examTime: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
  tableName: "hall_tickets",
  timestamps: false,
  sequelize,
});

hall_ticket.sync().then(()=>console.log("Table is created/updated"))

module.exports =  hall_ticket;