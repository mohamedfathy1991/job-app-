import { Schema, model } from "mongoose";

const JobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },

  jobLocation: {
    type: String,
    required: true,
    enum: ["onsite", "remotely", "hybrid"],
  },

  workingTime: {
    type: String,
    enum: ["part-time", "full-time"],
  },
  seniorityLevel: { type: String, enum: ["junior", "mid-level", "senior"] },
  jobDescription:{
      type: String,
  },
  technicalSkills :{
      type:[String]
  },
  softSkills :{
      type:[String]
  },
  addedBy:{
      type: Schema.Types.ObjectId,
      ref: "User",
  },company: { type: Schema.Types.ObjectId, ref: 'Company', required: true }
});
// Compile model from schema
export const Job = model("Job", JobSchema);
