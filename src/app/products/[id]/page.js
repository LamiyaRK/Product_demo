
import Image from 'next/image';
import React from 'react'
import { TiTick } from "react-icons/ti";
export const dynamic = "force-dynamic";
export default async function ProductDet({params}) {
    const p=await params;
   const res=await fetch(`https://furniture-ivory-nine.vercel.app/api/products/${p.id}`)
   const data=await res.json()
 const {category,product_name,price,features,
product_code,availability,image
}=data
  return (
    <div className='w-5/6 mx-auto max-w-7xl my-20'>
    <div className='grid lg:grid-cols-2 items-center gap-5'> 
       <div className='h-[600px] '>
        <Image
            src={image}
            height={600}
            width={600}
            alt={product_name}
            className='h-full object-cover object-center'
        />
       </div>
       <div className='space-y-3'>
        <p className='opacity-80'>{category}</p>
         <p className='text-3xl font-semibold'>{product_name}</p>
          <p className='text-3xl font-medium border-b w-full border-gray-200 pb-3'>{price}</p>
           
           <div>
           {
            features.map((feature,index)=>{
               return <p key={index} className='flex items-center gap-2 opacity-80'>
                <TiTick color='#169c5c' size={24}/>
                  {feature}
                </p>
            })
           }
           </div>
           <div>
           <p className='border-t w-full border-gray-200 pt-3'><span className='opacity-80 '>Product code -</span> {product_code}</p>
           <p className=''><span className='opacity-80 '>Availability -</span>  {availability}</p>
           </div>
       </div>
    </div>
    </div>
  )
}
