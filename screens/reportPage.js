/***************************************************************
 * reportPage.js
 * 
 * Last modified: September 30, 2020
 * 
 * reportPage.js displays options for users to click to report how busy a space is.
 ***************************************************************/

// import functions and libraries
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import custom functions and styles
import { globalStyles } from '../styles/global';

export default function ReportPage({ route, navigation }) {
    return (
    <View style={globalStyles.reportScreenContainer}>
        <Text style={globalStyles.locationText}>{ route.params.name } </Text>
    </View>
)}