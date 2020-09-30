/***************************************************************
 * map.js
 *
 * Last modified: September 29, 2020
 *
 * map.js displays campus map with clickable buildings
 * (see home.js).
 ***************************************************************/

// import functions and libraries
import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Image } from 'react-native';

// import custom functions and styles
import { globalStyles } from '../styles/global';

export default function Map({ navigation }) {
  return (

    <Text style={globalStyles.locationTitle}>campus map</Text>
  );
}

