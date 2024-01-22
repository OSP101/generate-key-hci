import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { users } from "../../../data/data";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile, session) {
      const emailToCheck = user.user.email;

      const existingUser = users.find((userr) => userr.email === emailToCheck);

      if (existingUser) {
        console.log(existingUser.email);
        return Promise.resolve({ ...user, session: { ...user.session } });
      } else {
        console.error('User not found in local data');
        return Promise.resolve("/403");
      }
    },
  },
};

export default NextAuth(authOptions);
