const mongoose = require('mongoose')

const registerTemplate = new mongoose.Schema({
    fullname: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    university: {
        type:String,
        required:true
    },
    department: {
        type:String,
        required:true
    },
    faculty: {
        type:String,
        required:true
    },
    studentid: {
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    confirmpassword: {
        type:String,
        
    },
    address: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('registertable', registerTemplate )