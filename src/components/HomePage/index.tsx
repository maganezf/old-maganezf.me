import { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  children?: ReactNode;
}

const HomePage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home | Maganez</title>
      </Head>

      {children}
    </>
  );
};

export default HomePage;
