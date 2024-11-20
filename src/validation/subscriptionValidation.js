const Joi = require('joi');
module.exports = {
  
  
  
  validateSubscriptionInput: Joi.object().keys({
    name: Joi.string().max(50).regex(/^[a-zA-Z0-9][a-zA-Z0-9 ]*[a-zA-Z0-9]$/).messages({ 'string.pattern.base': "Please enter valid name" }).required(),
    monthly_price: Joi.number().min(0).precision(2)
    // .regex(/^\d+(\.\d{1,2})?$/)
    // .messages({
    //   'number.pattern.base': 'Please enter a valid package price'
    // })
    .required(),
    yearly_price: Joi.number().precision(2)
    // .regex(/^\d+(\.\d{1,2})?$/).messages({
    //   'number.pattern.base': 'Please enter a valid yearly price'
    // })
    .required(),
    MIN_NoOfUnits: Joi.number().integer().required(),
    MAX_NoOfUnits: Joi.number().integer().required(),
    description: Joi.string().required(),
    isFree: Joi.boolean().optional()
  }),

  subscriptionInput: Joi.object().keys({
    cvv: Joi.string().regex(/^[0-9]{3,4}$/).messages({
      'string.pattern.base': 'Please enter a valid CVV'
    }).required(),
    expirationDate: Joi.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/).messages({
      'string.pattern.base': "Please enter a valid expiration date (MM/YY)"
    }).required(),
    noOfUnits: Joi.number().integer().required(),
    cardNumber: Joi.string().max(16).regex(/^[0-9]{16}$/).messages({
      'string.pattern.base': "Please enter a valid 16-digit card number"
    }).required().required(),
    price_Id: Joi.string().required(),
  }),
};