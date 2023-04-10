//next auth
import { useSession } from 'next-auth/react';
//components
import Question from "@/components/_question";
import Main from "@/components/_main";

export default function Ask() {
    const { data, status } = useSession();

    if (status === 'authenticated') {
        return (
            <Question />
        )
    } else {
        return (
            <Main />
        )
    }
}
