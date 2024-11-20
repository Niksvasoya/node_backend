const Joi = require("joi");
module.exports = {
  validationStationInput: Joi.object().keys({
    name: Joi.string().required(),
    address1: Joi.string().required(),
    address2: Joi.string().empty("").optional(),
    pincode: Joi.string().min(6).max(6),
    city_name: Joi.string().required(),
    state_name: Joi.string().optional(),
    longitude: Joi.number().required(),
    latitude: Joi.number().required(),
    description: Joi.string().optional(),
    timeSlots: Joi.string().optional(),
    chargingPoints: Joi.string().optional(),
    hour: Joi.string().required(),
    price: Joi.string(),
    phone: Joi.string().required(),
    parkinglevel: Joi.string().required(),
    overheadclearence: Joi.string().required(),
    parkingAttributes: Joi.string().optional(),
    accessRestriction: Joi.string().optional(),
    amenities: Joi.string().optional(),
    openAllday: Joi.boolean().optional(),
    restrictedAccess: Joi.boolean().optional(),
    paymentRequired: Joi.boolean().optional(),
    isChargingLocationActive: Joi.string().optional(),
    chargingTypeStations: Joi.string().required(),
    companyname: Joi.string().optional(),
  }),
  ValidationGetNearStation: Joi.object().keys({
    startLatitude: Joi.string().required(),
    startLongitude: Joi.string().required(),
    destLatitude: Joi.string().required(),
    destLongitude: Joi.string().required(),
    batteryKw: Joi.string().required(),
    day: Joi.string().required(),
    distance: Joi.string().required(),
  }),
};
