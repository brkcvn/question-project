import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";

//redux toolkit
import { Provider } from 'react-redux';
import store from '../store';
//redux toolkit

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}
