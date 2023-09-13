import mongoose from "mongoose";
import { Db_url } from "./config.js";

const connectDB = async () => {
  try {

    await mongoose.connect(Db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("Connected to the database successfully");
  } catch (e) {
    console.log("Error connecting to the database")
  }
};
export default connectDB