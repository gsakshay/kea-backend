const express = require("express");
const uuid = require('uuid');
const hallTicket = require('../models/hallTicket')

const hallTicketRouter = express.Router();
hallTicketRouter.use(express.json());

hallTicketRouter
.route('/')
.get((req, res, next)=>{
    const date = new Date();
    const newDate = date + 1000 * 60 * 60 * 24 * 10;  
    const examDate = new Date(newDate).toISOString().slice(0, 10);
    const examTime = '2:00 - 5:00'

    try{
        hallTicket.create({
         ticket_number: uuid.v4(), examDate, examTime
        })
        .then(hallTicket=>{
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({ success: true, hallTicket });
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

module.exports = hallTicketRouter;
