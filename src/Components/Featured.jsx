import ProductCard from '@/app/products/Components/ProductCard'
import React from 'react'
export const dynamic = "force-dynamic";
export default async function Featured() {
    const res=await fetch('https://furniture-ivory-nine.vercel.app/api/featured')
   const data=await res.json()
   
  return (
     <div className='my-20 max-w-7xl w-11/12 mx-auto'> 
        <h1 className='text-center text-3xl font-bold '>Featured Products</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {data.map(da=><ProductCard da={da} key={da._id}></ProductCard>)}
        </div>
        
        </div>
  )
}
