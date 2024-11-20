const merchant = require("../../models/Merchant/merchant");
const station = require("../../models/Station/station");
const User = require("../../models/User/user");
const subscriptionHistory = require("../../models/Subscription/subscriptionHistory");
const booking = require("../../models/booking/booking");

class AdminDashboardServices {
  constructor() {}
  async getTotalStation() {
    const data = await station.countDocuments({ isActive: true });
    return data;
  }
  async getTotalUser() {
    const data = await User.countDocuments({ is_delete: false });
    return data;
  }

  async gettotalMerchant() {
    const data = await merchant.countDocuments({ is_delete: false, isOtpVerified: true});
    return data;
  }
  async getRecentlySubscribeMerchant() {
    const data = await merchant
      .find({ isSubscribed: true })
      .sort({ subscriptionStartDate: -1 })
      .limit(5);
    return data;
  }

  async getTotalSubscriptionRevenue() {
    const totalPrices = await subscriptionHistory.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$price" },
        },
      },
    ]);
    return totalPrices;
  }

  async getTotalRevenuByYearMonth(year) {
    const result = await subscriptionHistory.aggregate([
      {
        $addFields: {
          year: { $year: "$subscriptionStartDate" },
        },
      },
      {
        $match: {
          year: parseInt(year),
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$subscriptionStartDate" },
            year: { $year: "$subscriptionStartDate" },
          },
          total: { $sum: "$price" },
        },
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1,
        },
      },
      {
        $project: {
          _id: 0,
          month: "$_id.month",
          total: 1,
        },
      },
    ]);
    return result;
  }

  async getBookingByYearMonth(year) {
    const result = await booking.aggregate([
      {
        $addFields: {
          year: { $year: "$createdAt" },
        },
      },
      {
        $match: {
          year: parseInt(year),
          $or: [{ status: "confirmed" }, { status: "completed" }],
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1,
        },
      },
      {
        $project: {
          _id: 0,
          month: "$_id.month",
          count: 1,
        },
      },
    ]);

    console.log(result);
    return result;
  }

  async getMerchantByYearMonth(year) {
    const result = await merchant.aggregate([
      {
        $addFields: {
          year: { $year: "$createdAt" },
        },
      },
      {
        $match: {
          year: parseInt(year),
        },
      },
      {
        $match: {
          is_delete: false,
          isOtpVerified:true
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          users: {
            $push: {
              email: "$email",
              name: "$name",
              phone_number: "$phone_number",
            },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1,
        },
      },
      {
        $project: {
          _id: 0,
          month: "$_id.month",
          count: 1,
        },
      },
    ]);
    return result;
  }
}
module.exports = new AdminDashboardServices();
