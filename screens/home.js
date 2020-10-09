/***************************************************************
 * home.js
 * 
 * Last modified: September 29, 2020
 * 
 * home.js contains and displays the list of campus locations.
 ***************************************************************/

// import functions and libraries
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

// import custom functions and styles
import Card from '../shared/card';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    // List of campus locations
    const [locations, addLocation] = useState([
        { name: 'Commons Dining Hall', currentState: 'Extremely busy', capacity: '300', key: '1' },
        { name: 'Knollcrest Dining Hall', currentState: 'Busy', capacity: '400', key: '2' },
    ]);

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

    // Displays the FlatList containing all locations; each location can be tapped/clicked to
    // navigate to the LocationDetails screen.
    return (
        <View style={globalStyles.homeContainer}>
            <FlatList style={globalStyles.locationList} data={locations} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('LocationDetails', item)}>
                    <Card>
                        <View style={globalStyles.titleContainer}>
                            <Text style={globalStyles.locationTitle}>{ item.name }</Text>
                        </View>
                        <View style={globalStyles.statusContainer}>
                            <Text style={globalStyles.statusTitle}>
                                <Text style={getBusinessStyle(item.currentState)}>{ item.currentState }</Text>
                            </Text>
                        </View>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
}
