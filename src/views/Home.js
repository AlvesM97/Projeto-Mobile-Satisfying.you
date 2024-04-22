import React from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const handleModificarPesquisaPress = () => {
        navigation.navigate('ModificarPesquisa');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Button title='nome' onPress={handleModificarPesquisaPress} />
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
    }
});

export default Home;
