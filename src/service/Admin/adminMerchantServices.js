const { escapeRegExp } = require('lodash');
const Merchant = require('../../models/Merchant/merchant')
const MessageConstant = require('../../constant/messageconstant');
const MerchantRegisterNotification = require("../../models/Notifications/merchantRegisterNotification");
const ObjectId = require("mongodb").ObjectId;
const responseHandler = require('../../utils/responsehandler')

class AdminMerchantServices {
  constructor() { }


  async addMerchant(payload, res, next) {
    const { phone_number } = payload;
    const isMerchant = await Merchant.findOne({
      phone_number: phone_number,
      is_delete: false,
    });
    
    const isEmail = await Merchant.findOne({
      email : payload.email,
      is_delete: false,
    })

    if(isEmail) {
      responseHandler.errorResponse(
        res,
        400,
        MessageConstant.MERCHANT_EMAIL,
        []
    )}
    
    else if(isMerchant) {
       responseHandler.errorResponse(
        res,
        400,
        MessageConstant.MERCHANT_PHONENO_EXIST,
        []
      );
    }
     else {
      payload.isOtpVerified = true;
      await Merchant.create(payload);
      return true;
    }
  }
  


  async getAllMerchantUserData(payload){
    let { page, limit, search, sortField, sortOrder } = payload;

    let options = {
      page: page ? page : 1,
      limit: limit ? limit : 10,
      sort: { [sortField]: sortOrder === "asc" ? 1 : -1 },
    };
    const searchQuery = search ? search : '';
    const escapedSearchQuery = escapeRegExp(searchQuery);

  
    // Build the query for pagination and search
    const query = {  is_delete: false, isOtpVerified: true };
  
    if (searchQuery !== '') {
      const searchRegex = new RegExp(escapedSearchQuery, 'i');
      query.$or = [
        { email: searchRegex },
        { name: searchRegex },
        { address: searchRegex },
        { landmark: searchRegex },
        { state_name: searchRegex },
        { city_name: searchRegex },
        {phone_number :searchRegex},
        {pincode:searchRegex}
      ]; 
    }
  
    try {
  
      // Find documents based on the query with pagination and sorting
      const data = await Merchant.paginate(query, options)
  
      return data
    } catch (err) {
      throw new Error(err);
    }
  }

  async getNotificationData() {
    const notificationData = await MerchantRegisterNotification.find({ isActive: true })
    const notificationCount = await MerchantRegisterNotification.countDocuments({ isActive: true })
    return { notificationData, notificationCount }
  }

  async getProfile(params,payload) {   
    const {id} = params;
    console.log(id,'the id')
    const data = await Merchant.aggregate([
      {
        $match: {
          _id: new ObjectId(id),
        },
      },
      {
        $project: {
          _id:1,
          name: 1,
          city_name: 1,
          state_name: 1,
          email: 1,
          city_id:1,
          state_id:1,
          phone_number: 1,
          address: 1,
          landmark: 1,
          pincode: 1,
          subscription_package: 1,
          isOtpVerified:1,
          isSubscribed:1,
          subscriptionPackage:1,
          remainingDays: {
            $floor: {
              $divide: [
                {
                  $subtract: [
                    {
                      $dateFromString: {
                        dateString: "$subscriptionExpiredDate",
                      },
                    },
                    {
                      $toDate: new Date(),
                    },
                  ],
                },
                86400000, // Number of milliseconds in a day
              ],
            },
          },
        },
      },
    ]);

    return data;
  }
}

module.exports = new AdminMerchantServices();
