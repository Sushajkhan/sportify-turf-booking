const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
};
app.get("/", (req, res) => {
  res.send("api working");
});

//connect db
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (err) {
    console.log("db error");
  }
};

//middlewares

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(userRoute);

app.listen(port, () => {
  connectDB();
  console.log(" server running");
});
