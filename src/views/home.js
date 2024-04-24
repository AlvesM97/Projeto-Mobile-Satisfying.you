import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Seção de busca */}
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" size={25} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Insira o termo de busca..."
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Container dos cartões em uma única linha */}
      <View style={styles.cardContainer}>
        {[
          {
            nome: 'SECOMP 2023',
            data: '10/10/2023',
            imagem: require('../imagens/secomp.png'),
          },
          {
            nome: 'UBUNTU 2022',
            data: '05/06/2022',
            imagem: require('../imagens/ubunto.png'),
          },
          {
            nome: 'MENINAS CPU',
            data: '01/04/2022',
            imagem: require('../imagens/meninas.png'),
          },
        ].map((evento, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate('AcoesPesquisa')}>
            <Image source={evento.imagem} style={styles.cardImage}/>
            <Text style={styles.cardText}>{evento.nome}</Text>
            <Text style={styles.cardDate}>{evento.data}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botão 'Nova Pesquisa' */}
      <TouchableOpacity style={styles.newSearchButton}>
        <Text style={styles.newSearchButtonText}>Nova Pesquisa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    paddingHorizontal: 10,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
    width: 25,
    height: 25,
  },
  searchInput: {
    fontSize: 15,
    backgroundColor: 'white',
    height: 30,
    flex: 1,
    color: '#3F92C5',
    textAlignVertical: 'center',
    paddingStart: 10,
    padding: 2,
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingBottom: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 240,
    height: 140,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5E4DB2',
    marginTop: 0,
  },
  cardDate: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  newSearchButton: {
    backgroundColor: '#37BD6D',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  newSearchButtonText: {
    fontSize: 18,
    color: '#fff',
    paddingRight: 22,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Home;
