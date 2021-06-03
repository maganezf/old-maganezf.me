import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';

import {
  CodeIcon,
  SunIconDarkTheme,
  MoonIconLightTheme,
} from '../../styles/Icons';

import {
  Container,
  ChangeThemeButton,
  LineSeparator,
  TitlePages,
} from './styles';

export interface ThemeProps {
  toggleTheme(): void;
}

const HeaderBar: React.FC<ThemeProps> = ({ toggleTheme }) => {
  const { name } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <CodeIcon />

        <ChangeThemeButton
          onClick={toggleTheme}
          type="button"
          aria-label="Switch Theme"
        >
          {name === 'dark' ? <SunIconDarkTheme /> : <MoonIconLightTheme />}
        </ChangeThemeButton>

        <TitlePages>
          <Link href="/" aria-label="Go to Home Page">
            <h2>maganezf</h2>
          </Link>

          <LineSeparator />

          <Link href="/about" aria-label="Go to About Page">
            <h2>About</h2>
          </Link>
        </TitlePages>
      </Container>
      <GlobalStyles />
    </>
  );
};

export default HeaderBar;
