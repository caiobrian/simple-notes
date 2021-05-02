import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Simple Notes</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cutive&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Simple Notes" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
