const express = require('express');
const customer = require('../models/Customer');
var uuid = require('uuid');

const app = express();
const router = express.Router();





app.get('/check-balance/:id',function(req,res){
    console.log("Shrikant - get");
    const id = req.body.param;
    const Customer = customer.findById(id);
    res.send(Customer);
});

app.get('/generateUuid',function(req,res){
    const url = req.url;
    console.log("Shrikant - get - generate uid");

});


app.post('/generateUuid',function(req,res){
const UUID = uuid.v1();
    contact.create({
        uuid:UUID
    })
});

