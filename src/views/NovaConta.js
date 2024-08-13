import React from 'react';


import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import NewAccountSection from '../components/NewAccountSection';

const NovaConta = ({navigation}) => {
  const handleCadastro = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.viewPrincipal}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <NewAccountSection />
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPrincipal: {
    backgroundColor: '#372775',
    flex: 1,
  },
  scrollContent: {
    justifyContent: 'center',
    paddingBottom: 20,
    paddingHorizontal: 5,
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

export default NovaConta;