import type { AppProps } from 'next/app'
import Head from 'next/head'
import { UserProvider } from '../context/user'
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
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
}

export default MyApp
