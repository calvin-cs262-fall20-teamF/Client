/***************************************************************
 * reportPage.js
 * 
 * Last modified: October 9, 2020
 * 
 * reportPage.js gives users the ability to submit a report on their location
 ***************************************************************/

// import functions and libraries
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

// import custom functions and styles
import StatusButton from '../shared/statusButton';
import { globalStyles } from '../styles/global';

export default function ReportPage({ route, navigation }) {
    //makes a list for report buttons, the weight property is for the data base
    const [busyness, addBusyness] = useState([
        {name: 'Not busy', weight: '1', key: '1'},
        {name: 'Slightly busy', weight: '2', key: '2'},
        {name: 'Busy', weight: '3', key: '3'},
        {name: 'Very busy', weight: '4', key: '4'},
        {name: 'Extremely busy', weight: '5', key: '5'},
    ]);

    return (
    <View style={globalStyles.reportScreenContainer}>
        <Text style={globalStyles.locationText}>{ route.params.name } </Text>
        
        <FlatList style={globalStyles.statusList} data={busyness} renderItem={({ item }) => (
            <TouchableOpacity>
                <StatusButton>
                    <Text style={globalStyles.statusText}>{ item.name }</Text>
                </StatusButton>
            </TouchableOpacity>
        )} />
    </View>

    )}