/***************************************************************
 * about.js
 *
 * Last modified: September 29, 2020
 *
 * about.js creates the stack that will be used for the app's description
 * user report feature(scale, submit, etc),
 * and the software developers
 ***************************************************************/

// import functions and libraries
import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

// import custom functions and styles
import { globalStyles } from '../styles/global';

export default function About({ navigation }) {
  return (

    <View>
      <Text style={globalStyles.locationTitle}>FreeSpace{'\n'}</Text>
      <Text> FreeSpace, our user-driven mobile app, serves to accomplish exactly that. {'\n'} It is tailored specifically towards Calvin University students in search of an available area on campus.</Text>
      <Text style={globalStyles.locationTitle} >Developers: {'\n'}</Text>
      <Text>    Esther Cha {'\n'}   Zachary Chin{'\n'}    Seongil (Leo) Kim{'\n'}   YoungIn Kim{'\n'}   Sinai Park{'\n'}    Benjamin Westerhof</Text>
      {/* <Button
        onPress={() => alert('Report is submitted!')}
        title="SUBMIT"
        color="#d2b48c"
      /> */}
    </View>

  )
}


const styles = StyleSheet.create({
  appTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'nunito-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  developers: {}
})
