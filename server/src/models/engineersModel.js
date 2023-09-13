import {Schema, model} from "mongoose";

const engineersSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    verified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const EngineersModel = model("engineers", engineersSchema );
export default EngineersModel;
