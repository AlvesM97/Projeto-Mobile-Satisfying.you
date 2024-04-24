//IMPORTAÇÃO
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import NewAccountSection from '../components/NewAccountSection';
import CreateButton from '../components/CreateButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
 
//DEFINIÇÃO
const NovaConta = () => {
  return (
    <View style={styles.viewPrincipal}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => console.log('Botão de volta pressionado')}
          style={styles.iconBack}>
          <Icon name="arrow-back" size={40} color="#573FBA" />
        </TouchableOpacity>
        <Text style={styles.title}>Nova Conta</Text>
      </View>

      <View style={styles.viewInputs}>
        <NewAccountSection></NewAccountSection>
      </View>

      <View style={styles.viewBotao}>
        <CreateButton></CreateButton>
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
  viewInputs: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  viewBotao: {
    flexDirection: 'column',
    paddingBottom: 10,
  },
});

//EXPORTAÇÃO
export default NovaConta;
