import Main from '@/components/_main';
import Question from '@/components/_question';
import Lists from '@/components/_lists';
import SignIn from '@/components/_signIn';
import SignUp from '@/components/_signUp';

export default function Home() {
  return (
    <div className="max-w-2xl m-auto">
      <h1 className="text-2xl text-center font-bold my-3">Logo</h1>
      <SignIn />
    </div>
  )
}
