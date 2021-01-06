const express = require("express");
/* const uuid = require('uuid'); */
const parent  = require("../models/parent")
/* const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authentication = require("../helpers/authHelper") */

const parentRouter = express.Router();
parentRouter.use(express.json());

parentRouter
.post("/add", (req, res, next)=>{
    const {name, age, aadhaarNumber, phno, relation} = req.body;
    try{
        parent.create({
         name, age, aadhaarNumber, phno, relation
        })
        .then(parent=>{
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({ success: true, parent });
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

module.exports = parentRouter;
