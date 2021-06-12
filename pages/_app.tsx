import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '@/utils/client'
import '@/styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
