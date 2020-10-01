/***************************************************************
 * locationDetails.js
 * 
 * Last modified: September 29, 2020
 * 
 * locationDetails.js displays location information provided
 * in the location list (see home.js).
 ***************************************************************/

// import functions and libraries
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import custom functions and styles
import { globalStyles } from '../styles/global';

export default function LocationDetails({ route, navigation }) {
    return (
        <View style={globalStyles.locationScreenContainer}>
            <Text style={globalStyles.locationText}>{ route.params.name }</Text>
            <Text style={globalStyles.stateText}>{ route.params.currentState }</Text>
            <Text style={globalStyles.detailsText}>Maximum capacity: { route.params.capacity }</Text>
        </View>
    );
}
