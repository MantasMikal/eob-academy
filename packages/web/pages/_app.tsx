import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalMeta from '@/components/Meta/Global'
import SmartLink from '@/components/Primitive/SmartLink'

function MyApp({ Component, pageProps }: AppProps) {
  const isPreview = pageProps?.preview === true
  return (
    <>
      {isPreview && (
        <div className="z-10 fixed bottom-0 w-full bg-blue-600">
          <div className="container-lg text-sm py-1 text-white">
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
      <GlobalMeta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
