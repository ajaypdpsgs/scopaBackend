const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const schoolLevels = mongoose.model('schoolLevel');
var mailer=require('./../mailer/mailer');
var nodemailer = require('nodemailer');

// var templates = mongoose.model('emailtemplate');



module.exports.schoolLevelSave = (req, res, next) => {
    
    var schoollevel = new schoolLevels();
    schoollevel.schoolReachLevel = req.body.schoolReachLevel;
    schoollevel.status = req.body.status;
    schoollevel.save((err, doc) => {

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

module.exports.schoolLevelFindAll = (req, res, next) =>{
    schoolLevels.find({},
        (err, result) => {
            if (!result)
                return res.status(404).json({ status: false, message: 'Records record not found.' });
            else
                return res.status(200).json({ status: true, schoolLevels:result  });
        }
    );
}
