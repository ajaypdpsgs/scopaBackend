
var express = require('express');

var router = express.Router();
require('../models/typeOfSchoolModel');

const ctrlTypeOfSchool = require('../controllers/typeOfSchoolControllers');

const jwtHelper = require('../config/jwtHelper');

/**
* @swagger 
*
* /typeOfSchoolSave:
*   post:
*     tags:
*       - MasterSetting
*     name: Type Of School Save
*     summary: Add Type Of School
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
*           $ref: '#/definitions/typeOfSchoolSave'
*           type: object
*           properties:
*             typeOfSchool:
*               type: string
*             status:
*               type: Boolean
*             
*         required:
*            - typeOfSchool
*            - status
*            
*     responses:
*       200:
*         description: Record Added Successfully
*       422:
*         description: Duplicate Entry.
* /typeOfSchoolFindAll:
*   get:
*     tags:
*       - MasterSetting
*     name: Find Type Of School
*     summary: All List of Type of School
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
*   typeOfSchoolSave:
*     type: object
*     properties:      
*       typeOfSchool:
*         type: string
*       status:
*         type: Boolean
*       required:
*         - typeOfSchool
*         - status
*         
*
*/

router.post('/typeOfSchoolSave', jwtHelper.verifyJwtToken,ctrlTypeOfSchool.typeOfSchoolSave);
router.get('/typeOfSchoolFindAll',jwtHelper.verifyJwtToken, ctrlTypeOfSchool.typeOfSchoolFindAll);




module.exports = router;
