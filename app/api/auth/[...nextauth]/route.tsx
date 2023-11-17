import User from "@/models/user";

import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { MongodbConnection } from "@/lib/mongodb";
 const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // ** The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      type: "credentials",

      /*
       * As we are using our own Sign-in page, we do not need to change
       * username or password attributes manually in following credentials object.
       */
      credentials: {},

      async authorize(credentials: any) {
        const { email, password } = credentials;

        try {
          await MongodbConnection();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",

    maxAge: 30 * 24 * 60 * 60, // ** 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
