import Header from './_header';

export default function Question() {
    return (
        <div className="space-y-8">
            <Header />

            <div className='max-w-2xl m-auto'>
                <div className="block space-y-3">
                    <label htmlFor="ask" className="text-gray-500 font-bold">Ask a question</label>
                    <input
                        name="ask"
                        id="ask"
                        className="w-full bg-gray-700 text-gray-300 py-3 px-4 rounded-lg"
                        placeholder="Write"
                    />
                </div>

                <div className="block space-y-3">
                    <label htmlFor="answer" className="text-gray-500 font-bold">Answer a question</label>
                    <div className="w-full rounded-lg py-4 px-4 border-dashed border-2 border-gray-700"></div>
                    <textarea
                        name="answer"
                        id="answer"
                        className="w-full bg-gray-700 text-gray-300 py-3 px-4 rounded-lg"
                        placeholder="Write"
                        rows={6}
                    >
                    </textarea>
                </div>

                <button className="w-full py-2 px-4 rounded-lg bg-gray-500 text-white hover:bg-gray-700">Proceed !</button>
            </div>
        </div>
    )
}