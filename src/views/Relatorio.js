//IMPORTAÇÃO
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
 
//DEFINIÇÃO
const Relatorio = () => {
  return (
    <View style={styles.viewPrincipal}>
      
      <View style={styles.viewSecundaria}>
      <Image
          source={require('../imagens/relatorioGraph.png')}
          style={styles.chart}></Image>
        <Image
          source={require('../imagens/legendaRelatorio.png')}
          style={styles.legend}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B1D62',
    paddingVertical: 20,
    paddingHorizontal: 15,
    height: 75,
  },
  iconBack: {
    marginEnd: 15,
    backgroundColor: '#2B1D62',
    color: '2B1D62',
  },
  title: {
    color: 'white',
    fontSize: 26,
    marginLeft: 10,
    fontFamily: 'AveriaLibre-Regular',
  },
  viewPrincipal: {
    backgroundColor: '#372775',
    flex: 1,
  },
  viewSecundaria: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
  },
  chart: {
    width: '50%',
    height: 250,
    resizeMode: 'contain',
  },
  legend: {
    width: '25%',
    height: 200,
    marginTop: 25,
  },
});

//EXPORTAÇÃO
export default Relatorio;
