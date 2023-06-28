import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik'

/**
 * This is the AppFormField which handle the TextInput and 
 * and Error Message accordingly 
 * @param {*} param0 
 * @returns 
 */

function AppFormField({ name , ...otherProps }) {
  
  const {
    setFieldTouched,
  setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
   
    <>
    
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text =>setFieldValue(name,text)}
        value = {values[name]}
              {...otherProps}

                      />
        <ErrorMessage error={errors[name]} touch={touched[name]} />
        
      
      

      
      </>
  );
}


export default AppFormField;