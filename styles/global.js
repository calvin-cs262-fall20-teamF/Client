/***************************************************************
 * global.js
 * 
 * Last modified: September 29, 2020
 * 
 * global.js creates the StyleSheet that contains details for
 * all style props.
 ***************************************************************/

// import functions and libraries
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  // Home screen styles
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listButton: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71B1C8',  // renew blue
    borderRadius: 6,
  },
  locationTitle: {
    flex: 1,
    fontFamily: 'nunito-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',              // light gray
    textAlign: 'center'
  },
  locationList: {
      flex: 1,
      marginVertical: 20,
      marginHorizontal: 20,
      padding: 10,
      backgroundColor: '#fff'
  },
  // Location screen styles
  locationScreenContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  locationText: {
    fontFamily: 'nunito-bold',
    fontSize: 30,
  },
  stateText: {
    fontFamily: 'nunito-regular',
    fontSize: 20,
  },
  detailsText: {
    fontFamily: 'nunito-bold',
    padding: 10,
    fontSize: 25,
  },
  numberText: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
    marginBottom: 20,
    color: '#999900',
  },
  notBusy: {
    fontFamily: 'nunito-bold',
    padding: 10,
    color: '#009933',
    fontSize: 25,
  },
  slightlyBusy: {
    fontFamily: 'nunito-bold',
    padding: 10,
    color: '#a5c932',
    fontSize: 25,
  },
  busy: {
    fontFamily: 'nunito-bold',
    padding: 10,
    color: '#f8da07',
    fontSize: 25,
  },
  veryBusy: {
    fontFamily: 'nunito-bold',
    padding: 10,
    color: '#ff9900',
    fontSize: 25,
  },
  extremelyBusy: {
    fontFamily: 'nunito-bold',
    padding: 10,
    color: '#ff3300',
    fontSize: 25,
  }
});