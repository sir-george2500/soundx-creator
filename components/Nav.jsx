"use client"
import Link from "next/link";
import Image from "next/image";
import{useState,useEffect}from 'react'
import {signOut,signIn,useSession,getProviders} from 'next-auth/react'
import GradientButton from "./GradientButton";

const Nav = () => {

  const isUserLoggedIn = false;

  const [toggleDropDown,setToggleDropDown]=useState(false);
  
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
         <div  className="flex gap-2">
             <Link
              href="/Login"
              onClick={()=>{}} 
              className="orange_gradient">

              Login
              </Link>  

              <Link
              href="/"
              onClick={()=>{}} 
              className="orange_gradient">

              Register
              </Link> 
         </div>

         </>
         
       

        )
        
        }
            
       </div>
       {/**Mobile Navigation */}
       <div className="sm:hidden flex relative">
       <div className="flex "> 

       <Link href="/">
              <Image
              src={require('../public/assets/icons/profile_avatar.png')}
              width={30}
              height={30}
              className='object-contain rounded-full' 
              alt="profile"
              onClick={()=> setToggleDropDown((prev) =>!prev)}
              />

           {toggleDropDown && (
            <div className="dropdown">
              <Link
               href="/profile"
               className="orange_gradient"
               onClick={()=>setToggleDropDown(false)}
              >
               Dashboad
              </Link>

              <Link
               href="/profile"
               className="orange_gradient"
               onClick={()=>setToggleDropDown(false)}
              >
               My Profile
              </Link>
              <GradientButton 
               text="SignOut"
               onClick={()=>{}}
             />
            </div>
          )}
          </Link>


       </div>


       </div>
      
    </nav>
  )
}

export default Nav