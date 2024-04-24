import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import DetailsScreen from './src/views/DetailsScreen';
import Login from './src/views/Login'
import Drawer from './src/views/Drawer'
import ModificarPesquisa from './src/views/ModificarPesquisa';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2B1D62',
          },
          headerTintColor: '#573FBA',
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
        <Stack.Screen name="NovaPesquisa" component={DetailsScreen} options={{ headerTitleStyle: { color: "white" } }} />
        <Stack.Screen name="Modificar Pesquisa" component={ModificarPesquisa} options={{ headerTitleStyle: { color: "white" } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

