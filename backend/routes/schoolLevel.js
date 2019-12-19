
var express = require('express');

var router = express.Router();
require('../models/schoolLevelsModel');

const ctrlschoollevel = require('../controllers/schoolLevelControllers');

const jwtHelper = require('../config/jwtHelper');

/**
* @swagger 
*
* /schoolLevelSave:
*   post:
*     tags:
*       - MasterSetting
*     name: School Level Save
*     summary: Add School Level
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
*           $ref: '#/definitions/schoolLevelSave'
*           type: object
*           properties:
*             schoolReachLevel:
*               type: string
*             status:
*               type: Boolean
*             
*         required:
*            - schoolReachLevel
*            - status
*            
*     responses:
*       200:
*         description: Record Added Successfully
*       422:
*         description: Duplicate Entry.
* /schoolLevelFindAll:
*   get:
*     tags:
*       - MasterSetting
*     name: Find School Level
*     summary: List Of School Level
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
*   schoolLevelSave:
*     type: object
*     properties:      
*       schoolReachLevel:
*         type: string
*       status:
*         type: Boolean
*       required:
*         - schoolReachLevel
*         - status
*         
*
*/

router.post('/schoolLevelSave',jwtHelper.verifyJwtToken, ctrlschoollevel.schoolLevelSave);
router.get('/schoolLevelFindAll',jwtHelper.verifyJwtToken,  ctrlschoollevel.schoolLevelFindAll);




module.exports = router;
