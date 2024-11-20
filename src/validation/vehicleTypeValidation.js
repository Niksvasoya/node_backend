const Joi = require('joi');
module.exports = {
  validateVehicleTypeInput: Joi.object().keys({
    name: Joi.string().required(),
    batterySize : Joi.number().integer().required()
  }),

  addmodelVehicleTypeInput: Joi.object().keys({
    name:Joi.string().required(),
    vehicleType:Joi.string().required(),
    charger_id:Joi.string().required(),
    brand_id:Joi.string().required(),
    battery_capacity:Joi.number().required(),
    recharge_time:Joi.string().required()
  })
};