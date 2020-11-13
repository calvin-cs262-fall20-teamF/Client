/***************************************************************
 * global.js
 *
 * Last modified: October 19, 2020
 *
 * global.js creates the StyleSheet that contains details for
 * all style props.
 ***************************************************************/

// import functions and libraries
import { StyleSheet, Dimensions} from 'react-native';

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
  locationTitle: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',              // light gray
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
    opacity: 0.7,
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
  locationImage: {
    width: 300,
    height: 200,
  },
  headers: {
    fontFamily: 'nunito-bold',
    fontSize: 15,
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
  activityTitle: {
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
    borderRadius: 20,
    height: windowHeight/5,
    width: windowWidth/2.1,
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
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 1,
    alignItems: 'center',
  },
  // Color for a selected status button
  statusButtonSelected: {
    backgroundColor: '#aaa'     // light gray
  },
  // Container for text within status buttons
  reportTextContainer: {
    flex: 0.5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  // Container for pie chart within status buttons
  reportImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Text within status buttons
  statusText: {
    fontFamily: 'nunito-bold',
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
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
    height: 70,
    width: 70,
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
  submitButtonBackground: {
    backgroundColor: '#0066FF'
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

