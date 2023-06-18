const express=require('express')
const userconformRoute=express.Router()
const {connection}=require('../db')
const nodemailer = require('nodemailer');
const { userconformModel}=require('../Models/userconform.model')
const {contectModel}=require('../Models/contect.model')
const {AppointmentModel}=require('../Models/appointment.model')
require('dotenv').config()

userconformRoute.post("/add",async(req,res)=>{
    try {
       const data=req.body
       let connectdata= await contectModel.find().sort({ _id: -1 }).limit(1)
       let appointmentdate= await AppointmentModel.find().sort({ _id: -1 }).limit(1)
       console.log(connectdata)
       const contect= new userconformModel(data)
       await contect.save()
       const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: 'kanta141097@gmail.com', 
          pass: 'ncwwqetsbexjdbhm', 
        },
        
      });
      const info = await transporter.sendMail({
        from: 'kanta141097@gmail.com', 
        to: `${connectdata[0].email}`, 
        subject: "Meeting", 
        text: `${data.name} secdual a meeting. Date ${appointmentdate[0].Date}. Time: ${data.time} in ${connectdata[0].chat}`, 
        });
        transporter.sendMail(info, (error, info) => {
            if (error) {
              console.log(error);
              return res.status(500).json({ error: 'Failed to send OTP' });
            }
          });

       res.status(200).send({message:"conform"}) 
    } catch (error) {
        console.log(error)
    }
})
userconformRoute.get("/get",async(req,res)=>{
    try {
       const contect= await userconformModel.find()
       res.status(200).json(contect)
    } catch (error) {
        console.log(error)
    }
})

module.exports={
    userconformRoute
}