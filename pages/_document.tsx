import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/logo.png" />
          <link rel="shortcut icon" href="/logo.png" />
          <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-LXN5PBR34H"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; 
                function gtag() {
                  dataLayer.push(arguments)
                };
                gtag('js', new Date());
                gtag('config', 'G-LXN5PBR34H');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
