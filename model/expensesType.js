const mongoose = require('mongoose');
const expensesTypeSchema = new mongoose.Schema({
    organization_Id: {
      type: String
    },
    expenses_Type: {
      type: String,
    },
  });
  
module.exports = User = mongoose.model("ExpensesType", expensesTypeSchema);