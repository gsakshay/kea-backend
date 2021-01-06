const express = require("express");
const uuid = require('uuid');
const exam_center = require('../models/examCentre')

const paymentRouter = express.Router();
paymentRouter.use(express.json());

paymentRouter
.route('/')
.get((req, res, next)=>{
    try{
        exam_center.findAll()
        .then(e_centers=> {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(e_centers);
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
