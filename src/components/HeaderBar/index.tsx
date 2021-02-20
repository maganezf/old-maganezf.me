import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext, css } from 'styled-components';
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

export interface Props {
  toggleTheme(): void;
}

const HeaderBar: React.FC<Props> = ({ toggleTheme }) => {
  const { name } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <CodeIcon />

        <ChangeThemeButton onClick={toggleTheme}>
          {name === 'dark' ? <SunIconDarkTheme /> : <MoonIconLightTheme />}
        </ChangeThemeButton>

        <TitlePages>
          <Link href="/">
            <h2>maganezf</h2>
          </Link>

          <LineSeparator />

          <Link href="/about">
            <h2>About</h2>
          </Link>
        </TitlePages>
      </Container>
      <GlobalStyles />
    </>
  );
};

export default HeaderBar;
