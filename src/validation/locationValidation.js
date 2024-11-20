const Joi = require('joi');
module.exports = {
  validateStateInput: Joi.object().keys({
    name: Joi.string().trim().required(),
  }),
  validateCityInput: Joi.object().keys({
    name: Joi.string().trim().required(),
    pincode: Joi.number().integer().required(),
    state_id: Joi.string().required(),
    image: Joi.string().allow('').optional(),
  })
};