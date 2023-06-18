"use client"
import Link from "next/link";
import Image from "next/image";
import{useState,useEffect}from 'react'
import {signOut,signIn,useSession,getProviders} from 'next-auth/react'

const Nav = () => {

  const { data:session } = useSession();
   const [providers,setProviders] = useState(null);

   const [toggleDropDown,setToggleDropDown]=useState(false);

   useEffect(()=>{
    const setUpProviders = async ()=>{
      const response = await getProviders();

      setProviders(response)
    }
    setUpProviders();
   },[])
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
            <button 
            type="button"
            onClick={()=>{}} className="orange_gradient">
             Sign In
            </button>   
       </div>
    </nav>
  )
}

export default Nav