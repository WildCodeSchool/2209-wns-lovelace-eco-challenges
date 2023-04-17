import '@styles/globals.css'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Header from "@shared/Header/Header";
import Footer from "@shared/Footer/Footer";

const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
  cache: new InMemoryCache(),
});

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;
  return (
    <ApolloProvider client={ client }>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
};

export default appWithTranslation(App);