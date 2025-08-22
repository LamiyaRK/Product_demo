"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
  const { data, status } = useSession()
    const list=<>
         <li><Link href='/'>Home</Link></li>
        <li><Link href='/products'>Products</Link></li>
    </>
     const list1=<>
         <li><Link href='/'>Home</Link></li>
         <li><Link href='/dashboard'>Dashboard</Link></li>
        <li><Link href='/products'>Products</Link></li>
        <li><Link href='/dashboard/add-product'>Add Product</Link></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {status === 'authenticated' ? list1 : list}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Livora</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {status === 'authenticated' ? list1 : list}
    </ul>
  </div>
  <div className="navbar-end">
    {status === 'authenticated' ? (
          <div className='flex items-center gap-2 '>
            <Image src={data?.user?.image} width={50} height={50} alt='userimage' className='rounded-full' />
            <button
              onClick={() => {
                signOut()
                toast("Logged Out Successfully", {
                  type: 'success',
                  theme: 'colored'
                })
              }}
              className="btn btn-outline btn-lg rounded-lg"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link href='/login' className="btn btn-outline btn-lg rounded-lg">Login</Link>
        )}
  </div>
</div>
  )
}
