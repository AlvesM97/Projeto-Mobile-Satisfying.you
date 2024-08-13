import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth_mod } from "../firebase/config";

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const navigation = useNavigation(); // Obtém o objeto de navegação

  const validarEmail = (text) => {
    const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    setEmailValid(regex.test(text));
  };

  const recoverPassword = () => {
    sendPasswordResetEmail(auth_mod, email)
      .then(() => {
        console.log('E-mail de redefinição enviado com sucesso.');
        navigation.navigate('Login'); // Navega para a tela de Login
      })
      .catch((error) => {
        console.log('Falha ao enviar e-mail de redefinição.') + error;
      });
  }

  return (
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
        <TouchableOpacity style={styles.fundo} onPress={recoverPassword}>
          <Text style={styles.texto}>Recuperar</Text>
        </TouchableOpacity>
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

  fundo: {
    backgroundColor: '#37BD6D',
    width: 502,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 18
  }
});

export default RecuperarSenha;
