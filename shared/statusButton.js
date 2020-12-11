/***************************************************************
 * statusButton.js
 *
 * Last modified: December 10, 2020
 *
 * statusButton.js contains the StatusButton component, which is
 * used in the Report page. It passes a given ID back up to the
 * parent when it is selected in order to retain one button
 * being grayed-out at a time.
 ***************************************************************/

// Import components
import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

export default function StatusButton(props) {
  const [isSelected, setSelected] = useState(props.selected);

  const pressHandler = () => {
    setSelected(!isSelected);
    props.reportCallback(props.buttonID);
  };

  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[
        props.buttonColor,
        globalStyles.statusButton,
        props.selected && globalStyles.statusButtonSelected,
      ]}
    >
      <View style={globalStyles.statusButtonContent}>{props.children}</View>
    </TouchableOpacity>
  );
}
