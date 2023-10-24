"use client"
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Sidebar from '@components/dashboard/Sidebar';
import DisplayView from '@components/dashboard/DisplayView';

const dashboard= () => {

 
  return (
    <section className="flex w-full">
     <Sidebar />
     <DisplayView />
   </section>
  );
};

export default dashboard;
