import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './src/views/home';
import acoesPesquisa from './src/views/acoesPesquisa';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2B1D62', // Define a cor do cabeçalho
          },
          headerTintColor: '#fff', // Define a cor dos elementos do cabeçalho
          headerTitleStyle: {
            fontSize: 35,
            fontFamily: 'AveriaLibre-Regular',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: '', // Define o título do cabeçalho como uma string vazia para ocultar
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  /* Implemente a ação do menu aqui */
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
            headerTitle: 'Carnaval', // Define o título do cabeçalho como uma string vazia para ocultar
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  /* Implemente a ação do menu aqui */
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  styleIcon: {
    paddingLeft: 20,
  },
});

export default App;
