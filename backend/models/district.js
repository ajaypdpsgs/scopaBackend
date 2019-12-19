const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Users
let District = new Schema({

    district_id:{type:String},
    state_id:{type: String},
    district_name:{type: String},
    

},{
    collection: 'district'
});
module.exports = mongoose.model('District', District);