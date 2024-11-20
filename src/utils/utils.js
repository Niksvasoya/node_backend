
const responseHandler = require('../utils/responsehandler')
const MessageConstant = require('../constant/messageconstant');
const logger = require('./logger');


const tryCatchFn = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((error) => {
      // Log the error
      console.log(typeof error, "errorlog", error.stack);
      responseHandler.errorResponse(
        res,
        400,
        error.message || MessageConstant.SOMETHING_WRONG,
        {error}
      )
      logger.error(typeof error === "Array" ? JSON.stringify(error) : error.stack);
      next(error); 

    });
  };
};

module.exports = { tryCatchFn };

