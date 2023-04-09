import { useSession } from 'next-auth/react';
import Question from "@/components/_question";
import Main from "@/components/_main";

export default function Ask() {
    const { data, status } = useSession();

    if (status === 'authenticated') {
        return (
            <div className="max-w-2xl m-auto">
                <Question />
            </div>
        )
    } else {
        return (
            <div className="max-w-2xl m-auto">
                <Main />
            </div>
        )
    }
}
