import Joi from "joi-browser";
import helpers from "../helpers/data.js";

const schema = {
  firstname: Joi.string()
    .required()
    .regex(helpers.regex.letters)
    .label("First name"),
  lastname: Joi.string()
    .required()
    .regex(helpers.regex.letters)
    .label("Last name"),
  email: Joi.string().required().regex(helpers.regex.email).label("Email"),
  phone: Joi.string().required().regex(helpers.regex.phoneUk).label("Phone"),
  pizza: Joi.string().required().label("Pizza"),
};

const message = {
  firstname: {
    "any.required": "Please input your first name",
    "any.empty": "Please input your first name",
    "string.regex.base": "Please input your first name",
  },
  lastname: {
    "any.required": "Please input your last name",
    "any.empty": "Please input your last name",
    "string.regex.base": "Please input your last name",
  },
  email: {
    "any.required": "Please input your email",
    "any.empty": "Please input your email",
    "string.regex.base": "Please input your email",
  },
  phone: {
    "any.required": "Please input a valid uk phone number",
    "any.empty": "Please input a valid uk phone number",
    "string.regex.base": "Please input a valid uk phone number",
  },
  pizza: {
    "any.required": "Please select a piza",
    "any.empty": "Please select a piza",
  },
};

export default {
  schema,
  message,
};
