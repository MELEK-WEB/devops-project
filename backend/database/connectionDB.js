const mongoose = require("mongoose");
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const connectDB = () => {
  mongoose.set("strictQuery", false);


  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Connected to MongoDB M-booking db...`);
    })
    .catch((error) => {
      console.error(`Error connecting to MongoDB: ${error}`);
    });
};
module.exports = connectDB;
