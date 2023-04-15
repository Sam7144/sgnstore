import { getSession } from "next-auth/react";

const { default: Order } = require("@/utils/Order");
const { default: db } = require("@/utils/db");


const handler=async(req,res)=>{
    const {session}=await getSession({req});
    if(!session){
       return res.status(401).send('login required')
    }
    await db.connect();
    const order=await Order.findById(req.query.id);
    await db.disconnect();
    res.send(order)
}
export default handler;