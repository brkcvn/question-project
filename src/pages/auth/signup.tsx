import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getCsrfToken } from "next-auth/react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from 'next/link';

interface Props {
    email: string,
    password: string
}

export default function SignIn({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [info, setInfo] = useState<Props>({
        email: '',
        password: ''
    });

    async function handleSubmit(event: any) {
        event.preventDefault();

        const res = await signIn('credentials', {
            email: info.email,
            password: info.password,
            redirect: false
        });

        console.log(res)
    }
    return (
        <div className="max-w-md m-auto my-12 p-8 border shadow-lg space-y-6">
            <div className="space-y-3 my-3">
                <h1 className="text-lg font-bold text-center">Sign Up</h1>

                <form
                    method="post"
                    action="/api/auth/callback/credentials"
                    className="space-y-6"
                    onSubmit={handleSubmit}
                >
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                    <input
                        name="email"
                        type="text"
                        id="email"
                        onChange={({ target }) =>
                            setInfo({ ...info, email: target.value })
                        }
                        className="w-full bg-gray-700 text-gray-300 py-3 px-4 rounded-lg"
                        placeholder="email"
                    />

                    <input
                        name="password"
                        id="password"
                        type="password"
                        onChange={({ target }) =>
                            setInfo({ ...info, password: target.value })
                        }
                        className="w-full bg-gray-700 text-gray-300 py-3 px-4 rounded-lg"
                        placeholder="password"
                    />

                    <button
                        type="submit"
                        className="w-full py-2 px-4 rounded-lg bg-gray-500 text-white hover:bg-gray-700"
                    >
                        Sign Up
                    </button>
                    <span className="text-gray-700">Don't have an account ?
                        <Link href="signup">Sign Up</Link>
                    </span>
                </form>
            </div>
        </div>

    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}