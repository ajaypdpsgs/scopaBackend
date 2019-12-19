const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Users
let City = new Schema({

    id:{type:String},
    District:{type: String},
    city_name:{type: String},
    district_id:{type: String},
    pincode:{type: String},
    

},{
    collection: 'city'
});
module.exports = mongoose.model('City', City);