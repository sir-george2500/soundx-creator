import GradientButton from '@components/GradientButton'
import TextInput from '@components/TextInput';
import Image from 'next/image'


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
              <TextInput 
                type="Email"
                name="email"
                label="Email"
                placeholder="Please Enter Your Email"             
              />
            </div>
            <div className="mb-2">
            <TextInput 
                type="password"
                name="password"
                label="Password"
                placeholder="Password"             
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
              className="flex gap-2 mt-4  hover:text-gray-300 text-white font-medium rounded-lg px-4 py-2"
            >
              Login with Google
              <Image src={require('@public/assets/icons/google.png')}
                width={20}
                height={20}
              />
            </button>


          </div>
        </div>
      </div>
    </section>

  )
}

export default Login