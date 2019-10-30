//1. call mysql package
const mysql= require('mysql');
//2. call express package
const express=require('express');
//3. call body-parse package
const bodyparser=require('body-parser');
//4. create a new express app instance
var app=express();
//5. enable body parser (json) request
app.use(bodyparser.json());

//create mysql data base conecction
var mysqlconnection= mysql.createConnection({
host:'localhost',
user: 'root',
password:'',
database:'market'
});

//Validate mysql data base connection
mysqlconnection.connect((err)=>{
if(!err)
    console.log('::: Successfull conecction:::');
else
    console.log(':::Data base connection failed austro:::'+ JSON.stringify(err,undefined,2));
});

app.listen(3000,()=>console.log('Server is running at port 3000:::' ));

//read all users in data base
app.get('/users',(req,res)=>{
    mysqlconnection.query('SELECT * FROM users',(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    })
});