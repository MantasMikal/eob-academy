import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalMeta from '@/components/Meta/Global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalMeta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
