import React, { useState } from "react";
import { View, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

export default function SubmitButton(props) {
  const [isSelected, setSelected] = useState(props.selected);

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
