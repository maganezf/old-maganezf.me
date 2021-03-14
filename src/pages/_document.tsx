import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en, pt-br">
        <Head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta name="theme-color" content="#101D42" />
          <meta property="og:locale" content="en, pt-br" />
          <meta property="og:site_name" content="Maganez" />

          {/* Primary Meta Tags*/}
          <meta name="title" content="Maganez - Website" />
          <meta
            name="description"
            content="Hello World! This is my personal website."
          />

          {/* Open Graph / Facebook METADATA */}
          <meta property="og:type" content="Personal Website" />
          <meta property="og:url" content="https://maganezf-me.vercel.app/" />
          <meta property="og:title" content="Maganez - Website" />
          <meta
            property="og:description"
            content="Hello World! This is my personal website."
          />

          <meta property="og:image" content="/metadata-image.png" />

          {/* Twitter METADATA */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://maganezf-me.vercel.app/"
          />
          <meta property="twitter:title" content="Maganez - Website" />
          <meta
            property="twitter:description"
            content="Hello World! This is my personal website."
          />

          <meta property="twitter:image" content="/metadata-image.png" />

          <link rel="shortcut icon" href="/favicon.svg" title="favicon" />

          <link
            rel="apple-touch-icon"
            href="/favicon.svg"
            sizes="180x180"
            title="favicon"
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap"
            rel="stylesheet"
          />

          <link rel="canonical" href="https://maganezf-me.vercel.app/" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
