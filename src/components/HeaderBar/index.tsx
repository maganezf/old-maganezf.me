import React from 'react';
import Link from 'next/link';

import { CodeIcon, SunIconDarkTheme } from '../../styles/Icons';
import { Container, LineSeparator } from './styles';

const HeaderBar: React.FC = () => {
  return (
    <>
      <Container>
        <CodeIcon />

        <SunIconDarkTheme />

        <div className="a">
          <Link href="/">
            <h2>maganezf</h2>
          </Link>

          <LineSeparator />

          <Link href="/about">
            <h2>About</h2>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default HeaderBar;
