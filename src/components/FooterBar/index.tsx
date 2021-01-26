import React from 'react';
import Link from 'next/link';

import { Container, LineSeparator } from './styles';

const FooterBar: React.FC = () => {
  return (
    <Container>
      <Link href="/projects">
        <h2>Projects</h2>
      </Link>

      <LineSeparator />

      <Link href="/contacts">
        <h2>Contact me</h2>
      </Link>
    </Container>
  );
};

export default FooterBar;
