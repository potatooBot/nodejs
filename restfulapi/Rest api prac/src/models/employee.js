const validator = require("validator");
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  phone: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isMobilePhone(value, ["en-IN"])) {
        throw new Error("Invalid number");
      }
    },
    unique: [true, "Not a vlid Mobile Number"],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
});

const Employee = new mongoose.model("Employee", employeeSchema);
module.exports = Employee;
