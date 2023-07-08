import { NextRequest, NextResponse } from 'next/server';

export default async (request) => {

  // Access cookies from the request
  const jwtToken = request.cookies.get('jwtToken')?.value;
  console.log('Token:',jwtToken);
  // const currentUser = request.cookies.get("currentUser")?.value;
  if (request.url.includes('/dashboard')) {
    // Check if the user is authenticated
    if (jwtToken) {
      // The user is authenticated, allow them to access the route
      console.log("Middleware okay");
      return NextResponse.next();
    } else {
      // The user is not authenticated, redirect them to the login page
      console.log(jwtToken);
      return NextResponse.redirect('http://localhost:3000/');
    }
  }
};
