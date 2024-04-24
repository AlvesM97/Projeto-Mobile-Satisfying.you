import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import DetailsScreen from './src/views/DetailsScreen';
import Login from './src/views/Login'
import Drawer from './src/views/Drawer'
import ModificarPesquisa from './src/views/ModificarPesquisa';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './src/views/home';
import acoesPesquisa from './src/views/acoesPesquisa';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2B1D62',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 35,
            fontFamily: 'AveriaLibre-Regular',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                 
                }}>
                <Icon
                  style={styles.styleIcon}
                  name="menu"
                  size={40}
                  color="#fff"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="acoesPesquisa"
          component={acoesPesquisa}
          options={{
            headerTitle: 'Carnaval',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                }}>
                <Icon
                  style={styles.styleIcon}
                  name="arrow-back"
                  size={40}
                  color="#573FBA"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
        <Stack.Screen name="NovaPesquisa" component={DetailsScreen} options={{ headerTitleStyle: { color: "white" } }} />
        <Stack.Screen name="Modificar Pesquisa" component={ModificarPesquisa} options={{ headerTitleStyle: { color: "white" } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

