const express = require("express");
const uuid = require('uuid');
const invigilator = require('../models/invigilator')

const paymentRouter = express.Router();
paymentRouter.use(express.json());

paymentRouter
.route('/')
.get((req, res, next)=>{
    try{
        invigilator.findAll()
        .then(invigilators=> {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(invigilators);
        })
        .catch(err=> {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json({ error: true, err });
        })
    }catch(err){
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.json(err)
    }
})

module.exports = paymentRouter;
