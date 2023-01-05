const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    sid: {
        type: Number,
        required: true,
        unique:true
    },


    password: {
        type: String,
        required: true,
        trim: true
    },

    sname:{
        type:String,
        required:true,
        trim:true
    },

    mobileNo:{
        type:Number,
        required:true,
        unique:true,
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        trim:true
    },

    cgpa:{
        type:Number,
        required:true,
    },

    jobType:{
        type:String,
    },

    branch:{
        type:String,
        required:true,
    }

});

// Creating New Collection
const studentlogin = new mongoose.model("StudentSchema", studentSchema);

module.exports = studentlogin;