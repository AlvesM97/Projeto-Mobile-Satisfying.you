import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'


const Header = (props) => {

    const title = props.title;
    const icon = props.icon;
    const color = props.color;

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => console.log('Botão do header')} style={styles.iconBack}>
                <Icon name={icon} size={40} color={color} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2B1D62',
        padding: 15,
    },
    iconBack: {
        marginEnd: 15
    },
    title: {
        color: 'white',
        fontSize: 26,
        marginLeft: 10,
    },
})

export default Header