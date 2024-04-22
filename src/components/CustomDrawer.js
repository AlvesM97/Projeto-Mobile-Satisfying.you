import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Text, View, StyleSheet } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';



const CustomDrawer = (props) => {
    const navigation = useNavigation();
    const handleLogout = () => {
        navigation.navigate('Login');
    };
    return (
        <DrawerContentScrollView {...props} style={styles.drawerContent}>
            <View style={styles.viewUser}>
                <Text style={styles.text}>usuario@dominio.com</Text>
                <View style={styles.separator}></View>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Sair"
                labelStyle={styles.labelStyle}
                icon={({ color, size }) => (
                    <MaterialIcons name="logout" color={color} size={size} />
                )}
                onPress={() => handleLogout()}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        backgroundColor: '#2B1F5C',
    },

    viewUser: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10, // Usando paddingVertical para espaçamento vertical
    },

    text: {
        color: '#FFFFFF',
        fontSize: 22,
    },

    labelStyle: {
        color: '#FFFFFF' // Assegura que a cor do label do DrawerItem seja branca
    },

    separator: {
        height: 1, // Altura da linha
        width: '80%', // Largura da linha
        backgroundColor: '#FFFFFF', // Cor da linha
        marginVertical: 8, // Espaço acima e abaixo da linha
    }
});

export default CustomDrawer;