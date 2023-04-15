const { default: NikeUser } = require("@/models/Users");
const { default: db } = require("@/utils/db");
import bcryptjs from 'bcryptjs'
const handler=async(req,res)=>{
    if(req.method!=='POST'){
        return
    }
    const{name,email,password}=req.body;
    if(!name||!email||!password||!email.includes("@")||!password||password.trim().length<8){
         res.status(422).json({message:"validaton Error"})
         return
    }
    await db.connect();
    const existUser=await NikeUser.findOne({email:email});
    if(existUser){
        res.status(422).json({
            message:"user already exist"
        })
        await db.disconnect();
        return;
    }
  const newUser=await NikeUser({
    name,email,
    password:bcryptjs.hashSync(password),
    isAdmin:false
  })
  const user=await newUser.save();
  await db.disconnect();
  res.status(201).send({
    message:"creates user",
    _id:user._id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin
  })
}
export default handler;