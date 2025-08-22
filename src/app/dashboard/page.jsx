import React from 'react'
import MyProduct from './components/MyProduct'
import { headers } from 'next/headers'
import Link from 'next/link'
export const dynamic = "force-dynamic";
export default async function page() {
    const res=await fetch('https://furniture-ivory-nine.vercel.app/api/productsUser',{
         headers:new Headers(await headers()) ,
    })
   const data=await res.json()
  return (
    <div className='max-w-7xl w-5/6 mx-auto'>
    {
      data.length>0?(<><h2 className="text-4xl font-semibold mb-4 text-center my-20">My Products</h2>
        <div className="overflow-x-auto mb-20">
  <table className="table border-3 border-[#318892]  rounded-lg shadow-md mt-10">
    
    <thead>
      <tr className='text-[#318892] text-lg '>
        <th>
         Sl No
        </th>
        <th>Title</th>
        <th>Tags</th>
        <th>Likes</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((dat,index)=><MyProduct dat={dat} index={index} key={dat._id}></MyProduct>)}
      
      </tbody>
    
  </table>
</div></>):<>
<h2 className="text-4xl font-semibold mb-4 text-center my-20 ">You Haven't Posted Any Proudcts Yet</h2>
<Link href='/dashboard/add-product'><button className='flex justify-center btn btn-lg mb-20 bg-[#318892] text-white p-3 rounded mx-auto'>Add Products</button></Link>
</>
    }
     
    </div>
  )
}
