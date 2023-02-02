import PersoScreen from './src/Screens/Perso/PersoScreen'
import ProfilScreen from './src/Screens/Profil/ProfilScreen'
import Header from './src/Screens/Perso/Shared/Header/Header';
import MyChallengeScreen from './src/Screens/MyChallenge/MyChallengeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Perso") {
              iconName = focused ? "camera" : "camera-outline";
            } else if (route.name === "Profil") {
              iconName = focused ? "image" : "image-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Perso" component={PersoScreen} />
        <Stack.Screen name="MyChallenge" component={MyChallengeScreen} />
        <Tab.Screen name="Profil" component={ProfilScreen} options={{ unmountOnBlur: true }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}