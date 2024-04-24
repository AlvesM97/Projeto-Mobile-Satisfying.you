import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Botao from '../components/Botao';
import { useNavigation } from '@react-navigation/native';

export default function NovaPesquisa() {

  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [nomeError, setNomeError] = useState('');
  const [dataError, setDataError] = useState('');
  const navigation = useNavigation();

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
      setData(selectedDate.toLocaleDateString('pt-BR'));
      setDataError('');
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const validateData = () => {
    if (!nome.trim()) {
      setNomeError('Nome não pode ser vazio.');
      return false;
    } else {
      setNomeError('');
    }

    if (!data) {
      setDataError('Data não pode ser vazia.');
      return false;
    } else {
      setDataError('');
    }

    return true;
  };

  const handleSave = () => {
    if (validateData()) {
      navigation.navigate('Modificar Pesquisa');
      Alert.alert('Validação', 'Dados válidos!');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.nameSubContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            value={nome}
            onChangeText={setNome}
            style={styles.input}
            onBlur={validateData}
          />
          {nomeError ? <Text style={styles.errorText}>{nomeError}</Text> : null}
        </View>

        <Text style={styles.label}>Data</Text>
        <TouchableOpacity style={styles.dateInputContainer} onPress={toggleDatePicker}>
          <Text style={styles.input} numberOfLines={1} ellipsizeMode="tail">{data || 'dd/mm/yyyy'}</Text>
          <Icon name='calendar-month' color='#B0CCDE' size={24} />
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
        {dataError ? <Text style={styles.errorText}>{dataError}</Text> : null}

        <Text style={styles.label}>Imagem</Text>
        <View style={styles.imageContainer}>
          <TextInput
            style={styles.imageInput}
            multiline
            numberOfLines={4}
            placeholder="Câmera/Galeria de imagens"
          />
        </View>

        <View style={styles.buttonsContainer}>
          <Botao texto="CADASTRAR" onPress={() => handleSave()} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 15,
    backgroundColor: 'white',
    height: 30,
    flex: 1,
    color: "#3F92C5",
    textAlignVertical: 'center',
    paddingStart: 10,
    padding: 2,
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
  image: {
    height: 70,
    width: 70,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 14
  },
});
