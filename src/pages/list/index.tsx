import { useState, Key } from "react";
import Link from 'next/link';

//next auth
import { useSession } from "next-auth/react";
//components
import Main from "@/components/_main";
import Header from "@/components/_header";

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getServerSideProps() {
    const items = await prisma.contact.findMany();
    return {
        props: {
            initialContacts: items
        }
    }
}

export default function List({ initialContacts }: any) {
    const { status } = useSession();
    const [list] = useState(initialContacts);
    let items;

    if (list !== 'undefined') {
        items = list.map(function (item: any, i: Key | null | undefined) {
            return (
                <Link
                    key={i}
                    href="question"
                    className="w-full flex items-center justify-center rounded-lg py-4 px-4 border-2 border-gray-700 cursor-pointer"
                >
                    <span>{item.ask}</span>
                </Link>
            )
        });
    }

    if (status === 'authenticated') {
        return (
            <div>
                <Header />
                <div className="max-w-2xl m-auto space-y-3">
                    {items}
                </div>
            </div>
        )
    } else {
        return (
            <Main />
        )
    }
}
