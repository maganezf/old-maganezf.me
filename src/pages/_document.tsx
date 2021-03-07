import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en, pt-br">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, viewport-fit=cover"
          />

          <meta name="theme-color" content="#101D42" />
          <meta property="og:locale" content="en, pt-br" />
          <meta property="og:site_name" content="Maganez" />

          {/* Primary Meta Tags  */}
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

          <meta property="og:image" content="/favicon.svg" />
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

          <meta property="twitter:image" content="/favicon.svg" />

          <link rel="shortcut icon" href="/favicon.svg" title="favicon" />

          <link
            rel="apple-touch-icon"
            href="/favicon.svg"
            sizes="180x180"
            title="favicon"
          />

          {/* Poppins Font | Weights: 300, 400, 700 */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap"
            rel="stylesheet"
          />

          {/* configure canonical link with main link my website  */}
          {/* <link rel="canonical" href="https://maganezf.netlify.app" /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
