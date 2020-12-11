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
import { Text, TouchableOpacity } from "react-native";

// import custom functions and styles
import Home from "../screens/home";
import Report from "../screens/report";
import HomeHelp from "../screens/help/homeHelp";
import ReportHelp from "../screens/help/reportHelp";
import HelpButton from "../shared/helpButton";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();
export default function HomeStack({ navigation }) {
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
