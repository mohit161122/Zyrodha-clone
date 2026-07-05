require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB once (cached for serverless)
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("DB connected successfully!");
  } catch (err) {
    console.error("DB connection failed:", err);
  }
};

app.get("/", (req, res) => {
  res.send("Zyrodha Clone API is running!");
});

app.get("/allHoldings", async (req, res) => {
  await connectDB();
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  await connectDB();
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// Keep legacy typo route for backward compatibility
app.get("/allPositons", async (req, res) => {
  await connectDB();
  let allPositons = await PositionsModel.find({});
  res.json(allPositons);
});

app.get("/allOrders", async (req, res) => {
  await connectDB();
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post('/newOrder', async (req, res) => {
  await connectDB();
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});

// For local development: start the server normally
if (process.env.NODE_ENV !== 'production' && require.main === module) {
  app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
    await connectDB();
  });
}

// For Vercel serverless: export the Express app
module.exports = app;
