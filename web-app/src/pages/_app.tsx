import "@styles/main.css";

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/client";
import { client } from "@api/apolloClient";

import Header from "@shared/Header/Header";
import Footer from "@shared/Footer/Footer";
import Head from "next/head";

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  return (
    <ApolloProvider client={client}>
      <Head>
        <meta name="description" content="Bienvenue sur Eco Playground. Relevez le challenge !" />
        <title>Eco Playground</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
};

export default appWithTranslation(App);
