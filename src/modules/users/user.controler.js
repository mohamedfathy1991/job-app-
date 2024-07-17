import { User } from "../../../database/model/user.model.js";
import { AppErr } from "../../midleware/catcherr.js";

export const updateUserAccount = async (req, res, next) => {
  let { id } = req.params;
  

  if (id != req.user.id)
    return next(new AppErr("not authorize to update user", 403));
  else {
    let { name, email, recoveryEmail, birthDate, phone, firstName, lastName } =
      req.body;
    let user = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          email,
          recoveryEmail,
          birthDate,
          phone,
          firstName,
          lastName,
        },
      },
      { new: true }
    );
    res.status(201).json(user);
  }
};
export const deleteAccount = async (req, res, next) => {
  let { id } = req.params;

  if (id != req.user.id)
    return next(new AppErr("not authorize to update user", 403));
  else {
    let user = await User.findById(id);
    if (user.status == "online") {
      await User.findByIdAndDelete(id);
      return  res.status(201).json({ message: "account delete " });
    }
    return  res.status(403).json({ message: "account must be login " });
  }
};
export const getAccount=async(req,res,next)=>{
  let { id } = req.params;

  if (id != req.user.id)
    return next(new AppErr("not authorize to access account", 403));
  else {
    if(req.user.status !="online") return next(new AppErr('user must be login ',403))

    let user = await User.findById(id);
  
    res.status(200).json({message:"uccess",user});
  }

}
export const getAnotherAccount=async(req,res,next)=>{
  let { id } = req.params;
  let user = await User.findById(id).select('-password -confirm -recoverEmail')
  if(!user) return(next(new AppErr('user not found',403)))
  res.status(200).json({message:"succeas",user})

}
export const getAllAccountRecoverMail=async(req,res,next)=>{
  let { email } = req.params;
  let user = await User.find({recoverEmail:email}).select('-password -confirm -recoverEmail')
  if(user.length==0) return(next(new AppErr('user not found',403)))
  res.status(200).json({message:"succeas",user})

}


