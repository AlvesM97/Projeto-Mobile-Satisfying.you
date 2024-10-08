import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth_mod} from '../firebase/config';

const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const autenticar = () => {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Erro', 'E-mail e/ou senha não podem estar vazios.', [
        {text: 'OK'},
      ]);
      return;
    }

    signInWithEmailAndPassword(auth_mod, email, senha)
      .then(userLogged => {
        navigation.navigate('Home');
      })
      .catch(error => {
        const errorMessage = mapFirebaseAuthError(error.code);
        Alert.alert('Erro', errorMessage, [{text: 'OK'}]);
      });
  };

  const mapFirebaseAuthError = errorCode => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'O e-mail fornecido é inválido. Por favor, insira um e-mail válido.';
      case 'auth/user-disabled':
        return 'Esta conta foi desativada. Entre em contato com o suporte.';
      case 'auth/user-not-found':
        return 'Nenhuma conta foi encontrada com este e-mail.';
      case 'auth/wrong-password':
        return 'A senha fornecida está incorreta.';
      case 'auth/network-request-failed':
        return 'Falha de conexão. Verifique sua internet e tente novamente.';
      default:
        return 'Ocorreu um erro ao tentar autenticar. Tente novamente mais tarde.';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userCredentialsLabels}>E-mail</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Exemplo@gmail.com"
        style={styles.userCredentialsInput}
      />

      <Text style={styles.userCredentialsLabels}>Senha</Text>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        placeholder="****"
        secureTextEntry={true}
        style={styles.userCredentialsInput}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.loginButton} onPress={autenticar}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: '#372775',
    paddingTop: 10,
    padding: 20,
    paddingRight: 0,
    paddingLeft: 0,
  },

  loginButton: {
    backgroundColor: '#3CB371',
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },

  textButton: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 17,
  },

  container: {
    backgroundColor: '#372775',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  userCredentialsInput: {
    fontSize: 15,
    backgroundColor: 'white',
    height: 30,
    flex: 1,
    color: '#3F92C5',
    textAlignVertical: 'center',
    paddingStart: 10,
    padding: 2,
  },

  userCredentialsLabels: {
    marginTop: 10,
    fontSize: 15,
    color: '#fff',
  },

  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'left',
  },
});

export default LoginSection;
