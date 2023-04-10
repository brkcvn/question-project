import { useState } from 'react';
import { useRouter } from 'next/router';
//components
import Header from './_header';
//redux toolkit
import { useAppDispatch } from '../hooks';
import { submitQuestion } from '../features/question';

interface FormProps {
    ask: string,
    answer: string
}

export default function Question() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [info, setInfo] = useState<FormProps>({
        ask: '',
        answer: ''
    });

    function onSubmitForm(event: { preventDefault: () => void; }) {
        event.preventDefault();

        dispatch(submitQuestion(info));
        router.push('/list');
    }

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
}