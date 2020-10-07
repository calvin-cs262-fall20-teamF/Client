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
    fontSize: 20
  },
  detailsText: {
    fontFamily: 'nunito-regular'
  }
});