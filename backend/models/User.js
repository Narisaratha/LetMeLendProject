const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    university: {
        type: String
    },
    department: {
        type: String
    },
    faculty: {
        type: String
    },
    studentid: {
        type: String
    },
    contactnumber: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    confirmpassword: {
        type: String
    },
    address: {
        type: String
    },
    topicName: {
        type: String
    },
    itemName: {
        type: String
    },
    description: {
        type: String
    },
    postID: {
        type: String
    },
    reward: {
        type: String
    },
    typeexpress: {
        type: Boolean
    },
    mode: {
        type: String
    },
    commemt: {
        type:String
    }
}, {
    collection: "user"
})

module.exports = mongoose.model('user', userSchema);