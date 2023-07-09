import { NextRequest, NextResponse } from 'next/server';

export default async (request) => {
  const jwtToken = request.cookies.get('jwtToken')?.value;
  
  if (request.url.includes('/dashboard')) {
    // Check if the user is authenticated
    if (jwtToken) {  
      // The user is authenticated, allow them to access the route
      console.log("Middleware okay");
      return NextResponse.next();
    } else {
      // The user is not authenticated, redirect them to the login page
      return NextResponse.redirect('http://localhost:3000/Login');
    }
  } else if (request.url.includes('/Login') || request.url.includes('/register') || request.url === '/') {
    // Check if the user is already authenticated
    if (jwtToken) {  
      console.log(jwtToken);
      // The user is already authenticated, redirect them to the dashboard page
      console.log("Middleware Work");
      return NextResponse.redirect('http://localhost:3000/dashboard');
    }
  }

  // For other routes, allow the request to proceed
  return NextResponse.next();
};
