const express = require('express');
const api = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = require('../Schema/user');
const PayData = require('../Schema/PayData');

const db = 'mongodb://localhost/nodejs';
const secretKey= 'M.nateghi';


mongoose.connect(db , {useUnifiedTopology: true , useNewUrlParser: true}).then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(err);
    });


        api.post('/register' , (req , res)=>{
            let data = req.body;
            let userData = new User(data);
            userData.save( (err , registeredUser)=>{
                if(err){
                    console.log(err)
                }else{
                    let payload = {subject: registeredUser._id};
                    let token = jwt.sign(payload , secretKey );
                    res.status(200).send({token}); //token as object
                }
            })
        });

        api.post('/login' , (req , res)=>{
            let userData = req.body;
            User.findOne({email: userData.email} , (error , user)=>{
                if(error){console.log(error)}
                else if (!user){ res.status(401).send('invalid email')}
                else if(user.password !== userData.password){ res.status(401).send('invalid password') }
                else{
                    let payload = { subject: user._id};
                    let token = jwt.sign(payload , secretKey);
                    res.status(200).send({token});
                }
            })
        });

        api.get('/paymentData' , (req , res)=>{
            PayData.find({} , (err,data)=>{
                if(err){console.log(err)
                }else res.status(200).send(data)
            });
        });

        api.post('/paymentData/creatData' , (req , res)=>{
            let data = req.body;
            let payData = new PayData(data);
            payData.save( err =>{
                if(err){console.log(err)}
                else{ res.status(200).send('Creat one')}
            })
        });

        api.delete('/paymentData/:id/delete' , (req , res)=>{
           PayData.findById(req.params.id , (err , record)=>{
               if(err){ console.log(err)}
               else if(!record){ res.status(404).send("couldn't find data")}
               else {
                   PayData.deleteOne({_id: record.id} ,(err)=>{
                       if(err) console.log("Error in deleting: "+ err);
                       else res.status(200).send('delete one')
                   });

               }
           })
        });

        api.patch('/paymentData/:id/edit' , (req , res)=>{
            const data = req.body;
            PayData.findById(req.params.id , (err , record)=>{
               if(err) console.log(err);
               else if(!record) res.status(404).send("couldn't find data");
               else{
                   PayData.updateOne(record , {name: data.name , Description: data.Description} ,(err)=>{
                       if(err) console.log( 'Error in updating ' + err);
                       else res.status(200).send('update one')
                   });
               }
            });

        });

module.exports = api;
