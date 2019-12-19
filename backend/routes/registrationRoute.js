var express = require('express');

var router = express.Router();
require('../models/registrationSchoolModel');

const ctrlRegistration = require('../controllers/registrationController');

const jwtHelper = require('../config/jwtHelper');

/**
* @swagger 
* /registerScopa:
*   post:
*     tags:
*       - User
*     name: Registration
*     summary: New Registration
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/Registration'
*           type: object
*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       403:
*         description: Username and password don't match
* definitions:
*   Registration:
*     type: object
*     properties:      
*       nameOfSchool:
*         type: string
*       schoolRegNo:
*         type: string
*       yearofEstablishment:
*         type: string
*       typeOfSchoolId:
*         type: string
*       kindOfSchoolId:
*         type: string
*       NoOfStudent:
*         type: number
*       selectBoardId:
*         type: string
*       schoolReachId:
*         type: string
*       multiBranch:
*         type: string
*       address1:
*         type: string
*       address2:
*         type: string
*       hostel:
*         type: boolean
*       mess:
*         type: boolean
*       transport:
*         type: boolean
*       schoolTiming:
*         type: string
*       countryId:
*         type: string
*       stateId:
*         type: string
*       cityId:
*         type: string
*       pincode:
*         type: number
*       firstName:
*         type: string
*       lastName:
*         type: string
*       phoneNo:
*         type: number
*       designation:
*         type: string
*       schoolLandLineNo:
*         type: number
*       email:
*         type: string
*       password:
*         type: string
*       priFirstName:
*         type: string
*       priLastName:
*         type: string
*       priPhoneNo:
*         type: number
*       priEmai:
*         type: string
*       NameOfTrust:
*         type: string
*       trustType:
*         type: string
*       managementAuthority:
*         type: string
*       mchoolBelogToGroup:
*         type: string
*       morganizationGroup :
*         type: string
*       approvedBy:
*         type: string
*       required:
*         - nameOfSchool
*         - schoolRegNo
*         - yearofEstablishment
*         - typeOfSchoolId
*         - kindOfSchoolId
*         - NoOfStudent
*         - selectBoardId
*         - schoolReachId
*         - multiBranch
*         - address1
*         - schoolTiming
*         - countryId
*         - stateId
*         - cityId
*         - pincode
*         - firstName
*         - lastName
*         - phoneNo
*         - designation
*         - schoolLandLineNo
*         - email
*         - password
*         - priFirstName
*         - priLastName
*         - priPhoneNo
*         - priEmai
*/
/* GET users listing. */

router.post('/registerScopa', ctrlRegistration.orgRegistration);
// router.post('/authenticate', ctrlUser.authenticate);
// router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);




module.exports = router;


