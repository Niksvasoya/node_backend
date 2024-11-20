const express = require("express");
const router = express.Router();
const adminUserController = require("../../controllers/Admin/adminUserController");
const { upload } = require("../../middlewares/multer");
// const Schema = require('../../validation/userValidation');
// const Validator = require('../../middlewares/validator')

router.post('/login', adminUserController.login)

router.post('/add-master-box', adminUserController.addMasterBox)

router.post('/get-master-box', adminUserController.getMasterBox)

router.post('/add-box-stock', adminUserController.addBoxStock)

// router.post(
//     '/addUser',
//     upload.single('image'),
//     Validator(Schema.adminvalidateSignupInput),
//     adminAuth,
//     adminUserController.addUser
// )

module.exports = router;