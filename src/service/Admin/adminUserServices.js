const { escapeRegExp } = require("lodash");
const Admin = require("../../models/adminModel");
const Shop = require("../../models/shopModel");
const MasterBox = require("../../models/masterBoxModel");
const MessageConstant = require("../../constant/messageconstant");
const responseHandler = require("../../utils/responsehandler");

class AdminUserService {
  constructor() {}
  async loginAdmin(payload) {
    // return await Shop.create({name:"gaytri"})

    const { email, password } = payload;

    const data = await Admin.findOne({ email, password ,userType:"admin"});

    return data;
  }

  async addMasterBox(payload) {
    const boxData = await MasterBox.findOne({});
    let data;
    if (boxData) {
      data = await MasterBox.findByIdAndUpdate(boxData?._id, {
        $set: payload,
      });
    } else {
      data = await MasterBox.create(payload)
    }
    return data
  }

  async getMasterBox() {
    return await MasterBox.findOne({})
  }

  async addBoxStock(payload){

  }
}

module.exports = new AdminUserService();