import { Apllication } from "../../../database/model/application.model.js"

// const ExcelJS = require('exceljs');




export const jobApply =async(req,res,next)=>{
      req.body.userid= req.user.id
      
      req.body.userResume= req.file.filename
      const job = await  Apllication.create(req.body)
      res.status(200).json(job)

          
    
    }

    // collects the applications for a specific company  
