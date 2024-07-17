import Joi from "joi";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/

 export const sinupvalidation=  Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().pattern(emailPattern).required(),
      password: Joi.string().required('enter password').min(3).pattern(/^[1-9a-zA-Z]{3,10}$/),
      confirmPassword: Joi.string().required('con firm password').
      valid(Joi.ref('password'))
      .messages({ 'any.only': 'Passwords do not match' }),
      phone: Joi.string().required().pattern(/^01[0-9]{9}$/),
      recoverEmail:Joi.string().email().required().pattern(emailPattern),
      birthDate:Joi.date().max('now').iso(),
      role: Joi.string().valid('user', 'HR_company').optional()


})
 export const emailConfirmedVal=  Joi.object({
      email: Joi.string().email().required(),
      otp: Joi.number().required().min(3),
})


export const signin= Joi.object({
      // ******importabt************ 
    
      login:Joi.alternatives().try( Joi.string().email().pattern(emailPattern),
      Joi.string().pattern(/^01[0-9]{9}$/),
      )

      ,password:Joi.string()
      .min(3).message('enter min 3').required('enter passworde')
      
      })
      
 export const updateUserValidation=Joi.object({
     id:Joi.string().required().length(24),
      email: Joi.string().email().optional(),
      phone: Joi.string().pattern(/^\d{10,11}$/).optional(),
      recoveryEmail : Joi.string().email().optional()
      ,
      birthDate:Joi.date().max('now').iso().optional(),
      firstName: Joi.string().required().optional(),
      lastName: Joi.string().required().optional(),

 })   
 export const idValidation=  Joi.object({
     id:Joi.string().required().length(24)
 })
 export const changepasswordVal=  Joi.object({
     id:Joi.string().required().length(24),
     newpassword:Joi.string().required().min(3).pattern(/^[1-9a-zA-Z]{3,10}$/),
     oldpassword:Joi.string().required().min(3).pattern(/^[1-9a-zA-Z]{3,10}$/)

 })
 export const emailval=  Joi.object({
     email: Joi.string().email().pattern(emailPattern).required(),
     
 })

 export const forgetpassword=  Joi.object({
     email: Joi.string().email().pattern(emailPattern).required(),
     otp: Joi.string().required(),
     newpassword:Joi.string().required().min(3).pattern(/^[1-9a-zA-Z]{3,10}$/)

 })
 