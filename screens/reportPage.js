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
import SubmitButton from '../shared/submitButton';
import { globalStyles } from '../styles/global';

export default function ReportPage({ route, navigation }) {
    //makes a list for report buttons, the weight property is for the database
    const [buttonList, setButtons] = useState([
        { name: 'NOT BUSY', textColor: { color: '#fff' }, bgColor: globalStyles.notBusyBackground, isSelected: false, weight: '1', key: '1' },
        { name: 'SLIGHTLY BUSY', textColor: { color: '#fff' }, bgColor: globalStyles.slightlyBusyBackground, isSelected: false, weight: '2', key: '2' },
        { name: 'BUSY', textColor: { color: '#fff' }, bgColor: globalStyles.busyBackground, isSelected: false, weight: '3', key: '3' },
        { name: 'VERY BUSY', textColor: { color: '#fff' }, bgColor: globalStyles.veryBusyBackground, isSelected: false, weight: '4', key: '4' },
        { name: 'EXTREMELY BUSY', textColor: { color: '#fff' }, bgColor: globalStyles.extremelyBusyBackground, isSelected: false, weight: '5', key: '5' },
    ]);

    // stores the active button to allow only one button as "grayed out"
    const [activeButton, setActiveButton] = useState(false);

    // keeps the submit button disabled until a selection is made
    const [submitBlocker, setSubmitBlocker] = useState(true);

    // handles changing button status
    const statusButtonCallback = (activeID) => {
        // find the button to change status
        const index = buttonList.findIndex(element => element.key == activeID);
        // create copy of active and change isSelected of target button to 'true'
        let newButtons = [...buttonList];
        // check if one button has already been selected
        for (var i = 0; i < newButtons.length; i++) {
            if (newButtons[i].isSelected) {
                // change isSelected of previously selected button to 'false'
                newButtons[i].isSelected = false;
            }
        }
        // change isSelected of target button to 'true'
        newButtons[index] = { ...newButtons[index], isSelected: !newButtons[index].isSelected };

        // update buttonList
        setButtons(newButtons);

        //sets the SubmitBlocker hook to false
        setSubmitBlocker(false);
    };


    return (
        <View style={globalStyles.reportScreenContainer}>
            <Text style={globalStyles.locationText}>{route.params.name} </Text>

            {/* Report buttons */}
            <FlatList style={globalStyles.statusList} data={buttonList} renderItem={({ item }) => (
                <TouchableOpacity>
                    <StatusButton name={item.name} buttonColor={item.bgColor} buttonID={item.key} selected={item.isSelected} reportCallback={statusButtonCallback}>
                        <Text style={[globalStyles.statusText, item.textColor]}>{item.name}</Text>
                    </StatusButton>
                </TouchableOpacity>
            )}>
            </FlatList>

            {/* Submit button */}
            <View>
                <TouchableOpacity onPress={() => navigation.dispatch(StackActions.popToTop())} disabled={submitBlocker}>
                    <SubmitButton
                        name="SUBMIT"
                        isSelected={true}
                        buttonColor={[submitBlocker ? globalStyles.statusButtonSelected : globalStyles.submitButton]}
                        invalid={submitBlocker}
                    >
                        <Text style={[globalStyles.statusText, { color: '#fff' }]}>SUBMIT</Text>
                    </SubmitButton>
                </TouchableOpacity>
            </View>

        </View>

    )
}