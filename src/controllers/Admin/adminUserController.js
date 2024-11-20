const { tryCatchFn } = require("../../utils/utils");
const MessageConstant = require("../../constant/messageconstant");
const responseHandler = require("../../utils/responsehandler");
const AdminUserService = require("../../service/Admin/adminUserServices");

class AdminUserController {
  constructor() {}
  login = tryCatchFn(async (req, res, next) => {
    const userData = await AdminUserService.loginAdmin(req.body);

    if (!userData) {
      responseHandler.errorResponse(
        res,
        400,
        MessageConstant.DATA_NOT_FOUND,
        []
      );
    } else {
      responseHandler.successResponse(
        res,
        200,
        MessageConstant.SUCCESS,
        userData
      );
    }
  });

  addMasterBox = tryCatchFn(async (req, res, next) => {
    try {
      const data = await AdminUserService.addMasterBox(req.body);
      responseHandler.successResponse(
        res,
        200,
        MessageConstant.SUCCESS,
        data
      );
    } catch (error) {
      responseHandler.errorResponse(
        res,
        400,
        MessageConstant.SOMETHING_WRONG,
        []
      );
    }
  });

  getMasterBox = tryCatchFn(async (req, res, next) => {
    try {
      const data = await AdminUserService.getMasterBox();
      responseHandler.successResponse(
        res,
        200,
        MessageConstant.SUCCESS,
        data
      );
    } catch (error) {
      responseHandler.errorResponse(
        res,
        400,
        MessageConstant.SOMETHING_WRONG,
        []
      );
    }
  });

  addBoxStock = tryCatchFn(async (req, res, next) => {
    try {
      const data = await AdminUserService.addBoxStock(req.body);
      responseHandler.successResponse(
        res,
        200,
        MessageConstant.SUCCESS,
        data
      );
    } catch (error) {
      responseHandler.errorResponse(
        res,
        400,
        MessageConstant.SOMETHING_WRONG,
        []
      );
    }
  });
}

module.exports = new AdminUserController();
