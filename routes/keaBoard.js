const express = require("express");
const uuid = require('uuid');
const kea_board = require('../models/keaBoard')

const paymentRouter = express.Router();
paymentRouter.use(express.json());

paymentRouter
.route('/')
.get((req, res, next)=>{
    try{
        kea_board.findAll()
        .then(kea_board=> {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(kea_board);
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
