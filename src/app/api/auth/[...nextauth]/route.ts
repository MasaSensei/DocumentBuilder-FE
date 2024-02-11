import axios from "axios";
import { NextAuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  cookies: {
    sessionToken: {
      name: "token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({
      user,
      token,
      account,
    }: {
      user: User;
      token: JWT;
      account: any;
    }) {
      try {
        if (account) {
          const data = {
            username: user.name,
            email: user.email,
            open_id: "google",
          };

          // Mengirim data pengguna ke server menggunakan axios
          const response = await axios.post(
            `${process.env.DEV_LOCAL}/api/v1/login-or-register`,
            data
          );

          if (response.status === 200) {
            const responseData = response?.data?.data?.token; // Ambil token dari respons
            return {
              ...token,
              accessToken: responseData,
            };
          } else {
            console.error("Failed to login/register:", response.data.message);
          }
        }

        return token;
      } catch (error) {
        console.log("Error during API call:", error);
        return { success: false, token: null };
      }
    },
    async session({ session, token }: { session: any; token: JWT }) {
      if (token) {
        session.user = token;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
