import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: "http://back-end:4000/api",
    }),
    cache: new InMemoryCache(),
});