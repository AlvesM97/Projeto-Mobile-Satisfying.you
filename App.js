/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//Importação
import React from 'react';
import { View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'

//Definição
const App = () => {
  return (
    
    <View style={styles.container}>
      
      <Text style={styles.tituloText}>O que você achou do Carnaval 2024?</Text>

      //////////////////////////
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => handleIconPress("Péssimo")}>
          <Icon style={styles.icons} name="mood-bad" size={100} color="#D71616"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress("Ruim")}>
          <Icon style={styles.icons} name="sentiment-dissatisfied" size={100} color="#FF360A"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress("Neutro")}>
          <Icon style={styles.icons} name="sentiment-neutral" size={100} color="#FFC632"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress("Bom")}>
          <Icon style={styles.icons} name="sentiment-satisfied" size={100} color="#37BD6D"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress("Excelente")}>
          <Icon style={styles.icons} name="sentiment-very-satisfied" size={100} color="#25BC22"/>
        </TouchableOpacity>
      </View>
      ///////////////////////////////

      
      <View style={styles.container2}>      
        <Icon style={styles.icons} name="mood-bad" size={100} color="#D71616"/>
        <Icon style={styles.icons} name="sentiment-dissatisfied" size={100} color="#FF360A"/>
        <Icon style={styles.icons} name="sentiment-neutral" size={100} color="#FFC632"/>
        <Icon style={styles.icons} name="sentiment-satisfied" size={100} color="#37BD6D"/>
        <Icon style={styles.icons} name="sentiment-very-satisfied" size={100} color="#25BC22"/>
      </View>
      <View style={styles.container3}>
        <Text style={styles.baseText}>Péssimo</Text>
        <Text style={styles.baseText}>Ruim</Text>
        <Text style={styles.baseText}>Neutro</Text>
        <Text style={styles.baseText}>Bom</Text>
        <Text style={styles.baseText}>Excelente</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775', // Mudar para a cor desejada
  },

  container2:{
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  container3:{
    flexDirection: "row",
    alignSelf: "center",
  },

  tituloText: {
    color: '#ffffff',
    textAlign: "center",
    fontSize: 32,
    marginTop: 50,
    fontFamily: 'AveriaLibre-Bold'
  },

  baseText: {
    color: '#ffffff',
    //textAlign: "center",
    fontSize: 18,
    marginHorizontal: 40,
    //marginTop: 10,
    fontFamily: 'AveriaLibre-Regular'
  },

  icons: {
    marginHorizontal: 15,
  }

  
});


//Exportação
export default App

/*
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Coleta from './src/views/Coleta';



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Coleta/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;*/
