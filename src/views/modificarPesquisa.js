import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from '../components/Botao';
import DateTimePicker from '@react-native-community/datetimepicker';

const ModificarPesquisa = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <ScrollView>
      {/* Parte superior */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Botão de volta pressionado')} style={styles.iconBack}>
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
        <TouchableOpacity style={styles.dateInputContainer} onPress={toggleDatePicker}>
          <Text style={styles.input} numberOfLines={1} ellipsizeMode="tail">{selectedDate.toLocaleDateString('pt-BR')}</Text>
          <Icon
            name='calendar-month'
            color='#B0CCDE'
            size={24}
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        <Text style={styles.label}>Imagem</Text>
        <View style={styles.imageContainer}>
          <Text>Ícone de Imagem</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Botao texto="SALVAR" onPress={() => console.log('Salvar pressionado')} />
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={() => console.log('Apagar pressionado')}>
          <Icon name="delete" size={24} color="white" style={styles.deleteIcon} />
          <Text style={styles.deleteText}>Apagar</Text>
        </TouchableOpacity>
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
    fontSize: 26,
    marginLeft: 10,
  },
  container: {
    paddingTop: 5,
    paddingBottom: 20,
    paddingHorizontal: 150,
    backgroundColor: '#372775',
  },
  label: {
    color: 'white',
    marginTop: 20,
    fontSize: 18,
  },
  input: {
    fontSize: 20,
    backgroundColor: 'white',
    height: 45,
    flex: 1,
    color: "#3F92C5",
    textAlignVertical: 'center',
    paddingStart: 10,
  },
  dateInputContainer: {
    paddingEnd: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: "white"
  },
  calendarIcon: {
    marginLeft: 10,
  },
  imageContainer: {
    height: 80,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: "50%"
  },
  iconBack: {
    marginEnd: 15
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    marginTop: 20,
  },
  deleteButton: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingBottom: 20,
    paddingRight: 20,
  },
  deleteIcon: {
    marginLeft: 5,
  },
  deleteText: {
    color: 'white',
  },
});

export default ModificarPesquisa;
