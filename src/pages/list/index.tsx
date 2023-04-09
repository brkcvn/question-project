import { useSession } from "next-auth/react";

import Lists from "@/components/_lists";

export default function List() {
    const { data, status } = useSession();

    if (status === 'authenticated') {
        return (
            <div className="max-w-2xl m-auto">
                <Lists />
            </div>
        )
    } else {
        return (
            <div className="max-w-2xl m-auto">
                Sign Out
            </div>
        )
    }
}
