var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// this will be our data base's data structure
var OrdersSchema = new Schema(
  {
    food: String,
    drink: String,
    dessert: String
    
  },
  {
    timestamps: true
  }
);

// singular capitalized name for the mongo collection
module.exports = mongoose.model("Order", OrdersSchema);

//https://mongoosejs.com/docs/models.html
