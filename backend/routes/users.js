
var express = require('express');

var router = express.Router();
require('../models/userModel');

const ctrlUser = require('../controllers/userControllers');

const jwtHelper = require('../config/jwtHelper');

/**
* @swagger 
* /register:
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
*           $ref: '#/definitions/User'
*           type: object
*           properties:
*             fullName:
*               type: string
*             email:
*               type: string
*             password:
*                type: string
*                formate: password
*         required:
*            - fullName
*            - email
*            - password
*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       403:
*         description: Username and password don't match
* /authenticate:
*   post:
*     tags:
*       - User
*     name: Authenticate
*     summary: authenticate/Login user
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/Authenticate'
*           type: object
*           properties:
*             email:
*               type: string
*             password:
*                type: string
*                formate: password
*         required:
*            - email
*            - password
*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       403:
*         description: Username and password don't match
* /userProfile:
*   get:
*     tags:
*       - User
*     name: Find user
*     summary: Finds a user list
*     security:
*       - bearerAuth: []
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     
*     responses:
*       '200':
*         description: A single user object
*         schema:
*           $ref: '#/definitions/User'
*       '401':
*         description: No auth token / no user found in db with that name
*       '403':
*         description: JWT token and username from client don't match
* definitions:
*   User:
*     type: object
*     properties:      
*       fullName:
*         type: string
*       email:
*         type: string
*       password:
*         type: string
*         format: password
*       required:
*         - fullName
*         - email
*         - password
*   Authenticate:
*    type: object
*    properties:      
*      email:
*        type: string
*      password:
*        type: string
*        format: password
*      required:
*         - email
*         - password
*
*/
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);




module.exports = router;
