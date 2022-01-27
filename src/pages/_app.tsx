import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.09, width=device-width"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
