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
        // { name: 'KE Basketball Court', currentState: 'empty', capacity: '100', key: '1' },
        // { name: 'KE Volleyball Court', currentState: 'sort of empty', capacity: '200', key: '2' },
        { name: 'Commons Dining Hall', currentState: 'busy', capacity: '300', key: '1' },
        { name: 'Knollcrest Dining Hall', currentState: 'full', capacity: '400', key: '2' },
        // { name: 'Johnny\'s', currentState: 'full', capacity: '500', key: '5' },
        // { name: 'Main Dance Studio', currentState: 'full', capacity: '600', key: '6' },
        // { name: 'Dance Loft', currentState: 'full', capacity: '700', key: '7' },
        // { name: 'Uppercrust', currentState: 'full', capacity: '700', key: '8' },
        // { name: 'Hekman Library\n2nd Floor', currentState: 'full', capacity: '700', key: '9' },
        // { name: 'Chapel', currentState: 'full', capacity: '700', key: '10' },
        // { name: 'Meeter Center\nLecture Hall', currentState: 'full', capacity: '700', key: '11' },
        // { name: 'Commons Annex Lecture Hall', currentState: 'full', capacity: '700', key: '12' },
        // { name: 'Hoogenboom Basketball Courts', currentState: 'full', capacity: '700', key: '13' },
        // { name: 'Venema Aquatic Center', currentState: 'full', capacity: '700', key: '14' },
    ]);

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
                            <Text style={globalStyles.statusTitle}>{ item.currentState }</Text>
                        </View>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
}
