import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
 
const popUp = () => {

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Tem certeza de apagar essa pesquisa?</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonSim]}
                onPress={() => setModalVisible(!modalVisible)}> 
                <Text style={styles.textStyle}>SIM</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonCancelar]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>CANCELAR</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Gatilho Pesquisa</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 506,
    height: 253,
    margin: 20,
    backgroundColor: '#2B1F5C',
    borderRadius: 0,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: 216,
    height: 71,
    borderRadius: 0,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonSim: {
    backgroundColor: '#FF8383',
  },
  buttonCancelar: {
    backgroundColor: '#3F92C5',
  },
  textStyle: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
    textAlign: 'center',
  },
  modalText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 30,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default popUp;
