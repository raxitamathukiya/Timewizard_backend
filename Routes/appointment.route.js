const express=require('express')
require('dotenv').config()
const appointmentRoute=express.Router()
const {connection}=require('../db')
const {AppointmentModel}=require('../Models/appointment.model')

appointmentRoute.post("/date",async(req,res)=>{
    try {
       let date=req.body
       let data=new AppointmentModel(date)
       await data.save()
       res.status(200).send({message:"Your appointment date has been scheduled."}) 
    } catch (error) {
        console.log(error)
    }
})

appointmentRoute.get("/get",async(req,res)=>{
    try {
       const contect= await AppointmentModel.find()
       res.status(200).json(contect)
    } catch (error) {
        console.log(error)
    }
})

module.exports={
    appointmentRoute
}