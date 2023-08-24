import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

/**
 * this module is charge with the responsibility of handling the 
 * providers and authentication flow
 */
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Optional: Define additional callbacks
  callbacks: {
    jwt: ({token, account })=> {
      if (account?.access_token) {
        token.access_token = account.access_token;
      }
      return token;
    },
  },

});

// export it
export { handler as GET, handler as POST };