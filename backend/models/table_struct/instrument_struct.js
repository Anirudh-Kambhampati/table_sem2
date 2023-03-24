const Joi = require("joi");
const config = require("config");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const { UserData } = require("./userData");
const { number } = require("joi");

const InstrumentSchema = new mongoose.Schema({
  unit: {
    type: number,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  ip: {
    type: String,
    required: true,
  },
  gateway: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", InstrumentSchema);

function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().required().label("Username"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().required().label("Password"),
  });
  const result = schema.validate(user);
  return result;
}

module.exports.User = User;
module.exports.validate = validateUser;
