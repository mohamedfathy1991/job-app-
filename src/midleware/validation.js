export const validate=(schema)=>{
      return(req,res,next)=>{
           let {error}= schema.validate({...req.body,...req.params,...req.query},{abortEarly:false})
         
           if(!error) next()
           else{
            next (error)
           }


      }
}