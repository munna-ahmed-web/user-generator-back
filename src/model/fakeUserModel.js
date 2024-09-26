const { Schema, model } = require("mongoose");

const fakeUserSchema = new Schema(
  {
    name: String,
    address: String,
    phone: String,
    region: String,
  },
  { timestamps: true, id: true }
);

const FakeUserModel = model("fakeUsers", fakeUserSchema);

module.exports = FakeUserModel;
