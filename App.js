import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NovaConta from './src/views/NovaConta';
import Relatorio from './src/views/Relatorio';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="NovaConta"
          component={NovaConta}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Relatorio"
          component={Relatorio}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
