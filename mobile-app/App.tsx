import PersoScreen from './src/Screens/Perso/PersoScreen'
import ProfilScreen from './src/Screens/Profil/ProfilScreen'
import Header from './src/Screens/Perso/Shared/Header/Header';
import MyChallengeScreen from './src/Screens/MyChallenge/MyChallengeScreen';
import MyTeamScreen from './src/Screens/MyTeam/MyTeamScreen'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const GRAPHQL_API_URL = 'http://localhost:4000';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const client = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  // const isLoadingComplete = useCachedResources();
  // if (!isLoadingComplete) {
  //   return null;
  // } else {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Header />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Perso") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Profil") {
                iconName = focused ? "people" : "people-outline";
              }
              else if (route.name === "MyChallenge") {
                iconName = focused ? "ribbon" : "ribbon-outline";
              }
              else if (route.name === "MyTeam") {
                iconName = focused ? "american-football" : "american-football-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: "#3B8574",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Perso" component={PersoScreen} />
          <Tab.Screen name="Profil" component={ProfilScreen} options={{ unmountOnBlur: true }} />
          <Stack.Screen name="MyChallenge" component={MyChallengeScreen} />
          <Stack.Screen name="MyTeam" component={MyTeamScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
// }

// function useCachedResources() {
//   throw new Error('Function not implemented.');
// }
