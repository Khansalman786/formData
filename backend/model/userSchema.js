import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Define schema fields
const schema = new Schema({
  Name: { type: String, required: true },
  Country: { type: String, required: true },
  Gender: { type: String, required: true },
  Address: { type: String, required: true },
  Password: { type: String, required: true },
});

// Create model
const User = model("User", schema);

export default User;

