/***************************************************************
 * home.js
 * 
 * Last modified: October 19, 2020
 * 
 * home.js contains and displays the list of campus locations.
 ***************************************************************/

// import functions and libraries
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button } from 'react-native';

// import custom functions and styles
import LocationCard from '../shared/locationCard';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    // List of campus locations
    const [locations, addLocation] = useState([
        { name: 'Commons Dining Hall', currentState: 'Not busy', capacity: '200', image: '../assets/locations/commons.jpg', key: '1' },
        { name: 'Knollcrest Dining Hall', currentState: 'Slightly busy', capacity: '150', image: '../assets/locations/knollcrest.jpg', key: '2' },
        { name: 'Uppercrust', currentState: 'Busy', capacity: '75', key: '3' },
        { name: 'Johnny\'s', currentState: 'Very busy', capacity: '100', image: '../assets/locations/johnnys.jpg', key: '4' },
        { name: 'Peet\'s Coffee', currentState: 'Extremely busy', capacity: '30', image: '../assets/locations/peets.jpg', key: '5' },
    ]);

    // If conditional function to change the color of business based on the current state
    function getActivityStyle(currentState) {
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
                    <LocationCard>
                        <View style={globalStyles.titleContainer}>
                            <Text style={globalStyles.locationTitle}>{ item.name }</Text>
                        </View>
                        <View style={globalStyles.statusContainer}>
                            <Text style={globalStyles.statusTitle}>
                                <Text style={getActivityStyle(item.currentState)}>{ item.currentState }</Text>
                            </Text>
                            <Text style={globalStyles.headers}>Estimated Numbers:</Text>
                            <Text style={globalStyles.numberText}>{ item.capacity }</Text>
                            <Button title='Report Activity' color='#009933' onPress={() => navigation.navigate('reportPage', item)} style={globalStyles.reportButton}> Report
                            </Button>
                        </View>
                    </LocationCard>
                </TouchableOpacity>
            )} />
        </View>
    );
}
