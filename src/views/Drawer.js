import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet } from 'react-native';
import CustomDrawer from "../components/CustomDrawer";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './home';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
    return (
        <View style={styles.container}>
            <DrawerNavigator.Navigator
                screenOptions={{
                    drawerActiveTintColor: '#fff',
                    drawerLabelStyle: {
                        color: '#fff'
                    },
                    drawerStyle: {
                        backgroundColor: '#372775',
                    },
                    headerStyle: { backgroundColor: "#2B1D62"},
                    headerTitle: '',
                    headerTintColor: 'white'
                }}
                drawerContent={(props) => <CustomDrawer {...props} />}

            >
                <DrawerNavigator.Screen
                    name="Pesquisas"
                    component={Home}
                    options={{
                        drawerIcon: ({ focused, color, size }) => (
                            <MaterialIcons
                                name="description"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
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
