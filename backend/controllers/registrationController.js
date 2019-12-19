const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const Registration = require('./../models/registrationSchoolModel');
// var mailer=require('./../mailer/mailer');
var shortid = require('shortid');

module.exports.orgRegistration = (req, res, next) => {
    let randomNo= Math.floor(Math.random()*1000) + 10;
    var data = req.body;
    let regId =shortid.generate()
    // let schoolName= data.nameOfSchool.split(' ');
    var matches = data.nameOfSchool.match(/\b(\w)/g); 
    var school1st3letter = matches.join(''); 
    let schoolRegNo= school1st3letter+'/'+data.schoolRegNo+'/'+regId+'/'+data.pincode;
    var NewRegistration = new Registration({
        schoolRegisNo : schoolRegNo.toUpperCase(),
        orgId : randomNo,
        nameOfSchool:data.nameOfSchool,
        schoolRegNo   :data.schoolRegNo,
        yearofEstablishment:data.yearofEstablishment,
        schoolCategory   :data.schoolCategory,
        SchoolType:data.SchoolType,
        KindOfSchool : data.KindOfSchool,
        NoOfStudent   :data.NoOfStudent,
        selectBoardId:data.selectBoardId,
        schoolReachId   :data.schoolReachId,
        multiBranch:data.multiBranch,
        address1   :data.address1,
        address2:data.address2,
        hostel   :data.hostel,
        mess:data.mess,
        transport   :data.transport,
        schoolTiming:data.schoolTiming,
        countryId   :data.countryId,
        stateId:data.stateId,
        cityId   :data.cityId,
        pincode:data.pincode,
        firstName   :data.firstName,
        lastName:data.lastName,
        phoneNo   :data.phoneNo,
        designation:data.designation,
        schoolLandLineNo   :data.schoolLandLineNo,
        email:data.email,
        password : data.password,
        priFirstName   :data.priFirstName,
        priLastName:data.priLastName,
        priPhoneNo   :data.priPhoneNo,
        priEmai:data.priEmai,
        NameOfTrust:data.NameOfTrust,
        trustType   :data.trustType,
        managementAuthority:data.managementAuthority,
        mchoolBelogToGroup   :data.mchoolBelogToGroup, 
        morganizationGroup : data.morganizationGroup,
        approvedBy : data.approvedBy
    });
    NewRegistration.save((err, doc) => {

        if (!err){
            res.send(doc);
        }
        else {
            console.log('err.code',err.code);
            if (err.code == 11000){
                res.status(422).send(['Duplicate email adrress found.']);
             } else
                return next(err);
        }

    });
}
exports.getProductList = function (req, res) {
    Registration.find({})
        .populate('schoolCategory')
        .populate('typeOfSchool')
        .populate('kindofSchool')
        .populate('schoolBoard')
        .populate('schoolLevel')
        .populate('Country')
        .populate('State')
        .populate('City')
        .populate('User')
        .exec((err, resp) => {
            if (resp) {
                var outputJSON = {
                    status: 200,
                    data: resp
                }
                res.status(200).send(outputJSON)
            }
            else {
                var outputJSON = {
                    status: 201,
                    msg: 'data not found'
                }
                res.status(201).send(outputJSON)
            }
        })
}