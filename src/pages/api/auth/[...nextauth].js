import NextAuth from "next-auth";
import GoogleProiver from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

export const authOptions = {
    providers: [
        GoogleProiver({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                    placeholder: 'email'
                },
                password: {
                    label: 'password',
                    type: 'password',
                    placeholder: 'password'
                }
            },
            async authorize(credentials, req) {
                const user = {
                    
                }
                return user
              },
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signUp: '/auth/signup'
    },
    session: {
        strategy: 'jwt',
    },
}
export default NextAuth(authOptions)