import React from 'react';
import Link from 'next/link';

import { Container } from './styles';
import { CodeIcon, SunIconDarkTheme } from '../../styles/Icons';

const HeaderBar: React.FC = () => {
  return (
    <>
      <Container>
        <CodeIcon />
        <SunIconDarkTheme />

        <Link href="/">
          <h2>maganezf</h2>
        </Link>
      </Container>
    </>
  );
};

export default HeaderBar;
