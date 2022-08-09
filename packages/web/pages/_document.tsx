import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-JYZX6M1Y83"
      ></Script>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JYZX6M1Y83');
          `
        }}
      ></Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
