/***************************************************************
 * homeStack.js
 *
 * Last modified: September 29, 2020
 *
 * homeStack.js creates the stack that will be used for stacking
 * Home and LocationDetails; this will drive the application's
 * navigation feature.
 ***************************************************************/

// import functions and libraries
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import custom functions and styles
import Home from '../screens/home';
import LocationDetails from '../screens/locationDetails';
import Header from '../shared/header';
import { globalStyles } from '../styles/global';

const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#8C2131', height: 60 }, headerTintColor: '#fff' }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                    headerTitle: () => (
                        <Header navigation={navigation} title='Home' />
                    ),
                })}
            />
            <Stack.Screen
                name="LocationDetails"
                component={LocationDetails}
                options={({ navigation }) => ({
                    headerTitle: () => (
                        <Header navigation={navigation} title='Location Details' />
                    ),
                })}
            />
        </Stack.Navigator>
    );
};
