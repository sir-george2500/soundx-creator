
const baseUrl = 'http://127.0.0.1:8000'


/**
 * This Method is use to register the User 
 * @param {*} values 
 */

export const registerUser = async (values) => {
     console.log(values)
    const URL = `${baseUrl}/register`
    try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // Handle successful registration
          console.log('User registered successfully');
        } else {
          // Handle registration failure
          const errorData = await response.json();
          console.error('Failed to register user:', errorData.error);
        }
      } catch (error) {
        // Handle network or server errors
        console.error('An error occurred while registering the user');
      }
}


