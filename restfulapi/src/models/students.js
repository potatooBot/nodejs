const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
  email: {
    type: String,
    unique: [true, "Email already Present"],
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    
    required: true,
    unique: [true, "Phone NUmber Already Exist"],
  },
  address: {
    type: String,
    required: true,
  },
});

//We  will create a new Collection
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
