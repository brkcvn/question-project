import NextAuth from "next-auth";
import GoogleProiver from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
            authorize (credentials, req) {
                if (credentials.email === 'burakcivan22@gmail.com' && credentials.password === '1') {
                    return {
                        id: 1,
                        name: 'Burak',
                        email: 'burakcivan32@gmail.com'
                    }
                }

                return null;
            }
        })
    ],
    // pages: {
    //     signIn: '/auth/signin'
    // },
    session: {
        strategy: 'jwt',
    },
}
export default NextAuth(authOptions)