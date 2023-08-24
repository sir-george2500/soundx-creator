"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import GradientButton from "./GradientButton";
import { useTokenStorage } from "@app/hooks/useTokenStorage";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  useEffect(() => {
    const jwtToken = Cookies.get('jwtToken');
    setToken(jwtToken);  
  }, [router.asPath]);

  const logOut = () => {
    Cookies.remove('jwtToken');
    window.location.reload()
    router.push("/Login");
    
  }

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

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {token ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/" onClick={() => {}}>
              <GradientButton text="Dashboard" />
            </Link>

            <GradientButton text="SignOut" onClick={logOut} />

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
        ) : (
          <>
            <div className="flex gap-2">
              <Link href="/Login" onClick={() => {}}>
                <GradientButton text="Login" />
              </Link>

              <Link href="/register">
                <GradientButton text="Register" />
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex ">
          <Link href="/">
            <Image
              src={require('../public/assets/icons/profile_avatar.png')}
              width={30}
              height={30}
              className='object-contain rounded-full'
              alt="profile"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />

            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="orange_gradient"
                  onClick={() => setToggleDropDown(false)}
                >
                  Dashboad
                </Link>

                <Link
                  href="/profile"
                  className="orange_gradient"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <GradientButton text="SignOut" onClick={logOut} />
              </div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
