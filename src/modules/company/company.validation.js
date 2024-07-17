import Joi from "joi";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/

 export const addCompany=  Joi.object({
      companyName: Joi.string().required(),
      description: Joi.string().required(),
      address: Joi.string().required(),
      numberOfEmpoyee: Joi.number().optional(),
      companyHR: Joi.string().required(),
      companyEmail:Joi.string().email().required().pattern(emailPattern),
      industry:Joi.string().optional()


})

export const updateCompanyVal  = Joi.object({
    id:Joi.string().required().length(24),
    companyName: Joi.string().optional(),
    description: Joi.string().optional(),
    address: Joi.string().optional(),
    numberOfEmpoyee: Joi.number().optional(),
    companyHR: Joi.string().optional(),
    companyEmail:Joi.string().email().optional(),
    industry:Joi.string().optional()


})




  
 export const idValidation=  Joi.object({
     id:Joi.string().required().length(24)
 })
 
 export const emailval=  Joi.object({
     email: Joi.string().email().pattern(emailPattern).required(),
     
 })
 export const queryCompany=  Joi.object({
     name: Joi.string(),
     
 })

