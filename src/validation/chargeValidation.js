const Joi = require('joi')
module.exports = {
  validateChargerInput: Joi.object().keys({
    name: Joi.string().trim().required(),
    capacity: Joi.number().integer().greater(0).less(101).required(),
    ElectricCurrentType:Joi.string().required(),
    chargerType:Joi.string().required(),
    image: Joi.string().allow('').optional(),

        // timeTaken: Joi.array().items(Joi.object().keys({
    //   time: Joi.string().optional().allow(null).empty(),
    //   vehicletype_id: Joi.string().required()
    // })).empty().optional()

  }),
};