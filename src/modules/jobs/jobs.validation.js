import Joi from "joi";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/

 export const addJobVal=  Joi.object({
      jobTitle: Joi.string().required(),
      jobLocation: Joi.string().required().valid("onsite", "remotely", "hybrid"),
      workingTime: Joi.string().required().valid("part-time", "full-time"),
      seniorityLevel: Joi.string().optional().valid("junior", "mid-level", "senior"),
      technicalSkills: Joi.array().items(Joi.string().required()),
      softSkills: Joi.array().items(Joi.string().required()),
      addedBy:Joi.string().optional().length(24),
      company:Joi.string().optional().length(24)

})


export const jobUpdateVal  = Joi.object({
    idjob:Joi.string().optional().length(24),
    jobTitle: Joi.string().optional(),
    jobLocation: Joi.string().optional().valid("onsite", "remotely", "hybrid"),
    workingTime: Joi.string().optional().valid("part-time", "full-time"),
    seniorityLevel: Joi.string().optional().valid("junior", "mid-level", "senior"),
    technicalSkills: Joi.array().items(Joi.string().optional()),
    softSkills: Joi.array().items(Joi.string().optional()),
    companyEmail:Joi.string().email().optional().pattern(emailPattern),
    industry:Joi.string().optional(),

})


export const filterjobsVal=Joi.object({
    jobTitle: Joi.string().optional(),
    jobLocation: Joi.string().optional().valid("onsite", "remotely", "hybrid"),
    workingTime: Joi.string().optional().valid("part-time", "full-time"),
    seniorityLevel: Joi.string().optional().valid("junior", "mid-level", "senior")
})




  
 export const deletejobval=  Joi.object({
     idjob:Joi.string().required().length(24)
 })
 export const companyidVal=  Joi.object({
    idcompany:Joi.string().required().length(24)
 })
 
 
 

