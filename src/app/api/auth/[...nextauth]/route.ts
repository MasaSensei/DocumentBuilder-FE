import axios from "axios";
import { Account, NextAuthOptions, Profile, User } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User }) {
      try {
        const response = await axios.post(
          `http://localhost:3000/api/register`,
          {
            email: user.email,
            username: user.name,
            open_id: "google",
          }
        );

        console.log(response.data);
        // if (response.status === 200 && response.data.data.token) {
        //   sessionStorage.setItem("token", response.data.data.token);
        //   console.log("Email:", user.email);
        //   console.log("Username:", user.name);
        //   return true;
        // } else {
        //   console.log(response);
        //   return false;
        // }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
