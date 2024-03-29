import NikeUser from '@/models/Users';
import db from '@/utils/db';
import NextAuth from 'next-auth';
import bcryptjs from 'bcryptjs'
import { getToken } from "next-auth/jwt"
import CredentialsProvider from 'next-auth/providers/credentials';
export default NextAuth({
    session:{
        strategy:'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async jwt({token,user}){
            if(user?._id)token._id=user._id;
            if(user?.isAdmin)token.isAdmin=user.isAdmin;
            return token;
        },
        async session({session,token}){
            if(token?._id)session.user._id=token._id;
            if(token?.isAdmin)session.user.isAdmin=token.isAdmin;
            return session;
        }
    },
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                await db.connect();
                const user=await NikeUser.findOne({
                    email:credentials.email
                })
                await db.disconnect();
                if(user&& bcryptjs.compareSync(credentials.password,user.password)){
                   return {
                        _id:user._id,
                        name:user.name,
                        email:user.email,
                        image:"f",
                        isAdmin:user.isAdmin
                    }
                }
                throw new Error('ivalid email or password')
            }
        })
    ]

})