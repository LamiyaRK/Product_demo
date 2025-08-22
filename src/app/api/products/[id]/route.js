import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET=async(req,{params})=>{
    
    const products=dbConnect("products")
    const result=await products.findOne({_id:new ObjectId(params.id)});
    
    return NextResponse.json(result)
}