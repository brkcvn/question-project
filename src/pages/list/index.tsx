import Head from 'next/head';

import Lists from "@/components/_lists";
import AuthHeader from "@/components/_isAuthHeader";

export default function List() {
    return (
        <div className="max-w-5xl m-auto">
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            </Head>
            <AuthHeader />

            <div className="max-w-2xl m-auto">
                <Lists />
            </div>
        </div>
    )
}
