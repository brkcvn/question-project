import { useState } from 'react';
//next auth
import { useSession } from 'next-auth/react';
//next router
import { useRouter } from 'next/router';
//components
import Header from '@/components/_header';
import Main from "@/components/_main";

interface FormProps {
    ask: string|number,
    answer: string|number
}

async function saveQuestion(question: any) {
    // post process in api/questions file
    const response = await fetch('/api/questions', {
        method: 'POST',
        body: JSON.stringify(question)
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}

export default function Ask() {
    const { status } = useSession();
    const [info, setInfo] = useState<FormProps>({
        ask: '',
        answer: ''
    });
    const router = useRouter();

    async function onSubmitForm(event:any) {
        event.preventDefault();

        try {
            await saveQuestion(info);
            router.push('/list');
        } catch(error) {
            console.log(error)
        }
    }

    if (status === 'authenticated') {
        return (
            <div className="space-y-8">
                <Header />

                <div className='max-w-2xl m-auto'>
                    <form
                        action="#"
                        method="POST"
                        onSubmit={onSubmitForm}
                        className='space-y-3'
                    >
                        <div className="block">
                            <label
                                htmlFor="ask"
                                className="text-gray-500 font-bold"
                            >
                                Ask a question
                            </label>

                            <input
                                name="ask"
                                id="ask"
                                onChange={({ target }) =>
                                    setInfo({ ...info, ask: target.value })
                                }
                                className="w-full bg-gray-700 text-gray-300 py-3 px-4 rounded-lg"
                                placeholder="Write"
                            />
                        </div>

                        <div className="block space-y-3">
                            <label
                                htmlFor="answer"
                                className="text-gray-500 font-bold"
                            >
                                Answer a question
                            </label>

                            <div className="w-full rounded-lg py-4 px-4 border-dashed border-2 border-gray-700"></div>
                            <textarea
                                name="answer"
                                id="answer"
                                onChange={({ target }) =>
                                    setInfo({ ...info, answer: target.value })
                                }
                                className="w-full bg-gray-700 text-gray-300 py-3 px-4 rounded-lg"
                                placeholder="Write"
                                rows={6}
                            >
                            </textarea>
                        </div>

                        <button
                            type='submit'
                            className="w-full py-2 px-4 rounded-lg bg-gray-500 text-white hover:bg-gray-700"
                        >
                            Proceed !
                        </button>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <Main />
        )
    }
}
