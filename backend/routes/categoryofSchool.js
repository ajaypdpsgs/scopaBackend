
var express = require('express');

var router = express.Router();
require('../models/categoryofSchoolModel');

const ctrlcategoryofschool = require('../controllers/categoryofSchoolControllers');

const jwtHelper = require('../config/jwtHelper');

/**
* @swagger 
*
* /schoolCategorySave:
*   post:
*     tags:
*       - MasterSetting
*     name: School category Save
*     summary: Add School category
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
*           $ref: '#/definitions/schoolCategorySave'
*           type: object
*           properties:
*             schoolCategory:
*               type: string
*             status:
*               type: Boolean
*             
*         required:
*            - schoolCategory
*            - status
*            
*     responses:
*       200:
*         description: Record Added Successfully
*       422:
*         description: Duplicate Entry.
* /schoolCategoryFindAll:
*   get:
*     tags:
*       - MasterSetting
*     name: Find School category
*     summary: List Of School category
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
*   schoolCategorySave:
*     type: object
*     properties:      
*       schoolCategory:
*         type: string
*       status:
*         type: Boolean
*       required:
*         - schoolCategory
*         - status
*         
*
*/

router.post('/schoolCategorySave',jwtHelper.verifyJwtToken, ctrlcategoryofschool.schoolCategorySave);
router.get('/schoolCategoryFindAll',jwtHelper.verifyJwtToken, ctrlcategoryofschool.schoolCategoryFindAll);
router.post('/schoolCategoryFindByName', ctrlcategoryofschool.schoolCategoryFindByName);




module.exports = router;
