import Head from 'next/head';

import Question from "@/components/_question";
import AuthHeader from "@/components/_isAuthHeader";

export default function Ask() {
    return (
        <div className="container">
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            </Head>
            <AuthHeader />

            <div className="max-w-2xl m-auto">
                <Question />
            </div>
        </div>
    )
}
