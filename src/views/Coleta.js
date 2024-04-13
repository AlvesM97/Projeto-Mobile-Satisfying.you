//Importação
import React from 'react';
import { View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'

//Definição
const Coleta = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.tituloText}>O que você achou do Carnaval 2024?</Text>

      <View style={styles.container2}>
        <Icon style={styles.icons} name="mood-bad" size={50} color="#D71616"/>
        <Icon style={styles.icons} name="sentiment-dissatisfied" size={50} color="#FF360A"/>
        <Icon style={styles.icons} name="sentiment-neutral" size={50} color="#FFC632"/>
        <Icon style={styles.icons} name="sentiment-satisfied" size={50} color="#37BD6D"/>
        <Icon style={styles.icons} name="sentiment-very-satisfied" size={50} color="#25BC22"/>
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
    fontSize: 24,
    marginTop: 250,
    fontFamily: 'AveriaLibre-Bold'
  },

  baseText: {
    color: '#ffffff',
    //textAlign: "center",
    fontSize: 18,
    marginHorizontal: 10,
    //marginTop: 10,
    fontFamily: 'AveriaLibre-Regular'
  },

  icons: {
    marginHorizontal: 10,
  }

  
});


//Exportação
export default Coleta