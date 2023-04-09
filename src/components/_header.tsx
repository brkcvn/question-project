import { useSession, signOut } from "next-auth/react";

export default function Header() {
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        return (
            <div className="container flex items-center justify-between">
                <div className="w-12 h-8 flex justify-center bg-gray-500 rounded-lg shadow-lg">
                    <span className="material-symbols-outlined text-white mt-1">
                        account_circle
                    </span>
                </div>

                <h1 className="text-2xl text-center font-bold my-3">Logo</h1>

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
            <h1 className="text-2xl text-center font-bold my-3">Logo</h1>
        )
    }
}