import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Botao from '../components/Botao';
import { useNavigation } from '@react-navigation/native';
import { app, storage } from '../firebase/config'
import { initializeFirestore, collection, addDoc } from 'firebase/firestore';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';

export default function NovaPesquisa() {

  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [nomeError, setNomeError] = useState('');
  const [dataError, setDataError] = useState('');
  const [imagemUri, setImagemUri] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const navigation = useNavigation();

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

  const db = initializeFirestore(app, { experimentalForceLongPolling: true })

  const pesquisaCollection = collection(db, "pesquisas")

  const addPesquisa = async () => {

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
            
            const docPesquisa = {
              dataPesquisa: data,
              nome: nome,
              imageUrl: url
            }

            addDoc(pesquisaCollection, docPesquisa).then((docRef) => {
              console.log("Nova pesquisa criado com sucesso.")
            }).catch((error) => {
                console.log("Erro", error)
              })

          })
          .catch((error) => {
            console.log("Ocorreu um erro", error)
          })
      }).catch((error) => {
        console.log("Ocorreu um erro", error)
      })
  }

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
      setNomeError('Preencha no nome da pesquisa.');
      return false;
    } else {
      setNomeError('');
    }

    if (!data) {
      setDataError('Preencha a data.');
      return false;
    } else {
      setDataError('');
    }

    return true;
  };

  const handleSave = () => {
    if (validateData()) {
      navigation.goBack();
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
        <TouchableOpacity style={styles.imageContainer} onPress={capturarImagem}>
          {imagemUri ? (
            <Image source={{ uri: imagemUri }} style={styles.image} />
          ) : (
            <Text style={styles.imageInput}>Câmera/Galeria de imagens</Text>
          )}
        </TouchableOpacity>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.background} onPress={addPesquisa}>
              <Text style={styles.text}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
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
  background: {
    backgroundColor: '#37BD6D',
    width: 502,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18
  }
});
