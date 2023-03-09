const mongoose = require('mongoose');

const user = mongoose.Schema({
    email: { type: String, required: true},
    name:{ type: String, required : true},
    password:{ type: String, required:true},
    role:{type: String, required:true},
    location: {
        type:{type: String},
        coordinates: [],
    },
    coverphoto: {
     type: Object,
    },

});

user.index({location: '2dshere'});
module.exports = mongoose.model('user',user);