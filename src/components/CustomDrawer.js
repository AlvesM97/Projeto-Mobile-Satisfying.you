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
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
            <View style={styles.container}>
                <View style={styles.viewUser}>
                    <Text style={styles.text}>usuario@dominio.com</Text>
                    <View style={styles.separator}></View>
                </View>
                <DrawerItemList {...props} />
            </View>
            <View style={styles.bottomView}>
                <DrawerItem
                    label="Sair"
                    labelStyle={styles.labelStyle}
                    icon={() => (
                        <MaterialIcons name="logout" color="#fff" size={25} />
                    )}
                    onPress={() => handleLogout()}
                />
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        backgroundColor: '#2B1F5C',
        justifyContent: "space-between",
        height: "100%"
    },
    container: {
        flex: 1,
        flexGrow: 1,
    },
    viewUser: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 22,
    },
    labelStyle: {
        color: '#FFFFFF'
    },
    separator: {
        height: 1,
        width: '80%',
        backgroundColor: '#FFFFFF',
        marginVertical: 8,
    },
    bottomView: {
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
});

export default CustomDrawer;
