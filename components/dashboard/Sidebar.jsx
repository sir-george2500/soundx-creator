"use client"
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';


const Sidebar= () => {

  

 
  return (

    <div className="flex h-full items-start justify-center bg-neutral-950 flex-col p-6">
      <h1 className="text-2xl font-black text-white mb-4">Sidebar</h1>
      <ul className="text-white text-lg list-none">
        <li className="mb-2">Overview</li>
        <li className="mb-2">Upload Music</li>
        <li>Earning</li>
      </ul>
    </div>
  );
};

export default Sidebar;
