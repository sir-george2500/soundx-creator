"use client"
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { mdiLock, mdiEye, mdiEyeOff } from '@mdi/js';
import TextInput from '@components/TextInput';
import GradientButton from '@components/GradientButton';

const validationSchema = yup.object({
  password: yup
    .string('Enter your password')
    .min(5, 'Password should be at least 5 characters long')
    .required('Password is required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match') // Ensure it matches the password field
    .required('Confirm Password is required'),
});

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      phoneNumber: '',
      password: '',
      confirm_password: '', // Add confirmation password field
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      // You can now use values.confirm_password in your submission logic
    },
  });

  const onPressRightIcon = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <section className="w-full flex-center flex-col">
      <div className="mx-auto flex max-w-screen-sm items-center">
        <div className="h-70 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex h-full w-full items-center justify-center bg-neutral-950 back flex-col pl-20 pr-20 pt-10 pb-10">
            <h1 className="text-2xl font-black text-white p-3">Change Password</h1>
            <form onSubmit={formik.handleSubmit}>

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
              <div className="mb-2">
                <TextInput
                  type={showPassword ? 'text' : 'password'}
                  name="confirm_password"
                  id="confirm_password"
                  label="Confirm Password"
                  placeholder="Confirmed Password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  errorMessage={formik.errors.confirm_password}
                  leftIcon={mdiLock}
                  rightIcon={showPassword ? mdiEyeOff : mdiEye}
                  onPressRightIcon={onPressRightIcon}
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-center">
                  <GradientButton text="Submit" form={true} type="submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
