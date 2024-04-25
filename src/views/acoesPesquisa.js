import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const AcoesPesquisa = ({ navigation }) => {
  // Dados dos eventos
  const eventos = [
    {
      nome: 'Modificar',
      imagem: require('../imagens/modificar.png'),
    },
    {
      nome: 'Coletar Dados',
      imagem: require('../imagens/coletarDados.png'),
    },
    {
      nome: 'Relatório',
      imagem: require('../imagens/relatorio.png'),
    },
  ];

  const handleIndex = (index) => {
    if (index === 0) {
      navigation.navigate('Modificar Pesquisa');
    } else if (index === 1) {
       navigation.navigate('Coleta');
    } else if (index === 2) {
        navigation.navigate('Relatorio');
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <View style={styles.cardContainer}>
          {eventos.map((evento, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={() => handleIndex(index)}>
              <Image source={evento.imagem} style={styles.cardImage} />
              <Text style={styles.cardText}>{evento.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#312464',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    width: '30%',
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default AcoesPesquisa;
