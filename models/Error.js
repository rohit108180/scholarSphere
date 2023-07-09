import mongoose from "mongoose";

const errorSchema =  mongoose.Schema({
    status: {
      type: Number,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    data: {
      type: mongoose.Schema.Types.Mixed
    }
  });


export  const Error = mongoose.model("Error", errorSchema);