/***************************************************************
 * homeHelp.js
 *
 * Last modified: December 10, 2020
 *
 * homeHelp.js displays on-line help for the Home page.
 * The full end-user documentation can be found here:
 * https://github.com/calvin-cs262-fall2020-Freespace/Project/blob/master/online-help.md
 ***************************************************************/

// Import components and libraries
import React from "react";
import {
  View,
  Text,
  ScrollView,
} from "react-native";

// Import custom styles
import { globalStyles } from "../../styles/global";

/**
 * HomeHelp
 * @return JSX to display Home help documentation
 */
export default function HomeHelp() {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={globalStyles.helpScroll}>

        <Text style={globalStyles.helpText}> 
          You can use the Home page to peruse the list of eateries on campus and view each eatery's 
          current activity levels (busyness). {"\n"}
        </Text>

        <Text style={globalStyles.helpText}>
          Imagine that you are deciding on which dining hall to go to for dinner.
          You want to go to the dining hall that is the least busy. 
          The detailed steps in this section show you how to:
          {"\n"}
        </Text>

        <Text style={globalStyles.helpText}>
          1) scroll through the list of locations {"\n"}
          2) check how busy each dining hall is {"\n"}
          3) check max capacity of the location {"\n"}
          4) choose a dining hall to submit a report for {"\n"}
        </Text>

        <Text style={globalStyles.helpSection}>1. Browsing Locations</Text>

        <Text style={globalStyles.helpText}>
          {"\n"}
          From the Home screen, scroll up or down to browse through the locations listed. 
          The left side of each card on the screen has the name of the location. 
          The right side of each card contains information about that specific location.
          {"\n"}
        </Text>

        <Text style={globalStyles.helpSection}>2. Finding How Busy a Dining Hall Is</Text>

        <Text style={globalStyles.helpText}>
          {"\n"}
          For each location, there is an English-language phrase representative of the location's busyness level. 
          We use the scale below to generalize activity levels. 
          Each phrase has a color related to it to make identification easier.
          {"\n\n"}
          <Text style={globalStyles.noReports} >N/A</Text> (no reports have been submitted in the last hour) {"\n"}
          <Text style={globalStyles.notBusy} >Not busy</Text> {"\n"}
          <Text style={globalStyles.slightlyBusy} >Slightly busy</Text> {"\n"}
          <Text style={globalStyles.busy} >Busy</Text> {"\n"}
          <Text style={globalStyles.veryBusy} >Very busy</Text> {"\n"}
          <Text style={globalStyles.extremelyBusy} >Extremely busy</Text>
          {"\n"}
        </Text>

        <Text style={globalStyles.helpSection}>3. Checking Maximum Capacity</Text>

        <Text style={globalStyles.helpText}>
          {"\n"}
          Underneath the activity level, there is a number (colored <Text style={globalStyles.maxCapacityNumber}>gold</Text>) 
          that represents the maximum capacity of the dining hall.
          {"\n"}
        </Text>

        <Text style={globalStyles.helpSection}>4. Choosing a Dining Hall</Text>

        <Text style={globalStyles.helpText}>
          {"\n"}
          Based on the information provided, evaluate and decide which eatery you want to eat at.
          {"\n\n"}
          To create a report on the current busyness at a certain dining hall, tap the card
          with the name of the dining hall you would like to report for.
          {"\n\n"}
        </Text>
      </ScrollView>
    </View>
  );
}
