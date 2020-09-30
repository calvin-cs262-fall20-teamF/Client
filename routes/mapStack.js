/***************************************************************
 * mapStack.js
 *
 * Last modified: September 29, 2020
 *
 * mapStack.js creates the stack that will be used for map stacking
 * this will drive the application's
 * map navigation feature(scrolling, details, live reset)
 ***************************************************************/

// import functions and libraries
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image } from 'react-native';

// import custom functions and styles
import Map from '../screens/map';
import { globalStyles } from '../styles/global';


const Stack = createStackNavigator();
export default function MapStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#8C2131', height: 60 }, headerTintColor: '#fff' }}>
      <Stack.Screen
        name="Campus Map"
        component={Map}
        options={{
          headerTitle: 'Campus Map',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button that will update reports!')}
              title="UPDATE"
              color="#d2b48c"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
