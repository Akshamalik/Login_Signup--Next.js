"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage()
{   const [user,setUser]=React.useState({
    email:"",
    password:"",
    
})
const onLogin=async ()=>{
}
return(
    <div className=" p-3 flex flex-col items-center justify-center min-h-screen py-2">
    
        <h1>Login</h1>
        <hr/>
        
        <label htmlFor="email">email</label>
        <input id="email" type="email" value={user.email}
        onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email"/>
        <label htmlFor="password">password</label>
        <input id="password" type="password" value={user.password}
        onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="password"/>
        <button onClick={onLogin} className="p-3 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" > 
        Login here
        </button>
        <Link href="/signup">Visit Signup Page</Link>
        </div>
)
}
   