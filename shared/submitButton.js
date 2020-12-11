/***************************************************************
 * submitButton.js
 *
 * Last modified: December 10, 2020
 *
 * submitButton.js contains the SubmitButton component, which is
 * used in the Report page. It sends an alert depending on
 * whether or not a status button has been selected.
 ***************************************************************/

// Import components
import React, { useState } from "react";
import { View, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

/**
  * SubmitButton
  * 
  * @param {Array} - Array of props passed to component
  * @return JSX to create SubmitButton component
  */
export default function SubmitButton(props) {
  const [isSelected, setSelected] = useState(props.selected);

  /**
   * pressHandler
   * 
   * Calls an anonymous function to generate an alert based
   * on if a status button has been selected or not.
   */
  const pressHandler = () => {
    if (props.invalid) {
      Alert.alert("Please select an option first.");
    } else {
      Alert.alert("Report submitted!");
    }
  };

  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[props.buttonColor, globalStyles.submitButton]}
    >
      <View style={globalStyles.cardContent}>{props.children}</View>
    </TouchableOpacity>
  );
}
