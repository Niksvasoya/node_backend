const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const BoxesSchema = new mongoose.Schema({
  size: {
    type: String,
  },
  type: {
    type: String,
  },
});

const boxSchema = new Schema(
  {
    boxes: [BoxesSchema],
  },
  {
    shop_id: {
      type: ObjectId,
      ref: "shop",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BoxesMaster", boxSchema);