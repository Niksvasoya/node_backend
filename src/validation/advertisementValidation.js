const Joi = require('joi')

module.exports={
    validationAdvertisement: Joi.object().keys({
        title:Joi.string().required(),
        link:Joi.string().required(),
        section:Joi.string().required(),
        description:Joi.string().required()
    })
}