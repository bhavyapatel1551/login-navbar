const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    aid: {
        type: Number,
        required: true,
        unique:true
    },


    password: {
        type: String,
        required: true,
        trim: true
    },

    aname:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    
});

// Creating New Collection
const adminlogin = new mongoose.model("AdminSchema", adminSchema);

module.exports = adminlogin;