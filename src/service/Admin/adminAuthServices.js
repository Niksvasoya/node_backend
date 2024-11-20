const adminDao = require("../../dao/adminDao");
const userhelper = require("../../helper/userhelper");
const MessageConstant = require("../../constant/messageconstant");
const utility = require("../../lib/utility");
const adminToken = require("../../models/SuperAdmin/adminToken");
const forgetpswHtmlString = require("../../emailer/newForgetPasswordEmail");
const crypto = require("crypto");
const emailhandler = require("../../handler/emailhandler");
const moment = require("moment");
const Admin = require("../../models/SuperAdmin/superAdmin");
const bcrypt = require("bcrypt");

class AdminAuthServices {
  constructor() {}

  async superadminlogin(payload) {
    userhelper.checkAdminUser(payload);
    const admin = await adminDao.findAdminMerchantDetails({
      email: payload.email,
      is_superadmin: true,
    });

    if (!admin) {
      throw new Error(MessageConstant.ADMIN_NOT_REGISTERED);
    }
    const comparePassword = await userhelper.comparePassword(
      payload.password,
      admin.password
    );
    if (!comparePassword) {
      throw new Error(MessageConstant.INVALID_DETAILS);
    }
    const token = utility.generateJwtToken(admin._id);
    await adminToken.create({
      admin_id: admin._id,
      token: token,
    });
    admin.token = token;

    await Admin.findByIdAndUpdate(admin._id, { $set: { is_login: true } });

    return admin;
  }

  async forgetPassword(request_data, res) {
    const admin = await adminDao.findAdminMerchantDetails({
      email: request_data.email,
      is_superadmin: true,
    });
    const admin1 = await adminDao.findAdminMerchantDetails({
      is_superadmin: true,
    });
    if (!admin) {
      return false;
    }
    var link = process.env.BASE_URL_ADMIN;
    var current_date = new Date().valueOf().toString();
    var random = Math.random().toString();
    let reset_password_token = crypto
      .createHash("sha1")
      .update(current_date + random)
      .digest("hex");

    console.log("admin ", admin.name, admin1, link);

    const body = forgetpswHtmlString.NewForgetPassword(
      admin.firstname + " " + admin.lastname,
      link + "/admin/resetpassword/" + reset_password_token
    );
    ///// email of admin is used to send email to////

    await emailhandler.sendEmail(
      admin.email,
      body,
      "Reset Your Password - ChargUp",
      "",
      userhelper.getForgetPasswordAttachments(),
      admin1,
      res
    );

    await Admin.findByIdAndUpdate(admin._id, {
      reset_tokens: {
        reset_password_token: {
          token: reset_password_token,
          expiry: moment().add(1440, "minutes"),
        },
      },
    });
    return true;
  }

  async resetpassword(payload, admin) {
    const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS));
    const hash = bcrypt.hashSync(payload.new_password, salt);
    const password = hash;
    await adminDao.findAndUpdateAdminMerchant(admin._id, {
      password,
    });

    await adminToken.deleteMany({ admin_id: admin._id });

    return true;
  }

  async adminLogout(payload) {
    const is_login = false;
    const token = "";

    const admin = await adminDao.findAdminMerchantDetails({
      _id: payload?._id,
    });

    if (admin) {
      const updateAdmin = await adminDao.findAndUpdateAdminMerchant(
        payload?._id,
        {
          is_login,
          token,
        }
      );
      return updateAdmin;
    } else {
      throw new Error(MessageConstant.WRONG_ID);
    }
  }

  //View Admin Data
  async getViewAdmin(_id, token, res) {
    let data = await Admin.find({ _id });
    data = { ...data, token: token };
    return data;
  }
}

module.exports = new AdminAuthServices();
