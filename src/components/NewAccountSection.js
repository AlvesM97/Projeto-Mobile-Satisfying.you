import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth_mod} from '../firebase/config';
import {useNavigation} from '@react-navigation/native';

const NewAccountSection = () => {
  const navigation = useNavigation();
  const [novoEmail, setNovoEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [repetSenha, setRepetSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');

  const validarEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const mapFirebaseAuthError = errorCode => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'O e-mail fornecido já está em uso. Por favor, use outro e-mail.';
      case 'auth/invalid-email':
        return 'O e-mail fornecido é inválido. Por favor, insira um e-mail válido.';
      case 'auth/operation-not-allowed':
        return 'O cadastro de usuários está desativado temporariamente. Tente novamente mais tarde.';
      case 'auth/weak-password':
        return 'A senha é muito fraca. Por favor, use uma senha mais forte.';
      default:
        return 'Ocorreu um erro ao cadastrar. Tente novamente mais tarde.';
    }
  };

  const cadastrarUsuario = () => {
    if (!validarEmail(novoEmail)) {
      Alert.alert('Erro ao Cadastrar', 'Por favor, insira um e-mail válido.', [
        {text: 'OK'},
      ]);
      return;
    }

    createUserWithEmailAndPassword(auth_mod, novoEmail, novaSenha)
      .then(userCredential => {
        Alert.alert('Cadastro Realizado', 'Usuário criado com sucesso!', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ]);
      })
      .catch(error => {
        const errorMessage = mapFirebaseAuthError(error.code);
        Alert.alert('Erro ao Cadastrar', errorMessage, [{text: 'OK'}]);
      });
  };

  const checarSenhas = () => {
    if (novaSenha !== repetSenha) {
      setErroSenha('O campo repetir senha difere da senha');
    } else {
      setErroSenha('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userCredentialsLabels}>E-mail</Text>
      <TextInput
        placeholder="Exemplo@gmail.com"
        style={styles.userCredentialsInput}
        value={novoEmail}
        onChangeText={text => {
          setNovoEmail(text);
          validarEmail(text);
        }}
      />

      {!!erroEmail && <Text style={styles.mensagemErro}>{erroEmail}</Text>}

      <Text style={styles.userCredentialsLabels}>Senha</Text>
      <TextInput
        placeholder=""
        style={styles.userCredentialsInput}
        value={novaSenha}
        onChangeText={text => setNovaSenha(text)}
        secureTextEntry={true}
        onBlur={checarSenhas}
      />

      <Text style={styles.userCredentialsLabels}>Repetir senha</Text>
      <TextInput
        placeholder=""
        style={styles.userCredentialsInput}
        value={repetSenha}
        onChangeText={text => setRepetSenha(text)}
        secureTextEntry={true}
        onBlur={checarSenhas}
      />

      {!!erroSenha && <Text style={styles.mensagemErro}>{erroSenha}</Text>}

      <TouchableOpacity style={styles.createButton} onPress={cadastrarUsuario}>
        <Text style={styles.textButton}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 70,
    paddingHorizontal: 117,
    backgroundColor: '#372775',
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
    fontFamily: 'AveriaLibre-Regular',
  },

  userCredentialsLabels: {
    color: 'white',
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
  },

  mensagemErro: {
    color: '#FD7979',
    fontSize: 14,
    fontFamily: 'AveriaLibre-Regular',
  },

  createButton: {
    backgroundColor: '#37BD6D',
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: 30,
  },
  textButton: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 17,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default NewAccountSection;
