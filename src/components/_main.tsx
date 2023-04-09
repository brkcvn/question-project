import Link from 'next/link';
import Header from './_header';

export default function Main() {
    return (
        <div>
            <Header />
            <div className="space-y-3">
                <span className="text-lg font-bold">Hello Guest User</span>
                <p>In this app you can ask a question or answer a question from random person. <br /> You can also start asking questions by sigingig in</p>
                <Link
                    href="auth/signin"
                    className="w-full flex items-center justify-center py-2 px-4 rounded-lg bg-gray-500 text-white hover:bg-gray-700"
                >
                    Sign In
                </Link>
            </div>
        </div>
    )
}