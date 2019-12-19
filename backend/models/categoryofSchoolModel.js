const mongoose = require('mongoose');
 const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var schoolcategorySchema = new mongoose.Schema({
    schoolCategory: {
        type: String,
        required: 'Category can\'t be empty',
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

mongoose.model('categoryofSchool', schoolcategorySchema);