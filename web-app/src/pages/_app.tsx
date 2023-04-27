import '@styles/globals.css'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { client } from '@api/apolloClient';

import Header from "@shared/Header/Header";
import Footer from "@shared/Footer/Footer";

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;
  const { locale } = pageProps;

  return (
    <ApolloProvider client={ client }>
      <Header />
        <Component {...pageProps} />
      <Footer locale={locale} />
    </ApolloProvider>
  );
};

export default appWithTranslation(App);