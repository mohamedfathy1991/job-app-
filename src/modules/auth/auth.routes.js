
import { Router } from "express";
import { validate } from "../../midleware/validation.js";
import { errhandle } from "../../midleware/catcherr.js";
import { changepasswordVal, emailConfirmedVal, emailval, forgetpassword, signin, sinupvalidation } from "../users/user.validation.js";
import { changePasswordForgetten, changepassword, forgetPasswordfun, signup, sinin, verfyemail } from "./auth.contrler.js";
import { verifyToken } from "../../midleware/tokenOperation.js";

 
  const authRoute = Router()
 
  
  authRoute.post('/signup',validate(sinupvalidation),errhandle(signup))
  authRoute.post('/verfiy',validate(emailConfirmedVal),errhandle(verfyemail))
  authRoute.post('/signin',validate(signin),errhandle(sinin))
  authRoute.post('/changepassword/:id',validate(changepasswordVal),verifyToken
  ,errhandle(changepassword))
  authRoute.route('/forgetpassword/:email')
  .get(validate(emailval),errhandle(forgetPasswordfun))
  .post(validate(forgetpassword),errhandle(changePasswordForgetten))
 
 
 
  export default authRoute