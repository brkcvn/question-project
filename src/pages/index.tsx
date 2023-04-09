import { useSession } from 'next-auth/react';

import Main from '@/components/_main';
import Lists from '@/components/_lists';

export default function Home() {
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
                <Main />
            </div>
        )
    }
}
