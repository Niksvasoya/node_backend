
const express = require('express');
const app = express(); // define our app using express

const superAdminRoutes = require('./Admin/index');

app.use('/admin', superAdminRoutes);

module.exports = app;
