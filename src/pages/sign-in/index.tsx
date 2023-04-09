import SignIn from "@/components/_signIn";
import Header from '@/components/_header';

export default function In() {
  return (
    <div className="container">
      <Header />

      <div className="max-w-2xl m-auto">
        <SignIn />
      </div>
    </div>
  )
}
