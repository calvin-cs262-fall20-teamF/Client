/***************************************************************
 * global.js
 *
 * Last modified: October 19, 2020
 *
 * global.js creates the StyleSheet that contains details for
 * all style props.
 ***************************************************************/

// import functions and libraries
import { StyleSheet, Dimensions } from 'react-native';

// get application window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
  locationImage: {
    borderRadius: 25,
    opacity: 0.7,
  },
  locationTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',              // white
    textAlign: 'center',
  },
  titleContainer: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',    // white
    backgroundColor: 'transparent',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.8)', // to darken location image for contrast
    borderRadius: 25            // to fit the locationImage's styling
  },
  statusContainer: {
    flex: 1.5,
    backgroundColor: '#fff',    // white
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusTitleContainer: {
    flex: 1,
    padding: 10,
  },
  statusTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',              // light gray
    textAlign: 'center'
  },
  currentCapacityContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  capacityHeader: {
    fontFamily: 'nunito-bold',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#8c8c8c',           // very light gray
    textAlign: 'center',
    marginTop: 10,
  },
  stateText: {
    fontFamily: 'nunito-regular',
    fontSize: 20
  },
  numberText: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
    textAlign: 'center',
    color: '#999900',           // gold
  },
  activityTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
  },
  /**************************
   * Report screen styles
   **************************/
  reportScreenContainer: {
    flex: 1,
    backgroundColor: '#fff'     // white
  },
  locationText: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
    // textAlign: 'center',
  },
  locationTextContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  statusListContainer: {
    flex: 5,
    backgroundColor: '#ddd',    // light gray
    alignItems: 'center',
  },
  submitContainer: {
    flex: 1,
    backgroundColor: '#fff',   // white
  },
  statusList: {
    flex: 1,
    // padding: 5,
    backgroundColor: '#ddd',    // light gray
  },
  // Submit button component
  submitButton: {
    borderRadius: 20,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',        // dark gray
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 6,
    marginVertical: 6,
    alignItems: 'center'
  },
  // Status button component
  statusButton: {
    borderRadius: 50,
    height: windowHeight / 9,
    width: windowWidth / 1.1,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',        // dark gray
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  // Stuff within status button
  statusButtonContent: {
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 1,
    alignItems: 'center',
  },
  // Color for a selected status button
  statusButtonSelected: {
    backgroundColor: '#daa520'      // Calvin gold
  },
  // Color for a disabled submit button
  submitButtonDisabled: {
    backgroundColor: '#aaa'         // light gray
  },
  // Container for text within status buttons
  reportTextContainer: {
    flex: 1,
    // backgroundColor: 'blue',
    alignContent: 'center',
    justifyContent: 'center',
  },
  // Container for pie chart within status buttons
  reportImageContainer: {
    flex: 0.5,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Text within status buttons
  statusText: {
    fontFamily: 'nunito-bold',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  submitText: {
    fontFamily: 'nunito-bold',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',            // white
    textAlign: 'center'
  },
  // Pie chart within status buttons
  pieChart: {
    height: 65,
    width: 65,
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
    backgroundColor: '#BEBEBE',           // light gray
  },
  slightlyBusyBackground: {
    backgroundColor: '#A89999',           // pinkish red
  },
  busyBackground: {
    backgroundColor: '#805A5A',           // less less red
  },
  veryBusyBackground: {
    backgroundColor: '#803333',           // less red
  },
  extremelyBusyBackground: {
    backgroundColor: '#670C07',           // crimson red
  },
  submitButtonEnabled: {
    backgroundColor: '#4682b4'
  },
  /**************************
   * About page fonts
   **************************/
  aboutTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#000',
  }
});

