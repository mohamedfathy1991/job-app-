import express from 'express'

import './database/dbconection.js'
import { configDotenv } from 'dotenv'
import userRoute from './src/modules/users/user.routes.js'
import authRoute from './src/modules/auth/auth.routes.js'
import globalerr from './src/midleware/globalerr.js'
import { AppErr } from './src/midleware/catcherr.js'
import companyRoute from './src/modules/company/company.routes.js'
import JobRoute from './src/modules/jobs/jobs.routes.js'
import applicationRoute from './src/modules/aplication/application.routes.js'
configDotenv()
const app = express()
app.use(express.json())

app.use("/uploads",(express.static('uploads')))




// authentication for user api

app.use('/auth',authRoute)
app.use('/user',userRoute)
app.use('/company',companyRoute)
app.use('/job',JobRoute)
app.use('/apllyjob',applicationRoute)


app.use("*",(req,res,next)=>{
      next(new AppErr('page not found',404))
})
app.use(globalerr)

const port =  process.env.PORT ||3000 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))