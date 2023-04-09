import SignIn from "@/components/_signIn";
import Header from '@/components/_header';

export default function In() {
  return (
    <div className="max-w-5xl m-auto">
      <Header />

      <div className="max-w-2xl m-auto">
        <SignIn />
      </div>
    </div>
  )
}
