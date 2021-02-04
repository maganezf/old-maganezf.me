import type { AppProps } from 'next/app';

import IndexPage from '../src/components/IndexPage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <IndexPage />
    </>
  );
}
export default MyApp;
