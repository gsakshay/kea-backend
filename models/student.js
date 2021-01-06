const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');
const parent = require('./parent')
const exam_center = require('./examCentre')
const hall_ticket = require('./hallTicket')
const payment = require('./payment')
const keaBoard = require('./keaBoard') 

class student extends Model {}
student.init({
    rollNumber: {
      type: DataTypes.STRING,
      unique: true,
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
    aadhaarNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
    },
    dob: {
      type: DataTypes.DATEONLY,
    },
    parentId: {
      type: DataTypes.BIGINT,
    },
    centerId:{
      type: DataTypes.UUID,
    },
    hallTicket: {
      type: DataTypes.UUID,
    },
    paymentId: {
      type: DataTypes.UUID,
    },
    boardId: {
      type: DataTypes.UUID,
    }
}, {
  tableName: "students",
  sequelize,
});

student.belongsTo(parent, {
  sourceKey: "aadhaarNumber",
  foreignKey: 'parentId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

parent.hasOne(student, {
  sourceKey: "aadhaarNumber",
  foreignKey: 'parentId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

student.belongsTo(exam_center, {
  sourceKey: "id",
  foreignKey: 'centerId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

exam_center.hasMany(student, {
  sourceKey: "id",
  foreignKey: 'centerId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})


student.belongsTo(hall_ticket, {
  sourceKey: "ticket_number",
  foreignKey: 'hallTicket',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

hall_ticket.hasOne(student, {
  sourceKey: "ticket_number",
  foreignKey: 'hallTicket',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

student.belongsTo(payment, {
  sourceKey: "id",
  foreignKey: 'paymentId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

payment.hasOne(student, {
  sourceKey: "id",
  foreignKey: 'paymentId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

student.belongsTo(keaBoard, {
  sourceKey: "id",
  foreignKey: 'boardId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

exam_center.hasMany(student, {
  sourceKey: "id",
  foreignKey: 'boardId',
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

student.sync().then(()=>console.log("Table is created/updated"))

module.exports =  student;