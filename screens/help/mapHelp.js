/***************************************************************
 * home.js
 *
 * Last modified: October 19, 2020
 *
 * home.js contains and displays the list of campus locations.
 ***************************************************************/

// import functions and libraries
import React from "react";
import {
  View,
  Text,
  ScrollView,
} from "react-native";

// import custom functions and styles
import { globalStyles } from "../../styles/global";

export default function ReportHelp({ navigation }) {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={globalStyles.helpScroll}>

        <Text style={globalStyles.helpText}> 
          You can use the Map page to see where you are on campus relative to each of Calvin University’s dining halls.
          {"\n\n"}
          Imagine that you want to eat at Commons Dining Hall and need to know the dining hall’s location 
          relative to your current location. The detailed steps in this section show you how to
          {"\n\n"}
          1. locate yourself on the map of Calvin University’s campus, {"\n"}
          2. locate the dining halls on the map of Calvin University’s campus, {"\n"}
          3. find out how busy (on a standardized scale) each dining hall is at the current moment. {"\n"}
        </Text>

        <Text style={globalStyles.helpSection}>1. Locating Yourself</Text>

        <Text style={globalStyles.helpText}>
          {"\n"}
          To locate yourself on the map, look for a pulsing blue circle in the center of the Map page. 
          The blue circle represents your approximate location on the map.
          {"\n"}
        </Text>

        <Text style={globalStyles.helpSection}>2. Locating a Dining Hall</Text>

        <Text style={globalStyles.helpText}>
          {"\n"}
          To locate a dining hall on the map, look for a colored pin on the Map page. 
          The color of the pin will be one of five colors: green, green-yellow, yellow, orange, or red. 
          The smaller end of the pin indicates the approximate location of a dining hall on the map.
          {"\n"}
        </Text>

        <Text style={globalStyles.helpSection}>3. Finding a Dining Hall’s Busyness Level</Text>

        <Text style={globalStyles.helpText}>
          {"\n"}
          Each pin’s color indicates the busyness level at that location as reported by other people. 
          We use the scale below to generalize activity levels:
          {"\n\n"}
          <Text style={globalStyles.noReports} >Black</Text>: no recent reports {"\n"}
          <Text style={globalStyles.notBusy} >Green</Text>: not busy {"\n"}
          <Text style={globalStyles.slightlyBusy} >Light Green</Text>: slightly busy {"\n"}
          <Text style={globalStyles.busy} >Yellow</Text>: busy {"\n"}
          <Text style={globalStyles.veryBusy} >Orange</Text>: very busy {"\n"}
          <Text style={globalStyles.extremelyBusy} >Red</Text>: extremely busy {"\n"}
          {"\n"}
        </Text>
      </ScrollView>
    </View>
  );
}
