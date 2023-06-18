import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';
import User from '@models/user';

// Establish database connection
connectToDB();
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
    // Session callback
    async session({ session }) {
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser.id.toString();

        return session;
    },
    async signIn({ profile }) {
      // Check if a user already exists
      const userExists = await User.findOne({ email: profile.email });

      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(/ /g, '').toLowerCase(),
          image: profile.picture,
        });
      }
      // Allow sign in
      return true; 
    },
  },
});

// export it
export { handler as GET, handler as POST };
