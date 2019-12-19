const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Users
let Country = new Schema({
Country:{type: String},   
code:{type: String}
},{
    collection: 'country'
});
module.exports = mongoose.model('Country', Country);