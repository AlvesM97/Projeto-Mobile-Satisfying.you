import {Text, StyleSheet, View, TouchableOpacity} from "react-native";



export default LoginButton= () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.textButton}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#251095",
        paddingTop: 10,
        padding: 20,
        paddingRight: 70,
        paddingLeft: 70
    },
    
    loginButton: {
        backgroundColor: '#3CB371',
        paddingTop: 5,
        paddingBottom: 5,
    },

    textButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17
    }
})
