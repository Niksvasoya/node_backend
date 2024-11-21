const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDB = require("./db/db");
const mainRoutes = require("./routes/index");
const morgan = require("morgan");
var cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// Connect to the database
// connectDB()
//   .then(() => {
//     // Database connected successfully
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database:", error);
//     process.exit(1);
//   });

// Middleware

// const http = require('http');
// const socketIo = require('socket.io');
// const server = http.createServer(app);
// const io = socketIo(server);
// io.on('connection', (socket) => {
//   console.log('Client connected');
// });

// // Manually emit a 'refresh' event when the server restarts
// const emitRefresh = () => {
//   console.log('Emitting refresh event to clients...');
//   io.emit('refresh');
// };

app.use(express.json());

app.use(express.raw({ type: "application/json" }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, User-Agent, Accept-Encoding, Content-Length"
  );
  next();
});

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

let options = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  preflightContinue: false,
};

app.use(cors(options));
app.use(express.static("uploads"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Server error" });
});
app.use(morgan("dev"));

const AWS = require('aws-sdk');
const fs = require('fs'); // Only needed if you're uploading a file from the filesystem
const { default: axios } = require("axios");

const s3 = new AWS.S3({
  accessKeyId: '',
  secretAccessKey: '',
  region: 'us-east-2' // Example: 'us-west-2'
});

app.get('/', async (req, res) => {
  const API_KEY = "your_highlevel_api_key";
  // try {
  //   const response = await axios.get("https://api.gohighlevel.com/v1/users/me", {
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6Ik5WUzVveFR0VHExY3NQUUltSG5kIiwiY29tcGFueV9pZCI6IkRXWEhQT05WN3ozdGNFVjRCTXJZIiwidmVyc2lvbiI6MSwiaWF0IjoxNzA3MjMxNjQyNTM5LCJzdWIiOiJ1c2VyX2lkIn0.TuL_0-K3Xvjxc5Ts08XijOVW0zM2zfFHy-DqqKTAT_g`,
  //     },
  //   });
  //   console.log("API Key is valid:", response.data);
  // } catch (error) {
  //   console.error("API Key test failed:", error.response?.data || error.message);
  // }

  ///////////////////////////////////

  // try {
  //   const response = await axios.post(
  //     'https://api.gohighlevel.com/v1/emails',
  //     {
  //       "email":"gopal1@yopmail.com",
  //       "subject":"test",
  //       "body":"test",
  //       "from":{
  //           "email":"gopal@yopmail.com",
  //           "name":"test"
  //       }
  //   },
  //     {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6Ik5WUzVveFR0VHExY3NQUUltSG5kIiwiY29tcGFueV9pZCI6IkRXWEhQT05WN3ozdGNFVjRCTXJZIiwidmVyc2lvbiI6MSwiaWF0IjoxNzA3MjMxNjQyNTM5LCJzdWIiOiJ1c2VyX2lkIn0.TuL_0-K3Xvjxc5Ts08XijOVW0zM2zfFHy-DqqKTAT_g`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   console.log("Email sent successfully:", response.data);
  // } catch (error) {
  //   console.error("Error sending email:", error.response?.data || error.message);
  // }



  //////////////////////////////////////////////////

  // try {
  //   const filePath = path.join(__dirname, '../download.jpeg');
  //   const fileContent = fs.readFileSync(filePath);
  //   const params = {
  //     Bucket: 'unlock-cash2',
  //     Key: 'download.jpeg',
  //     Body: fileContent
  //   };

  //   const data = await s3.upload(params).promise();
  //   console.log(`File uploaded successfully. S3 URL: ${data.Location}`);
  // res.send('Node.js backend');

  // } catch (error) {
  //   console.error('Error uploading file:', error);
  // }
  const data = {
    name:"nikul",
    surname:"vasoya",
    age:24
  }
  res.send(data);

});
// Set up main routes
app.use("/", mainRoutes);
// app.get("*", (req, res) => {
//     res.status(404).json({ error: 'invalid route' });
// });

app.use("/", express.static(__dirname.replace("/src", "") + "/Public"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname.replace("/src", ""), "Public/index.html"));
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
