"use client";
import React from "react";
import Link from "next/link";

import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import registerUser from "@/app/actions/auth/registerUser";



export default function RegisterForm() {
   const router=useRouter()
  const handleFormData = async (e) => {
  e.preventDefault();
  const formData = e.target;
  const name = formData.name.value.trim();
  const photo = formData.photo.value.trim();
  const email = formData.email.value.trim();
  const password = formData.password.value;

  try {
    const res = await registerUser({ name, photo, email, password });
    if (res) {
      
      
     
     const loginRes= await signIn("credentials",{email,password,redirect:false})

      if (loginRes.ok) {
         router.push('/products')
             formData.reset()
       toast.success("Registration successful");
        
      } else {
        toast.error("❌ Auto login failed");
      }
    } else {
      toast.error("❌ Registration failed: User may already exist");
    }
  } catch (error) {
    toast.error("❌ Error registering:", error);
  }
};

  return (
    <div>
      <form onSubmit={handleFormData}>
        <label htmlFor="name" className="block mb-2 font-medium">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required className="w-full p-2 mb-4 border rounded" />

        <label htmlFor="photo" className="block mb-2 font-medium">Photo</label>
        <input id="photo" name="photo" type="url" placeholder="Your photo URL" required className="w-full p-2 mb-4 border rounded" />

        <label htmlFor="email" className="block mb-2 font-medium">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required className="w-full p-2 mb-4 border rounded" />

        <label htmlFor="password" className="block mb-2 font-medium">Password</label>
        <input id="password" name="password" type="password" placeholder="Your password" minLength={6} required className="w-full p-2 mb-6 border rounded" />

        <button type="submit" className="w-full btn bg-primary text-white p-3 rounded">
          Register
        </button>
      </form>

      

      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-primary">Login</Link>
      </p>
    </div>
  );
}