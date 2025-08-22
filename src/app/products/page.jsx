import React from 'react'
import ProductCard from './Components/ProductCard'
export const dynamic = "force-dynamic";
export default async function page() {
   const res=await fetch('https://furniture-ivory-nine.vercel.app/api/products')
   const data=await res.json()
   
  return (
    <div className='my-20 max-w-7xl w-11/12 mx-auto'> 
    <h1 className='text-center text-3xl font-bold '>All Products</h1>
    <div className='grid grid-cols-4 gap-5 my-10'>
        {data.map(da=><ProductCard da={da} key={da._id}></ProductCard>)}
    </div>
    </div>
  )
}
