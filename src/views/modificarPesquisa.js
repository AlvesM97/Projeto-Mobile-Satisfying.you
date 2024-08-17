import React, { useState } from 'react';
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
import { initializeFirestore, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { app, storage } from '../firebase/config'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';

const ModificarPesquisa = ({ route, navigation }) => {
  const { evento } = route.params;
  const [selectedDate, setSelectedDate] = useState(() => {
    const [day, month, year] = evento.dataPesquisa.split('/');
    return new Date(year, month - 1, day);
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [nome, setNome] = useState(evento.nome);
  const [imageUrl, setImageUrl] = useState(evento.imageUrl)
  const [imagemUri, setImagemUri] = useState(null);

  const db = initializeFirestore(app, { experimentalForceLongPolling: true })

  const capturarImagem = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then((result) => {
        if (!result.didCancel && !result.errorCode) {
          setImagemUri(result.assets[0].uri);
          console.log("Deu bom ao capturar imagem: " + JSON.stringify(result));
        }
      })
      .catch((error) => {
        console.log("Erro ao capturar imagem: " + JSON.stringify(error));
      });
  }

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handlePut = async () => {

    const timestamp = Date.now();
    const imageName = `${nome}_${timestamp}.jpeg`;

    const imagemRef = ref(storage, imageName)

    const file = await fetch(imagemUri)
    const blob = await file.blob()

    uploadBytes(imagemRef, blob, { contentType: 'image/jpeg' })
      .then(() => {
        console.log("Imagem cadastrada.")
        getDownloadURL(imagemRef)
          .then((url) => {

            const docRef = doc(db, "pesquisas", evento.id);
            const docPesquisa = {
              dataPesquisa: selectedDate.toLocaleDateString('pt-BR'),
              nome: nome,
              imageUrl: url
            };

            updateDoc(docRef, docPesquisa)
              .then(() => {
                console.log("Pesquisa modificada com sucesso.");
                navigation.goBack();
                navigation.goBack();
              })
              .catch((error) => {
                console.log("Erro", error);
              });
          })
          .catch((error) => {
            console.log("Ocorreu um erro", error)
          })
      }).catch((error) => {
        console.log("Ocorreu um erro", error)
      })
  };

  const handleDelete = () => {
    const docRef = doc(db, "pesquisas", evento.id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Pesquisa deletada com sucesso.");
        navigation.goBack();
        navigation.goBack();
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          value={nome}
          style={styles.input}
          onChangeText={setNome}
        />

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
          {imageUrl ? (
            <Image source={{ uri: imageUrl }} style={styles.image} />
          ) : (
            <Text style={styles.imageInput}>Câmera/Galeria de imagens</Text>
          )}
        </TouchableOpacity>


        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.background}
            onPress={() => handlePut()}>
            <Text style={styles.text}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
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
  calendarIcon: {
    marginLeft: 10,
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
