"use client"
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useProtected from '@app/hooks/useProtected';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    .min(5, 'Password should be at least 5 characters long')
    .required('Password is required'),
});

const dashboard= () => {

  

 
  return (
    <section className="w-full flex-center flex-col">
      <div className="mx-auto flex max-w-screen-sm items-center">
        <div className="h-70 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex h-full w-full items-center justify-center bg-neutral-950 back flex-col pl-20 pr-20 pt-10 pb-10">
            <h1 className="text-2xl font-black text-white p-3">Dashborad</h1>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default dashboard;
