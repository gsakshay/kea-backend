const express = require("express");
const uuid = require('uuid');
const student  = require("../models/student")
const invigilator = require("../models/invigilator")

const studentRouter = express.Router();
studentRouter.use(express.json());


studentRouter
.route('/:rollNumber')
.get((req, res, next)=>{
    const { rollNumber } = req.params;
    student.findOne({
    where: {
        rollNumber
    },
    include: { all: true }
    }).then(student=>{
        res.json(student);
    })
    .catch(err=>{
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.json(err)
    })
})

studentRouter
.route('/')
.post((req, res, next)=>{
    const {rollNumber, name, age, aadhaarNumber, dob, address, parentId, centerId, hallTicket, paymentId, boardId} 
    = req.body;
    try{
    student.create({
        rollNumber, name, age, aadhaarNumber, dob, address, parentId, centerId, hallTicket, paymentId, boardId
        })
        .then(student=>{
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({ success: true, student});
    }).catch(err=>{
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.json(err)
    })
    }catch(err){
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.json(err)
    }
})

module.exports = studentRouter;
