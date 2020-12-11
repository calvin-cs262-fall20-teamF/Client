/***************************************************************
 * App.js
 *
 * Organization: Freespace
 * Last modified: December 10, 2020
 *
 * App.js contains all of the code necessary to run Freespace.
 ***************************************************************/

// import components and libraries
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// import custom components and styles
import Navigator from "./routes/homeStack";
import MapNav from "./routes/mapStack";
import About from "./routes/aboutStack";

/**
  * getFonts
  * 
  * Loads fonts asynchronously into a specified name for
  * later use.
  */
const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

/**
  * Tab navigation
  */
const Tab = createBottomTabNavigator();

/**
  * App
  * 
  * Creates main navigation components for app.
  */
export default function App() {
  // State for font loading
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        {/* bottom navigation bar */}
        <Tab.Navigator
          // default route is Home stack
          initialRouteName="HomeStack"
          tabBarOptions={{
            activeTintColor: "#800000", // maroon
          }}
        >
          <Tab.Screen
            name="Campus Map"
            component={MapNav}
            options={{
              tabBarLabel: "Campus Map",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="map" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="HomeStack"
            component={Navigator}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="About FreeSpace"
            component={About}
            options={{
              tabBarLabel: "About",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="information"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  // If fonts have not been loaded, call getFonts and
  // set fontsLoaded to true
  else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
