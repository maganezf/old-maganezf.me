import type { AppProps } from 'next/app';

import HomePage from '../src/components/HomePage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <HomePage />
    </>
  );
}
export default MyApp;
