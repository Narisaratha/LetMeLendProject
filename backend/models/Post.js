const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let postSchema = new Schema({
    topicName: {
        type: String
    },
    itemName: {
        type: String
    },
    time: {
        type: Date.now
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
    }
}, {
    collection: "post"
})

module.exports = mongoose.model('post', userSchema);