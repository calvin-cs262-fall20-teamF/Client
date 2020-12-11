/***************************************************************
 * mapStack.js
 *
 * Last modified: December 10, 2020
 *
 * mapStack.js creates the stack that will be used for
 * navigating between the Map page and the Map help page.
 ***************************************************************/

// Import components and libraries
import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

// Import custom components and styles
import Map from "../screens/map";
import MapHelp from "../screens/help/mapHelp"
import HelpButton from "../shared/helpButton";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();

/**
 * MapStack
 * @param {navigation} - navigation object
 * @return JSX for stack navigation between Map
 *          page and Map help page
 */
export default function MapStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#8C2131", height: 60 }, // maroon
        headerTintColor: "#fff", // white
      }}
    >
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerTitle: () => 
            <Text style={globalStyles.navHeader}> Map </Text>,
          headerRight: () => (
            <TouchableOpacity onPress={() => {navigation.navigate("MapHelp")}}>
              <HelpButton color="#fff" size={30}/>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="MapHelp"
        component={MapHelp}
        options={{
          headerTitle: () => 
            <Text style={globalStyles.navHeader}> Help: Map </Text>,
        }}
      />
    </Stack.Navigator>
  );
}
