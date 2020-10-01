/***************************************************************
 * reportPage.js
 * 
 * Last modified: September 30, 2020
 * 
 * reportPage.js gives users the ability to submit a report on their location
 ***************************************************************/

// import functions and libraries
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

// import custom functions and styles
import { globalStyles } from '../styles/global';

export default function ReportPage({ route, navigation }) {
    //makes a list for report buttons, the weight property is for the data base
    const [busyness, addBusyness] = useState([
        {name: 'Not busy', weight: '1', key: '1'},
        {name: 'Slightly busy', weight: '2', key: '2'},
        {name: 'Busy', weight: '3', key: '3'},
        {name: 'Very busy', weight: '4', key: '4'},
        {name: 'Extremly busy', weight: '5', key: '5'},
    ]);

    return (
    <View style={globalStyles.locationScreenContainer}>
        <Text style={globalStyles.locationText}>{ route.params.name } </Text>

        <div>
            <FlatList style={globalStyles.locationList} data={busyness} renderItem={({ item }) => (
            <TouchableOpacity style={globalStyles.listButton}>
                <Text style={globalStyles.locationTitle}>{ item.name }</Text>
                </TouchableOpacity>
                )} />
        </div>
    </View>

    )}