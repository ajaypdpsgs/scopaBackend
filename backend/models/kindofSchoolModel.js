const mongoose = require('mongoose');
 const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var kindofSchoolSchema = new mongoose.Schema({
    kindOfSchool: {
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

mongoose.model('kindofSchool', kindofSchoolSchema);