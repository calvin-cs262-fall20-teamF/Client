/***************************************************************
 * home.js
 *
 * Last modified: October 19, 2020
 *
 * home.js contains and displays the list of campus locations.
 ***************************************************************/

// import functions and libraries
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button, ImageBackground, ActivityIndicator } from 'react-native';

// import custom functions and styles
import LocationCard from '../shared/locationCard';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // List of campus locations
    const [locations, addLocation] = useState([
        { name: 'Commons Dining Hall', currentState: 'Not busy', maxCapacity: '200', image: require('../assets/locations/commons.jpg'), key: '1' },
        { name: 'Knollcrest Dining Hall', currentState: 'Slightly busy', maxCapacity: '150', image: require('../assets/locations/knollcrest.jpg'), key: '2' },
        { name: 'Uppercrust', currentState: 'Busy', maxCapacity: '75', image: require('../assets/locations/uppercrust.jpg'), key: '3' },
        { name: 'Johnny\'s', currentState: 'Very busy', maxCapacity: '100', image: require('../assets/locations/johnnys2.jpg'), key: '4' },
        { name: 'Peet\'s Coffee', currentState: 'Extremely busy', maxCapacity: '30', image: require('../assets/locations/peets.jpg'), key: '5' },
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

    useEffect(() => {
        fetch("https://calvinspace.herokuapp.com/reports")
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    // Displays the FlatList containing all locations; each location can be tapped/clicked to
    // navigate to the LocationDetails screen.
    return (
        <View style={globalStyles.homeContainer}>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList style={globalStyles.locationList}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (

                <TouchableOpacity onPress={() => navigation.navigate('ReportPage', item)}>
                    <LocationCard>
                        <ImageBackground source={require('../assets/locations/uppercrust.jpg')} imageStyle={{ borderRadius: 25 }} style={globalStyles.titleContainer} >
                            <Text style={globalStyles.locationTitle}>{item.locationname}</Text>
                        </ImageBackground>
                        <View style={globalStyles.statusContainer}>
                            <Text style={globalStyles.statusTitle}>
                                <Text style={getActivityStyle(item.activitystatus)}>{item.activitystatus}</Text>
                            </Text>
                            <Text style={globalStyles.headers}>Current Capacity:</Text>
                            {/* Replace "x" with data pulled from database */}
                            <Text style={globalStyles.numberText}> {item.estimatedpopulation} / {item.maxcapacity}</Text>
                            {/* <Button title='Report Activity' color='#009933' onPress={() => navigation.navigate('ReportPage', item)} style={globalStyles.reportButton}> Report
                            </Button> */}
                        </View>
                    </LocationCard>
                </TouchableOpacity>
            )}
            />
            )}
        </View>
    );
}