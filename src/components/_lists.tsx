import { Key } from 'react';
import Link from 'next/link';
//components
import Header from './_header';
// redux toolkit
import { useAppSelector } from '../hooks';

export default function Lists(state?: any) {
    state = useAppSelector((state) => state);

    let list;

    if (state.action !== 'undefined') {
        list = state.action.question.map(function (item: any, i: Key | null | undefined) {
            return (
                <Link
                    href="question"
                    className="w-full flex items-center justify-center rounded-lg py-4 px-4 border-2 border-gray-700 cursor-pointer"
                >
                    <span key={i}>{item.ask}</span>
                </Link>
            )
        });
    }

    return (
        <div>
            <Header />

            <div className='max-w-2xl m-auto space-y-3'>
                {list}
            </div>
        </div>
    )
}