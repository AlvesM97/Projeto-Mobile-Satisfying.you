import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NovaPesquisa from './src/views/NovaPesquisa';
import Login from './src/views/Login'
import Drawer from './src/views/Drawer'
import ModificarPesquisa from './src/views/ModificarPesquisa';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './src/views/home';
import AcoesPesquisa from './src/views/AcoesPesquisa';
import NovaConta from './src/views/NovaConta';
import Coleta from './src/views/Coleta';
import Relatorio from './src/views/Relatorio';
import RecuperarSenha from './src/views/RecuperarSenha';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2B1D62'
          },
          headerTintColor: '#573FBA',
          headerTitleStyle: {
            fontSize: 35,
            fontFamily: 'AveriaLibre-Regular',
          },
        }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
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
                  name="menu"
                  size={40}
                  color="#fff"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="AcoesPesquisa"
          component={AcoesPesquisa}
          options={{
            headerTitle: 'Carnaval',
            headerTitleStyle: { color: "white", fontFamily: 'AveriaLibre-Regular' }
          }}
        />
        <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
        <Stack.Screen name="Nova Conta" component={NovaConta} options={{ headerTitleStyle: { color: "white", fontFamily: 'AveriaLibre-Regular' } }} />
        <Stack.Screen name="Nova Pesquisa" component={NovaPesquisa} options={{ headerTitleStyle: { color: "white", fontFamily: 'AveriaLibre-Regular' } }} />
        <Stack.Screen name="Modificar Pesquisa" component={ModificarPesquisa} options={{ headerTitleStyle: { color: "white", fontFamily: 'AveriaLibre-Regular' } }} />
        <Stack.Screen name="Coleta" component={Coleta} options={{ headerTitleStyle: { color: "white", fontFamily: 'AveriaLibre-Regular' } }} />
        <Stack.Screen name="Relatorio" component={Relatorio} options={{title:'Relatório', headerTitleStyle: { color: "white", fontFamily: 'AveriaLibre-Regular' } }} />
        <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} options={{ title: 'Recuperação de Senha', headerTitleStyle: { color: "white", fontFamily: 'AveriaLibre-Regular' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

