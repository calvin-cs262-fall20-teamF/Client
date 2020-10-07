/***************************************************************
 * userReport.js
 *
 * Last modified: September 29, 2020
 *
 * userReport.js displays inputs and submit button
 * (see home.js).
 ***************************************************************/

// import functions and libraries
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// import custom functions and styles
import { globalStyles } from '../styles/global';

export default function userReport({ navigation }) {
  return (

    <View>
      <Text style={globalStyles.locationTitle}>user report</Text>
      <Button
        onPress={() => alert('Report is submitted!')}
        title="SUBMIT"
        color="#d2b48c"
      />
    </View>

  )
}
