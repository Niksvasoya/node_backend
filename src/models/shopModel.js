const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const shopSchema = new Schema(
  {
    name: String,
  },

  { timestamps: true }
);

module.exports = mongoose.model("shop", shopSchema);
