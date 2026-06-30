const {Schema} = require("mongoose");

const HoldingsSchma = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = {HoldingsSchma};
