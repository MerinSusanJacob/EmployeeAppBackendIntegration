// Task1: initiate app and run server at 3000
const express=require('express');
const app=express();
const morgan=require('morgan');
app.use(morgan('dev'));
require('dotenv').config();
require('./db/mongodb')
const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));

const api=require('./routes/empRoute');
app.use('/api',api);

// Task2: create mongoDB connection 

    //created separate file db/mongodb.js

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

//TODO: get data from db  using api '/api/employeelist'

//TODO: get single data from db  using api '/api/employeelist/:id'

//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

//TODO: delete a employee data from db by using api '/api/employeelist/:id'

//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

    //created separate file for api routes/empRoute

//server listening
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
});


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



