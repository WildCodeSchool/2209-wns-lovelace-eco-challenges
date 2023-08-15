import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const isServerSide = typeof window === "undefined";

export const client = new ApolloClient({
  ssrMode: isServerSide,
  link: createHttpLink({
    uri: isServerSide ? serverRuntimeConfig.apiUrl : publicRuntimeConfig.apiUrl, fetch
  }),
  /* ...(isServerSide && {
    headers: {
      cookie: new URLSearchParams(cookies).toString(),
      "User-Agent": `Next.js for ${userAgent}`,
    },
  }), */  
  cache: new InMemoryCache(),
});
