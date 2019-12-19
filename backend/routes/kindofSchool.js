
var express = require('express');

var router = express.Router();
require('../models/kindofSchoolModel');

const ctrlkindofschool = require('../controllers/kindofSchoolControllers');

const jwtHelper = require('../config/jwtHelper');

/**
* @swagger 
*
* /kindofSchoolSave:
*   post:
*     tags:
*       - MasterSetting
*     name: Kind Of School Save
*     summary: Add kind Of School
*     security:
*       - bearerAuth: []
*     consumes:
*       - application/json
*     produces:
*       - application/json 
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/kindofSchoolSave'
*           type: object
*           properties:
*             kindOfSchool:
*               type: string
*             status:
*               type: Boolean
*             
*         required:
*            - kindOfSchool
*            - status
*            
*     responses:
*       200:
*         description: Record Added Successfully
*       422:
*         description: Duplicate Entry.
* /kindofSchoolFindAll:
*   get:
*     tags:
*       - MasterSetting
*     name: Find Kind of School
*     summary: List Of Kind Of School
*     security:
*       - bearerAuth: []
*     consumes:
*       - application/json
*     produces:
*       - application/json     
*     responses:
*       200:
*         description: Records Founded
*       404:
*         description: Records record not found
* definitions:
*   kindofSchoolSave:
*     type: object
*     properties:      
*       kindOfSchool:
*         type: string
*       status:
*         type: Boolean
*       required:
*         - kindOfSchool
*         - status
*         
*
*/

router.post('/kindofSchoolSave',jwtHelper.verifyJwtToken, ctrlkindofschool.kindofSchoolSave);
router.get('/kindofSchoolFindAll',jwtHelper.verifyJwtToken, ctrlkindofschool.kindofSchoolFindAll);




module.exports = router;
