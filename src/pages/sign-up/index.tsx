import SignUp from "@/components/_signUp";
import Header from '@/components/_header';

export default function Sign() {
  return (
    <div className="container">
      <Header />

      <div className="max-w-2xl m-auto">
        <SignUp />
      </div>
    </div>
  )
}
