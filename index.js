const express = require('express');
const {connection} = require('./db');
const cors=require("cors")
const { appointmentRoute}=require('./Routes/appointment.route')
const {contectRoute}=require('./Routes/contect.route')
const {userconformRoute}=require('./Routes/userconform.route')
require("dotenv").config();
const app = express();
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to TimeWizard Backend");
})
app.use("/appointment",appointmentRoute)
app.use("/contect",contectRoute)
app.use("/conform",userconformRoute)

app.listen(8080, async()=>{
    await connection;
    console.log(`Server is running at PORT 8080`);
})