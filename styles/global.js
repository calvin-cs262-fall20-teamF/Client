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
  /**************************
   * Home screen styles
   **************************/
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  locationList: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ddd'
  },
  test: {
    flex: 1,
    padding: 10,
    backgroundColor: 'red',
  },
  // Card element
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
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
    backgroundColor: '#fff',
  },
  statusContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  /**************************
   * Location screen styles
   **************************/
  locationScreenContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  locationText: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
    textAlign: 'center'
  },
  stateText: {
    fontFamily: 'nunito-regular',
    fontSize: 20
  },
  numberText: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
    marginBottom: 20,
    color: '#999900',
  },
  busynessTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
  },
  /**************************
   * Status colors
   **************************/
  notBusy: {
    color: '#009933',
  },
  slightlyBusy: {
    color: '#a5c932',
  },
  busy: {
    color: '#f8da07',
  },
  veryBusy: {
    color: '#ff9900',
  },
  extremelyBusy: {
    color: '#ff3300',
  },
  headers: {
      fontFamily: 'nunito-bold',
      fontSize: 25,
      fontWeight: 'bold',
      color: '#8c8c8c',
      textAlign: 'center',
      marginTop: 20,
  },
  reportButton: {
      padding: 10,
  }
});

