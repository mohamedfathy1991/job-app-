import { Apllication } from "../../../database/model/application.model.js"
import { Company } from "../../../database/model/company.model.js"
import { Job } from "../../../database/model/jobs.model.js"
import { AppErr } from "../../midleware/catcherr.js"


export const addCompanydata = async(req,res,next)=>{
      // check authorization for user 
     if(req.user.role != 'HR_company') return next( new AppErr(' not allow to add company ',400))
     let company = new  Company(req.body)
      await company.save()
     res.status(201).json({
      message:"success",company
     })


} 
export const updateCompanyData=async(req,res,next)=>{
      const {id}=req.params 
      if(req.user.role != 'HR_company' ) return next( new AppErr(' not allow to update company ',400))
      let company = await Company.findById(id)
      if(!company) return next( new AppErr(' company not found ',404))
     
      if(req.user.id != company.companyHR.toString()) return next( new AppErr(' you not authorize ',400))
      let updatecompany= await Company.findByIdAndUpdate(id,req.body,{new:true})
      res.status(201).json({message:"success",updatecompany})
      


}
export const deleteCompanyData=async(req,res,next)=>{
      const {id}=req.params 
      if(req.user.role != 'HR_company' ) return next( new AppErr(' not allow to delete company ',400))
      let company = await Company.findById(id)
      if(!company) return next( new AppErr(' company not found ',404))
     
      if(req.user.id != company.companyHR.toString()) return next( new AppErr(' you not authorize ',400))
      let updatecompany= await company.deleteOne()
      res.status(201).json({message:"success"})
      


}
// search by name
export const getCompanyByName=async(req,res,next)=>{
      const {name}= req.query
      let company = await Company.findOne({companyName:{ $regex: name, $options: 'i' }})
      if(!company) return next( new AppErr(' company not found ',404))
     
      
      // find all jobs related to company
      // ...........
      res.status(200).json({message:"success", company})
      


}
export const getCompanyData=async(req,res,next)=>{
      const {id}=req.params 
      if(req.user.role != 'HR_company' ) return next( new AppErr(' not allow to add company ',400))
      let company = await Company.findById(id)
      if(!company) return next( new AppErr(' company not found ',404))
     
      if(req.user.id != company.companyHR.toString()) return next( new AppErr(' you not authorize ',400))
      
      // find all jobs related to company
      // ...........
      res.status(200).json({message:"success"})
      


}
// Get all applications for specific Job
export const getAllAplicationForJob= async(req,res,next)=>{
      let  userid = req.user.id  
         const {id}=req.params
         let  jobs= await Job.findById(id)
         if(!jobs) return next( new AppErr(' job not found ',404))
         if(jobs.addedBy.toString() != userid) return next( new AppErr(' you not allow to get apllicatioj'))

     let applications= await Apllication.find({jobid:id}).populate('userid')
     if(!applications.length) return next( new AppErr(' applications not found ',404))

    const  baseurl= process.env.BASEURL
     applications.forEach(element => {
      element.userResume= baseurl + element.userResume

      
     });
     res.status(200).json({message:"success",applications})

}