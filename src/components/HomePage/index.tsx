import React, { ReactNode } from 'react';
import Head from 'next/head';

import GlobalStyles from '../../styles/GlobalStyles';

interface Props {
  children?: ReactNode;
}

const HomePage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home Page | @maganezf</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#101D42" />
        <link
          rel="shortcut icon"
          href="https://www.flaticon.com/svg/vstatic/svg/1005/1005141.svg?token=exp=1611322239~hmac=aa3efe179e70aebd6516934cf0628479"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
        </style>
      </Head>

      <GlobalStyles />
      {children}
    </>
  );
};

export default HomePage;
