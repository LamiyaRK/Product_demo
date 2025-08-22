import dbConnect from "@/lib/dbConnect"
import { NextResponse } from "next/server";

export const GET=async()=>{
    const products=dbConnect("products")
    const result=await products.find({}).toArray();
    
    return NextResponse.json(result)
}
export const POST=async(req)=>{
   const posteddata=await req.json();
   const products =dbConnect("products");
   const result=await products.insertOne(posteddata);
   return NextResponse.json(result)


}