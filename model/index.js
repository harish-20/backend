const mongoose = require('mongoose');
const expensesSchema = new mongoose.Schema({
    organization_Id: {
      type: String
    },
    date: {
      type: String
    },
    particulars: {
      type: String
    },
    expenses_Type: {
      type: String,
    },
    amount: {
      type: String
    },
    receipt:{
    type:String
    },
    id:{
      type:String
    }
  });
  
module.exports = User = mongoose.model("Expenses", expensesSchema);