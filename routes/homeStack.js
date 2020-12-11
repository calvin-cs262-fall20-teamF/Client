/***************************************************************
 * homeStack.js
 *
 * Last modified: October 16, 2020
 *
 * homeStack.js creates the stack that will be used for stacking
 * Home and LocationDetails; this will drive the application's
 * navigation feature.
 ***************************************************************/

// import functions and libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, Button } from "react-native";

// import custom functions and styles
import Home from "../screens/home";
import ReportPage from "../screens/reportPage";
import Header from "../shared/header";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#8C2131", height: 60 },
        headerTitleStyle: {fontSize: 20},
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => 
            <Text style={globalStyles.navHeader}> Home </Text>,
        }}
      />
      <Stack.Screen
        name="ReportPage"
        component={ReportPage}
        options={{
          headerTitle: () => 
            <Text style={globalStyles.navHeader}> Report </Text>,
        }}
      />
    </Stack.Navigator>
  );
}
