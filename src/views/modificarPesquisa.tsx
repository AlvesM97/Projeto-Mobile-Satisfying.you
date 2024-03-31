import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from '../components/Botao';

const ModificarPesquisa: React.FC = () => {
  return (
    <ScrollView>
      {/* Parte superior */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Botão de volta pressionado')}>
          <Icon name='arrow-back' size={40} color="#573FBA" />
        </TouchableOpacity>
        <Text style={styles.title}>Modificar pesquisa</Text>
      </View>

      {/* Parte inferior */}
      <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          value="Carnaval 2024"
          style={styles.input}
        />

        <Text style={styles.label}>Data</Text>
        <TextInput
          value="16/02/2024"
          style={styles.input}
        />

        <Text style={styles.label}>Imagem</Text>
        <View style={styles.imageContainer}>
          <Text>Ícone de Imagem</Text>
        </View>

        <Botao texto="SALVAR" onPress={() => console.log('Salvar pressionado')} />
      </View>
    </ScrollView>
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
    color: 'white',
    fontSize: 24,
    marginLeft: 10,
  },
  container: {
    paddingVertical: 10, 
    paddingHorizontal: 100,
    backgroundColor: '#372775',
  },
  label: {
    color: 'white',
    marginTop: 20,
  },
  input: {
    backgroundColor: '#F0F0F0',
    height: 40,
  },
  imageContainer: {
    height: 40,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModificarPesquisa;