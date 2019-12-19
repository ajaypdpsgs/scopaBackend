const mongoose = require('mongoose');
 const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var schoolLevelSchema = new mongoose.Schema({
    schoolReachLevel: {
        type: String,
        required: 'School Level can\'t be empty',
        unique:true
    },
    status: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
       default: Date.now 
    },
    updatedAt: {
        type: Date,
        default:Date.now
    }
});

mongoose.model('schoolLevel', schoolLevelSchema);