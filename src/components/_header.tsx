//next auth
import { useSession, signOut } from "next-auth/react";
import Link from 'next/link';

export default function Header() {
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        return (
            <div className="container flex items-center justify-between">
                <div className="w-12 h-8 flex justify-center bg-gray-500 rounded-lg shadow-lg">
                    <Link href="/list">
                        <span className="material-symbols-outlined text-white mt-1">
                            account_circle
                        </span>
                    </Link>

                </div>

                <Link href="/question">
                    <img
                        src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5be01d787b5e5b0001ebb6bb/0x0.png"
                        className="w-24 h-24 m-auto"
                        alt="Logo"
                    />
                </Link>

                <div className="w-12 h-8 flex justify-center bg-gray-500 rounded-lg shadow-lg">
                    <button onClick={() => signOut()}>
                        <span className="material-symbols-outlined text-white mt-1">
                            forward
                        </span>
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <img
                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5be01d787b5e5b0001ebb6bb/0x0.png"
                className="w-24 h-24 m-auto"
                alt="Logo"
            />
        )
    }
}