import { Formik } from 'formik';

/**
 * This is the AppForm Module which Wrap Formik 
 * form.
 * @param {*} param0 
 * @returns 
 */
function AppForm({initialValues,onSubmit,validationSchema ,children}) {
    return (
      <Formik
      initialValues = {initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
   >
  {() => (
      <>
      {children}
      </>
  )} 
</Formik>
  );
}



export default AppForm;