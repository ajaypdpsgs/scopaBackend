
var express = require('express');

var router = express.Router();
require('../models/schoolBoardModel');

const ctrlschoolboard = require('../controllers/schoolBoardControllers');

const jwtHelper = require('../config/jwtHelper');

/**
* @swagger 
*
* /schoolBoardSave:
*   post:
*     tags:
*       - MasterSetting
*     name: School Board Save
*     summary: Add School Board
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
*           $ref: '#/definitions/schoolBoardSave'
*           type: object
*           properties:
*             board:
*               type: string
*             status:
*               type: Boolean
*             
*         required:
*            - board
*            - status
*            
*     responses:
*       200:
*         description: Record Added Successfully
*       422:
*         description: Duplicate Entry.
* /schoolBoardFindAll:
*   get:
*     tags:
*       - MasterSetting
*     name: Find  Board
*     summary: List Of Board
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
*   schoolBoardFindAll:
*     type: object
*     properties:      
*       board:
*         type: string
*       status:
*         type: Boolean
*       required:
*         - board
*         - status
*         
*
*/

router.post('/schoolBoardSave',jwtHelper.verifyJwtToken,ctrlschoolboard.schoolBoardSave);
router.get('/schoolBoardFindAll',jwtHelper.verifyJwtToken,ctrlschoolboard.schoolBoardFindAll);


module.exports = router;
