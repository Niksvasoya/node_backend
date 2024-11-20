const Joi = require('joi');
module.exports = {
  validateSignupInput: Joi.object().keys({
    email: Joi.string().email(),
    name: Joi.string(),
    phone_number: Joi.string(),
    address: Joi.string(),
    landmark: Joi.string().empty('').optional(),
    city_name: Joi.string(),
    state_name: Joi.string(),
    file_image:Joi.string(),
    pincode: Joi.string().min(6).max(6)
  }),
};