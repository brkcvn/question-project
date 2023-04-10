//next auth
import { useSession } from "next-auth/react";
//components
import Main from "@/components/_main";
import Lists from "@/components/_lists";

export default function List() {
    const { data, status } = useSession();

    if (status === 'authenticated') {
        return (
            <Lists />
        )
    } else {
        return (
            <Main />
        )
    }
}
