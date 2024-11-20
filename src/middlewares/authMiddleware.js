// const jwt = require('jsonwebtoken');
// const responseHandler = require('../utils/responsehandler');
// const user_token = require('../models/User/userToken');
// const User = require('../models/User/user');
// const adminToken = require('../models/SuperAdmin/adminToken');
// const Admin = require('../models/SuperAdmin/superAdmin');
// const merchantToken = require('../models/Merchant/merchantToken');
// const Merchant = require('../models/Merchant/merchant');

// function authenticate(req, res, next) {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = {
//       userId: decoded.userId,
//       email: decoded.email
//     };
//     next();
//   } catch (error) {
//     console.error('Authentication error:', error);
//     res.status(401).json({ message: 'Invalid token' });
//   }
// }

// const userAuth = async (req, res, next) => {
//   try {
//     let usertoken;
//     const token = req.headers.authorization || req.header("Authorization").replace("Bearer ", "");
//     if (!token) {
//       return responseHandler.errorResponse(
//         res,
//         401,
//         "Unauthorized access",
//         []
//       );
//     }
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("decoded",decoded);
//     jwt.verify(token, process.env.JWT_SECRET, async function (error, data) {
//       if (error) {
//         return responseHandler.errorResponse(
//           res,
//           401,
//           "Unauthorized access",
//           []
//         );
//       } else {
//         let userDetail = await user_token.find({ user_id: decoded.id, token: token })
//         if (userDetail.length > 0) {
//           usertoken = await User.findOne({ _id: decoded.id });

//           usertoken = { ...usertoken?._doc, deviceToken:userDetail[0].deviceToken,token: token }
//           req.user = usertoken;
          
//           // req.user.deviceToken=userDetail[0].deviceToken
//           // console.log(req.user,'the user')
//           next();
//         } else {
//           return responseHandler.errorResponse(
//             res,
//             401,
//             "",
//             []
//           );
//         }
//       }
//     });
//   } catch (e) {
//     res.status(401).send({ error: "Please authenticate" });
//   }
// };

// const adminAuth = async (req, res, next) => {
//   try {
//     let admintoken;
//     const token = req.headers.Authorization || req.header("Authorization").replace("Bearer ", "");
//     if (!token) {
//       return responseHandler.errorResponse(
//         res,
//         401,
//         "Unauthorized access",
//         []
//       );
//     }
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("decoded");
//     jwt.verify(token, process.env.JWT_SECRET, async function (error, data) {
//       if (error) {
//         return responseHandler.errorResponse(
//           res,
//           401,
//           "Unauthorized access",
//           []
//         );
//       } else {
//         let adminDetail = await adminToken.find({ admin_id: decoded.id, token: token })
//         if (adminDetail.length > 0) {
//           admintoken = await Admin.findOne({ _id: decoded.id });
//           admintoken = { ...admintoken?._doc, token: token }
//           req.user = admintoken;
//           next();
//         } else {
//           return responseHandler.errorResponse(
//             res,
//             401,
//             "",
//             []
//           );
//         }
//       }
//     });
//   } catch (e) {
//     res.status(401).send({ error: "Please authenticate" });
//   }
// };

// const merchantAuth = async (req, res, next) => {
//   try {
//     let merchanttoken;
//     const token = req.headers.authorization || req.header("Authorization").replace("Bearer ", "");
//     if (!token) {
//       return responseHandler.errorResponse(
//         res,
//         401,
//         "Unauthorized access",
//         []
//       );
//     }
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("decoded");
//     jwt.verify(token, process.env.JWT_SECRET, async function (error, data) {
//       if (error) {
//         return responseHandler.errorResponse(
//           res,
//           401,
//           "Unauthorized access",
//           []
//         );
//       } else {
//         console.log(decoded,'ID')
//         let merchantDetail = await merchantToken.find({ merchant_id: decoded.id, token: token })
//         if (merchantDetail.length > 0) {
//           merchanttoken = await Merchant.findOne({ _id: decoded.id });
//           merchanttoken = { ...merchanttoken?._doc, deviceToken:merchantDetail[0].deviceToken, token: token }
//           req.user = merchanttoken;
//           next();
//         } else {
//           return responseHandler.errorResponse(
//             res,
//             401,
//             "",
//             []
//           );
//         }
//       }
//     });
//   } catch (e) {
//     res.status(401).send({ error: "Please authenticate" });
//   }
// };


// const subsciptionCheck = async (req, res, next) => {
//   try {
//     // Set the time portion of the "today" variable to midnight (00:00:00)
//     // today.setHours(0, 0, 0, 0);

//     // const data = await Merchant.find({
//     //   _id: req.user._id,
//     //   $expr: {
//     //     $gte: [
//     //       {
//     //         $dateFromParts: {
//     //           year: { $year: { $toDate: '$subscriptionExpiredDate' } },
//     //           month: { $month: { $toDate: '$subscriptionExpiredDate' } },
//     //           day: { $dayOfMonth: { $toDate: '$subscriptionExpiredDate' } }
//     //         }
//     //       },
//     //       today
//     //     ]
//     //   }
//     // });

//     const data = await Merchant.find({
//       _id: req.user._id,
//       isSubscribed: true
//     })

//     if(data.length < 1){
//       return responseHandler.errorResponse(
//         res,
//         401,
//         "Please purchase a subscription.",
//         []
//       );
//     }

//     next();

//   } catch (error) {
//     console.log("Error >>>",error);
//     res.status(401).send({ error: "Something went wrong" });
//   }
// }

// module.exports = { authenticate, merchantAuth, userAuth, adminAuth, subsciptionCheck };
