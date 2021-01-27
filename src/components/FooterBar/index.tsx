import React from 'react';
import Link from 'next/link';

import { Container, LineSeparator } from './styles';

const FooterBar: React.FC = () => {
  return (
    <Container>
      <Link href="/projects">
        <button>Projects</button>
      </Link>

      <LineSeparator />

      <Link href="/contact">
        <button>Contact me</button>
      </Link>
    </Container>
  );
};

export default FooterBar;
