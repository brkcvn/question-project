import { useSession } from 'next-auth/react';

import SignUp from "@/components/_signUp";
import Lists from '@/components/_lists';

export default function Up() {
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
                <SignUp />
            </div>
        )
    }
}
