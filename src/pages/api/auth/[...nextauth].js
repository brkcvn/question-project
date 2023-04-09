import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProiver from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProiver({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  session: {
    strategy: 'jwt',
   },
}
export default NextAuth(authOptions)