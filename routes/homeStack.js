/***************************************************************
 * homeStack.js
 *
 * Last modified: December 10, 2020
 *
 * homeStack.js creates the stack that will be used for
 * navigating between the Home screen, Home screen help,
 * Report screen, and Report screen help.
 ***************************************************************/

// Import components and libraries
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// Import custom components and styles
import Home from "../screens/home";
import Report from "../screens/report";
import HomeHelp from "../screens/help/homeHelp";
import ReportHelp from "../screens/help/reportHelp";
import HelpButton from "../shared/helpButton";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();

/**
 * HomeStack
 * @param {navigation} - navigation object
 * @return JSX for stack navigation between Home
 *          page, Home help page, Report page, and
 *          Report help page
 */
export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#8C2131", height: 60 },  // maroon
        headerTitleStyle: {fontSize: 20},
        headerTintColor: "#fff", // white
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => 
            <Text style={globalStyles.navHeader}> Home </Text>,
          headerRight: () => (
            <TouchableOpacity onPress={() => {navigation.navigate("HomeHelp")}}>
              <HelpButton color="#fff" size={30}/>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Report"
        component={Report}
        options={{
          headerTitle: () => 
            <Text style={globalStyles.navHeader}> Report </Text>,
          headerRight: () => (
            <TouchableOpacity onPress={() => {navigation.navigate("ReportHelp")}}>
              <HelpButton color="#fff" size={30}/>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="HomeHelp"
        component={HomeHelp}
        options={{
          headerTitle: () => 
            <Text style={globalStyles.navHeader}> Help: Home </Text>,
        }}
      />
      <Stack.Screen
        name="ReportHelp"
        component={ReportHelp}
        options={{
          headerTitle: () => 
            <Text style={globalStyles.navHeader}> Help: Reporting </Text>,
        }}
      />
    </Stack.Navigator>
  );
}
