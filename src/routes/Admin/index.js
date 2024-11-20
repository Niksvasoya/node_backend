const express = require("express"); // call express
const app = express(); // define our app using express
const adminUserRoutes = require("./adminUserRoutes");

app.use("/user",adminUserRoutes);

module.exports = app;
