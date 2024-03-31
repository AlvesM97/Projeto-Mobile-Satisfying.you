import { TouchableOpacity, Text, StyleSheet } from "react-native";


const Botao = (props) => {

    const texto = props.texto

    return (
        <TouchableOpacity style={estilos.fundo}>
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: '#37BD6D',
        width: 460,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#FFFFFF',
        fontSize: 18
    }

})

export default Botao