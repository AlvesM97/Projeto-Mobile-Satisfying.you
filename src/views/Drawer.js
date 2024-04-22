import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet } from 'react-native';
import Home from "../views/Home";
import CustomDrawer from "../components/CustomDrawer";
import ModificarPesquisa from './modificarPesquisa';
import DetailsScreen from './DetailsScreen';
const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
    return (
        <View style={styles.container}>
            <DrawerNavigator.Navigator screenOptions={{
                drawerActiveTintColor: '#fff', // Cor do texto quando o item está ativo
                drawerInactiveTintColor: '#fff', // Cor do texto quando o item não está ativo
                drawerLabelStyle: {
                    color: '#fff' // Define a cor do texto para todos os itens
                }
            }} drawerContent={(props) => <CustomDrawer {...props} />}>
                <DrawerNavigator.Screen name="DetailsScreen" component={DetailsScreen} />
                {/* Você pode descomentar e ajustar a linha abaixo conforme necessário */}
                {/* <DrawerNavigator.Screen name="Modificar Pesquisa" component={ModificarPesquisa} /> */}
            </DrawerNavigator.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        height: '100%',
        width: '100%'
    }
});

export default Drawer;