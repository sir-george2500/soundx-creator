"use client"
import Link from "next/link";
import Image from "next/image";
import{useState,useEffect}from 'react'
import {signOut,signIn,useSession,getProviders} from 'next-auth/react'
import GradientButton from "./GradientButton";

const Nav = () => {

  const isUserLoggedIn = true;
  
  return (
    <nav className="flex-between w-full mb-16 pt-3">
     <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={37}
          height={37}
          className='object-contain'
        />
        <p className='logo_text'>soundx-creator</p>

      </Link>
       {/* Desk top Navigation */}
       <div className="sm:flex hidden">

        {isUserLoggedIn ? (
             <div className="flex gap-3 md:gap-5">
            <Link
              href="/"
              onClick={()=>{}} 
              >
            <GradientButton 
             text="Dashboard"
             />
              </Link> 

             <GradientButton 
             text="SignOut"
             onClick={()=>{}}
             />
             </div>

        ):(
         <>
         
             <Link
              href="/"
              onClick={()=>{}} 
              className="orange_gradient">

              Sign In
              </Link>  

         </>
         
       

        )
        
        }
            
       </div>


       {/**Mobile Navigation */}

      
    </nav>
  )
}

export default Nav