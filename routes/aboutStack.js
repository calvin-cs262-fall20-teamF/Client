/***************************************************************
 * reportStack.js
 *
 * Last modified: September 29, 2020
 *
 * reportStack.js creates the stack that will be used for user report
 * this will drive the application's
 * user report feature(scale, submit, etc)
 ***************************************************************/

// import functions and libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, Image } from "react-native";

// import custom functions and styles
import About from "../screens/about";
import Header from "../shared/header";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();
export default function aboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#8C2131", height: 60 },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => <Header title="About FreeSpace" />,
        }}
      />
    </Stack.Navigator>
  );
}
