import Link from 'next/link';
import Header from './_header';

export default function Lists(props: any) {
    return (
        <div>
            <Header />

            <Link
                href="question"
                className="w-full flex items-center justify-center rounded-lg py-4 px-4 border-2 border-gray-700 cursor-pointer"
            >
                First Ask
            </Link>
        </div>
    )
}