import { Router } from "express";
import { validate } from "../../midleware/validation.js";
import { addCompany, idValidation, queryCompany, updateCompanyVal } from "./company.validation.js";
import { verifyToken } from "../../midleware/tokenOperation.js";
import { errhandle } from "../../midleware/catcherr.js";
import { addCompanydata, collectApplicationEcell, deleteCompanyData, getAllAplicationForJob, getCompanyByName, getCompanyData, updateCompanyData } from "./company.controler.js";
import { idvalJob } from "../aplication/application.validation.js";


const companyRoute= Router()

companyRoute.route('/find').get(validate(queryCompany),verifyToken,errhandle(getCompanyByName))

companyRoute.post('/',validate(addCompany),verifyToken,errhandle(addCompanydata) )

companyRoute.route('/:id')
.put(validate(updateCompanyVal),verifyToken,errhandle(updateCompanyData) )
.delete(validate(idValidation),verifyToken,errhandle(deleteCompanyData))
.get(validate(idValidation),verifyToken,errhandle(getCompanyData))

companyRoute.get('/aplications/:id',verifyToken,validate(idvalJob), errhandle(getAllAplicationForJob))
companyRoute.get('/apllicationdata/:id',verifyToken,errhandle(collectApplicationEcell))
export default companyRoute