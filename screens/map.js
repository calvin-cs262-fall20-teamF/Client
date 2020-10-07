/***************************************************************
 * map.js
 *
 * Last modified: September 29, 2020
 *
 * map.js displays campus map with clickable buildings
 * (see home.js).
 ***************************************************************/

// import functions and libraries
import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Image } from 'react-native';

// import custom functions and styles
import { globalStyles } from '../styles/global';

export default function Map({ navigation }) {
  return (

    <View style={styles.container}>
      <Text style={globalStyles.locationTitle}>campus map</Text>
      <Image style={styles.image}
        source={{ uri: 'https://calvin.edu/dotAsset/184d0710-a659-4ef6-bc18-d0ac7d9cd057/' }} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 550,
    width: 300,
    opacity: 0.5
  },

});
