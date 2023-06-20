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
          width={40}
          height={40}
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

              <Link href="/profile">
              <Image
              src={require('../public/assets/icons/profile_avatar.png')}
              alt='profile'
              width={40}
              height={40}
              className='object-contain rounded-full '
              />
              </Link>
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