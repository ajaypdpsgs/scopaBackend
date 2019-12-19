const mongoose = require('mongoose');
 const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;


var RegistrationSchema = new Schema({
    schoolRegisNo : {
        type: String,
        required: 'schoolRegisNo Of School can\'t be empty'
    },
    nameOfSchool : {
        type: String,
        required: 'Name Of School can\'t be empty'
    },
    schoolRegNo : {
        type: String,
        required: 'schoolRegNo can\'t be empty',
        unique: true
    },
    yearofEstablishment : {
        type: Date,
        required: 'year of Establishment can\'t be empty',
    },
    typeOfSchoolId : {
        type: String,
        required: 'type Of School Id  can\'t be empty'
    },
    kindOfSchoolId : {
        type: String,
        required: 'kind Of School Id  can\'t be empty',
    },
    NoOfStudent : {
        type: Number,
        required: 'No Of Student can\'t be empty',
    },
    selectBoardId : {
        type: String,
        required: 'Name Of School Id can\'t be empty'
    },
    schoolReachId : {
        type: String,
        required: 'school Reached Id  can\'t be empty',
    },
    multiBranch : {
        type: String,
        required: 'multiBranch can\'t be empty',
    },
    address1 : {
        type: String,
        required: 'address1  can\'t be empty'
    },
    address2 : {
        type: String,
    },
    hostel : {
        type: Boolean,
    },
    mess : {
        type: Boolean,
    },
    transport : {
        type: Boolean,
    },
    schoolTiming : {
        type: String,
        required: 'schoolTiming can\'t be empty'
    },
    countryId : {
        type: String,
        required: 'country Id can\'t be empty',
    },
    stateId : {
        type: String,
        required: 'stateId can\'t be empty',
    },
    cityId : {
        type: String,
        required: 'cityId can\'t be empty'
    },
    pincode  : {
        type: Number,
        // required: 'pincode  can\'t be empty',
    },
    firstName : {
        type: String,
        required: 'firstName can\'t be empty',
    },
    lastName : {
        type: String,
        required: 'lastName can\'t be empty'
    },
    phoneNo : {
        type: Number,
        required: 'phoneNo can\'t be empty',
    },
    designation : {
        type: String,
        required: 'designation can\'t be empty',
    },
    schoolLandLineNo : {
        type: Number,
        required: 'schoolLandLineNo can\'t be empty'
    },
    email : {
        type: String,
        required: 'emai can\'t be empty',
        unique: true
    },
    password : {
        type: String,
        required: 'password can\'t be empty',
    },
    priFirstName : {
        type: String,
        required: 'priFirstName can\'t be empty',
    },
    priLastName : {
        type: String,
        required: 'priLastName can\'t be empty',
    },
    priPhoneNo : {
        type: Number,
        required: 'priPhoneNo can\'t be empty',
    },
    priEmai : {
        type: String,
        required: 'priEmai can\'t be empty',
        unique : true
    },
    orgId : {
        type: Number,
        unique : true,

    },
    NameOfTrust : {
        type: String
    },
    trustType : {
        type: String
    },
    managementAuthority : {
        type: String
    },
    mchoolBelogToGroup : {
        type : String
    },
    morganizationGroup : {
        type : String
    },
    approvalStatus  : {
        type: Boolean,
        default : false
    },
    status  : {
        type: Boolean,
        default : false
    },
    ApprovalDate : {
        type: Date,
        default : Date.now
    },
    emailVerify : {
        type : Boolean,
        default : false
    },
    emailVerifyDate : {
        type : Date,
        default : Date.now
    },
    approvedBy : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt :{
        type : Date,
        default : Date.now
    },

    saltSecret: String
});

// Custom validation for email
RegistrationSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
RegistrationSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
RegistrationSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// userSchema.methods.generateJwt = function () {
//     return jwt.sign({ _id: this._id},
//         process.env.JWT_SECRET,
//     {
//         expiresIn: process.env.JWT_EXP
//     });
// }



module.exports = mongoose.model('Registration', RegistrationSchema);