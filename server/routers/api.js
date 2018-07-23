const express = require('express');
const Router = express.Router();
const User = require('../Models/user');
const mongoose = require("mongoose");

const db = "mongodb://Smaidi:hpassword86@ds219100.mlab.com:19100/eventsdata";

mongoose.connect(db,{ useNewUrlParser: true },err =>{
    if(err){
    console.error()
    }
    else{
        console.log('connected to data with succe')
    }

})
Router.get('/',(req,res)=>{
    res.send(" from api server")

})


Router.post('/login',(req,res)=>{
    let userData = req.body;
    User.findOne({email: userData.email},(err,user)=>{
        if(err){
            console.log('error de comminication avec serveur');
        }
        else{

          if(!user)
        {
            res.status(401).send('Invalid Email')
 
        }
        else  if(user.password !== userData.password){
            res.status(401).send('Invalid password')
        }
        else{
            res.status(200).send('Password Correct')
        }
          
    }
    })
}
)



Router.post('/register',(req,res)=>{
   let userData = req.body;
   let user = new User(userData);
   user.save(( error, registerData) =>{
       if(error){
           console.log(error);
       }
       else{
           res.status(200).send(registerData);
       }
   })

})



Router.get('/events',(req,res)=>{
   let events =[
       {
        "_id": "1",
        "Name" :"Events 1",
        "Description" :"lorem upsum 1",
        "Date" :"19/07/2018  20:14"
       },
       {
        "_id": "2",
        "Name" :"Events 2",
        "Description" :"lorem upsum 2",
        "Date" :"19/07/2018  20:14"
       },
       {
        "_id": "3",
        "Name" :"Events 3",
        "Description" :"lorem upsum 3",
        "Date" :"19/07/2018  20:14"
       },
       {
        "_id": "4",
        "Name" :"Events 4",
        "Description" :"lorem upsum 4",
        "Date" :"19/07/2018  20:14"
       }

   ]
   res.json(events);
 })
Router.get('/eventsSpec',(req,res)=>{
   let events = [
    {
        "_id": "1",
        "Name" :"Events Spec1",
        "Description" :"lorem upsum 1",
        "Date" :"19/07/2018  20:14"
       },
       {
        "_id": "2",
        "Name" :"Events Spec2",
        "Description" :"lorem upsum 2",
        "Date" :"19/07/2018  20:14"
       },
       {
        "_id": "3",
        "Name" :"Events Spec3",
        "Description" :"lorem upsum 3",
        "Date" :"19/07/2018  20:14"
       },
       {
        "_id": "4",
        "Name" :"Events  Spec4",
        "Description" :"lorem upsum 4",
        "Date" :"19/07/2018  20:14"
       }
   ]
   res.json(events);
 
 })

module.exports = Router;