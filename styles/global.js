/***************************************************************
 * global.js
 *
 * Last modified: December 10, 2020
 *
 * global.js creates the StyleSheet that contains details for
 * all style props.
 ***************************************************************/

// import components and libraries
import { StyleSheet, Dimensions } from "react-native";

// get application window dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const globalStyles = StyleSheet.create({
  /**
  * Home screen styles
  */
 /** Container for Home screen */
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff", // white
  },
  /** FlatList displaying location cards */
  locationList: {
    flex: 1,
    padding: 5,
    backgroundColor: "#ddd", // light gray
  },
  /** Location card appearance */
  locationCard: {
    borderRadius: 6,
    backgroundColor: "#fff", // white
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333", // dark gray
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  /** The content contained within the Home screen cards */
  cardContent: {
    flexDirection: "row",
    padding: 20,
  },
  /** Image of location within card */
  locationImage: {
    borderRadius: 25,
    opacity: 0.7,
  },
  /** Title of location */
  locationTitle: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // white
    textAlign: "center",
  },
  /** Container for title text */
  titleContainer: {
    flex: 1,
    padding: 0,
    backgroundColor: "#fff", // white
    backgroundColor: "transparent",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.8)", // to darken location image for contrast
    borderRadius: 25, // to fit the locationImage's styling
  },
  /** Container for activity status text and maximum capacity */
  statusContainer: {
    flex: 1.5,
    backgroundColor: "#fff", // white
    alignItems: "center",
    justifyContent: "center",
  },
  /** Container for activity status text */
  statusTitleContainer: {
    flex: 1,
    padding: 10,
  },
  /** Base style for activity status text */
  statusTitle: {
    fontFamily: "nunito-bold",
    fontSize: 20,
    fontWeight: "bold",
    color: "#333", // light gray
    textAlign: "center",
  },
  /** Container for maximum capacity */
  currentCapacityContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  /** Maximum capacity */
  capacityHeader: {
    fontFamily: "nunito-bold",
    fontSize: 15,
    fontWeight: "bold",
    color: "#8c8c8c", // very light gray
    textAlign: "center",
    marginTop: 10,
  },
  /** Maximum capacity number text */
  numberText: {
    fontFamily: "nunito-bold",
    fontSize: 25,
    textAlign: "center",
    color: "#999900", // gold
  },
  /**
  * Report screen styles
  */
  /** Container for entire Report page */
  reportScreenContainer: {
    flex: 1,
    backgroundColor: "#fff", // white
  },
  /** Location name text */
  locationText: {
    fontFamily: "nunito-bold",
    fontSize: 25,
  },
  /** Container for location name */
  locationTextContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // white
  },
  /** Container for the status list */
  statusListContainer: {
    flex: 5,
    backgroundColor: "#ddd", // light gray
    alignItems: "center",
  },
  /** Container around submit button */
  submitContainer: {
    flex: 1,
    backgroundColor: "#fff", // white
  },
  /** Status button list */
  statusList: {
    flex: 1,
    backgroundColor: "#ddd", // light gray
  },
  /** Submit button appearance */
  submitButton: {
    borderRadius: 20,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333", // dark gray
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 6,
    marginVertical: 6,
    alignItems: "center",
  },
  /** Status button appearance */
  statusButton: {
    borderRadius: 50,
    height: windowHeight / 9,
    width: windowWidth / 1.1,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333", // dark gray
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  /** Content within status button */
  statusButtonContent: {
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 1,
    alignItems: "center",
  },
  /** Color for a selected status button */
  statusButtonSelected: {
    backgroundColor: "#daa520", // Calvin gold
  },
  /** Color for a disabled submit button */
  submitButtonDisabled: {
    backgroundColor: "#aaa", // light gray
  },
  /** Container for text within status buttons */
  reportTextContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  /** Container for pie chart within status buttons */
  reportImageContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  /** Text within status buttons */
  statusText: {
    fontFamily: "nunito-bold",
    fontSize: 19,
    fontWeight: "bold",
    color: "#fff", // white
    textAlign: "center",
  },
  /** Text within submit buttons */
  submitText: {
    fontFamily: "nunito-bold",
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff", // white
    textAlign: "center",
  },
  /** Pie chart within status buttons */
  pieChart: {
    height: 65,
    width: 65,
  },
  /**************************
   * Status colors
   **************************/
  noReports: {
    color: "black", // black
  },
  notBusy: {
    color: "#009933", // dark green
  },
  slightlyBusy: {
    color: "#a5c932", // light green
  },
  busy: {
    color: "#f8da07", // yellow
  },
  veryBusy: {
    color: "#ff9900", // orange
  },
  extremelyBusy: {
    color: "#ff3300", // red
  },
  /**
  * Status button background colors
  */
  notBusyBackground: {
    backgroundColor: "#BEBEBE", // light gray
  },
  slightlyBusyBackground: {
    backgroundColor: "#A89999", // pinkish red
  },
  busyBackground: {
    backgroundColor: "#805A5A", // less less red
  },
  veryBusyBackground: {
    backgroundColor: "#803333", // red
  },
  extremelyBusyBackground: {
    backgroundColor: "#670C07", // crimson red
  },
  submitButtonEnabled: {
    backgroundColor: '#4682b4' // Calvin blue
  },
  /**
  * About screen styles
  */
  /** Title text */
  aboutTitle: {
    fontFamily: "nunito-bold",
    fontSize: 23,
    fontWeight: "bold",
    color: "#000", // black
  },
  /** Vision statement text */
  subTitle: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#000", // black
  },
  /**
  * Help screen styles
  */
  /** ScrollView in Help page */
  helpScroll: {
    flex: 1,
    padding: 10,
  },
  /** Section header text */
  helpSection: {
    fontFamily: "nunito-bold",
    fontSize: 23,
    color: "#000", // black
  },
  /** Regular help text */
  helpText: {
    fontFamily: "nunito-regular",
    fontSize: 20,
    color: "#000", // black
  },
  /** Color of maximum capacity number */
  maxCapacityNumber: {
    color: "#999900", // gold
  },
  /**************************
   * Navigation header styles
   **************************/
  /** Text for navigation titles */
  navHeader: {
    fontFamily: "nunito-bold",
    fontSize: 20,
    color: "#fff", // white
  },
});
