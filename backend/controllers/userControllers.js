
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');
var mailer=require('./../mailer/mailer');

// var templates = mongoose.model('emailtemplate');



module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {

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
            res.send(doc);
            var userData = {
                name: 'User'
            };
            // var mailContent = "<h1>Hi {{name}}</h1>,<br/> please click on link for changing your password <a target='_blank' href='http://localhost:4200/new-password/" + token + "/" + data.email + "'>Change Password</a>";
            // compile the template
            // const template = handlebars.compile(mailContent.replace(/\n|\r/g, ''));
            // call template as a function, passing in your data as the context
            // var message = template(userData);
            var message="hello dear"
            var subject = 'reg successfully';
            var mailerin = new mailer();
            mailerin.sendMail(doc.email, message, subject);


            // var transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //       user: 'emailId',
            //       pass: 'Password'
            //     }
            //   });
            // //   verificationlink= host+"/emailverify/÷"+randomToken1;
            //   var mailOptions = {
            //     from: 'emailId ',
            //     to: doc.email,
            //     subject: 'Please verify your email',
            //     html: 'Hello,<br> Please Click on the link to verify your email.<br><a>Click here to verify</a><br>This link is expire after a single click',
            //   };
              
            //   transporter.sendMail(mailOptions, function(error, info){
            //     if (error) {
            //       console.log(error);
            //     } else {
            //       console.log('Email sent');
            //     }
            //   });



        }
        else {
            if (err.code == 11000){
                res.status(422).send(['Duplicate email adrress found.']);
             } else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
        }
    );
}