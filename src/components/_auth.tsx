import ExternalAuth from "./_externalAuth";
import Header from './_header';

interface AuthProps {
    auth_text?: string,
    dont_account_text: string
}

export default function Auth(props: AuthProps) {
    return (
        <div>
            <Header />

            <div className="max-w-md m-auto my-12 p-8 border shadow-lg space-y-6">
                <div className="space-y-3 my-3">
                    <h1 className="text-lg font-bold text-center">{props.auth_text}</h1>
                    <input
                        name="email"
                        type="text"
                        id="email"
                        className="w-full bg-gray-700 text-gray-300 py-3 px-4 rounded-lg"
                        placeholder="email"
                    />

                    <input
                        name="password"
                        id="password"
                        type="password"
                        className="w-full bg-gray-700 text-gray-300 py-3 px-4 rounded-lg"
                        placeholder="password"
                    />

                    <button className="w-full py-2 px-4 rounded-lg bg-gray-500 text-white hover:bg-gray-700">{props.auth_text}</button>
                    <span className="text-gray-700">Don't have an account ? {props.dont_account_text}</span>
                </div>

                <ExternalAuth />
            </div>
        </div>
    )
}