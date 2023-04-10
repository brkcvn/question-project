//next auth
import { useSession } from 'next-auth/react';
// next router
import { useRouter } from 'next/router';
//components
import Main from '@/components/_main';

export default function Home() {
    const { data, status } = useSession();
    const router = useRouter();

    if (status === 'authenticated') {
        router.push('/list');
    } else {
        return (
            <Main />
        )
    }
}
