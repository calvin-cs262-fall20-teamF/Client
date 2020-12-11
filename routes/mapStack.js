/***************************************************************
 * mapStack.js
 *
 * Last modified: September 29, 2020
 *
 * mapStack.js creates the stack that will be used for map live reports
 * this will drive the application's
 * map navigation feature(scrolling, details, live reset)
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
export default function MapStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#8C2131", height: 60 },
        headerTintColor: "#fff",
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
