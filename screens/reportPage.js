/***************************************************************
 * reportPage.js
 * 
 * Last modified: October 16, 2020
 * 
 * reportPage.js gives users the ability to submit a report on their location
 ***************************************************************/

// import functions and libraries
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { StackActions } from '@react-navigation/native';

// import custom functions and styles
import StatusButton from '../shared/statusButton';
import { globalStyles } from '../styles/global';

export default function ReportPage({ route, navigation }) {
    //makes a list for report buttons, the weight property is for the database
    const [activityStatus, setBgColor] = useState([
        {name: 'NOT BUSY', textColor: {color: '#333'}, bgColor: globalStyles.notBusyBackground, weight: '1', key: '1'},
        {name: 'SLIGHTLY BUSY', textColor: {color: '#333'}, bgColor: globalStyles.slightlyBusyBackground, weight: '2', key: '2'},
        {name: 'BUSY', textColor: {color: '#333'}, bgColor: globalStyles.busyBackground, weight: '3', key: '3'},
        {name: 'VERY BUSY', textColor: {color: '#333'}, bgColor: globalStyles.veryBusyBackground, weight: '4', key: '4'},
        {name: 'EXTREMELY BUSY', textColor: {color: '#333'}, bgColor: globalStyles.extremelyBusyBackground, weight: '5', key: '5'},
        {name: 'SUBMIT', textColor: {color: '#fff'}, bgColor: globalStyles.submitButton, key: '6'},
    ]);

    return (
    <View style={globalStyles.reportScreenContainer}>
        <Text style={globalStyles.locationText}>{ route.params.name } </Text>
        
        <FlatList style={globalStyles.statusList} data={activityStatus} renderItem={({ item }) => (
            <TouchableOpacity>
                <StatusButton name={item.name} buttonColor={item.bgColor}>
                    <Text style={[globalStyles.statusText, item.textColor]}>{ item.name }</Text>
                </StatusButton>
            </TouchableOpacity>
            
        )} />
    </View>

    )}