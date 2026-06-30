const { model } = require("mongoose");
const {  OrdersSchma } = require("../schemas/OrdersSchema");

const OrdersModels = new model("order" , OrdersSchma);

model.exports = {OrdersModels};


