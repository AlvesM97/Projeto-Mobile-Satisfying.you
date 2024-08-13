import {Text, StyleSheet, TextInput, View, Button, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';



export default LoginForgotPasswordButton = () => {

    
    const navigation = useNavigation();

    const handleRecuperarSenha = () => {
        navigation.navigate('Recuperar Senha');
    };

    

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton} onPress={handleRecuperarSenha}>
                <Text style={styles.textButton}>
                    Esqueci minha senha
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    
    loginButton: {
        backgroundColor: 'gray',
        paddingTop: 5,
        paddingBottom: 5,
    },

    textButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17,
    },
})
