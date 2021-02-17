import type { AppProps } from 'next/app';
import HomePage from '../src/components/HomePage';
import usePersistedState from '../src/utils/usePersistedState';
import HeaderBar from '../src/components/HeaderBar';
import GlobalStyles from '../src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import darkTheme from '../src/styles/themes/darkTheme';
import lightTheme from '../src/styles/themes/lightTheme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState('theme', darkTheme);

  const toggleTheme = () => {
    setTheme(theme.name === 'dark' ? lightTheme : darkTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <HeaderBar toggleTheme={toggleTheme} />

        <HomePage />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
