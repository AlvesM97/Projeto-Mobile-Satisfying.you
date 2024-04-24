import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default LoginCreateAccountButton = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Nova Conta')}>
                <Text style={styles.textButton}>
                    Criar minha conta
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0
    },

    loginButton: {
        backgroundColor: '#1E90FF',
        paddingTop: 5,
        paddingBottom: 5,
    },

    textButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17
    }
})
