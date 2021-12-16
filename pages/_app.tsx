import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { MainWrapper } from '../components/common'
import { Navbar } from '../components/Navbar'
import Theme from '../Theme'
const client = new ApolloClient({
  cache: new InMemoryCache({}),
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Theme>
        <Navbar />
        <MainWrapper>
          <Component {...pageProps} />
        </MainWrapper>
      </Theme>
    </ApolloProvider>
  )
}

export default MyApp
