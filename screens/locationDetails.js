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
    const business = { currentState: route.params.currentState }

    function getBusinessStyle(currentState) {
        if (currentState == 'Not busy') {
            return globalStyles.notBusy;
        } else if (currentState == 'Slightly busy') {
            return globalStyles.slightlyBusy;
        } else {
            return globalStyles.extremelyBusy;
        }
        // return <span> {
        //     currentState == 'Not busy' ? globalStyles.notBusy
        //     : currentState == 'Slightly busy' ? globalStyles.slightlyBusy
        //     : currentState == 'Busy' ? globalStyles.busy
        //     : currentState == 'Very busy' ? globalStyles.veryBusy
        //     : globalStyles.extremelyBusy }
        //     </span>;
    };

    return (
        <View style={globalStyles.locationScreenContainer}>
            <Text style={globalStyles.locationText}>{ route.params.name }</Text>
            <Text style={globalStyles.detailsTex} >
                Maximum capacity: { route.params.capacity }</Text>
            <Text style={styles.headers}>Business</Text>
            <Text style={getBusinessStyle(business)}>{ route.params.currentState }</Text>
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
