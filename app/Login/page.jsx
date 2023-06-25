import GradientButton from '@components/GradientButton'
import Image from 'next/image'
import React from 'react'


const Login = () => {

  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };
  return (
    <section className="w-full flex-center flex-col">
      <div className="mx-auto flex max-w-screen-sm items-center">
        <div className="h-70 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex h-full w-full items-center justify-center bg-neutral-950 back flex-col pl-20 pr-20 pt-10 pb-10">
            <h1 className="text-2xl font-black text-white p-3">Login</h1>

            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text"
              />
            </div>
             <div  className='mt-4'>
            <GradientButton text="Login" form={true}/>
             </div>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-white"></div>
              <div className="px-2 text-white">or</div>
              <div className="flex-grow border-t border-white"></div>
            </div>

            <button
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg px-4 py-2"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Login