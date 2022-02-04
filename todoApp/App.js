import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './views/Login';
import { Main } from './views/Main';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen
          name='Home'
          component={Login}
        />
        <Stack.Screen
          name='Main'
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* <Login/> */