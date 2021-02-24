import type { AppProps } from 'next/app';
import HomePage from '../components/HomePage';
import GlobalStyles from '../styles/GlobalStyles';
import usePersistedState from '../utils/usePersistedState';
import { ThemeProvider } from 'styled-components';

import darkTheme from '../styles/themes/darkTheme';
import lightTheme from '../styles/themes/lightTheme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState('theme', darkTheme);

  const toggleTheme = () => {
    setTheme(theme.name === 'dark' ? lightTheme : darkTheme);
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
