import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Botao from '../components/Botao';

const RecuperarSenha = () => {
  const [email, setEmail] = useState("jurandir.pereira@hotmail.com");
  const [emailValid, setEmailValid] = useState(true);

  const validarEmail = (text) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(regex.test(text));
  };

  return (
    <View>
      

      <View style={styles.container}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            validarEmail(text);
          }}
          style={[styles.input, !emailValid && styles.invalidInput]}
        />
        {!emailValid && <Text style={styles.labelWarning}>E-mail parece ser inválido</Text>}

        <View style={styles.buttonsContainer}>
          <Botao texto="RECUPERAR" onPress={() => console.log('Salvar pressionado')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B1D62',
    padding: 15,
  },
  title: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 26,
    color: 'white',
    marginLeft: 10,
  },
  container: {
    height: 500,
    paddingTop: 35,
    backgroundColor: '#372775',
    paddingHorizontal: 173,
  },
  label: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    color: 'white',
    marginTop: 20,
  },
  labelWarning: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 18,
  },
  input: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    backgroundColor: 'white',
    height: 45,
    width: 460,
    color: "#3F92C5",
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 5,
  },
  invalidInput: {
    borderColor: '#FD7979',
    borderWidth: 2,
  },
  iconBack: {
    marginEnd: 15
  },
  buttonsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default RecuperarSenha;
