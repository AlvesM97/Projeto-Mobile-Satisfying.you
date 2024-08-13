import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';



const NewAccountSection = () => {
  const navigation = useNavigation();
  const [novoEmail, setNovoEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [repetSenha, setRepetSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');




  const cadastrarUsuario = () => {
    createUserWithEmailAndPassword(auth_mod, novoEmail, novaSenha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso: " + userCredential);
    
        navigation.navigate('Login'); // Navega para a tela 'Home' após o sucesso
      })
      .catch((error) => {
        console.log("Erro ao criar usuário: " + error);
      });
  };

  const checarSenhas = () => {
    if (novaSenha !== repetSenha) {
      setErroSenha('O campo repetir senha difere da senha');
    } else {
      setErroSenha('');
    }
  };

  const validarEmail = email => {
    if (!email.includes('@')) {
      setErroEmail('E-mail inválido');
    } else {
      setErroEmail('');
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

      <TouchableOpacity style={styles.createButton} onPress={cadastrarUsuario}>
        <Text style={styles.textButton}>CADASTRAR</Text>
      </TouchableOpacity>

      {!!erroSenha && <Text style={styles.mensagemErro}>{erroSenha}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 20,
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
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '70%',
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