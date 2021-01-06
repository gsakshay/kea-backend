const express = require("express");
const uuid = require('uuid');
const payment  = require("../models/payment")

const paymentRouter = express.Router();
paymentRouter.use(express.json());

paymentRouter
.post("/add", (req, res, next)=>{
    const {type} = req.body;
    const date = new Date().toISOString().slice(0, 10)
    try{
        payment.create({
         id: uuid.v4(), type, date
        })
        .then(payment=>{
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({ success: true, payment });
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

module.exports = paymentRouter;
