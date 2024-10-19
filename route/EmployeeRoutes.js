const express=require('express')
const router=express.Router();
const employeeController=require('../Controller/EmployeeController')
const Employee=require('../model/Employee')


router.post('/add-emp',employeeController.createEmployee);

module.exports=router;