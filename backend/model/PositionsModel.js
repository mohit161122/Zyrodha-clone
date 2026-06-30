const { model } = require("mongoose");
const { PositionsModel} = require("../schemas/PositionsSchema");

const PositionsModel = new model("positon" , PositionsSchema);

model.exports = {PositionsModel};
