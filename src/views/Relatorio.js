import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
        <View style={styles.legendContainer}>
          {data.reverse().map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={[styles.legendColor, {backgroundColor: item.color}]}
              />
              <Text style={styles.legendText}>{item.label}</Text>
            </View>
          ))}
        </View>
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
  legendContainer: {
    marginLeft: 40,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendColor: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  legendText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
  },
});

//EXPORTAÇÃO
export default Relatorio;
