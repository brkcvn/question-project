import { useSession } from "next-auth/react";

import Lists from "@/components/_lists";

export default function List() {
    const { data: session, status } = useSession();

    return (
        <div className="max-w-2xl m-auto">
            <List />
        </div>
    )
}
