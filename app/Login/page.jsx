"use client"
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import GradientButton from '@components/GradientButton';
import TextInput from '@components/TextInput';
import Image from 'next/image';
import { mdiAccount, mdiEye, mdiEyeOff, mdiLock } from '@mdi/js';
import Link from 'next/link';
import { loginUser } from './services/loginServices';
import { useTokenStorage } from '@app/hooks/useTokenStorage';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Modal from '@components/Modal'
import { GoogleAnimationView } from '@components/GoogleAnimationView';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(5,'Password should be at leat 5 charater\nlong')
    .required('Password is required'),
});

const Login = () => {
  const { storeToken } = useTokenStorage();

  const [showModal,setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values,{resetForm}) => {
      // Handle form submission logic here
      console.log(values);
      const{email,password}=values

      const data ={
        email:email,
        password:password,
      }
      try{
        let res = await loginUser(data)
        const {token} = res;
        storeToken(token);
        router.push("/dashboard")
        resetForm()
        window.location.reload();
      }catch(e){
        console.log(e)
      }
    },
  });


  const handleGoogleLogin = () => {
    // Handle Google login logic here
    setShowModal(true);
    signIn('google')
  };

 const onPressRightIcon = () =>{
    setShowPassword((showPassword)=>!showPassword);
 }

  return (
    
    
    <section className="w-full flex-center flex-col">
      <div className="mx-auto flex max-w-screen-sm items-center">
        <div className="h-70 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex h-full w-full items-center justify-center bg-neutral-950 back flex-col pl-20 pr-20 pt-10 pb-10">
            <h1 className="text-2xl font-black text-white p-3">Login</h1>
            <Modal isOpen={showModal}>
              <GoogleAnimationView/>
            </Modal>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-2">
                <TextInput
                  type="email"
                  name="email"
                  id="email"
                  label="Email"
                  placeholder="Please Enter Your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  errorMessage={formik.errors.email}
                  leftIcon={mdiAccount}
                />
              </div>
              <div className="mb-2">
                <TextInput
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  label="Password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  errorMessage={formik.errors.password}
                  leftIcon={mdiLock}
                  rightIcon={showPassword ? mdiEyeOff : mdiEye}
                  onPressRightIcon={onPressRightIcon}
                />
              </div>
              <div  className='flex justify-end'>
              <Link href="/forgot_password" className="text-sm text-white">
                Forgot Password?
              </Link>
              </div>
              <div className="mt-4">
                <div className="flex justify-center"> {/* Add this div to center the login button */}
                  <GradientButton 
                  text="Login" 
                  form={true} 
                  type="submit"
                  />
                </div>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-white"></div>
                <div className="px-2 text-white">or</div>
                <div className="flex-grow border-t border-white"></div>
             </div>

            <div  className='flex justify-center'>
              <button
                className="flex gap-2 mt-4  hover:text-gray-300 text-white font-medium rounded-lg px-4 py-2"
                onClick={handleGoogleLogin}
                type='submit'
              >
                Login with Google
                <Image src={require('@public/assets/icons/google.png')} width={20} height={20} />
              </button>
            </div>
               </div>
             
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;