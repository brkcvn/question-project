import { useSession } from 'next-auth/react';

import Question from "@/components/_question";

export default function Ask() {
    const { data, status } = useSession();

    if (status === 'authenticated') {
        return (
            <div className="max-w-2xl m-auto">
                <Question />
            </div>
        )
    } else {
        return (
            <div className="max-w-2xl m-auto">
                Sign Out
            </div>
        )
    }
}
