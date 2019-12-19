require('./config/config');
require('./config/db');
require('./config/passportConfig');
var swaggerJSDoc = require("swagger-jsdoc");
var swaggerUi= require("swagger-ui-express");

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');


// var indexRouter = require('./routes/index');
var rtsIndex = require('./routes/users');
var rtsshooltype =require('./routes/typeOfSchool');
var rtsschoollevel =require('./routes/schoolLevel');
var rtskindofschool =require('./routes/kindofSchool');
var rtsschoolcategory = require('./routes/categoryofSchool');
var rtsschoolEntity =require('./routes/schoolEntity');
var rtsboard = require('./routes/schoolBoard');



var app = express();

const swaggerDefinition ={
  info:{
    title:"MongoDb Registration swagger Implementation",
    version:'1.0.0',
    description:"Scopa project defintion for API implemantion"
  },
  host:"localhost:3000",
  basePath:"/api",
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
};

const options={
  swaggerDefinition,
  apis:['./routes/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json',function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
})


app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
var rtsIndex=require('./routes/users');

app.use(passport.initialize());

app.use('/api', rtsIndex);
app.use('/api', rtsshooltype);
app.use('/api',rtsschoollevel);
app.use('/api',rtskindofschool);
app.use('/api',rtsschoolcategory);
app.use('/api',rtsschoolEntity);
app.use('/api',rtsboard);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
