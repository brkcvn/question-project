//next auth
import { useSession } from 'next-auth/react';
//components
import Main from '@/components/_main';
import Lists from '@/components/_lists';

export default function Home() {
    const { data, status } = useSession();

    if (status === 'authenticated') {
        return (
            // <Lists />
            <Main />
        )
    } else {
        return (
            <Main />
        )
    }
}
