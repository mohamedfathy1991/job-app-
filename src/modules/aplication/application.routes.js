
import { Router } from "express";

import { errhandle } from "../../midleware/catcherr.js";
import  { uploadSingleImage } from "../../midleware/multer.js";
import { verifyToken } from "../../midleware/tokenOperation.js";
import { jobApply } from "./application.controler.js";
import { validate } from "../../midleware/validation.js";
import { jobApplicationVal } from "./application.validation.js";


const applicationRoute=Router()

applicationRoute.route('/').post(verifyToken ,uploadSingleImage('Application',"cv"),
validate(jobApplicationVal) ,errhandle(jobApply))



export default  applicationRoute