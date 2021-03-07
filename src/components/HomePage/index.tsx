import { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const HomePage: React.FC = ({ children, title = 'Home | Maganez' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </>
  );
};

export default HomePage;
