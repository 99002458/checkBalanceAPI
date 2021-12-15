const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contact_list_db')
.then(() => {
    console.log("MongoDB connected Successfully");
})
.catch((err) => {
    console.log("MongoDB not connected",err);
});