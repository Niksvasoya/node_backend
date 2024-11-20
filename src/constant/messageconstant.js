const MESSAGE_CONSTANTS = {
  SOMETHING_WRONG: "Something went wrong",
  WRONG_EMAIL_PASS: "Incorrect Email or Password",
  STATION_MESSAGE:
    "Station added successfull and it has been sent to Admin for approval",
  wrong_current_password: "The old password you have entered is incorrect",
  password_change_missmatch: "The new passwords do not match",
  REGISTER_SUCCESS: "User registered successfully",
  EMAIL_ID_REGISTERED: "Email is already registered",
  EMAIL_ALREDY_EXIST: "Email already exists",
  PHONE_ALREDY_EXIST: "Mobile number already exists",
  OTP_EXPIRED: "Otp expired",
  UPDATEPROFILE: "Profile Updated",
  NOTCHANGEPHONENUMBER: "You don't Update the Phone Number",
  OTP_NOT_VERIFIED: "Please enter valid OTP",
  OTP_VERIFIED: "Otp verified successfully",
  INVALID_EMAIL: "The email  you have entered is invalid",
  INVALID_STATE: "The state  you have entered is invalid",
  INVALID_PHONE_NO: "The Phone Number  you have entered is invalid",
  INVALID_CITY: "The city  you have entered is invalid",
  OTP_RESEND_SUCCESSFULLY: "Otp resend successfully",
  LINK_SUCCESSFULLY: "Link send successfully",

  PASSWORD_CHANGE_SUCCESS: "Password has been changed successfully",
  PASSWORD_RESET_SUCCESS: "Password has been reset successfully",
  OTP_SEND_SUCCESSFULLY: "Otp send successfully",
  MERCHANT_REGISTER_SUCCESS: "Merchant registered successfully",
  PASSWORD_REQUIRED: "Please enter password",
  EMAIL_REQUIRED: "Please enter email",
  INVALID_EMAIL: "The email  you have entered is invalid",
  USER_NOT_REGISTERED: "User is not registered",
  MERCHANT_NOT_REGISTERED: "Merchant is not registered",
  MERCHANT_ALREAY_REGISTER: "Merchant is already registered",
  MERCHANT_PHONENO_EXIST: "Merchant Phone number already registered",
  MERCHANT_OTP_NOT_VERIFIED: "OTP is not verified",
  INVALID_DETAILS: "Your login credentials are incorrect",
  LOGIN_SUCCESS: "Login successfully",
  LOGOUT_SUCCESS: "Logout successfully",
  ADMIN_NOT_REGISTERED: "Admin is not registered",
  password_changed: "password has been changed successfully",
  LINK_SEND_SUCCESSFULLY: "Link send successfully",
  invalid_request: "Something Wrong",
  reset_password_request_expired: "Reset password token is expired",
  WRONG_ID: "Invalid Id",
  DATA_NOT_FOUND: "Data not found",
  NOTIFICATION_NOT_FOUND: "Notification not found",
  SUCCESS: "Success",
  FAIL: "FAIL",
  MERCHANT_EMAIL: "Merchnat email id already exist",
  PROFILE_NOT_COMPLETE: " Please complete the profile",
  // Role Constant
  ROLE_NOT_EXITS: "Role Is not available",
  ROLE_EXIST: "Role Is Already available",
  ROLE_ALL: " Success",
  ROLE_ADD: "Role Is Succesfully Added",
  ROLE_DELETE: "Role Is Delete ",
  ROLE_EDIT: "Role Is Edit Succesfully",
  ROLE_NOT_EXITS: "No Role Available",
  PROVIDEDATE: "Provide the data",
  PROVIDE_ID_AND_DATE: "Provide date and plug id",

  //Subscription

  NO_OF_UNITS_CHANGE: "Please provide different no of units",
  INVALID_UNITS: "Please provide correct no of units",
  SUBSCRIPTION_ADDED: "Subscription added successfully.",
  SUBSCRIPTION_EDIT: "Subscription edited successfully.",
  SUBSCRIPTION_NOT_EXIST:
    "The subscription you are trying to edit is not exist. Please provide valid information",
  SUBSCRIBE_SUCCESS: "You have subscribed successfully",
  CHECKOUT_SUCCESS: "You have checked out successfully",
  SUBSCRIPTION_UPGRADE: "Subscription upgrade successfully",
  SUBSCRIPTION_DEGRADE: "Subscription downgraded successfully",

  SUBSCRIPTION_CANCEL: "Subscription canceled successfully",

  KWH_IS_HIGH:
    "The estimated kilowatt-hour (kWh) usage exceeds your battery capacity.",
  //Location

  STATE_ALREDY_EXIST: "State already exists",
  CITY_ALREDY_EXIST: "City already exists",

  //Charger
  CHARGER_NOT_FOUND: "Charger Not Found",
  CHARGER_ALREADY_EXIST: "Charger capacity already exists",
  CHARGER_EXIST: "Charger already exists",
  NO_CHARGER_TYPE_FOUND: "No charger type ",

  //station
  STATION_NOT_FOUND: "Station is not found",
  NO_NEARBYSTATION: "No nearby charging stations were found.",
  SEND_STATION_ID: "Send a statation id",
  STATION_DEACTIVATE: "Station is deactivated. Booking is not allowed.",
  DEACTIVATED_STATION: "Station is deactivated succesfully",
  ACTIVATEDSTATION: "Station is activated succesfully",

  //vehicle
  VEHICLE_TYPE_ALREADY_EXISTS: "Vehicle type already exists",
  VEHICLE_TYPE_UPDATE_SUCCESS: "Vehicle type updated successfully",
  VEHICLE_TYPE_DELETE_SUCCESS: "Vehicle type deleted successfully",
  VEHICLE_TYPE_ADD_SUCCESS: "Vehicle type added successfully",
  NO_VEHICLE_TYPE_FOUND: "No vehicle type found",

  //vehicleMaster

  VEHICLE_BRAND_ALREADY_EXISTS: "Vehicle brand already exists",
  VEHICLE_BRAND_NOT_AVAILABLE: "Vehicle brand not available",
  VEHICLE_MODEL_NOT_AVAILABLE: "Vehicle model not available",
  VEHICLE_MODEL_ALREADY_EXIST: "Vehicle model already exists",
  VEHICLE_BRAND_ADD_SUCCESS: "Vehicle brand added successfully",
  VEHICLE_MODEL_ADD_SUCCESS: "Vehicle model added successfully",

  // user vehcile

  ADD_VEHICLE: "Vehcile Added Successful",
  BOOKING_CANNOT_BE_RESCHEDULED:
    "Booking cannot be rescheduled within 2 hours of the scheduled booking time.",

  BOOKING_CAN_NOT_CANCLE:
    "Booking cannot be canceled within 3 hours of the scheduled booking time",
  BOOKING_MUSTBE_JOURNEYPLAN: "Booking type must be a journey plan.",
  // booking

  ADD_BOOKING: "Booking successfully created.",
  CANCLE_BOOKING: "Booking canceled.",
  BOOKING_COMPLETED: "Booking marked as completed.",
  CONFIRMED: "Booking is Confirmed",
  REJECTED: "Booking is Rejected",

  MERCHANT_CANCLE_BOOKING: "Booking Rejected",
  MERCHANT_CANCLE_BOOKING_BODY: "Booking is Rejected",

  ADD_BOOKING_TITLE: "New Booking Request",
  BODY_ADD_BOOKING: "Confirm the booking",

  RESCHEDULE_TITLE: "Booking Reschedule",
  BODY_BOOKING_RESCHEDULE: "User reschedule booking",

  CANCEL_BOOKING_TITLE: "Booking Cancel",
  USER_CANCEL_BOOKING: "User canceled the booking",

  USER_BOOKING_CONFIRM: "Booking Confirmed",
  USER_BOOKING_CONFIRM_BODY: "Your booking is confirmed.",

  USER_BOOKING_COMPLETED: "Booking Completed",
  USER_BOOKING_COMPLETED_BODY: "Your booking has been successfully completed.",

  USER_BOOKING_CANCEL: "Booking Canceled",
  USER_BOOKING_CANCEL_BODY: "User cancle the booking",

  USER_BOOKING_REJECT: "Booking Rejected",
  USER_BOOKING_REJECT_BODY: "Your booking has been rejected.",

  // Add User Station

  ADD_USER_STATION: "Station saved successfully",
  REMOVE_USER_STATION: "Station remove successfully",
};

module.exports = MESSAGE_CONSTANTS;
