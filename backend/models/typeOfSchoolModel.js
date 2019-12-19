const mongoose = require('mongoose');
 const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var typeOfSchoolSchema = new mongoose.Schema({
    typeOfSchool: {
        type: String,
        required: 'Type Of School can\'t be empty'
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

mongoose.model('typeOfSchool', typeOfSchoolSchema);