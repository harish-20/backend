const Expenses = require('../model/index');
const to = require('await-to-js').default;
const mongoose = require('mongoose');

exports.getExpenses = async (req, res) => {
    let expenses, err;
    [err, expenses] = await to(Expenses.find());
    if (err) {
        return res.status(500).json({ 'Error ': err })
    }
    return res.status(200).json(expenses)
}

exports.createExpenses = async (req, res) => {
    console.log("requested body",req.body)
    let err,data,expenses;
    if(!req.body.id){
        expenses=new Expenses(req.body);
        expenses.id=expenses._id;
[err, data] = await to(expenses.save());
if(err){
    return res.status(400).json({
        'ERROR': 'Something happening during creation of Expenses'
    });
}
if (data) {
    console.log("data",data)
    return res.status(200).json({
        'SUCCESS': 'Expenses setup creation successful',
        'id': data._id
    });
} else {
    return   res.status(400).json({
        'ERROR': 'Expenses creation unsuccessful'
    });
}
}else{
    expenses=req.body;
    [err,data]=await  to(Expenses.findOneAndUpdate({id:req.body.id},req.body));

    if (err) {
        return   res.status(400).json({
               'ERROR': 'Something happening during Updation of Expenses'
           });
       }
       
       if (data) {
           return res.status(200).json({
               'SUCCESS': 'Expenses Updated successful',
               'id': req.body.id
           });
       } else {
           return   res.status(404).json({
               'ERROR': 'Expenses Not Found'
           });
       }
}
}

exports.updateExpenses = async (req, res) => {
    let expenses;
    [err, expenses] = await to(Expenses.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body));
    if (err) {
        return res.status(500).json({ 'Error': err })
    }
    return res.status(200).json(expenses)
}
exports.deleteExpenses = async (req, res) => {
    let expenses;
    [err, expenses] = await to(Expenses.findOneAndDelete({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body));
    if (err) {
        return res.status(500).json({ 'Error': err })
    }
    return res.status(200).json(expenses)
}