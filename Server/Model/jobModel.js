import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company:{
        type: String,
        required: true,

    },
    description: {
      type: String,
      required: true,
    },
    JobTypes: {
        type: String,
        required: true,
      },
      Skill: {
        type: String,
        required: true,
      },
      experince: {
        type: String,
        required: true,
      },
    salary: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    
    
    
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);