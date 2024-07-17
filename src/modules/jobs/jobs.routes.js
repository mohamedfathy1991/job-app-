import { Router } from "express";
import { validate } from "../../midleware/validation.js";
import { verifyToken } from "../../midleware/tokenOperation.js";
import { errhandle } from "../../midleware/catcherr.js";
import { addJobVal, companyidVal, deletejobval, filterjobsVal, jobUpdateVal } from "./jobs.validation.js";
import { addJob, deleteJob, getAllJobsForSpecificCompany, getJobWithCompany, updateJob } from "./jobs.controler.js";
import upload from "../../midleware/multer.js";


const JobRoute= Router()


JobRoute.route('/')
.post(validate(addJobVal),verifyToken,errhandle(addJob) )
.get(validate(filterjobsVal),verifyToken,errhandle(getJobWithCompany))


JobRoute.route('/:idjob')
.put(validate(jobUpdateVal),verifyToken,errhandle(updateJob) )
.delete(validate(deletejobval),verifyToken,errhandle(deleteJob))

JobRoute.route('/find/:idcompany').get(validate(companyidVal)
,verifyToken,errhandle(getAllJobsForSpecificCompany))
// Apply to Job


export default JobRoute