import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {sendPasswordResetEmail} from 'firebase/auth';
import {auth_mod} from '../firebase/config';

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);

  const validarEmail = text => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(regex.test(text));
  };

  const mapFirebaseAuthError = errorCode => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'O e-mail fornecido é inválido. Por favor, insira um e-mail válido.';
      case 'auth/user-not-found':
        return 'Se o e-mail estiver registrado, você receberá uma mensagem em breve.';
      case 'auth/network-request-failed':
        return 'Falha de conexão. Verifique sua internet e tente novamente.';
      default:
        return 'Ocorreu um erro ao tentar enviar o e-mail de redefinição. Tente novamente mais tarde.';
    }
  };

  const recoverPassword = () => {
    if (!emailValid) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.', [
        {text: 'OK'},
      ]);
      return;
    }

    sendPasswordResetEmail(auth_mod, email)
      .then(() => {
        Alert.alert(
          'E-mail Enviado',
          'Se o e-mail estiver registrado, você receberá uma mensagem em breve.',
          [{text: 'OK', onPress: () => setEmail('')}],
        );
      })
      .catch(error => {
        const errorMessage = mapFirebaseAuthError(error.code);
        Alert.alert('Erro', errorMessage, [{text: 'OK'}]);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        value={email}
        onChangeText={text => {
          setEmail(text);
          validarEmail(text);
        }}
        style={[styles.input, !emailValid && styles.invalidInput]}
      />
      {!emailValid && (
        <Text style={styles.labelWarning}>E-mail parece ser inválido</Text>
      )}

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.fundo} onPress={recoverPassword}>
          <Text style={styles.texto}>RECUPERAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  label: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    marginRight: 450,
  },
  labelWarning: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 18,
    marginRight: 290,
  },
  input: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    backgroundColor: 'white',
    height: 38,
    width: 502,
    color: '#3F92C5',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 5,
  },
  invalidInput: {
    borderColor: '#FD7979',
    borderWidth: 2,
  },
  iconBack: {
    marginEnd: 15,
  },
  buttonsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  fundo: {
    backgroundColor: '#37BD6D',
    width: 502,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default RecuperarSenha;
