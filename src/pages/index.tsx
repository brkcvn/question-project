import Main from '@/components/_main';
import Header from '@/components/_header';

export default function Home() {
    return (
        <div className="max-w-5xl m-auto">
            <Header />

            <div className="max-w-2xl m-auto">
                <Main />
            </div>
        </div>
    )
}
