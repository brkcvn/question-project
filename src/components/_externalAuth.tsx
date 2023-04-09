import { useSession, signIn } from "next-auth/react";

export default function ExternalAuth() {
    const { data: session } = useSession();
    
    return (
        <div>
            <hr></hr>

            <div className="space-y-3">
                <button
                    onClick={() => signIn()}
                    className="w-full py-2 px-4 rounded-lg bg-gray-500 text-white hover:bg-gray-700"
                >
                    Sign In with Google
                </button>
            </div>
        </div>
    )
}