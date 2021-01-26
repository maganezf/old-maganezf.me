import React from 'react';

import { Container } from './styles';
import { CodeIcon, SunIconDarkTheme } from '../../styles/Icons';

const HeaderBar: React.FC = () => {
  return (
    <>
      <Container>
        <CodeIcon />
        <SunIconDarkTheme />
        <h2>maganezf</h2>
      </Container>
    </>
  );
};

export default HeaderBar;
