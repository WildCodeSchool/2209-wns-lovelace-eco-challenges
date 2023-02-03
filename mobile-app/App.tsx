import { StyleSheet, View } from 'react-native';
import Signin from './src/Pages/Auth/Signin';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Signup from './src/Pages/Auth/Signup';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const client = new ApolloClient({
  uri: "http://192.168.1.8:4000/",
  cache: new InMemoryCache()
})

const Tab = createBottomTabNavigator()

export default function App() {
  return (
      <ApolloProvider client={client}>
        <Signup/>
      </ApolloProvider>
  );
}