import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Coleta = ({navigation}) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    
    if (visible) {
  
      const timer = setTimeout(() => {
        navigation.goBack();
        setVisible(false);
      }, 3000);

      
      

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleButtonPress = () => {
    setVisible(true);
  };

  return (

    <View style={styles.container}>
      
      <Text style={styles.tituloText}>O que você achou do Carnaval 2024?</Text>
      
      <View style={styles.container2}>   

        <TouchableOpacity onPress={()=> handleButtonPress()}>
        <Icon style={styles.icons} name="mood-bad" size={100} color="#D71616"/>
        </TouchableOpacity>   
        <TouchableOpacity onPress={()=> handleButtonPress()}>
        <Icon style={styles.icons} name="sentiment-dissatisfied" size={100} color="#FF360A"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> handleButtonPress()}>
        <Icon style={styles.icons} name="sentiment-neutral" size={100} color="#FFC632"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> handleButtonPress()}>
        <Icon style={styles.icons} name="sentiment-satisfied" size={100} color="#37BD6D"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> handleButtonPress()}>
        <Icon style={styles.icons} name="sentiment-very-satisfied" size={100} color="#25BC22"/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.container3}>
        <Text style={styles.baseText}>Péssimo</Text>
        <Text style={styles.baseText}>Ruim</Text>
        <Text style={styles.baseText}>Neutro</Text>
        <Text style={styles.baseText}>Bom</Text>
        <Text style={styles.baseText}>Excelente</Text>
      </View>
      
      {visible && (
        <View style={styles.overlay}>
          <Text style={styles.tituloText}>Obrigado por participar da pesquisa!{'\n'}</Text>
          <Text style={styles.tituloText}>Aguardamos você no próximo ano!</Text>
        </View>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: 'AveriaLibre-Bold'
  },

  baseText: {
    color: '#ffffff',
    fontSize: 18,
    marginHorizontal: 40,
    fontFamily: 'AveriaLibre-Regular'
  },

  icons: {
    marginHorizontal: 15,
  },


  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default Coleta
