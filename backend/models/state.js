const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Users
let State = new Schema({

    state_id:{type:String},
    state_code:{type: String},
    state_name:{type: String},
    status:{type: Number},
    region:{type: String},
    Country_code:{type:String}

},{
    collection: 'state'
});
module.exports = mongoose.model('State', State);