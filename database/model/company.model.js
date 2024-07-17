
import { Schema,model } from "mongoose";

const companySchema = new Schema({
      companyName:{
            type:String,
            required:true,
            unique:true,
      },
     
     
      description:{type:String,required:true},
      
      address:{
            type:String,
            required:true,
          
      },
      numberOfEmpoyee: Number,
     
      
      companyEmail:{
      type:String,
      required:true,
      unique:true,
     },
     companyHR:{
      type:Schema.Types.ObjectId,
      ref:"User",
     },
     industry:{
      
      type:String
     }

           
});
// Compile model from schema
export const  Company = model('Company', companySchema );