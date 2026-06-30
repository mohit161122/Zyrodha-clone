const { model } = require("mongoose");
const { HoldingsSchma } = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding" , HoldingsSchma);

model.exports = {HoldingsModel};


