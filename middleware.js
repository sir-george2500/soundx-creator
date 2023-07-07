import { useTokenStorage } from '@app/hooks/useTokenStorage';
import { NextResponse } from 'next/server';

export default async (request) => {
  // Get the user JWT token from storage
  const { getToken } = useTokenStorage();
  let token = getToken()

  if(request.url.includes('/dashboard'))
  {
     // Check if the user is authenticated
        if (token) 
        {
        // The user is authenticated, allow them to access the route
            console.log("Middleware okay");
            return NextResponse.next();
        } 
        else 
        {
            // The user is not authenticated, redirect them to the login page
            console.log("this is your token "+ token);
            return NextResponse.redirect('http://localhost:3000/');
        }
  }

  
};

export const config = {
    matcher:'/dashboard'
}