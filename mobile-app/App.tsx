import { StyleSheet, View } from 'react-native';
import Signin from './src/Pages/Auth/Signin';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Signup from './src/Pages/Auth/Signup';


const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
})


export default function App() {
  return (
    <View style={styles.container}>
      <ApolloProvider client={client}>
        <Signup/>
      </ApolloProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:24,
    justifyContent:'center'
  },
});
