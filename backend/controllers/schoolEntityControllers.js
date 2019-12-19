const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const schoolEntitys = mongoose.model('schoolEntity');
var mailer=require('./../mailer/mailer');
var nodemailer = require('nodemailer');

// var templates = mongoose.model('emailtemplate');



module.exports.schoolEntitySave = (req, res, next) => {
    
    var schoolEntityobj = new schoolEntitys();
    schoolEntityobj.EntityName = req.body.EntityName;
    schoolEntityobj.status = req.body.status;
    schoolEntityobj.save((err, doc) => {

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

module.exports.schoolEntityFindAll = (req, res, next) =>{
    schoolEntitys.find({},
        (err, result) => {
            if (!result)
                return res.status(404).json({ status: false, message: 'Records record not found.' });
            else
                return res.status(200).json({ status: true, schoolEntity:result  });
        }
    );
}
