import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const isServerSide = typeof window === "undefined";

export const client = new ApolloClient({
  ssrMode: isServerSide,
  link: createHttpLink({
    uri: isServerSide ? serverRuntimeConfig.apiUrl : publicRuntimeConfig.apiUrl
  }),
  cache: new InMemoryCache(),
});
