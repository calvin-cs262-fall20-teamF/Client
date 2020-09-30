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

// import custom functions and styles
import Navigator from './routes/homeStack'
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

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // If fonts have been loaded, display the navigation container
  // (created in routes/homeStack.js)
  if(fontsLoaded){
    return (
      <NavigationContainer>
          <Navigator />
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
};