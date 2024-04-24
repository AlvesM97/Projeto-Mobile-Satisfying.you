import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const CreateButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.textButton}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  createButton: {
    backgroundColor: '#3CB371',
    padding: 3,
    marginTop: 20,
    marginLeft: 118,
    marginRight: 118,
  },

  textButton: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 17,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default CreateButton;
