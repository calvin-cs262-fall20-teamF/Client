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
    const [activityStatus, setSelected] = useState([
        {name: 'NOT BUSY', textColor: {color: '#333'}, bgColor: globalStyles.notBusyBackground, isSelected: false, weight: '1', key: '1'},
        {name: 'SLIGHTLY BUSY', textColor: {color: '#333'}, bgColor: globalStyles.slightlyBusyBackground, isSelected: false, weight: '2', key: '2'},
        {name: 'BUSY', textColor: {color: '#333'}, bgColor: globalStyles.busyBackground, isSelected: false, weight: '3', key: '3'},
        {name: 'VERY BUSY', textColor: {color: '#333'}, bgColor: globalStyles.veryBusyBackground, isSelected: false, weight: '4', key: '4'},
        {name: 'EXTREMELY BUSY', textColor: {color: '#333'}, bgColor: globalStyles.extremelyBusyBackground, isSelected: false, weight: '5', key: '5'},
    ]);

    // stores the active button to allow only one button as "grayed out"
    const [activeButton, setActiveButton] = useState(false);

    // sets active button to the one that was most recently selected
    const statusButtonCallback = (activeID) => {
        setActiveButton(true);
        console.log("Active ID: " + activeID);
        console.log("Active button: " + activeButton);
        //// change isSelected in button activeIndex to true ////
        // change isSelected to false for all buttons that are selected (in this case, only one is changed)
        var newSelected = activityStatus.map((button) => {
            if(button.key === activeButton.toString()){
                button.isSelected = true;
            }
            else {
                button.isSelected = false;
            }
            // console.log(button);
        })
        // console.log(newSelected);
        setSelected(newSelected);
        // console.log(activityStatus);
    };


    return (
    <View style={globalStyles.reportScreenContainer}>
        <Text style={globalStyles.locationText}>{ route.params.name } </Text>

        <FlatList style={globalStyles.statusList} data={activityStatus} renderItem={({ item }) => (
            <TouchableOpacity>
                <StatusButton name={item.name} buttonColor={item.bgColor} buttonID={item.key} selected={item.isSelected} reportCallback={statusButtonCallback}>
                    <Text style={[globalStyles.statusText, item.textColor]}>{ item.name }</Text>
                </StatusButton>
            </TouchableOpacity>
        )}>
        </FlatList>

        {/* Submit button */}
        <View>
            <TouchableOpacity onPress={() => navigation.dispatch(StackActions.popToTop())}>
                <StatusButton name="SUBMIT" buttonColor={globalStyles.submitButton}>
                    <Text style={[globalStyles.statusText, {color: '#fff'}]}>SUBMIT</Text>
                </StatusButton>
            </TouchableOpacity>
        </View>

    </View>

    )}