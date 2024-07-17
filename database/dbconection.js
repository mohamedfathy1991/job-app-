
import { configDotenv } from "dotenv";
import mongoose from "mongoose"
configDotenv()
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/jobssubmit';
 mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }).then(()=>{
      console.log("Connected to MongoDB database succes")
}).catch(err=>{
      console.log("Error connecting to MongoDB database", err)
})
 //Get the default connection
