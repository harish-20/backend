const express = require('express');

const ExpensesController = require('../controller/index');

const router = express.Router()



router.post('/createExpenses',ExpensesController.createExpenses);
router.get('/getExpenses',ExpensesController.getExpenses);
router.put('/updateExpenses/:id',ExpensesController.updateExpenses);
router.delete('/deleteExpenses/:id',ExpensesController.deleteExpenses);



module.exports=router