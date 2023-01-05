const mongoose = require('mongoose');

const comapnySchema = new mongoose.Schema({
    cid: {
        type: Number,
        required: true,
        unique:true
    },


    password: {
        type: String,
        required: true,
        trim: true
    },

    cname:{
        type:String,
        required:true,
        trim:true
    },

    mobileNo:{
        type:Number,
        required:true,
        unique:true,
    },

    cemail:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        trim:true
    }


});

// Creating New Collection
const companylogin = new mongoose.model("CompanySchema", comapnySchema);

module.exports = companylogin;