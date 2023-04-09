import { useSession } from 'next-auth/react';

import SignIn from "@/components/_signIn";
import Lists from '@/components/_lists';

export default function In() {
    const { data, status } = useSession();

    if (status === 'authenticated') {
        return (
            <div className="max-w-2xl m-auto">
                <Lists />
            </div>
        )
    } else {
        return (
            <div className="max-w-2xl m-auto">
                <SignIn />
            </div>
        )
    }
}
