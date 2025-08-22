"use server"
import dbConnect from '@/lib/dbConnect';
import bcrypt from 'bcrypt'

export default async function registerUser(payload) {
    const {name,photo,email,password}=payload
    if(!email||!password)
        return null;
    const usercol=dbConnect("user")
    const result=await usercol.findOne({email:email});
    if(result)
        return null;
    else
    {   const hashedpassword=await bcrypt.hash(password,10)
       const newUser = {
    name,
    image:photo,     
    email,
    password: hashedpassword,
  };
        const result=await usercol.insertOne(newUser);
        console.log("result of register",result)
        result.insertedId=result.insertedId.toString()
        return result;
    }
        return null;
 
}