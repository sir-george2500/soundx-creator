"use client"
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import GradientButton from '@components/GradientButton';
import TextInput from '@components/TextInput';
import { mdiAccount, mdiEmail } from '@mdi/js';
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

      
    },
  });


  const handleGoogleLogin = () => {
    // Handle Google login logic here
    setShowModal(true);
    signIn('google')
  };



  return (
    
    
    <section className="w-full flex-center flex-col">
      <div className="mx-auto flex max-w-screen-sm items-center">
        <div className="h-70 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex h-full w-full items-center justify-center bg-neutral-950 back flex-col pl-20 pr-20 pt-10 pb-10">
            <h1 className="text-2xl font-black text-white p-3">Forgot Password</h1>
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
                  leftIcon={mdiEmail}
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-center"> {/* Add this div to center the login button */}
                  <GradientButton 
                  text="Submit" 
                  form={true} 
                  type="submit"
                  />
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