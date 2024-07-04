const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId: String,
    name: String,
    email: String,
    designation: String,
    branch: String,
    phone: String,
    state: String
});

module.exports = mongoose.model('Employee', employeeSchema);
