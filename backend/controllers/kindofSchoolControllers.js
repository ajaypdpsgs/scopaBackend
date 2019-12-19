const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const kindofschools = mongoose.model('kindofSchool');
var mailer=require('./../mailer/mailer');
var nodemailer = require('nodemailer');

// var templates = mongoose.model('emailtemplate');



module.exports.kindofSchoolSave = (req, res, next) => {
    
    var kindofschool = new kindofschools();
    kindofschool.kindOfSchool = req.body.kindOfSchool;
    kindofschool.status = req.body.status;
    kindofschool.save((err, doc) => {

        // if (!err) {
        //     var outputJson = {
        //         statusCode: 200,
        //         statusMessage: "Ok",
        //         message : "Success",
        //         data: doc
        //      }
 
        //      return res.json(outputJson);
        //  } else {
        //      if(err.code == 11000){

        //         var outputJson = {
        //             status: 422,
        //             statusMessage: "Warning",
        //             message: "Duplicate email adrress found"
        //      }
        //      }else{
        //         return next(err);
        //      }
        //  }

        if (!err){
            console.log('doc1111',doc);
            res.send(doc);
        }
        else {
            if (err.code == 11000){
                res.status(422).send(['Duplicate Entry.']);
             } else
                return next(err);
        }

    });
}

module.exports.kindofSchoolFindAll = (req, res, next) =>{
    kindofschools.find({},
        (err, result) => {
            if (!result)
                return res.status(404).json({ status: false, message: 'Records record not found.' });
            else
                return res.status(200).json({ status: true, kindofschools:result  });
        }
    );
}
