import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HelpButton(props) {
  return (
    <MaterialCommunityIcons name="help-circle-outline" color={props.color} size={props.size}/>
  );
}
