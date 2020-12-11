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
          You can use the Report page to submit a report on your perception of the activity level of a dining hall. 
          {"\n"}
        </Text>

        <Text style={globalStyles.helpText}>
          Imagine that you are in at Commons Dining Hall during the dinner rush. 
          You want to send a report to record the busyness of the dining hall. 
          The detailed steps in this section show you how to {"\n"}
        </Text>

        <Text style={globalStyles.helpText}>
          1) verify that you are reporting for a certain dining hall, {"\n"}
          2) interpret the buttons on the Report page, {"\n"}
          3) submit a report. {"\n"}
        </Text>

        <Text style={globalStyles.helpSection}>1. Verifying the Correct Location</Text>

        <Text style={globalStyles.helpText}>
          {"\n"}
          To verify that you created a report for the target dining hall, 
          look at the text in the horizontal white strip directly under the maroon page header. 
          The text should match the name of the location that you want to submit a report for 
          (e.g. for Commons Dining Hall, the text should read, "Commons Dining Hall"). 
          {"\n\n"}
          If the text is not the name of the location you want to submit a report for, 
          tap the back arrow labelled "Home" at the top left corner of the screen. 
          From there, find the correct location (see Section 1).
          {"\n"}
        </Text>

        <Text style={globalStyles.helpSection}>2. Interpreting the Buttons</Text>

        <Text style={globalStyles.helpText}>
          {"\n"}
          The buttons on the Report page are listed in order of increasing busyness, from top to bottom. 
          The pie chart icon on the left side of the button provides a visual indicator of approximate busyness level. 
          The pie charts' white fill is associated with an approximate busyness level 
          (e.g. if a dining hall is a quarter full, the pie chart that is closest to one-fourths white is the best choice).
          {"\n\n"}
          The text on the right side of the button is an approximate English-language description of busyness level. 
          The text serves to accompany the pie chart icons in helping you make a decision on what button to press. 
          For example, if you perceive the location as “very busy,” and you see that the pie chart icon’s fill 
          accurately represents the busyness of the dining hall, then the “Very Busy” button is the best choice.
          {"\n\n"}
          Base your button selection on the pie chart icon if there is a difference in how you perceive the icon and the text. 
          For example, if you think a half-full dining hall is “extremely busy,” 
          then the button with a half-white pie chart icon is the best choice.
          {"\n"}
        </Text>

        <Text style={globalStyles.helpSection}>3. Submitting a Report</Text>

        <Text style={globalStyles.helpText}>
          {"\n"}
          Press the button that, in your best judgement (see Section 2), most accurately represents the current activity status.
          Press the "Submit" button.
          An alert should pop up indicating that your report has been submitted.
          {"\n\n"}
        </Text>
      </ScrollView>
    </View>
  );
}
