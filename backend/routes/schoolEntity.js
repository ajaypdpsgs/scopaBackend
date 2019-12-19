
var express = require('express');

var router = express.Router();
require('../models/schoolEntityModel');

const ctrlschoolEntity = require('../controllers/schoolEntityControllers');

const jwtHelper = require('../config/jwtHelper');

/**
* @swagger 
*
* /schoolEntitySave:
*   post:
*     tags:
*       - MasterSetting
*     name: School Entity Save
*     summary: Add School Entity
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
*           $ref: '#/definitions/schoolEntitySave'
*           type: object
*           properties:
*             EntityName:
*               type: string
*             status:
*               type: Boolean
*             
*         required:
*            - EntityName
*            - status
*            
*     responses:
*       200:
*         description: Record Added Successfully
*       422:
*         description: Duplicate Entry.
* /schoolEntityFindAll:
*   get:
*     tags:
*       - MasterSetting
*     name: Find School Entity
*     summary: List Of School Entity
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
*   schoolEntitySave:
*     type: object
*     properties:      
*       EntityName:
*         type: string
*       status:
*         type: Boolean
*       required:
*         - EntityName
*         - status
*         
*
*/

router.post('/schoolEntitySave',jwtHelper.verifyJwtToken, ctrlschoolEntity.schoolEntitySave);
router.get('/schoolEntityFindAll',jwtHelper.verifyJwtToken,ctrlschoolEntity.schoolEntityFindAll);




module.exports = router;
