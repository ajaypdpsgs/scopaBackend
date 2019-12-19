const mongoose = require('mongoose');
 const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var schoolEntitySchema = new mongoose.Schema({
    EntityName: {
        type: String,
        required: 'EntityName can\'t be empty',
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

mongoose.model('schoolEntity', schoolEntitySchema);