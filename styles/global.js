/***************************************************************
 * global.js
 *
 * Last modified: October 9, 2020
 *
 * global.js creates the StyleSheet that contains details for
 * all style props.
 ***************************************************************/

// import functions and libraries
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  /**************************
   * Home screen styles
   **************************/
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff'     // white
  },
  locationList: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ddd'     // light gray
  },
  // Location card element
  locationCard: {
    borderRadius: 6,
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',        // dark gray
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 20,
  },
  locationTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',              // light gray
  },
  titleContainer: {
    flex: 1,
    borderRadius: 6,
    padding: 0,
    backgroundColor: '#fff',    // white
  },
  statusContainer: {
    flex: 1,
    backgroundColor: '#fff',    // white
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',              // light gray
    textAlign: 'center'
  },
  /**************************
   * Location screen styles
   **************************/
  locationScreenContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff'     // white
  },
  locationText: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
    textAlign: 'center'
  },
  headers: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#8c8c8c',           // very light gray
    textAlign: 'center',
    marginTop: 20,
},
  stateText: {
    fontFamily: 'nunito-regular',
    fontSize: 20
  },
  numberText: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
    marginBottom: 20,
    color: '#999900',           // gold
  },
  busynessTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
  },
  reportButton: {
    padding: 10,
  },
  /**************************
   * Report screen styles
   **************************/
  reportScreenContainer: {
    flex: 1,
    backgroundColor: '#fff'     // white
  },
  statusList: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ddd',    // light gray
  },
  // Status card element
  statusButton: {
    borderRadius: 100,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',        // dark gray
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    alignItems: 'center'
  },
  statusButtonSelected: {
    backgroundColor: '#aaa'     // light gray
  },
  statusText: {
    fontFamily: 'nunito-bold',
    fontSize: 22,
    fontWeight: 'bold',
  },
  /**************************
   * Status colors
   **************************/
  notBusy: {
    color: '#009933',           // dark green
  },
  slightlyBusy: {
    color: '#a5c932',           // light green
  },
  busy: {
    color: '#f8da07',           // yellow
  },
  veryBusy: {
    color: '#ff9900',           // orange
  },
  extremelyBusy: {
    color: '#ff3300',           // red
  },
  /**************************
   * Status button background colors
   **************************/
  notBusyBackground: {
    backgroundColor: '#009933',
  },
  slightlyBusyBackground: {
    backgroundColor: '#a5c932',           // light green
  },
  busyBackground: {
    backgroundColor: '#f8da07',           // yellow
  },
  veryBusyBackground: {
    backgroundColor: '#ff9900',           // orange
  },
  extremelyBusyBackground: {
    backgroundColor: '#ff3300',           // red
  },
  submitButton: {
    backgroundColor: '#0066FF'
  },
});

