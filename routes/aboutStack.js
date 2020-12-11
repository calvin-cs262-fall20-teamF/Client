/***************************************************************
 * aboutStack.js
 *
 * Last modified: Decemer 10, 2020
 *
 * aboutStack.js creates the stack that will be used to contain
 * the About page.
 ***************************************************************/

// Import components and libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

// Import custom components and styles
import About from "../screens/about";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();

/**
 * AboutStack
 * @param {navigation} - navigation object
 * @return JSX for stack navigation between About page
 *          and any other pages that may be created in
 *          the future.
 */
export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#8C2131", height: 60 }, // maroon
        headerTintColor: "#fff", // white
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => 
            <Text style={globalStyles.navHeader}> About Freespace </Text>,
        }}
      />
    </Stack.Navigator>
  );
}
