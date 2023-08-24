import sendRequest from "@app/services/sendRequest";

/**
 * This method is use to registe the user 
 * @param {*} values 
 * @returns 
 */
export const registerUser = async (values) => {
  const endpoint = 'register';

  try {
    const response = await sendRequest(endpoint, 'POST', values);
    console.log('User registered successfully');
    return response;
  } catch (error) {
    console.error('Failed to register user:', error.message);
    throw error;
  }
};
