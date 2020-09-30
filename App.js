/***************************************************************
 * App.js
 *
 * Organization: Freespace
 * Last modified: September 29, 2020
 *
 * App.js contains all of the code necessary to run Freespace.
 ***************************************************************/

// import functions and libraries
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import
MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons';

// import custom functions and styles
import Navigator from './routes/homeStack'
import MapNav from './routes/mapStack'
import UserReport from './screens/userReport'

import { globalStyles } from './styles/global';

/*******************************************************
 * getFonts
 *
 * Loads fonts asynchronously into a specified name
 * for later use
 *******************************************************/
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

//tab navigation
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // If fonts have been loaded, display the navigation container
  // (created in routes/homeStack.js)
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#800000',
          }}>

          <Tab.Screen
            name="Campus Map"
            component={MapNav}
            options={{
              tabBarLabel: 'Campus Map',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="map"
                  color={color}
                  size={size}
                />
              ),
            }} />
          <Tab.Screen
            name="HomeStack"
            component={Navigator}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="home"
                  color={color}
                  size={size}
                />
              ),
            }} />
          <Tab.Screen
            name="UserReport"
            component={UserReport}
            options={{
              tabBarLabel: 'User Report',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="book"
                  color={color}
                  size={size}
                />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  // If fonts have not been loaded, call getFonts and
  // set fontsLoaded to true
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }


}