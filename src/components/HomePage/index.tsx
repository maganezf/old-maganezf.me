import React, { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  children?: ReactNode;
}

const HomePage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <html lang="en, pt-br" />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#101D42" />
        <meta property="og:locale" content="en, pt-br" />
        <meta property="og:site_name" content="Maganez" />

        {/* Primary Meta Tags  */}
        <title>Home | Maganez</title>

        <meta name="title" content="Maganez - Website" />
        <meta
          name="description"
          content="Hello World! This is my personal website/portfolio."
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="Personal Website" />
        {/* configure this metadata link with main link my website  */}
        {/* <meta property="og:url" content="https://maganezf.netlify.app"/> */}
        <meta property="og:title" content="Maganez - Website" />
        <meta
          property="og:description"
          content="Hello World! This is my personal website/portfolio."
        />
        <meta property="og:image" content="https://svgshare.com/i/U7z.svg" />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://maganezf.netlify.app" />
        <meta property="twitter:title" content="Maganez - Website" />
        <meta
          property="twitter:description"
          content="Hello World! This is my personal website/portfolio."
        />
        <meta
          property="twitter:image"
          content="https://svgshare.com/i/U7z.svg"
        />

        <link
          rel="shortcut icon"
          href="https://svgshare.com/i/U7z.svg"
          title="developer"
        />
        <link
          rel="apple-touch-icon"
          href="https://svgshare.com/i/U7z.svg"
          sizes="180x180"
          title="developer"
        />
        {/* configure canonical link with main link my website  */}
        {/* <link rel="canonical" href="https://maganezf.netlify.app" /> */}
        <style>
          {/* Font Poppins 300, 400, 700 */}
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
        </style>
      </Head>

      {children}
    </>
  );
};

export default HomePage;
