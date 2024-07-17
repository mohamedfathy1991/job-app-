import Joi from "joi";

export const jobApplicationVal=Joi.object({
      userTechSkills: Joi.array().items(Joi.string().required()),
      userSoftSkills:Joi.array().items(Joi.string().required()),
      jobid:Joi.string().length(24)
     
  })

  export const idvalJob=Joi.object({
      
      id:Joi.string().length(24)
     
  })
  
  