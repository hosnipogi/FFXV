import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'lib/createEmotionCache'
import Layout from 'components/Layout'
import Providers from 'providers'

import FBMessenger from 'components/FacebookMessenger'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>FFXV</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Providers>
        <Layout>
          <Component {...pageProps} />
          <FBMessenger />
        </Layout>
      </Providers>
    </CacheProvider>
  )
}

export default App
