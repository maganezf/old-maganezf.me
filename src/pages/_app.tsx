import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import HomePage from '../components/HomePage';
import { ThemeProvider } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';
import PlayChangedTheme from '../utils/PlayChangedTheme';

import GlobalStyles from '../styles/GlobalStyles';
import darkTheme from '../styles/themes/darkTheme';
import lightTheme from '../styles/themes/lightTheme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState('theme', darkTheme);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const toggleTheme = () => {
    setTheme(theme.name === 'dark' ? lightTheme : darkTheme);
    PlayChangedTheme();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component toggleTheme={toggleTheme} {...pageProps} />

        <HomePage />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
