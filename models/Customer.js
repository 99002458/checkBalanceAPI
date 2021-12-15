const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    uuid:{
        type:String,
        required:true
    }
});

const Customer = mongoose.model('Customers',Schema);

module.exports = Customer;

