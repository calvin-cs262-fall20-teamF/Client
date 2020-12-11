/***************************************************************
 * helpButton.js
 *
 * Last modified: December 10, 2020
 *
 * helpButton.js contains the HelpButton component, which is
 * used in the header bar.
 ***************************************************************/

// Import components
import React from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/**
  * HelpButton
  * 
  * @param {Array} - Array of props passed to component
  * @return JSX to create HelpButton component
  */
export default function HelpButton(props) {
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 10} }>
      <MaterialCommunityIcons
        name="help-circle-outline" 
        color={props.color} 
        size={props.size}
        style={{flex: 1}}
      />
    </View>
  );
}
