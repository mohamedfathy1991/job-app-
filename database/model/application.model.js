import { Schema, model } from "mongoose";

const applicationSchema = new Schema({
      jobid: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
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
},{timestamps:true});
// Compile model from schema

applicationSchema.post('init',(element)=>{
  element.userResume =      element.userResume= process.env.BASEURL + element.userResume

})
export const Apllication = model("Apllication", applicationSchema);
