 
 import { Router } from "express";
import { validate } from "../../midleware/validation.js";
import { errhandle } from "../../midleware/catcherr.js";
import { changepasswordVal, emailval, idValidation, updateUserValidation } from "./user.validation.js";
import { verifyToken } from "../../midleware/tokenOperation.js";
import { deleteAccount, getAccount, getAllAccountRecoverMail, getAnotherAccount, updateUserAccount } from "./user.controler.js";

 
  const userRoute= Router()
 
  
  //********** */ delete and update and get owner acount
  userRoute.route('/userdata/:id')
  .put(validate(updateUserValidation),verifyToken,errhandle(updateUserAccount))
  .delete(validate(idValidation),verifyToken,errhandle(deleteAccount))
 .get(validate(idValidation),verifyToken,errhandle(getAccount))

 // ************ get data of another account
  userRoute.get('/useracount/:id',validate(idValidation),
  verifyToken,errhandle(getAnotherAccount))

// ********** 9. Get all accounts associated to a specific recovery Email 
userRoute.get('/useracounts/:email',validate(emailval),verifyToken,errhandle(getAllAccountRecoverMail))
  export default userRoute