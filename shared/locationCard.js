/***************************************************************
 * locationCard.js
 *
 * Last modified: December 10, 2020
 *
 * locationCard.js contains the LocationCard component, which is
 * used to contain each location's information in the
 * Home screen location list.
 ***************************************************************/

// Import components
import React from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/global";

/**
  * LocationCard
  * 
  * @param {Array} - Array of props passed to component
  * @return JSX to create LocationCard component
  */
export default function LocationCard(props) {
  return (
    <View style={globalStyles.locationCard}>
      <View style={globalStyles.cardContent}>{props.children}</View>
    </View>
  );
}
