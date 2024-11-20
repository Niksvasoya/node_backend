const Joi = require('joi');
module.exports = {
  validateSignupInput: Joi.object().keys({
    phone_number: Joi.string().required(),
  }),
  updateProfileValidation: Joi.object().keys({
    email : Joi.string().email().required(),
    name : Joi.string().required()
  }),
  adminvalidateSignupInput: Joi.object().keys({
    phone_number: Joi.string().required(),
    email: Joi.string().email().required(),
    name : Joi.string().required()
  }),
  addvehicle : Joi.object().keys({
    brand_id: Joi.string().required(),
    model_id: Joi.string().required(),
    vehicleRegisterNumber: Joi.string().required(),

  })
};