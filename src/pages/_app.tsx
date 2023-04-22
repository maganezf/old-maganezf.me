import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import HomePage from '../components/HomePage';
import PlayChangedTheme from '../utils/PlayChangedTheme';
import usePersistedState from '../utils/usePersistedState';

import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';
import darkTheme from '../styles/themes/darkTheme';
import lightTheme from '../styles/themes/lightTheme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState('theme', darkTheme);

  const toggleTheme = () => {
    setTheme(theme.name === 'dark' ? lightTheme : darkTheme);
    PlayChangedTheme();
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ThemeProvider theme={theme}>
        <Component toggleTheme={toggleTheme} {...pageProps} />

        <HomePage />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
