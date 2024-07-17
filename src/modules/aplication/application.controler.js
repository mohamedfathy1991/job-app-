import { Apllication } from "../../../database/model/application.model.js"



export const jobApply =async(req,res,next)=>{
      req.body.userid= req.user.id
  console.log(req.file);
      
      req.body.userResume= req.file.filename
      const job = await  Apllication.create(req.body)
      res.status(200).json(job)

          
    
    }