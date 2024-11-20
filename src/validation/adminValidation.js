  const Joi = require('joi')
module.exports = {
  validateChangePasswordInput: Joi.object().keys({
    new_password: Joi.string().min(8).max(16).regex(/[a-z]/)
      .messages({ 'string.pattern.base': 'Password requires a lowercase letter' })
      .regex(/[A-Z]/)
      .messages({ 'string.pattern.base': 'Password requires an uppercase letter' })
      .required(),
    current_password: Joi.string().min(8).max(16).regex(/[a-z]/)
      .messages({ 'string.pattern.base': 'Password requires a lowercase letter' })
      .regex(/[A-Z]/)
      .messages({ 'string.pattern.base': 'Password requires an uppercase letter' })
      .disallow(Joi.ref('new_password'))
      .messages({ 'any.invalid': '"New password and current password not be same', })
      .required(),
  }),
};