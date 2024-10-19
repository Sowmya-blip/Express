const express=require('express')
const MongoClient=require('mongoose')
const dotEnv=require('dotenv')
const employeeRoute=require('./route/EmployeeRoutes')
const app=express();
const bodyParser = require('body-parser');

dotEnv.config();

app.use(bodyParser.json())
const PORT=process.env.PORT||6655;

MongoClient.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB atlas connected successfully")
})
.catch((err)=>{
    console.log(err);
})

app.use("/employees",employeeRoute);

app.listen(PORT,()=>{
 console.log(`My Project working on ${PORT} number`)
})