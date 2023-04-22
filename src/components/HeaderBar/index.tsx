import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';

import {
  CodeIcon,
  MoonIconLightTheme,
  SunIconDarkTheme,
} from '../../styles/Icons';

import {
  ChangeThemeButton,
  Container,
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
            maganezf
          </Link>

          <LineSeparator />

          <Link href="/about" aria-label="Go to About Page">
            About
          </Link>
        </TitlePages>
      </Container>
      <GlobalStyles />
    </>
  );
};

export default HeaderBar;
