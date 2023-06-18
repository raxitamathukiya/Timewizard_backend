const express=require('express')
const contectRoute=express.Router()
const {connection}=require('../db')
const {contectModel}=require('../Models/contect.model')
require('dotenv').config()

contectRoute.post("/add",async(req,res)=>{
    try {
       const data=req.body
       const contect= new contectModel(data)
       await contect.save()
       res.status(200).send({message:"conform"}) 
    } catch (error) {
        console.log(error)
    }
})

contectRoute.get("/get",async(req,res)=>{
    try {
       const contect= await contectModel.find()
       res.status(200).json(contect)
    } catch (error) {
        console.log(error)
    }
})

module.exports={
    contectRoute
}