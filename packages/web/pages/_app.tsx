import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalMeta from '@/components/Meta/Global'
import SmartLink from '@/components/Primitive/SmartLink'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const isPreview = pageProps?.preview === true
  return (
    <>
      {isPreview && (
        <div className="fixed bottom-0 z-10 w-full bg-blue-600">
          <div className="py-1 text-sm text-white container-lg">
            You&apos;re watching a preview.{' '}
            <SmartLink
              prefetch={false}
              className="underline"
              href="/api/exit-preview"
            >
              Exit preview mode
            </SmartLink>
          </div>
        </div>
      )}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JYZX6M1Y83"
      />
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
      />
      <GlobalMeta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
