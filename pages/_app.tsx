import React, { ReactElement } from 'react'
import { AppInitialProps } from 'next/dist/pages/_app'

import NextApp from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withApollo from 'next-with-apollo'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'

const endpoint =
  'https://mechanical-keyboard-shop.myshopify.com/api/2020-01/graphql.json'
const accessToken = 'e70a4afc72a3aa7d7ea51bd894d0b0f9'

function App ({ Component, apollo, pageProps }): ReactElement {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

App.getInitialProps = async (appContext): Promise<AppInitialProps> => {
  const appProps = await NextApp.getInitialProps(appContext)

  return { ...appProps }
}

export default withApollo(({ initialState, headers }) => {
  return new ApolloClient({
    link: createHttpLink({
      uri: endpoint,
      headers: {
        ...headers,
        'X-Shopify-Storefront-Access-Token': accessToken,
      },
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  })
})(App)
