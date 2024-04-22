import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import LoginSection from '../components/LoginSection';
import LoginCreateAccountButton from '../components/LoginCreateAccountButton';
import LoginForgotPasswordButton from '../components/LoginForgotPasswordButton';

export default Login = () => {

  return (
    <ScrollView>
      <View style={styles.mainContainer}>

        <View style={styles.header}>

          <Text style={styles.title}>Satisfying.you</Text>
          <Image source={require('../assets/happy-face.png')} style={styles.titleLogo}></Image>

        </View>

        <LoginSection />
        <LoginCreateAccountButton />
        <LoginForgotPasswordButton />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    paddingTop: 5,
    paddingBottom: 20,
    paddingHorizontal: 150,
    backgroundColor: '#372775',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
    color: '#fff'
  },

  titleLogo: {
    width: 50,
    height: 50,
    marginLeft: 10
  }
});
