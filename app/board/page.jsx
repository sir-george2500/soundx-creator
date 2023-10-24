"use client"
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Sidebar from '@components/dashboard/Sidebar';


const dashboard= () => {

 
  return (
    <section className="flex w-full">
  <div className="h-70 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
     <Sidebar />
  </div>
   </section>
  );
};

export default dashboard;
