const express =require('express');
const router= express.Router();
const EmployeeController= require('../controller/employeeController');

router.get('/',EmployeeController.getAllDoc)
router.post('/',EmployeeController.createDoc)
router.get('/edit/:id',EmployeeController.editDoc)
router.post('/update/:id',EmployeeController.updateDocById)
router.post('/delete/:id',EmployeeController.deleteDocById)





module.exports=router;