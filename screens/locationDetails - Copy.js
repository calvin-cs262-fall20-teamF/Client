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
import { StyleSheet, View, Text, Button } from 'react-native';

// import custom functions and styles
import { globalStyles } from '../styles/global';

export default function LocationDetails({ route, navigation }) {
    //item takes the name to be passed along to the report page
    const item = { name: route.params.name};

    // If conditional function to change the color of business based on the current state
    function getBusinessStyle(currentState) {
        if (currentState == 'Not busy') {
            return globalStyles.notBusy;
        } else if (currentState == 'Slightly busy') {
            return globalStyles.slightlyBusy;
        } else if (currentState == 'Busy') {
            return globalStyles.busy;
        } else if (currentState == 'Very busy') {
            return globalStyles.veryBusy;
        } else if (currentState == 'Extremely busy') {
            return globalStyles.extremelyBusy;
        } else {
            return globalStyles.detailsText;
        }
    };

    return (
        <View style={globalStyles.locationScreenContainer}>
            <Text style={globalStyles.locationText}>{ route.params.name }</Text>
            <Text style={globalStyles.detailsTex} >
                Maximum capacity: { route.params.capacity }</Text>
            <Text style={styles.headers}>Business</Text>
            <Text style={getBusinessStyle(route.params.currentState)}>{ route.params.currentState }</Text>
            <Text style={styles.headers}>Estimated Numbers</Text>
            <Text style={globalStyles.numberText}>{ route.params.capacity }</Text>
            <Button title='Report' color='#009933'
                onPress={() => navigation.navigate('reportPage', item)} style={styles.reportButton}>
                    Report
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    headers: {
        fontFamily: 'nunito-bold',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#8c8c8c',
        textAlign: 'center',
        padding: 10,
        marginTop: 20,
    },
    reportButton: {
        padding: 10,
    }
})
