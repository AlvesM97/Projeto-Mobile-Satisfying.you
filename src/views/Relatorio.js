import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import PureChart from 'react-native-pure-chart';

const Relatorio = () => {
  const data = [
    {label: 'Péssimo', value: 20, color: '#53D8D8'},
    {label: 'Ruim', value: 20, color: '#EA7288'},
    {label: 'Neutro', value: 15, color: '#5FCDA4'},
    {label: 'Bom', value: 20, color: '#6994FE'},
    {label: 'Excelente', value: 20, color: '#F1CE7E'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <PureChart data={data} type="pie" height={200} />
        <Image
          source={require('../imagens/legendaRelatorio.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 20,
  },
});

//EXPORTAÇÃO
export default Relatorio;
