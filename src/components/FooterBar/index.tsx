import Link from 'next/link';
import React from 'react';

import { Container, LineSeparator } from './styles';

const FooterBar: React.FC = () => {
  return (
    <Container>
      <Link href="/projects" aria-label="Go to Projects Page">
        Projects
      </Link>

      <LineSeparator />

      <Link href="/contact" aria-label="Go to Contact Page">
        Contact
      </Link>
    </Container>
  );
};

export default FooterBar;
