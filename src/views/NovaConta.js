//IMPORTAÇÃO
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NewAccountSection from '../components/NewAccountSection';
import CreateButton from '../components/CreateButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

//DEFINIÇÃO
const NovaConta = () => {
  return (
    <View style={styles.viewPrincipal}>

      <View style={styles.viewInputs}>
        <NewAccountSection />
        <CreateButton />
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
});

//EXPORTAÇÃO
export default NovaConta;
