import { useSession } from "next-auth/react";
import { useAppSelector } from '../../hooks';
import Main from "@/components/_main";
import Lists from "@/components/_lists";

interface ActionProps {
    state?: any
}

export default function List({ state }: ActionProps) {
    state = useAppSelector((state) => state);

    const actionProps = {
        action: state.action,
    }

    const { data, status } = useSession();

    if (status === 'authenticated') {
        return (
            <Lists {...actionProps} />
        )
    } else {
        return (
            <Main />
        )
    }
}
