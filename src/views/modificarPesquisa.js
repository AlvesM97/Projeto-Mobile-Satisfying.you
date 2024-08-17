import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera} from 'react-native-image-picker'; 

const ModificarPesquisa = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [imagemUri, setImagemUri] = useState(null); 

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleBackViews = () => {
    navigation.goBack();
    navigation.goBack();
  };

  const capturarImagem = () => {
    launchCamera({mediaType: 'photo', cameraType: 'back', quality: 1})
      .then((result) => {
        if (!result.didCancel && !result.errorCode) {
          setImagemUri(result.assets[0].uri); 
        }
      })
      .catch((error) => {
        console.log("Erro ao capturar imagem: " + JSON.stringify(error));
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <TextInput value="Carnaval 2024" style={styles.input} />

        <Text style={styles.label}>Data</Text>
        <TouchableOpacity
          style={styles.dateInputContainer}
          onPress={toggleDatePicker}>
          <Text style={styles.input} numberOfLines={1} ellipsizeMode="tail">
            {selectedDate.toLocaleDateString('pt-BR')}
          </Text>
          <Icon name="calendar-month" color="#B0CCDE" size={24} />
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
        <TouchableOpacity style={styles.imageContainer} onPress={capturarImagem}>
          {imagemUri ? (
            <Image source={{ uri: imagemUri }} style={styles.image} />
          ) : (
            <Text style={styles.imageInput}>Imagem do Projeto</Text>
          )}
        </TouchableOpacity>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.background}
            onPress={handleBackViews}>
            <Text style={styles.text}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.deleteButton}>
          <Icon
            name="delete"
            size={24}
            color="white"
            style={styles.deleteIcon}
          />
          <Text style={styles.deleteText}>Apagar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

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
    fontFamily: 'AveriaLibre-Regular',
  },
  input: {
    fontSize: 15,
    backgroundColor: 'white',
    height: 30,
    flex: 1,
    color: '#3F92C5',
    textAlignVertical: 'center',
    paddingStart: 10,
    padding: 2,
    fontFamily: 'AveriaLibre-Regular',
  },
  dateInputContainer: {
    paddingEnd: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 80,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
  },
  imageInput: {
    fontSize: 15,
    color: "#3F92C5",
    textAlignVertical: 'center',
    padding: 2,
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
    fontFamily: 'AveriaLibre-Regular',
  },
  background: {
    backgroundColor: '#37BD6D',
    width: 502,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default ModificarPesquisa;
