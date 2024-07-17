import { Schema, model } from "mongoose";

const applicationSchema = new Schema({
      jobid: {
    type: Schema.Types.ObjectId,
    required: 'Job',
  },
  userid:{
      type: Schema.Types.ObjectId,
      ref: "User",
  },
  userTechSkills :[String],
  
  userSoftSkills  :[String],

  userResume : { 
      type: String,
      required: true,
   }
});
// Compile model from schema
export const Apllication = model("Apllication", applicationSchema);
