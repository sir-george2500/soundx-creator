'use client'
import { useFormikContext } from 'formik';
import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

/**
 * This is the AppFormField which handle the TextInput and 
 * and Error Message accordingly 
 * @param {*} param0 
 * @returns 
 */

const AppFormField = ({ name, ...otherProps }) => {
   
    const {
        values,
        setFieldTouched,
        errors,
        touched,
    }=useFormikContext();

    return (
      <>
        <TextInput
          onBlur={() => setFieldTouched(name)}
          onChange={text => setFieldValue(name, text)}
          value={values[name]}
          {...otherProps}
        />
        <ErrorMessage error={errors[name]} touch={touched[name]} />
      </>
    );
  };
  
  export default AppFormField;
  