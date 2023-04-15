const { default: NikeUser } = require("@/models/Users");
const { default: db } = require("@/utils/db");
const { default: data } = require("../data/data2");

const handler=async(req,res)=>{
    await db.connect();
    await NikeUser.deleteMany();
    await NikeUser.insertMany(data.users)
    await db.disconnect();
    res.send({"message":"successfully seeded"})
}
export default handler;