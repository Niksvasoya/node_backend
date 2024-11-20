// db.js
const mongoose = require('mongoose');

// MongoDB connection URL
const url = process.env.DATABASE_URL || 'mongodb+srv://patelneel1144:gSXK2SCwI93wsbZ8@myshop.5of3f.mongodb.net/myshop';

// Mongoose options (optional)
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Function to connect to the MongoDB database using Mongoose
async function connectDB() {
  try {
    // Connect to the MongoDB server
    await mongoose.connect(url, options);

    console.log('Connected to the database.');

    // Return the Mongoose connection instance (optional)
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = connectDB;
