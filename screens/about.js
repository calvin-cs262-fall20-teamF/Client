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
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

// import custom functions and styles
import { globalStyles } from '../styles/global';

export default function About({ navigation }) {
  return (

    <ScrollView>

      <View style={styles.contentCard}>
        <Text style={globalStyles.locationTitle}>FreeSpace{'\n'}</Text>
        <Text>FreeSpace, our user-driven mobile app is tailored specifically towards Calvin University students in search of an available area on campus.</Text>

      </View>
      <View style={styles.contentCard}>
        <Text style={globalStyles.locationTitle} >Developers: {'\n'}</Text>
        <Text>Esther Cha {'\n'}Zachary Chin{'\n'}Seongil (Leo) Kim{'\n'}YoungIn Kim{'\n'}Sinai Park{'\n'}Benjamin Westerhof</Text>
      </View>
      <View style={styles.contentCard}>
        <Text style={globalStyles.locationTitle} >Color Description {'\n'}</Text>
        <Image style={styles.imageContent} source={require('../assets/colors.png')} />

      </View>

    </ScrollView >

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
  developers: {},
  // Location card element
  contentCard: {
    borderRadius: 6,
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',        // dark gray
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 20,
  },
  imageContent: {
    width: 200,
    height: 300,
    padding: 80
  },

})
