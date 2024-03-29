//next auth
import { useSession } from 'next-auth/react';
// next router
import { useRouter } from 'next/router';
//components
import Main from '@/components/_main';
import List from './list';

export default function Home() {
    const { status } = useSession();
    const router = useRouter();

    if (status === 'authenticated') {
        router.push('/list');
        return (
            <List />
        )
    } else {
        return (
            <Main />
        )
    }
}
