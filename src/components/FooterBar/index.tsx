import React from 'react';
import Link from 'next/link';

import { Container, LineSeparator } from './styles';

const FooterBar: React.FC = () => {
  return (
    <Container>
      <Link href="/projects" aria-label="Go to Projects Page">
        <button>Projects</button>
      </Link>

      <LineSeparator />

      <Link href="/contact" aria-label="Go to Contact Page">
        <button>Contact</button>
      </Link>
    </Container>
  );
};

export default FooterBar;
