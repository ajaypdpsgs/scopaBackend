const mongoose = require('mongoose');
 const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var schoolBoardSchema = new mongoose.Schema({
    board: {
        type: String,
        required: 'Board can\'t be empty',
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

mongoose.model('schoolBoard', schoolBoardSchema);